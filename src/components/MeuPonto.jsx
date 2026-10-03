import React from 'react'
import { Button } from 'primereact/button'
import { GEOAPIFY_KEY } from '../utils/chaves.js'

class MeuPonto extends React.Component {
  state = {
    agora: Date.now(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ agora: Date.now() })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log('MeuPonto removido')
  }

  render() {
    const { latitude, longitude, horarioLocalizacao, onAtualizar } = this.props
    const { agora } = this.state

    const urlMapa = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=300&center=lonlat:${longitude},${latitude}&zoom=16&marker=lonlat:${longitude},${latitude};color:%23d32f2f;size:48&apiKey=${GEOAPIFY_KEY}`

    const coordenadas = `Latitude: ${Number(latitude).toFixed(4)} | Longitude: ${Number(longitude).toFixed(4)}`
    const hemisferio = latitude < 0 ? 'Hemisfério Sul' : 'Hemisfério Norte'
    const segundos = Math.max(0, Math.floor((agora - horarioLocalizacao) / 1000))

    return (
      <div className="flex flex-column gap-2">
        <img
          src={urlMapa}
          alt="Mapa da sua localização"
          className="w-full border-round"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <div className="text-sm font-semibold text-800 mt-2">
          {coordenadas}
        </div>
        <div className="text-sm text-600">
          {hemisferio}
        </div>
        <div className="text-sm text-500 mb-2">
          Localização obtida há {segundos} s
        </div>
        <div>
          <Button
            label="Atualizar localização"
            icon="pi pi-refresh"
            onClick={onAtualizar}
            outlined
            size="small"
          />
        </div>
      </div>
    )
  }
}

export default MeuPonto
