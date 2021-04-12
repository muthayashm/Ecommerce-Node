const { Product } = require('../model');
const config = require('../config');


///code for creating data//////

const create = async (req, res) => {
  console.log('Create Product data');

  const { Name,Price,Description } = req.body;

  let status;
  let Message;

  try {
    const product = new Product({ Name,Price,Description  });
    await product.save();
    status = 200;
    Message = 'Product saved';
  } catch (err) {
    console.log('Error', err);
    console.log(err.stack);
    status = 400;
    Message = 'Bad request';
  }

  res.status(status).send({ Message });
}
//code for fetching the data//////
const getAll = async (req, res) => {
    let status;
    let message;
  
    const { filterByName } = req.query;
    
    console.log(filterByName);
    try {
      const query = {};
      if (filterByName) {
        query['Name'] = filterByName;
      }
      message = await Product.find(query);
      status = 200;
    } catch(err) {
      console.log('Some error occured', err);
      console.log(err.stack);
      status = 400;
      message = 'Bad request'
    }
    res.status(status).send({ message: message.map((prod) => ({
      Name: prod.Name,
      Price: prod.Price,
      Description: prod.Description
    })) });
  }
 
  
  ///////code for fetching the data by ID///
  
  
//   const getById = async (req, res) => {
//     console.log(req.params);
//     const { id } = req.params;
  
//     let status;
//     let message;
  
//     try {
//       const stu = await Student.find({ rollno: id });
//       status = 200;
//       message = stu;
  
//     } catch(err) {
//       console.log('Some error occured', err);
//       console.log(err.stack);
//       status = 400;
//       message = 'Bad request!!!'
//     }
  
//     res.status(status).send({ message });
//   }





  
//   //////////delete the data by ID//////
//   const deleteById= async(req,res)=>{
//       console.log(req.params);
//       const { id } = req.params;
      
//     let status;
//     let message;
  
//     try {
//       const stu = await Student.deleteOne({ rollno: id });
//       status = 200;
//       message = 'deleted data';
  
//     } catch(err) {
//       console.log('Some error occured', err);
//       console.log(err.stack);
//       status = 400;
//       message = 'Bad request!!!'
//     }
  
//     res.status(status).send({ message });
//   }


//   /////Code for doing updation//////
//   const updateById= async(req,res)=>{
//     console.log(req.params);
//     const { id } = req.params;
    
//   let status;
//   let message;
//       const name=req.body.name;
//       const className=req.body.className;
//       const subjects=req.body.subjects;
    

//   try {
//     let  student1 = await Student.findOne({ rollno: id });
// if(name){
//   student1.name=name;
// }
// if(className){
//     student1.className=className;

// }
// if(subjects){
//     student1.subjects=subjects;
// }
// await student1.save();
//     status = 200;
//     message = 'Update Details';

//   } catch(err) {
//     console.log('Some error occured', err);
//     console.log(err.stack);
//     status = 400;
//     message = 'Bad request!!!'
//   }

//   res.status(status).send({ message });
// }
  module.exports = {
    create,
    getAll
    // getById,
    // deleteById,
    // updateById,
    
  }