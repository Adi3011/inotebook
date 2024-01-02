const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000

// need to use this middlware if we wanted to use req.body else we will get undefined error
app.use(express.json());

//available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

// to create route here
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Inotebook app listening on port ${port}`)
});