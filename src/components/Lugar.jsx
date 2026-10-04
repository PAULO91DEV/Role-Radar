import Cartao from './Cartao.jsx'

function formatarDistancia(distancia) {
  if (distancia < 1000) {
    return `a ${Math.round(distancia)} m`
  }
  const emKm = (distancia / 1000).toFixed(1).replace('.', ',')
  return `a ${emKm} km`
}

const estiloCirculo = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: '#1565c0',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  flexShrink: 0,
}

function Lugar({ numero, nome, endereco, distancia }) {
  return (
    <Cartao cabecalho={formatarDistancia(distancia)}>
      <div className="flex align-items-center gap-3">
        <div style={estiloCirculo}>{numero}</div>
        <div className="flex flex-column">
          <span className="font-bold text-900">{nome || 'Sem nome'}</span>
          {endereco && <span className="text-sm text-600">{endereco}</span>}
        </div>
      </div>
    </Cartao>
  )
}

export { formatarDistancia }
export default Lugar
