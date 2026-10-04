import React from 'react'
import Busca from './Busca.jsx'
import Cartao from './Cartao.jsx'
import Creditos from './Creditos.jsx'
import ListaLugares from './ListaLugares.jsx'
import Loading from './Loading.jsx'
import MeuPonto from './MeuPonto.jsx'
import geoapifyClient from '../utils/geoapifyClient.js'

class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    horarioLocalizacao: null,
    mensagemDeErro: null,
    lugares: null,
  }

  componentDidMount() {
    this.obterLocalizacao()
  }

  obterLocalizacao = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (posicao) => {
          this.setState({
            latitude: posicao.coords.latitude,
            longitude: posicao.coords.longitude,
            horarioLocalizacao: Date.now(),
            mensagemDeErro: null,
          })
        },
        (erro) => {
          console.log(erro)
          this.setState({
            mensagemDeErro:
              'Não foi possível obter sua localização. Libere o acesso no navegador e atualize a página.',
          })
        }
      )
    }
  }

  onBuscaRealizada = async (categoria, raio) => {
    const { latitude, longitude } = this.state
    try {
      const resposta = await geoapifyClient.get('/places', {
        params: {
          categories: categoria,
          filter: `circle:${longitude},${latitude},${raio}`,
          bias: `proximity:${longitude},${latitude}`,
          limit: 20,
        },
      })
      this.setState({ lugares: resposta.data.features })
    } catch (erro) {
      console.log(erro)
    }
  }

  obterAno = () => {
    return new Date().getFullYear()
  }

  renderizarColunaDireita() {
    const { lugares } = this.state

    if (lugares === null) {
      return null
    }

    if (lugares.length === 0) {
      return <p>Nenhum lugar encontrado. Tente aumentar o raio.</p>
    }

    return <ListaLugares lugares={lugares} />
  }

  renderizarConteudo() {
    const { mensagemDeErro, latitude, longitude, horarioLocalizacao } = this.state

    if (mensagemDeErro) {
      return <p className="text-red-500">{mensagemDeErro}</p>
    }

    if (latitude === null) {
      return <Loading mensagem="Aguardando permissão de localização..." />
    }

    return (
      <div className="grid">
        <div className="col-12 md:col-6">
          <Cartao cabecalho="Você está aqui">
            <MeuPonto
              latitude={latitude}
              longitude={longitude}
              horarioLocalizacao={horarioLocalizacao}
              onAtualizar={this.obterLocalizacao}
            />
          </Cartao>
          <Cartao cabecalho="O que você procura?">
            <Busca onBuscaRealizada={this.onBuscaRealizada} />
          </Cartao>
        </div>
        <div className="col-12 md:col-6">
          {this.renderizarColunaDireita()}
        </div>
      </div>
    )
  }

  render() {
    const estiloSubtitulo = {
      color: '#6b7280',
      fontSize: '1rem',
      marginTop: '0.25rem',
      marginBottom: '1rem',
    }

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
        <h1 className="titulo">
          <i className="pi pi-map-marker" style={{ color: '#d32f2f', marginRight: '0.5rem' }}></i>
          RolêRadar
        </h1>
        <p style={estiloSubtitulo}>Descubra o que existe perto de você</p>
        <Creditos />
        {this.renderizarConteudo()}
        <footer style={{ marginTop: '2rem', color: '#9ca3af', fontSize: '0.875rem' }}>
          RolêRadar © {this.obterAno()}
        </footer>
      </div>
    )
  }
}

export default App
