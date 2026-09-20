export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#inicio" aria-label="Ir al inicio de Rumbo Sur">
          <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l4.2 7.2L22 12l-5.8 2.8L12 22l-4.2-7.2L2 12l5.8-2.8L12 2z" fill="currentColor"/><circle cx="12" cy="12" r="2.3" fill="white"/></svg>
          <span>Rumbo Sur</span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a><a href="#destinos">Destinos</a><a href="#galeria">Galería</a><a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="#contacto">Cotizar viaje</a>
      </div>
    </header>
  )
}
