import UserList from "../components/user/UserList";

function users({data}) {
    console.log("data", data);
    return(
      <div>
        <UserList userData={data}/>
      </div>
    );
 }
 
 export async function getServerSideProps(){
    const res=await fetch("http://localhost:3000/api/user");
    const data=await res.json();
    return {
     props: {data},
 };
}
 
 
 export default users