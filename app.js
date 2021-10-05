const http = require("http")
// const bodyParser = require('body-parser')
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// let Sequelize = require('sequelize');

const app = express()

const PORT = config.get('port') || 5000

app.use(bodyParser.json())
app.use('/', require('./routes/gallary.routes'))

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

// const db = require("./models");
// app.set('port', (process.env.PORT || 5432));
// app.use(bodyParser.urlencoded({ extended: false }))
// // app.use(bodyParser.json())

// if(process.env.DATABASE_URL) {
//   new Sequelize(process.env.DATABASE_URL, {
//     dialect:  'postgres',
//     protocol: 'postgres',
//     logging: false,
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//       keepAlive: true,
//     }
//   });
// }

// db.sequelize.sync().then(async () => {
//   const server = http.createServer(app);
//   server.listen(app.get('port'), () => {
//     console.log("Backend is running at localhost:" + app.get('port'));
//   });
// });


// app.get('/', function(req, res) {

// });

// app.get('/setImage', function(req, res) {

// });

// // /deleteAll 

// // /setImages   [{},{blob}]

// app.get('/setGallery', async (req, res) => {
//   console.log(req.body)
//   // res.send("test")
//   try {
//     const gallery = await db.Gallery.create({
//       title: req.body.title,
//       description: req.body.description,
//     });
//     res.send(gallery);
//   } catch (e) {
//     res.send(e);
//   }
// });

// app.use(express.json())