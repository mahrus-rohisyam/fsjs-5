const express = require("express");
const router = express.Router();

router.get('/user', (req, res) => {
  try {
    res.status(200);
    res.json({
      status: "success",
      method: req.method,
      message: "Success get data",
      body: "Body" + req.body.pesan
    }).end()
  } catch (error) {
    res.status(404);
    res.json({
      status: "Failed",
      method: req.method,
      message: "Failed get data " + error.message,
    }).end()
  }
})

router.post('/', (req, res) => {
  res.status(200);
  res.json({
    status: 'success',
    method: req.method,
    message: "post success",
    body: req.body.pesan
  }).end()
})

// router.post("")

// .get('/', (req, res) => {
//   res.send(200);
//   res.json({
//     status: "success",
//     method: req.method,
//     message: "Success get data"
//   })
// })
// .put('/', (req, res) => {
//   res.send(200)
//   res.json({
//     status: 'success',
//     method: req.method,
//     message: "Data updated successfully"
//   })
// })

console.log(__dirname);

module.exports = router;