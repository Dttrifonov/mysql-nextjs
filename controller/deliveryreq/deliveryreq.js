import {executeQuery} from "../../config/db";
const getAllDeliveryreqs = async (req, res)=>{
    try {
      let deliveryreqData=await executeQuery('select* from deliveryreq',[]);
      res.send(deliveryreqData);
    } catch(err){
        res.status(500).json(err);
    }
};

const getDeliveryreqById=async(req, res)=> {
   let id = req.query.id;
   try {
    
    let deliveryreqData=await executeQuery('select * from deliveryreq where dlv_id=?' ,[id]);
         res.status(200).json(deliveryreqData);
   } catch(err) {
    res.status(500).json(err);
   }
};
const deleteDeliveryreqById = async (req, res) =>{
let id = req.query.id;
try {
  let deliveryreqData = await executeQuery(
    'delete from deliveryreq where dlv_id=?', [id]
  );
  res.status(200).json(deliveryreqData);
} catch (err) {
  res.status(500).json(err);
}
};

const saveDeliveryreq = async (req, res) => {
  console.log(req.body);
  let dlv_name=req.body.dlv_name;
  let dlv_email=req.body.dlv_email;
  let dlv_addrobl=req.body.dlv_addrobl;
  let dlv_addrobsht=req.body.dlv_addrobsht;
  let dlv_address=req.body.dlv_address;
  let dlv_phone=req.body.dlv_phone;
  let dlv_date=req.body.dlv_date;
  let dlv_courier=req.body.dlv_courier;
  let dlv_status=req.body.dlv_status;

  try {
    let deliveryreqData=await executeQuery(
    'insert  into deliveryreq (dlv_name, dlv_email, dlv_addrobl, dlv_addrobsht, dlv_address, dlv_phone, dlv_date, dlv_courier, dlv_status) values (?,?,?,?,?,?,?,?,?)', 
    [dlv_name, dlv_email, dlv_addrobl, dlv_addrobsht, dlv_address, dlv_phone, dlv_date, dlv_courier, dlv_status] 
    );
  
     deliveryreqData=await executeQuery(
    `select * from  deliveryreq where dlv_id=${deliveryreqData.insertId}`
   );
    res.status(201).json(deliveryreqData);
  }catch(err){
    res.status(400).json(err);
  }
};

const updateDeliveryreq=async (req, res) =>{
let id=req.query.id;
const {dlv_name, dlv_email, dlv_addrobl, dlv_addrobsht, dlv_address, dlv_phone, dlv_date, dlv_courier, dlv_status} = req.body;
try {
 let deliveryreqData = await executeQuery(
  'select * from deliveryreq where dlv_id=?', [id]);
 

if (deliveryreqData.length>0) {
  deliveryreqData=await executeQuery(
"update deliveryreq set dlv_name=?, dlv_email=?, dlv_addrobl=?, dlv_addrobsht=?, dlv_address=?, dlv_phone=?, dlv_date=?, dlv_courier=?, dlv_status=? where dlv_id=?",
[dlv_name, dlv_email, dlv_addrobl, dlv_addrobsht, dlv_address, dlv_phone, dlv_date, dlv_courier, dlv_status, id]
 );
 res.status(200).json(deliveryreqData);
}else {
  res.status(400).json('deliveryreq not foud on this id=?');
}
}catch (err){
  res.status(400).json(err);
 }
};


export{
  getAllDeliveryreqs,
  getDeliveryreqById,
  deleteDeliveryreqById, 
  saveDeliveryreq, 
  updateDeliveryreq};