import express from 'express';
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send({message: "index"});
  return;
})

export default router;
