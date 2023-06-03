import nc from "next-connect";
import { 
    getRoleById, 
    deleteRoleById,
    updateRole
} from "../../../controller/role/role";

const handler = nc();
handler.get(getRoleById);
handler.delete(deleteRoleById);
handler.put(updateRole);
export default handler;