const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const app=express();
const mongoose=require("mongoose");
const customerRoutes=require("./route/customerRoute")
dotenv.config();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, 
  };
  

mongoose.connect(process.env.DB_URL).then(
    ()=>{
        console.log("connnected succefully");
    }

).catch((e)=> {console.log("rejected" ,e)});

app.use(cors(corsOptions));
  app.use(express.json());
//   app.use(express.FormData());

  app.use("/api/",customerRoutes);

app.listen("3000",()=>{
    console.log("running on port 3000");
   

})


