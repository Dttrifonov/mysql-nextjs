import React from "react";
import HeaderUser from "./HeaderUser";
import Link from  "next/link";
import {useRouter} from 'next/router';
//import styles from "../../styles/User.module.css";
import axios from "axios";
import { Table, Button, Container, Text, Spacer } from "@nextui-org/react";
import FooterOP from "../FooterOP";

function UserList({userData}) {
   const router = useRouter();
   const deleteUser=async(id)=>{
   let data = await axios.delete(`http://localhost:3000/api/user/${id}`);
   router.push('../users');
};
   return(
      <>
     
      <HeaderUser/>
       
<Container>
<Text h3> Редактиране на потребители
   </Text>
   <Spacer y={1} />
   <Table
      aria-label="All users"
      css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
      selectionMode="single"
      bordered
    >
      <Table.Header>
        <Table.Column key="us_id" allowsSorting>
        № по ред
        </Table.Column>
        <Table.Column key="us_name" allowsSorting>
        Име и фамилия
        </Table.Column>
        <Table.Column key="us_nickname" allowsSorting>
        Потребител
        </Table.Column>
        <Table.Column key="us_password" allowsSorting>
        Парола
        </Table.Column>

        <Table.Column key="us_roleid" allowsSorting>
        ИД-роля
        </Table.Column>
        
        <Table.Column key="role_name" allowsSorting>
        Роля
        </Table.Column>

        <Table.Column key="actions" allowsSorting>
        Действие
        </Table.Column>

      </Table.Header>
      
    
<Table.Body>
    {userData?.map((usData, index)=>(
            <Table.Row key={index}>
           
               <Table.Cell>{index+1}</Table.Cell>
               <Table.Cell>{usData.us_name}</Table.Cell>
               <Table.Cell>{usData.us_nickname}</Table.Cell>
               <Table.Cell>{usData.us_password}</Table.Cell>
               <Table.Cell>{usData.us_roleid}</Table.Cell>
               <Table.Cell>{usData.role_name}</Table.Cell>

               <Table.Cell>
                   <Button color="error" flat onClick={()=>deleteUser (usData.us_id)}> Изтрий потребител</Button>
                   <Button  color="primary"><Link href={`../user/${usData.us_id}`}>
                     Редактирай потребител</Link></Button>
               </Table.Cell>
                                       

                
             </Table.Row>  
            ))}
            </Table.Body>
            
   </Table>
            
         <div>
               <Button color="success" >
                 <Link href={`../addUser`}>Добави потребител
                 </Link>
               </Button>
         
         </div> 
</Container>
<FooterOP/>










      
      </>
    );
 }
 export default UserList