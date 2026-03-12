// seed.js
// Crea tablas y agrega datos de prueba

const { sequelize, Usuario, Tablero, Lista, Tarjeta } = require('./models');

async function seed() {
  try {
    await sequelize.sync({ force: true });
    console.log("Base de datos creada.");

    // Crear usuarios
    const u1 = await Usuario.create({ nombre: "Ivan", email: "ivan@test.com" });
    const u2 = await Usuario.create({ nombre: "Maria", email: "maria@test.com" });

    // Crear tableros
    const t1 = await Tablero.create({ titulo: "Proyecto Web", UsuarioId: u1.id });
    const t2 = await Tablero.create({ titulo: "Marketing", UsuarioId: u1.id });
    const t3 = await Tablero.create({ titulo: "Personal", UsuarioId: u2.id });

    // Crear listas
    const l1 = await Lista.create({ titulo: "Pendientes", TableroId: t1.id });
    const l2 = await Lista.create({ titulo: "En Proceso", TableroId: t1.id });

    // Crear tarjetas
    await Tarjeta.create({
      titulo: "Diseñar Login",
      descripcion: "Pantalla inicial",
      ListaId: l1.id,
    });

    await Tarjeta.create({
      titulo: "Crear API",
      descripcion: "Endpoints CRUD",
      ListaId: l2.id,
    });

    console.log("Datos de prueba insertados.");
    process.exit();

  } catch (error) {
    console.error(error);
  }
}

seed();