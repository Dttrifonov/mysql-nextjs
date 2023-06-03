import axios from "axios";
import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import Header from "./HeaderDlvreq";
import styles from "../../styles/UpdateDeliveryreq.module.css";
import { Input, useInput, Grid, Button,Spacer } from "@nextui-org/react";
import FooterOP from "../FooterOP";


function EditDeliveryreq({deliveryreqUpdateData}) {
    console.log(`deliveryreqid`, deliveryreqUpdateData); 
    const router = useRouter();
    const [addDeliveryreq, setDeliveryreq]=useState({
        dlv_name:"",
        dlv_email:"",
        dlv_addrobl:"",
        dlv_addrobsht:"",
        dlv_address:"",
        dlv_phone:"",
        dlv_date:"",
        dlv_status:"",
    });
    useEffect(()=>{
        setDeliveryreq(deliveryreqUpdateData[0])
    },[deliveryreqUpdateData])

    const onSubmit=async(e)=>{
        e.preventDefault();
        let data = await axios.put(`http://localhost:3000/api/deliveryreq/${deliveryreqUpdateData[0].dlv_id}`, addDeliveryreq);
        if (data.data) router.push('/deliveryreqs')
           setDeliveryreq({
            dlv_name:"",
            dlv_email:"",
            dlv_addrobl:"",
            dlv_addrobsht:"",
            dlv_address:"",
            dlv_phone:"",
            dlv_date:"",
            dlv_status:"",
         });
    };
    const handleChange=(e)=>{
        const value=e.target.value;
        console.log('value', value);
        setDeliveryreq({...addDeliveryreq, [e.target.name]:value});
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

    let optionItemobl = require('lib/oblast.json');
    console.log(optionItemobl);

    let optionItemobsht = require('lib/obshtina.json');
    console.log(optionItemobsht);  

    let optionItemstatus = require('lib/status.json');
    console.log(optionItemstatus);


  return (

    <>
     <Header/>
     
        <h2 className={styles.h2} >Редактирай заявка</h2>
       <Grid.Container gap={4} justify="center">

        <form onSubmit={onSubmit}>

           
        <Grid>
          <Input
          clearable
          label="Име"
          name="dlv_name" 
          placeholder="Име и фамилия"
          bordered
          onChange={handleChange}
          value={addDeliveryreq.dlv_name}
          required
          />
        </Grid>
     

           <Grid>
    <Input
      {...bindings}
      clearable
      shadow={false}
      onClearClick={reset}
      status={helper.color}
      color={helper.color}
      helperColor={helper.color}
      helperText={helper.text}
      type="email"
      label="Email"
      name="dlv_email" 
      placeholder="Enter Email"
      bordered
      onChange={handleChange}
      value={addDeliveryreq.dlv_email}
      required
    />
    </Grid>

    <Grid> 
            <p className={styles.plabel}>Област</p>
            <select className={styles.select}
              id="dlv_addrobl"
              name="dlv_addrobl"
              value={addDeliveryreq.dlv_addrobl}
              onChange={handleChange}
            >
              <option value="">--Изберете област--</option>
              {optionItemobl.map((option)=>(
               <option key={option.value} value={option.value}>
                {option.label}
              </option>
              ))}
            </select>
        </Grid>  
       

          
        <Grid> 
            <p className={styles.plabel}>Община</p>
            <select className={styles.select}
              id="dlv_addrobsht"
              name="dlv_addrobsht"
              value={addDeliveryreq.dlv_addrobsht}
              onChange={handleChange}
            >
              <option value="">--Изберете община--</option>
              {optionItemobsht.map((option)=>(
               <option key={option.value} value={option.value}>
                {option.label}
              </option>
              ))}
            </select>
        </Grid>  
          




    <Grid>
    <Input
      label="Адрес"
      clearable
      name="dlv_address" 
      placeholder="Enter Address"
      bordered
      onChange={handleChange}
      value={addDeliveryreq.dlv_address}
      required
    />
      </Grid>
    <Grid>
    <Input
      label="Phone"
      clearable
      name="dlv_phone" 
      placeholder="Enter Phone"
      bordered
      onChange={handleChange}
      value={addDeliveryreq.dlv_phone}
      required
    />
    </Grid>

    <Grid>
    <Input
    
      clearable
      width="186px" 
      label="Дата" 
      type="date" 
      name="dlv_date" 
      placeholder="Enter date"
      bordered
      onChange={handleChange}
      value={addDeliveryreq.dlv_date}
      required
    />
    </Grid>

    <Grid>
    <Input
      label="Courier"
      clearable
      name="dlv_courier" 
      placeholder="Enter Courier"
      bordered
      onChange={handleChange}
      value={addDeliveryreq.dlv_courier}
      required
    />
    </Grid>

    <Grid> 
            <p className={styles.plabel}>Статус</p>
            <select className={styles.select}
              id="dlv_status"
              name="dlv_status" 
              onChange={handleChange}
              value={addDeliveryreq.dlv_status}
            >
              <option value="">--Изберете статус--</option>
              {optionItemstatus.map((option)=>(
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

        <Link href={`/deliveryreqs`}>Отказ</Link>
        </Button>

    </Grid.Container>


           
        </form>
        </Grid.Container>
        <FooterOP/>    
     </>
  )

}
export default EditDeliveryreq