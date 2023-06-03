import {executeQuery} from "../../config/db";
const getAllRoles = async (req, res)=>{
    try {
      let roleData=await executeQuery('select* from role',[]);
      res.send(roleData);
    } catch(err){
        res.status(500).json(err);
    }
};

const getRoleById=async(req, res)=> {
   let id = req.query.id;
   try {
    
    let roleData=await executeQuery('select * from role where role_id=?' ,[id]);
         res.status(200).json(roleData);
   } catch(err) {
    res.status(500).json(err);
   }
};
const deleteRoleById = async (req, res) =>{
let id = req.query.id;
try {
  let roleData = await executeQuery(
    'delete from role where role_id=?', [id]
  );
  res.status(200).json(roleData);
} catch (err) {
  res.status(500).json(err);
}
};

const saveRole = async (req, res) => {
  console.log(req.body);
  let role_name=req.body.role_name;
  
  try {
    let roleData=await executeQuery(
    'insert  into role (role_name) values (?)', 
    [role_name] 
    );
  
    roleData=await executeQuery(
    `select * from  role where role_id=${roleData.insertId}`
   );
    res.status(201).json(roleData);
  }catch(err){
    res.status(400).json(err);
  }
};

const updateRole=async (req, res) =>{
let id=req.query.id;
const {role_name} = req.body;
try {
 let roleData = await executeQuery(
  'select * from role where role_id=?', [id]);
 

if (roleData.length>0) {
  roleData=await executeQuery(
"update role set role_name=? where role_id=?",
[role_name, id]
 );
 res.status(200).json(roleData);
}else {
  res.status(400).json('role not foud on this id=?');
}
}catch (err){
  res.status(400).json(err);
 }
};


export{
  getAllRoles,
  getRoleById,
  deleteRoleById, 
  saveRole, 
  updateRole};