import axios from "axios";
import React, {useState} from "react";
//import {useRouter} from "next/router";
import { Input, useInput, Grid, Button,Spacer } from "@nextui-org/react";
import Link from "next/link";
import styles from "../styles/AddDlvreqCust.module.css"

function AddDlvreqCust() {
    //const router = useRouter();
    const [message, setMessage] = useState('');
    const [count, setCount] = useState(0);

    let optionItemobl = require('lib/oblast.json');
    console.log(optionItemobl);

    let optionItemobsht = require('lib/obshtina.json');
    console.log(optionItemobsht);  

    const [addDeliveryreq, setDeliveryreq]=useState({
        dlv_name:"",
        dlv_email:"",
        dlv_addrobl:"",
        dlv_addrobsht:"",
        dlv_address:"",
        dlv_phone:"",
        dlv_date:"",
        dlv_courier:"куриер",
        dlv_status:"необработена",
    });
    const onSubmit=async(e)=>{
        e.preventDefault();
        let data = await axios.post(`http://localhost:3000/api/deliveryreq`, addDeliveryreq);
          setDeliveryreq({
            dlv_name:"",
            dlv_email:"",
            dlv_addrobl:"",
            dlv_addrobsht:"",
            dlv_address:"",
            dlv_phone:"",
            dlv_date:"",
            dlv_courier:"сл.куриер",
            dlv_status:"необработена",
          });
        if (count<2) {
          setMessage('Вашата заявка беше приета успешно.')
        }  else {
          setMessage('Вече подадохге 3 заявки. Моля свържете се с нас за уточняване на подробностите.')
        }
        setCount(count + 1);
    };

    const handleChange=(e)=>{
        const value=e.target.value;
              
        console.log('value', value);
        setDeliveryreq({...addDeliveryreq, [e.target.name]:value});
               
        console.log('value', value);
        console.log('value', dlv_addrobl.value);
        setMessage('')
    };

    // Filter the itemGroup based on the selected group value
    const filteredItems = optionItemobsht.filter(
          (item) => item.keyg === addDeliveryreq.dlv_addrobl
    );
 
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

   
    return (
     <>
     <Grid.Container gap={4} justify="center">
            
      <form onSubmit={onSubmit}>
           
        <Grid>
         <Input
          clearable
          label="Име и фамилия"
          name="dlv_name" 
          placeholder="Въведете име и фамилия"
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
          label="Е-поща"
          name="dlv_email" 
          placeholder="Въведете Email"
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
               <option key={option.key} keyg={option.keyg}  value={option.value}>
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
             
              {filteredItems.map((option)=>(
               <option key={option.key} keyg={option.keyg} value={option.value}>
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
          placeholder="Въведете адрес"
          bordered
          onChange={handleChange}
          value={addDeliveryreq.dlv_address}
          required
        />
        </Grid>
        
        <Grid>
        <Input
          label="Телефон"
          clearable
          name="dlv_phone" 
          placeholder="+359 8XX XXX XXX"
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
          bordered
          onChange={handleChange}
          value={addDeliveryreq.dlv_date}
          required
        />
        </Grid>

        <Grid.Container >
        <Spacer x={1} />
            <Button type= "submit" bordered color="primary" auto>
                Потвърди
            </Button>
            <Spacer x={1} />
        <Button  bordered color="secondary" auto>

        <Link href={`/`}>Отказ</Link>
        </Button> 
        </Grid.Container>
      </form>
     </Grid.Container>
      <p>
        {message}
      </p>
    </>
    );
}
export default  AddDlvreqCust
