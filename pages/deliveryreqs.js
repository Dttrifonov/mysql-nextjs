import DeliveryreqList from "../components/deliveryreq/DeliveryreqList";

function deliveryreqs({data}) {
    console.log("data", data);
    return(
      <div>
        <DeliveryreqList deliveryreqData={data}/>
      </div>
    );
 }
 
 export async function getServerSideProps(){
    const res=await fetch("http://localhost:3000/api/deliveryreq");
    const data=await res.json();
    return {
     props: {data},
 };
}
 
 
 export default deliveryreqs