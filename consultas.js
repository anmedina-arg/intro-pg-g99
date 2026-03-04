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

module.exports = { obtenerViajes, agregarViaje };
