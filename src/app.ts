import express from 'express';

const app = express();

//Routing
app.get('/', (req, res) => {
  res.send('Hola mundo desde Express');
});

// Port
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
  ;
});