const customerModel = require("../model/customerModel");
const generateUniqueId=require("generate-unique-id");

const addCustomer=async(req,res)=>{
    console.log(req.body);
    const id= generateUniqueId({
        length: 6,
        useLetters: false
      });
      const customer={trackingId:id,...req.body};

    const newuser = new customerModel(customer); 
    await newuser.save();
   
    res.json({
        success:true,
        message:"data Saved successfully",
        data:newuser
  
    })
}

const getCustomers=async(req,res)=>{ 
    const customers=await customerModel.find();
    res.json({
        success:true,
        data:customers
    })
}

const updateCustomer=async(req,res)=>{

    const customers=await customerModel.findByIdAndUpdate(req.query.id,{$set:req.body},{new:true});
    res.json({
        success:true,
        updatedData:customers
    })
}
const deleteCustomer=async(req,res)=>{
    const customers=await customerModel.findByIdAndDelete(req.query.id);
    res.json({
        success:true,
        DeletedData:customers
    })
}

const sortCustomer=async(req,res)=>{
   const by=req.body.name;
   console.log(by)
    const customers=await customerModel.find().sort({[by]:1});
    res.json({
        success:true,
         sorted:customers
    })
}

const controller={addCustomer,getCustomers,updateCustomer,deleteCustomer,sortCustomer}; 
module.exports=controller