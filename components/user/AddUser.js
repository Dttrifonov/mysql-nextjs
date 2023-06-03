import axios from "axios";
import React, {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import HeaderUser from "./HeaderUser"
import styles from "../../styles/User.module.css";
import { Input,useInput, Grid, Button, Spacer, Text } from "@nextui-org/react";
import FooterOP from "../FooterOP";



function AddUser() {
    const router = useRouter();
    const [addUser, setUser]=useState({
        us_name:"",
        us_nickname:"",
        us_password:"",
        us_roleid:"",

    });
    const onSubmit=async(e)=>{
        e.preventDefault();
        let data = await axios.post(`http://localhost:3000/api/user`, addUser);
        if (data.data) router.push(`/users`)
           setUser({
        us_name:"",
        us_nickname:"",
        us_password:"",
        us_roleid:"",
         });
    };

    const handleChange=(e)=>{
        const value=e.target.value;
        console.log('value', value);
        setUser({...addUser, [e.target.name]:value});
    };
    const { value, reset, bindings } = useInput("");
  

    const validateEmail = (value) => {
      return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };
  
    const helper = React.useMemo(() => {
      if (!value)
        return {
          text: "",
          color: "",
        };
      const isValid = validateEmail(value);
      return {
        text: isValid ? "Correct email" : "Enter a valid email",
        color: isValid ? "success" : "error",
      };
    }, [value]);

    
      
    let optionItemrole = require('lib/userrole.json');
    console.log(optionItemrole);
    

    return (
     <>
     <HeaderUser/>
     <Text h3 align="center"> Добавяне на потребители
   </Text>
   <Spacer y={1} />

        <Grid.Container gap={4} justify="center">
    
        
    <form onSubmit={onSubmit}>
       
 <Grid>
    <Input
      clearable
      label="Име"
      name="us_name" 
      placeholder="Въведи име и фамилия"
      bordered
      onChange={handleChange}
      value={addUser.us_name}
      required
    />
  </Grid>
    
    <Grid>
    <Input
      label="Потребителско име"
      clearable
      name="us_nickname" 
      placeholder="Въведи потребител"
      bordered
      onChange={handleChange}
      value={addUser.us_nickname}
      required
    />
      </Grid>
    
    <Grid>
    <Input
      label="Парола"
      clearable
      name="us_password" 
      placeholder="Въведи парола"
      bordered
      onChange={handleChange}
      value={addUser.us_password}
      required
    />
    </Grid>
    <Grid> 
            <p className={styles.plabel}>Роля</p>
            <select className={styles.select}
              id="us_roleid"
              name="us_roleid" 
              value={addUser.us_roleid}
              onChange={handleChange}
            >
              <option value="">--Изберете роля--</option>
              {optionItemrole.map((option)=>(
               <option key={option.value} value={option.value}>
                {option.label}
              </option>
              ))}
            </select>
        </Grid>  
      
    <Grid.Container >
       <Spacer x={1} />
        <Button type= "submit" bordered color="primary" auto>
            Потвърди
        </Button>
        <Spacer x={1} />
        <Button  bordered color="secondary" auto>

        <Link href={`/users`}>Отказ</Link>
        </Button>

    </Grid.Container>
    </form>
    </Grid.Container>
    <FooterOP/>
    
     </>
    );
}
export default  AddUser