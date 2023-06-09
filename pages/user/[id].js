import EditUser from "../../components/user/EditUser";

function updateUser({user}) {
    console.log("user", user);
    return <EditUser userUpdateData={user}/>;
}

export async function getServerSideProps ({params}) {
   const res = await fetch (`http://localhost:3000/api/user/${params.id}`);
   const user = await res.json();

   return {
    props: {user},
   };
}
export default updateUser;