import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hola');
})

app.listen(5000, () => console.log('Server running'));