import nc from "next-connect";
import { 
    getDeliveryreqById, 
    deleteDeliveryreqById,
    updateDeliveryreq
} from "../../../controller/deliveryreq/deliveryreq";

const handler = nc();
handler.get(getDeliveryreqById);
handler.delete(deleteDeliveryreqById);
handler.put(updateDeliveryreq);
export default handler;