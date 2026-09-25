import test from 'node:test'
import assert from 'node:assert/strict'
import { buildWhatsAppUrl } from './whatsapp.js'

test('builds an encoded WhatsApp message', () => {
  const url = buildWhatsAppUrl({
    name: 'Ana Ñandú', brand: 'Peugeot', model: '208', year: '2024',
    service: 'Lavado Premium', comment: 'Rayón & manchas',
  })
  assert.match(url, /^https:\/\/wa\.me\/5491125237023\?text=/)
  assert.ok(decodeURIComponent(url).includes('*Comentario:* Rayón & manchas'))
})
