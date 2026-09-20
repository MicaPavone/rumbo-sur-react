import TravelCard from './TravelCard.jsx'
import patagonia from '../assets/img/card-patagonia.svg'
import iguazu from '../assets/img/card-iguazu.svg'
import rio from '../assets/img/card-rio.svg'

const trips = [
  { image: patagonia, alt: 'Ilustración de montañas nevadas y un lago en la Patagonia', tag: 'Naturaleza', title: 'Patagonia esencial', description: '7 días entre Bariloche, Villa La Angostura y paisajes que parecen de otro planeta.', duration: '7 días', price: 'Desde ARS 890.000' },
  { image: iguazu, alt: 'Ilustración de las Cataratas del Iguazú rodeadas de selva', tag: 'Escapada', title: 'Iguazú tropical', description: '4 días de selva, senderos y la fuerza incomparable de las Cataratas del Iguazú.', duration: '4 días', price: 'Desde ARS 520.000' },
  { image: rio, alt: 'Ilustración de Río de Janeiro con playa, ciudad y montañas', tag: 'Internacional', title: 'Río de Janeiro', description: '6 días de playa, cultura y paseos clásicos en una de las ciudades más vibrantes de Brasil.', duration: '6 días', price: 'Desde USD 980' },
]

export default function Destinations() {
  return (
    <section className="section" id="destinos">
      <div className="container">
        <div className="section-heading">
          <div><p className="eyebrow">Elegí tu próxima historia</p><h2>Viajes destacados</h2></div>
          <p>Propuestas listas para reservar, con actividades, alojamiento y asistencia durante todo el viaje.</p>
        </div>
        <div className="cards-grid">
          {trips.map((trip) => <TravelCard key={trip.title} {...trip} />)}
        </div>
      </div>
    </section>
  )
}
