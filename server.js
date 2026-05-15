const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/missatge', (req, res) => {
  res.json({
    missatge: 'Holaaaaaa des del backend!'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor executant-se a http://localhost:${PORT}`);
});