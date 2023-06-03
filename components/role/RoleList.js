import React from "react";
import HeaderUser from "../user/HeaderUser";
import Link from  "next/link";
import {useRouter} from 'next/router';
import axios from "axios";
import { Table, Button, Container, Text, Spacer } from "@nextui-org/react";
import FooterOP from "../FooterOP";

function RoleList({roleData}) {
   const router = useRouter();
   const deleteRole=async(id)=>{
   let data = await axios.delete(`http://localhost:3000/api/role/${id}`);
   router.push('../roles');
};
   return(
      <>
     
      <HeaderUser/>
       
<Container>
<Text h3> Редактиране на роли
   </Text>
   <Spacer y={1} />
   <Table
      aria-label="All roles"
      css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
      selectionMode="single"
      bordered
    >
      <Table.Header>
        <Table.Column key="role_id" >
        № по ред
        </Table.Column>

        <Table.Column key="role_name" >
        Наименование на роля
        </Table.Column>

        <Table.Column key="actions" allowsSorting>
        Действие
        </Table.Column>

      </Table.Header>
      
    
    <Table.Body>
    {roleData?.map((rlData, index)=>(
            <Table.Row key={index}>
           
               <Table.Cell>{index+1}</Table.Cell>
               <Table.Cell>{rlData.role_name}</Table.Cell>

               <Table.Cell>
                   <Button color="error" flat onClick={()=>deleteRole (rlData.role_id)}> Изтрий роля</Button>
                   <Button  color="primary"><Link href={`../role/${rlData.role_id}`}>
                     Редактирай роля</Link></Button>
               </Table.Cell>
                         
            </Table.Row>  
            ))}
    </Table.Body>
            
   </Table>
            
         <div>
               <Button color="success" >
                 <Link href={`../addRole`}>Добави роля
                 </Link>
               </Button>
         
         </div> 
</Container>
<FooterOP/>

      
      </>
    );
 }
 export default RoleList