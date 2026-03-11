const { pool } = require('./conection');

const obtenerViajes = async () => {
  const consulta = 'SELECT * FROM monedas';
  const { rows } = await pool.query(consulta);
  return rows;
};

const agregarViaje = async (destino, presupuesto) => {
  const consulta = 'INSERT INTO viajes values (DEFAULT, $1, $2)';
  const values = [destino, presupuesto];
  const result = await pool.query(consulta, values);
  console.log('Viaje agregado');
};

const modificarPresupuesto = async (presupuesto, id) => {
  const consulta = 'UPDATE viajes SET presupuesto = $1 WHERE id = $2';
  const values = [presupuesto, id];
  const result = await pool.query(consulta, values);
};

const eliminarViaje = async (id) => {
  const consulta = 'DELETE FROM viajes WHERE id = $1';
  const values = [id];
  await pool.query(consulta, values);
};

module.exports = {
  obtenerViajes,
  agregarViaje,
  modificarPresupuesto,
  eliminarViaje,
};
