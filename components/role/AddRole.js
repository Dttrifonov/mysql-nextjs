import axios from "axios";
import React, {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import HeaderUser from "../user/HeaderUser";
import { Input, Grid, Button, Spacer, Text } from "@nextui-org/react";
import FooterOP from "../FooterOP";



function AddRole() {
    const router = useRouter();
    const [addRole, setRole]=useState({
        role_name:"",
    });
    const onSubmit=async(e)=>{
        e.preventDefault();
        let data = await axios.post(`http://localhost:3000/api/role`, addRole);
        if (data.data) router.push(`/roles`)
           setRole({
         role_name:"",
        });
    };

    const handleChange=(e)=>{
        const value=e.target.value;
        console.log('value', value);
        setRole({...addRole, [e.target.name]:value});
    };
    
       

    return (
     <>
     <HeaderUser/>
      <Text h3 align="center"> Добавяне на роли</Text>
      <Spacer y={1} />

    <Grid.Container gap={4} justify="center">
       
    <form onSubmit={onSubmit}>
     
    
    <Input
      fullWidth
      label="Роля"
      clearable
      name="role_name" 
      placeholder="Въведи роля"
      bordered
      onChange={handleChange}
      value={addRole.role_name}
      required
    />
   
    <Spacer y={2} />

    <Grid.Container >
        <Button type= "submit" bordered color="primary" auto>
            Потвърди
        </Button>
        <Spacer x={1} />

        <Button  bordered color="secondary" auto>
         <Link href={`/roles`}>Отказ</Link>
        </Button>
    </Grid.Container>

    </form>

    </Grid.Container>
    <Spacer y={10} />
    <FooterOP/>
    
    </>
    );
}
export default  AddRole