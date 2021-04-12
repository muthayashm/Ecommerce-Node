const express=require('express');
const EcommerceController = require('./controller/ecommerce.controller');
const EcommerceRouter = express.Router();
EcommerceRouter.post('/', EcommerceController.create);
EcommerceRouter.get('/', EcommerceController.getAll);
// studentRouter.get('/:id', studentController.getById);
// studentRouter.delete('/:id', studentController.deleteById);
// studentRouter.put('/:id', studentController.updateById);
// teacherRouter.post('/', teacherController.create);
// teacherRouter.get('/', teacherController.getAll);



const routes = (app) => {

  app.use('/product', EcommerceRouter);

  app.get('/', (req, res) => {
    return res.send({ Message: "Product available"});
  }) 
}
module.exports=routes;

