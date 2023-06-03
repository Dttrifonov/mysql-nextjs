import { getAllUsers, saveUser } from "../../../controller/user/user";
import nc from "next-connect";

const handler = nc();
handler.get(getAllUsers);
handler.post(saveUser);
export default handler;