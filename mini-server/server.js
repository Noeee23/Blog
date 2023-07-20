require('dotenv').config()
// const { Op, Sequelize, DataTypes } = require("sequelize");
const { sequelize, sincronizarTablas, Post, Section } = require('./tables')

// Aplicación de express
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors'); 
const { sections } = require('./Data/sections');
app.use(cors()) 

// Llamada a la fn para actualizar tablas en base de datos:
// sincronizarTablas()

// Sincroniza las tablas en la base de datos
app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Bienvenido a Express');
});

// Post
app.get('/posts', (req, res) => {
  Post.findAll().then(posts => {
     // Este console.log es para ver los datos en consola (dataValues):
    posts.map(post => console.log(post.dataValues))
     // Response del endpoint:
    res.json(posts)
  })
});

// GET de un post por id
app.get('/posts/:id', (req, res) => {
  const id = req.params.id; // leemos el id de la url
  Post.findOne({
    where: {
      id: id
    }
  }).then( 
    post => {
      console.log(post);
      post ? res.json(post) : res.end("El id introducido no es valida")
    }
  )
})

// POST para crear nuevo post
app.post('/posts', (req, res) => {
  let nuevoPost = req.body 
  Post.create(nuevoPost).then(post => {
    console.log(post)
    res.status(201).json(post)
  })
});

// Endpoint UPDATE para editar post
app.patch('/posts/:id', (req, res) => {
  const id = req.params.id;
  const datos = req.body; // Los valores a actualizar
  Post.update(datos, {
    where: {
      id: id
    }
  }).then(data => {
    console.log(data);
    res.json({"mensaje": `El post con id ${id} se ha actualizado con: ` + JSON.stringify(datos)})
  })
})

// Endpoint DELETE para borrar post
app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;
  Post.destroy({
    where: {
      id: id
    }
  }).then(data => {
    console.log(data);
    res.end(`El post con id ${id} ha sido borrado`)
  })
})

// Post
app.get('/sections', (req, res) => {
  Section.findAll().then(sections => {
     // Este console.log es para ver los datos en consola (dataValues):
    sections.map(section => console.log(section.dataValues))
     // Response del endpoint:
    res.json(sections)
  })
});

// GET de una section por id
app.get('/sections/:id', (req, res) => {
  const id = req.params.id; // leemos el id de la url
  Section.findOne({
    where: {
      id: id
    }
  }).then( 
    section => {
      console.log(section);
      section ? res.json(sections) : res.end("El id introducido no es valida")
      // section ? res.json(section) : res.json({"mensaje": "Ese id no es válido"}).catch() (atrapa error)
    }
  )
})
// POST para crear nuevo section
app.post('/sections', (req, res) => {
  let nuevaSection = req.body 
  Section.create(nuevaSection).then(section => {
    console.log(section)
    res.status(201).json(section)
  })
});

// Endpoint UPDATE para editar section
app.patch('/sections/:id', (req, res) => {
  const id = req.params.id;
  const datos = req.body; // Los valores a actualizar
  Section.update(datos, {
    where: {
      id: id
    }
  }).then(data => {
    console.log(data);
    res.json({"mensaje": `La section con id ${id} se ha actualizado con: ` + JSON.stringify(datos)})
  })
})

// Endpoint DELETE para borrar section
app.delete('/sections/:id', (req, res) => {
  const id = req.params.id;
  Section.destroy({
    where: {
      id: id
    }
  }).then(section => {
    console.log(section);
    res.end(`La section con id ${id} ha sido borrado`)
  })
})


const PORT = 3000
app.listen(PORT, () => {
  console.log("Servidor en ejecución en http://localhost:" + PORT)}
);