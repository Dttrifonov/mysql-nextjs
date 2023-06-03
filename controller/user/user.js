import {executeQuery} from "../../config/db";
const getAllUsers = async (req, res)=>{
    try {
      let userData=await executeQuery('SELECT * FROM `user`, `role` where `us_roleid`=`role_id`',[]);
      res.send(userData);
    } catch(err){
        res.status(500).json(err);
    }
};

const getUserById=async(req, res)=> {
   let id = req.query.id;
   try {
    
    let userData=await executeQuery('select * from user where us_id=?' ,[id]);
         res.status(200).json(userData);
   } catch(err) {
    res.status(500).json(err);
   }
};
const deleteUserById = async (req, res) =>{
let id = req.query.id;
try {
  let userData = await executeQuery(
    'delete from user where us_id=?', [id]
  );
  res.status(200).json(userData);
} catch (err) {
  res.status(500).json(err);
}
};

const saveUser = async (req, res) => {
  console.log(req.body);
  let us_name=req.body.us_name;
  let us_nickname=req.body.us_nickname;
  let us_password=req.body.us_password;
  let us_roleid=req.body.us_roleid;
  try {
    let userData=await executeQuery(
    'insert  into user (us_name, us_nickname, us_password, us_roleid) values (?,?,?,?)', 
    [us_name, us_nickname, us_password, us_roleid] 
    );
  
    userData=await executeQuery(
    `select * from  user where us_id=${userData.insertId}`
   );
    res.status(201).json(userData);
  }catch(err){
    res.status(400).json(err);
  }
};

const updateUser=async (req, res) =>{
let id=req.query.id;
const {us_name, us_nickname, us_password, us_roleid} = req.body;
try {
 let userData = await executeQuery(
  'select * from user where us_id=?', [id]);
 

if (userData.length>0) {
  userData=await executeQuery(
"update user set us_name=?,us_nickname=?,us_password=?, us_roleid=? where us_id=?",
[us_name, us_nickname, us_password, us_roleid, id]
 );
 res.status(200).json(userData);
}else {
  res.status(400).json('user not foud on this id=?');
}
}catch (err){
  res.status(400).json(err);
 }
};


export{
  getAllUsers,
  getUserById,
  deleteUserById, 
  saveUser, 
  updateUser};