import EditDeliveryreq from "../../components/deliveryreq/EditDeliveryreq";

function updateDeliveryreq({deliveryreq}) {
    console.log("deliveryreq", deliveryreq);
    return <EditDeliveryreq deliveryreqUpdateData={deliveryreq}/>;
}

export async function getServerSideProps ({params}) {
   const res = await fetch (`http://localhost:3000/api/deliveryreq/${params.id}`);
   const deliveryreq = await res.json();

   return {
    props: {deliveryreq},
   };
}
export default updateDeliveryreq;