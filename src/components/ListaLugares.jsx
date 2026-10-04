import Lugar from './Lugar.jsx'

function ListaLugares({ lugares }) {
  if (!lugares || lugares.length === 0) {
    return null
  }

  return (
    <div className="flex flex-column">
      {lugares.map((lugar, index) => {
        const { place_id, name, address_line2, distance } = lugar.properties
        return (
          <Lugar
            key={place_id}
            numero={index + 1}
            nome={name}
            endereco={address_line2}
            distancia={distance}
          />
        )
      })}
    </div>
  )
}

export default ListaLugares
