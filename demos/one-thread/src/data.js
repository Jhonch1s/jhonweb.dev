// Datos inventados para esta demo. Ningún registro proviene de la base de datos original.
const day = (offset, hour) => {
  const date = new Date()
  date.setDate(date.getDate() - offset)
  date.setHours(hour, 0, 0, 0)
  return date.toISOString()
}

export const initialMessages = [
  { id: 1, nombre: 'Lucía Méndez', address: 'lucia.mendez@example.test', canal: 'Gmail', contenido: 'Hola, quería saber si tienen disponibilidad para una consulta la próxima semana. Me sirve martes o jueves de tarde.', resumen: 'Consulta por disponibilidad para la próxima semana.', confianza: 0.94, categoria: 'Consultas', tipo: 'Disponibilidad', prioridad: 'Media', estado: 0, fecha: day(0, 10), agenteId: 1 },
  { id: 2, nombre: 'Tomás Silva', address: '@tomas_silva_demo', canal: 'Telegram', contenido: 'Buenas, mi pedido no llegó y el seguimiento no se actualiza hace tres días. ¿Me ayudan?', resumen: 'Reporta demora de un pedido y solicita seguimiento.', confianza: 0.91, categoria: 'Soporte', tipo: 'Pedido', prioridad: 'Alta', estado: 1, fecha: day(0, 9), agenteId: 2 },
  { id: 3, nombre: 'Valentina Costa', address: 'valentina.costa@example.test', canal: 'Gmail', contenido: 'Quisiera conocer las opciones disponibles y cómo es el proceso para comenzar.', resumen: 'Solicita información general sobre las opciones disponibles.', confianza: 0.88, categoria: 'Consultas', tipo: 'Información', prioridad: 'Media', estado: 0, fecha: day(1, 16), agenteId: null },
  { id: 4, nombre: 'Bruno Pereira', address: '@bruno_p_demo', canal: 'Telegram', contenido: 'Quedó todo resuelto. Muchas gracias por la ayuda.', resumen: 'Confirma que su consulta fue resuelta y agradece.', confianza: 0.96, categoria: 'Atención', tipo: 'Agradecimiento', prioridad: 'Baja', estado: 2, fecha: day(1, 14), agenteId: 1, resolutionMinutes: 35 },
  { id: 5, nombre: 'Sofía Reyes', address: 'sofia.reyes@example.test', canal: 'Gmail', contenido: '¿Podríamos mover la reunión del viernes? Puedo el lunes de mañana.', resumen: 'Solicita cambiar el horario de una reunión.', confianza: 0.89, categoria: 'Consultas', tipo: 'Cambio de horario', prioridad: 'Media', estado: 1, fecha: day(2, 11), agenteId: 3 },
  { id: 6, nombre: 'Mateo Duarte', address: '@mateo_d_demo', canal: 'Telegram', contenido: 'No puedo acceder a la información de mi solicitud. Necesito revisarla hoy.', resumen: 'Informa un problema de acceso a su solicitud.', confianza: 0.86, categoria: 'Soporte', tipo: 'Acceso', prioridad: 'Alta', estado: 0, fecha: day(3, 15), agenteId: 2 },
  { id: 7, nombre: 'Camila Acosta', address: 'camila.acosta@example.test', canal: 'Gmail', contenido: 'Recibí la confirmación. Todo quedó claro, gracias.', resumen: 'Confirma recepción de la información.', confianza: 0.92, categoria: 'Atención', tipo: 'Confirmación', prioridad: 'Baja', estado: 2, fecha: day(4, 10), agenteId: 3, resolutionMinutes: 59 },
  { id: 8, nombre: 'Nicolás Ferreyra', address: '@nico_f_demo', canal: 'Telegram', contenido: 'Hola, ¿cómo puedo actualizar mis datos de contacto?', resumen: 'Pregunta cómo actualizar sus datos de contacto.', confianza: 0.87, categoria: 'Consultas', tipo: 'Datos de contacto', prioridad: 'Baja', estado: 1, fecha: day(5, 12), agenteId: null },
]

export const agents = [
  { id: 1, nombre: 'Elena Ríos', email: 'elena.rios@example.test', puntaje: 4.7, categorias: ['Consultas', 'Atención'] },
  { id: 2, nombre: 'Martín Vega', email: 'martin.vega@example.test', puntaje: 4.4, categorias: ['Soporte'] },
  { id: 3, nombre: 'Paula Sosa', email: 'paula.sosa@example.test', puntaje: 4.8, categorias: ['Consultas', 'Atención'] },
]

export const comments = [
  { agentId: 1, name: 'Bruno Pereira', channel: 'Telegram', text: 'Me ayudó a resolver la consulta.', score: 5, date: day(1, 14) },
  { agentId: 2, name: 'Tomás Silva', channel: 'Telegram', text: 'Recibí seguimiento de mi caso.', score: 4, date: day(0, 9) },
  { agentId: 3, name: 'Camila Acosta', channel: 'Gmail', text: 'La explicación fue muy clara.', score: 5, date: day(4, 10) },
]

export const categories = [
  { name: 'Consultas', types: ['Disponibilidad', 'Información', 'Cambio de horario', 'Datos de contacto'] },
  { name: 'Soporte', types: ['Pedido', 'Acceso'] },
  { name: 'Atención', types: ['Agradecimiento', 'Confirmación'] },
]
