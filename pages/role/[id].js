import EditRole from "../../components/role/EditRole";

function updateRole({role}) {
    console.log("role", role);
    return <EditRole roleUpdateData={role}/>;
}

export async function getServerSideProps ({params}) {
   const res = await fetch (`http://localhost:3000/api/role/${params.id}`);
   const role = await res.json();

   return {
    props: {role},
   };
}
export default updateRole;