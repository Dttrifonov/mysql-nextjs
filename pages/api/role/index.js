import { getAllRoles, saveRole } from "../../../controller/role/role";
import nc from "next-connect";

const handler = nc();
handler.get(getAllRoles);
handler.post(saveRole);
export default handler;