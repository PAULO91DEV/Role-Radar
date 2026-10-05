import { GEOAPIFY_KEY } from '../utils/chaves.js'

function MapaRadar({ latitude, longitude, lugares }) {
  const marcadorUsuario = `lonlat:${longitude},${latitude};color:%23d32f2f;size:48`

  const marcadoresLugares = (lugares || []).map((lugar, index) => {
    const { lon, lat } = lugar.properties
    const n = index + 1
    return `lonlat:${lon},${lat};type:circle;color:%231565c0;size:42;contentsize:28;text:${n}`
  })

  const marcadores = [marcadorUsuario, ...marcadoresLugares].join('|')
  const urlMapa = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&marker=${marcadores}&apiKey=${GEOAPIFY_KEY}`

  return (
    <img
      src={urlMapa}
      alt="Radar com os lugares encontrados"
      className="w-full border-round"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  )
}

export default MapaRadar
