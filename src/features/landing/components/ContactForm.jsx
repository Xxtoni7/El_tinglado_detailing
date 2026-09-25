import { useState } from 'react'
import { services } from '../data/services.js'
import { buildWhatsAppUrl } from '../lib/whatsapp.js'
import { WhatsAppIcon } from './Hero.jsx'

const initialFormData = { name: '', brand: '', model: '', year: '', service: '', comment: '' }

function ContactForm({ selectedService }) {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  function submitForm(event) {
    event.preventDefault()
    window.open(buildWhatsAppUrl({ ...formData, service: formData.service || selectedService }), '_blank', 'noopener,noreferrer')
    setIsSubmitted(true)
    window.setTimeout(() => setIsSubmitted(false), 3000)
  }

  const fieldClass = 'w-full rounded-xl border-[1.5px] border-[#E5E2DD] bg-warm px-4 py-[.85rem] text-[.9rem] text-navy outline-none transition placeholder:text-[#9B9690] focus:border-lime focus:shadow-[0_0_0_3px_rgba(200,230,50,.25)]'
  const labelClass = 'mb-[.4rem] block text-[.85rem] font-semibold text-navy'
  const serviceValue = formData.service || selectedService
  return <div className="rounded-[28px] border border-[#E5E2DD] bg-white p-10 shadow-[0_4px_16px_rgba(0,0,0,.15)] max-sm:p-6"><h3 className="mb-2 font-heading text-[1.3rem] font-bold">Solicitar presupuesto</h3><p className="mb-8 text-[.9rem] text-[#9B9690]">Completá los datos y te respondemos a la brevedad.</p><form id="contactForm" onSubmit={submitForm} style={{ scrollMarginTop: '6rem' }}><div className="mb-5"><label className={labelClass} htmlFor="nombre">Nombre completo *</label><input className={fieldClass} id="nombre" name="name" onChange={updateField} placeholder="Tu nombre" required value={formData.name} /></div><div className="grid grid-cols-3 gap-4 max-md:grid-cols-1"><div className="mb-5"><label className={labelClass} htmlFor="marca">Marca *</label><input className={fieldClass} id="marca" name="brand" onChange={updateField} placeholder="Ej: Toyota" required value={formData.brand} /></div><div className="mb-5"><label className={labelClass} htmlFor="modelo">Modelo *</label><input className={fieldClass} id="modelo" name="model" onChange={updateField} placeholder="Ej: Corolla" required value={formData.model} /></div><div className="mb-5"><label className={labelClass} htmlFor="anio">Año *</label><input className={fieldClass} id="anio" max="2027" min="1990" name="year" onChange={updateField} placeholder="Ej: 2023" required type="number" value={formData.year} /></div></div><div className="mb-5"><label className={labelClass} htmlFor="servicio">Servicio de interés *</label><select className={fieldClass} id="servicio" name="service" onChange={updateField} required value={serviceValue}><option disabled value="">Seleccioná un servicio</option>{services.map(({ name }) => <option key={name} value={name}>{name}</option>)}<option value="Otro">Otro</option></select></div><div className="mb-5"><label className={labelClass} htmlFor="comentario">Comentario (opcional)</label><textarea className={`${fieldClass} min-h-[100px] resize-y`} id="comentario" name="comment" onChange={updateField} placeholder="Contanos más detalles sobre lo que necesitás..." value={formData.comment} /></div><button className={`mt-2 flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold transition hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(200,230,50,.25)] ${isSubmitted ? 'bg-[#22C55E] text-white' : 'bg-lime text-navy'}`} id="form-submit-btn" type="submit">{isSubmitted ? <><svg className="size-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5" /></svg>¡Consulta enviada!</> : <><WhatsAppIcon className="size-5" />Enviar consulta por WhatsApp</>}</button></form></div>
}

export default ContactForm
