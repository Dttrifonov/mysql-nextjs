import React from "react";
import Header from "./HeaderDlvreq";
import Link from  "next/link";
import {useRouter} from 'next/router';
import axios from "axios";
import { Table, Button, Container, Grid, Input, useInput, } from "@nextui-org/react";
import FooterOP from "../FooterOP";

function DeliveryreqList({deliveryreqData}) {
    const router = useRouter();
   const deleteDeliveryreq=async(id)=>{
   let data = await axios.delete(`http://localhost:3000/api/deliveryreq/${id}`);
   router.push('/deliveryreqs');
   window.location.reload();
};

// Define a state for the search input
const [searchInput, setSearchInput] = React.useState("");

// Define a state for the filtered data
const [filteredData, setFilteredData] = React.useState(deliveryreqData);

// Define a handler for the search input change
const handleSearchChange = (event) => {
  // Get the search input value
  const value = event.target.value;
  // Set the search input state
  setSearchInput(value);
  // Filter the data based on the value
  const filtered = deliveryreqData.filter((dlv) => {
   return (
     dlv.dlv_name.toLowerCase().includes(value.toLowerCase()) ||
     dlv.dlv_email.toLowerCase().includes(value.toLowerCase()) ||
     dlv.dlv_addrobl.toLowerCase().includes(value.toLowerCase()) ||
     dlv.dlv_addrobsht.toLowerCase().includes(value.toLowerCase()) ||
     dlv.dlv_address.toLowerCase().includes(value.toLowerCase()) ||
     dlv.dlv_phone.toLowerCase().includes(value.toLowerCase()) ||
     dlv.dlv_date.toLowerCase().includes(value.toLowerCase()) ||
     dlv.dlv_courier.toLowerCase().includes(value.toLowerCase()) ||
     dlv.dlv_status.toLowerCase().includes(value.toLowerCase())
   );
 });
 // Set the filtered data state
 setFilteredData(filtered);
};

   return(
      <>
   <Header/>
<Container>
<Grid>
          <Input
          clearable
          label="Филтър"
          placeholder="Търсене по име и т.н ... *"
          bordered
          onChange={handleSearchChange}
          value={searchInput}
         
          />
        </Grid>
        <form>
   <Table
      aria-label="All deliveryreqs"
      css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
      selectionMode="single"
      bordered
    >
      <Table.Header>
        <Table.Column key="dlv_id" >
         № по ред
        </Table.Column>
        <Table.Column key="dlv_name"  onClick={e => handleSort(e, 'dlv_name')}>
        Заявител
        </Table.Column>
        <Table.Column key="dlv_email"  onClick={e => handleSort(e, 'dlv_email')} >
        Е-поща
        </Table.Column>
        <Table.Column key="dlv_addrobl"  onClick={e => handleSort(e, 'dlv_addrobl')} >
        Област
        </Table.Column>
        <Table.Column key="dlv_addrobsht"  onClick={e => handleSort(e, 'dlv_addrobsht')} >
        Община
        </Table.Column>

        <Table.Column key="dlv_address"  onClick={e => handleSort(e, 'dlv_address')} >
        Адрес
        </Table.Column>
        <Table.Column key="dlv_phone"  onClick={e => handleSort(e, 'dlv_phone')} >
        Телефон
        </Table.Column>
        <Table.Column key="dlv_date"  onClick={e => handleSort(e, 'dlv_date')} >
        Дата
        </Table.Column>
        <Table.Column key="dlv_courier"  onClick={e => handleSort(e, 'dlv_courier')} >
        Куриер
        </Table.Column>
        <Table.Column key="dlv_status"   onClick={e => handleSort(e, 'dlv_status')}>
        Статус
        </Table.Column>
        <Table.Column key="actions" >
        Действие
        </Table.Column>
      </Table.Header>   
<Table.Body>
    {filteredData?.map((dlvData, index)=>(
            <Table.Row key={index} data-item= {dlvData}>           
               <Table.Cell>{index+1}</Table.Cell>
               <Table.Cell>{dlvData.dlv_name}</Table.Cell>
               <Table.Cell>{dlvData.dlv_email}</Table.Cell>
               <Table.Cell>{dlvData.dlv_addrobl}</Table.Cell>
               <Table.Cell>{dlvData.dlv_addrobsht}</Table.Cell>
               <Table.Cell>{dlvData.dlv_address}</Table.Cell>
               <Table.Cell>{dlvData.dlv_phone}</Table.Cell>
               <Table.Cell>{dlvData.dlv_date}</Table.Cell>
               <Table.Cell>{dlvData.dlv_courier}</Table.Cell>
               <Table.Cell>{dlvData.dlv_status}</Table.Cell>
               <Table.Cell>
                   <Button color="error" flat onClick={()=>deleteDeliveryreq (dlvData.dlv_id)} > Изтрий заявка</Button>
                   <Button  color="primary"><Link href={`/deliveryreq/${dlvData.dlv_id}`}>
                     Редактирай заявка</Link></Button>
               </Table.Cell>
              </Table.Row>  
            ))}
            </Table.Body>
            
            </Table>
            </form>
            <div>
               <Button color="success" >
               <Link href={`/addDeliveryreq`}>Добави заявка
            </Link>
               </Button>
            </div> 
         </Container>
         <FooterOP/> 
      </>
    );
 }
 export default DeliveryreqList