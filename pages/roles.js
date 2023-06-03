import RoleList from "../components/role/RoleList";

function roles({data}) {
    console.log("data", data);
    return(
      <div>
        <RoleList roleData={data}/>
      </div>
    );
 }
 
 export async function getServerSideProps(){
    const res=await fetch("http://localhost:3000/api/role");
    const data=await res.json();
    return {
     props: {data},
 };
}
 
 
 export default roles