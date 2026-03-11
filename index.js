const {
  agregarViaje,
  modificarPresupuesto,
  obtenerViajes,
  eliminarViaje,
} = require('./consultas');

const express = require('express');

const app = express();

app.listen(3001, console.log('SERVIDOR ENCENDIDO'));

app.use(express.json());

app.get('/viajes', async (req, res) => {
  const viajes = await obtenerViajes();
  res.json(viajes);
});

app.post('/viajes', async (req, res) => {
  try {
    const { destino, presupuesto } = req.body;
    await agregarViaje(destino, presupuesto);
    res.send('destino agregado con exito');
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// http://localhost:3000/viajes/1 || http://localhost:3000/viajes/2
app.put('/viajes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { presupuesto } = req.query;
    /*
  ok, de request.params --> id
  de request.query --> presupuesto
  
  */

    await modificarPresupuesto(presupuesto, id);
    res.send('Presupuesto modificado con éxito');
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/viajes/:id', async (request, response) => {
  try {
    const { id } = request.params;
    // crear una funcion que reciba por parametro el id --> con el id pueda eliminar de una base de datos
    await eliminarViaje(id);
    response.send('viaje eliminado con éxito');
  } catch (error) {
    res.status(500).send(error);
  }
});
