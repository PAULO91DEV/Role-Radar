function Creditos() {
  return (
    <div className="flex align-items-center gap-2 text-xs text-500 mb-3">
      <a
        href="https://www.geoapify.com/"
        target="_blank"
        rel="noreferrer"
        className="text-500 hover:text-700 underline"
      >
        Powered by Geoapify
      </a>
      <span>·</span>
      <a
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noreferrer"
        className="text-500 hover:text-700 underline"
      >
        © OpenStreetMap contributors
      </a>
    </div>
  )
}

export default Creditos
