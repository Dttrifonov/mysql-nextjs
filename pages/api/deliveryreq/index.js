import { getAllDeliveryreqs, saveDeliveryreq } from "../../../controller/deliveryreq/deliveryreq";
import nc from "next-connect";

const handler = nc();
handler.get(getAllDeliveryreqs);
handler.post(saveDeliveryreq);
export default handler;