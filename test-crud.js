// test-crud.js
// Prueba operaciones CRUD

const { sequelize, Tablero, Lista, Tarjeta } = require('./models');

async function testCRUD() {
  await sequelize.sync();

  console.log("\n--- CREAR ---");
  const lista = await Lista.findOne();
  const nuevaTarjeta = await Tarjeta.create({
    titulo: "Nueva Tarjeta",
    descripcion: "Prueba CRUD",
    ListaId: lista.id,
  });
  console.log("Tarjeta creada:", nuevaTarjeta.titulo);

  console.log("\n--- LEER ---");
  const tablero = await Tablero.findOne({
    include: {
      model: Lista,
      include: Tarjeta,
    },
  });
  console.log(JSON.stringify(tablero.toJSON(), null, 2));

  console.log("\n--- ACTUALIZAR ---");
  nuevaTarjeta.titulo = "Tarjeta Actualizada";
  await nuevaTarjeta.save();
  console.log("Tarjeta actualizada.");

  console.log("\n--- BORRAR ---");
  await nuevaTarjeta.destroy();
  console.log("Tarjeta eliminada.");

  process.exit();
}

testCRUD();