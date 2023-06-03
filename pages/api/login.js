//import bcrypt from 'bcrypt';
//import { getSession } from 'next-auth/client';
import {executeQuery} from "../../config/db";


export default async function handleLogin(req, res) {
  if (req.method === 'POST') {
    const { us_nickname, us_password } = req.body;
    const us_roleadm= 1;
    const us_rolecommon= 2;
    try {
      const results = await executeQuery('SELECT * FROM user WHERE us_nickname = ?', [us_nickname]);
      const user = results[0];
      if (user) {
        //const match = await bcrypt.compare(us_password, user.us_password);
       if(us_password === user.us_password){
        if (us_roleadm === user.us_roleid) {
          res.json({ success: true, message: `admin` });
        } else if (us_rolecommon === user.us_roleid) {
          res.json({ success: true, message: `commonuser` });
        } else {
          res.json({ success: false, message: 'Invalid role' });
        }
              
            
        // if (match) {
         // const session = await getSession({ req });
          //session.user = { id: user.id };
          
        } else {
          res.json({ success: false, message: 'Invalid password' });
        }
      } else {
        res.json({ success: false, message: 'User not found' });
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(405).json({ message: 'Method not alowed'});
  }
}

 
