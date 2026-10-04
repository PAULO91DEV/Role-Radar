import React from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

const categorias = [
  { rotulo: 'Cafés', chave: 'catering.cafe' },
  { rotulo: 'Restaurantes', chave: 'catering.restaurant' },
  { rotulo: 'Parques', chave: 'leisure.park' },
  { rotulo: 'Farmácias', chave: 'healthcare.pharmacy' },
  { rotulo: 'Supermercados', chave: 'commercial.supermarket' },
  { rotulo: 'Museus', chave: 'entertainment.museum' },
]

class Busca extends React.Component {
  static defaultProps = {
    dica: 'Raio em metros (100 a 5000)',
  }

  state = {
    categoria: null,
    raio: '1000',
    erro: null,
  }

  aoSubmeter = (e) => {
    e.preventDefault()
    const { categoria, raio } = this.state

    if (!categoria) {
      this.setState({ erro: 'Escolha uma categoria.' })
      return
    }

    const raioNumero = Number(raio)
    const ehInteiro = Number.isInteger(raioNumero) && /^\d+$/.test(String(raio).trim())

    if (!ehInteiro || raioNumero < 100 || raioNumero > 5000) {
      this.setState({ erro: 'Informe um raio inteiro entre 100 e 5000 metros.' })
      return
    }

    this.setState({ erro: null })
    this.props.onBuscaRealizada(categoria, raioNumero)
  }

  render() {
    const { categoria, raio, erro } = this.state
    const { dica } = this.props

    return (
      <form onSubmit={this.aoSubmeter} className="flex flex-column gap-3">
        <div className="flex flex-wrap gap-2">
          {categorias.map((cat) => {
            const selecionado = categoria === cat.chave
            return (
              <Button
                key={cat.chave}
                type="button"
                label={cat.rotulo}
                size="small"
                rounded
                outlined={!selecionado}
                onClick={() => this.setState({ categoria: cat.chave })}
              />
            )
          })}
        </div>

        <div className="flex flex-column gap-1">
          <InputText
            value={raio}
            onChange={(e) => this.setState({ raio: e.target.value })}
            placeholder={dica}
            className="w-full"
          />
        </div>

        <div>
          <Button
            type="submit"
            label="Buscar"
            icon="pi pi-search"
            className="w-full"
          />
        </div>

        {erro && <p className="text-red-500 m-0 text-sm font-semibold">{erro}</p>}
      </form>
    )
  }
}

export default Busca
