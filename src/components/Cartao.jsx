function Cartao({ cabecalho, children }) {
  return (
    <div className="border-round border-1 surface-border surface-card p-3 mb-3 shadow-1">
      {cabecalho && (
        <>
          <div className="text-xs text-500 mb-2 font-medium">
            {cabecalho}
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid var(--surface-border, #e5e7eb)', margin: '0.5rem 0' }} />
        </>
      )}
      <div>{children}</div>
    </div>
  )
}

export default Cartao
