import axios from "axios";
import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import HeaderUser from "../user/HeaderUser";
import styles from "../../styles/Role.module.css";
import { Input, useInput, Grid, Button,Spacer } from "@nextui-org/react";
import FooterOP from "../FooterOP";


function EditRole({roleUpdateData}) {
    console.log(`roleid`, roleUpdateData); 
    const router = useRouter();
    const [addRole, setRole]=useState({
        role_name:"",
        
    });
    useEffect(()=>{
        setRole(roleUpdateData[0])
    },[roleUpdateData])

    const onSubmit=async(e)=>{
        e.preventDefault();
        let data = await axios.put(`http://localhost:3000/api/role/${roleUpdateData[0].role_id}`, addRole);
        if (data.data) router.push('../roles')
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
     
        <h2 className={styles.h2}>Редактирай роля</h2>
      <Grid.Container gap={4} justify="center">

       <form onSubmit={onSubmit}>
          
        <Grid>
          <Input
           clearable
           label="Роля"
           name="role_name" 
           placeholder="Наименование на роля"
           bordered
           onChange={handleChange}
           value={addRole.role_name}
           required
          />
        </Grid>
          
    <Grid.Container >

        <Button type= "submit" bordered color="primary" auto>
            Потвърди
        </Button>
        <Spacer x={1} />
        <Button  bordered color="secondary" auto>
          <Link href={`../roles`}>Отказ</Link>
        </Button>

    </Grid.Container>
        
        </form>
      </Grid.Container>
    <FooterOP/>
    </>
  )

}
export default EditRole