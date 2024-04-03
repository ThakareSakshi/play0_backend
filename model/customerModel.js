const { default: mongoose } = require("mongoose")

const customerSchema=mongoose.Schema({
    trackingId:{
        type:String,
        required:true,
    },
    product:{
        type:String,
        required:true,
    },
    customerName:{
        type: String,
        required:true,
    },
    date:{
        type: Date,
        required:true,
    },
    amount:{
        type: Number,
        required:true,
    },
    paymentMode:{
        type: String,
        required:true,
    },
    transactionStatus:{
        type: String,
        required:true,
    }
})

const customerModel=mongoose.model("customers",customerSchema)
module.exports=customerModel; 