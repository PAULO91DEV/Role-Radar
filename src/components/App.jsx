import Cartao from './Cartao.jsx'
import Creditos from './Creditos.jsx'

function App() {
  const estiloSubtitulo = {
    color: '#6b7280',
    fontSize: '1rem',
    marginTop: '0.25rem',
    marginBottom: '1rem',
  }

  function obterAno() {
    return new Date().getFullYear()
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 className="titulo">
        <i className="pi pi-map-marker" style={{ color: '#d32f2f', marginRight: '0.5rem' }}></i>
        RolêRadar
      </h1>
      <p style={estiloSubtitulo}>Descubra o que existe perto de você</p>
      <Creditos />
      <Cartao cabecalho="Teste">
        <p>Conteúdo do cartão</p>
      </Cartao>
      <footer style={{ marginTop: '2rem', color: '#9ca3af', fontSize: '0.875rem' }}>
        RolêRadar © {obterAno()}
      </footer>
    </div>
  )
}

export default App
