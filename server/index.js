const express = require('express');
const db = require('./db');
const app = express();
const port = 1337;
app.use(express.json())
// link frontend + backend 
app.use(express.static(__dirname + '/../client/build'))
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post("/addphone", (req, res) => {


  console.log(req.body);
  db.query('INSERT INTO dataphone (phonename,price,image,description) VALUES (?,?,?,?);', [req.body.phone_name, req.body.price, req.body.image, req.body.description], (err, data) => {
    if (err) {
      console.log(err)
    }
    res.send({ done: "done" })
  })
})

app.get("/phones", (req, res) => {
  db.query("SELECT * FROM dataphone;", (err, results) => {
    if (err) {
      console.log(err)
    }
    res.json(results)
  })
})

app.delete("/delphones/:id", (req, res) => {
  console.log(req.params.id)
  db.query("delete from dataphone where id = ?;", req.params.id, (err, results) => {
    if (err) {
      console.log(err)
    }
    res.send(results)
  })
})

app.put("/udphones/:id", (req, res) => {
  console.log(req.body)
  db.query("update dataphone set phonename=?,price=?,image=?,description=? where id=?;", [req.body.newphone, req.body.newprice, req.body.newimage, req.body.newdescription, req.params.id], (err, results) => {
    if (err) {
      console.log(err)
    }
    res.send({ done: "done" })
  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});