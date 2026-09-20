export default function TravelCard({ image, alt, tag, title, description, duration, price }) {
  return (
    <article className="travel-card">
      <img src={image} alt={alt} />
      <div className="card-body">
        <span className="card-tag">{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-meta">
          <span>{duration}</span>
          <span>{price}</span>
        </div>
        <a className="button button-small" href="#contacto">Consultar</a>
      </div>
    </article>
  )
}
