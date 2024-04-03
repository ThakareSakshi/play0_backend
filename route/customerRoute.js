const express=require("express");
const customerController=require("../controller/customerController")

const router=express.Router();

router.post("/add",customerController.addCustomer);
router.get("/get",customerController.getCustomers);
router.patch("/update",customerController.updateCustomer);
router.delete("/delete",customerController.deleteCustomer);
router.post("/sort",customerController.sortCustomer);

module.exports=router;