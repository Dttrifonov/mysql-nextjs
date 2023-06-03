import  HeaderUser from "../../components/user/HeaderUser";
import FooterOP from "@/components/FooterOP";
import { Spacer, Text } from "@nextui-org/react";

export default function StaffUser() {

    return (
    <>
      <HeaderUser/>
      <Spacer x={2} />
      <Spacer y={1} />
      
     <Text size="$2xl" align="left">  При избор на потребители:
     </Text>
     <Text size="$2xl" align="left">  имате достъп до списък на потребители,
     </Text>
     <Text size="$2xl" align="left">  редактиране, изтриване и добавяне на потребители.
     </Text>

     <Spacer y={2} />
     <Text size="$2xl" align="left">  При избор на роли:
     </Text>
     <Text size="$2xl" align="left">  имате достъп до списък на роли,
     </Text>
     <Text size="$2xl" align="left">  редактиране, изтриване и добавяне на роли.
     </Text>
     <Spacer y={4} />


     <FooterOP/>
     
   

    </>
    );
}