import * as express from 'express';
var router = express.Router();

/* GET champions listing. */
router.get('/champions', function(req, res, next) {
  res.send({message:'respond with a resource'});
});

export default router;
