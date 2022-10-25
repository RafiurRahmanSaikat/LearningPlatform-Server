const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
app.use(cors());
const Data = require('./Data/Course.json');


app.get('/', (req, res) => {
    res.send(Data)
})
app.get('/:id', (req, res) => {
    const id = req.params.id;
    const SeletedCourse = Data.find(course => course.id === id)
    res.send(SeletedCourse)
})




app.listen(port, () => {
    console.log("API Working in port", port);
})