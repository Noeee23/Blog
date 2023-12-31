const posts = require('./Data/posts');
const sections = require('./Data/sections');
const { Op, Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
   {
     host: process.env.DB_HOST,
     dialect: process.env.DB_DIALECT
   }
);

// Definición de tabla posts
const Post = sequelize.define("posts", {
  title: {
    type: DataTypes.STRING(75),
    allowNull: false, 
  },
  subtitle: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sectionId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});
// Definición de tabla sections
const Section = sequelize.define("sections", {
   section: {
     type: DataTypes.STRING(100),
     allowNull: false
   },
   order: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
   }
});
// Función que sincroniza las tablas
const sincronizarTablas = () => {
  sequelize.sync({force: false}).then(() => {
    // IDEA: if que verifica si las tablas existen o si tienen datos...
    // Post.bulkCreate(posts)
    // Section.bulkCreate(sections)
    console.log("Tablas actualizadas")
  }).catch((error) => {
    console.error('Hubo un error: ', error);
  });
}

module.exports = { sequelize, sincronizarTablas, Post, Section };