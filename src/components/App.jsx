import React from 'react'
import Cartao from './Cartao.jsx'
import Creditos from './Creditos.jsx'
import Loading from './Loading.jsx'
import MeuPonto from './MeuPonto.jsx'

class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    horarioLocalizacao: null,
    mensagemDeErro: null,
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

  obterAno = () => {
    return new Date().getFullYear()
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
      <Cartao cabecalho="Você está aqui">
        <MeuPonto
          latitude={latitude}
          longitude={longitude}
          horarioLocalizacao={horarioLocalizacao}
          onAtualizar={this.obterLocalizacao}
        />
      </Cartao>
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
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
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
