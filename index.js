const { agregarViaje, obtenerViajes } = require('./consultas');

const express = require('express');

const app = express();

app.listen(3001, console.log('SERVIDOR ENCENDIDO'));

app.use(express.json());

app.get('/viajes', async (req, res) => {
  const viajes = await obtenerViajes();
  res.json(viajes);
});

app.post('/viajes', async (req, res) => {
  const { destino, presupuesto } = req.body;
  await agregarViaje(destino, presupuesto);
  res.send('destino agregado con exito');
});
