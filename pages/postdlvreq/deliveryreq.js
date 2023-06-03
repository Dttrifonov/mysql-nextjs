import FooterOP from "@/components/FooterOP";
import  HeaderDlvReq from "../../components/deliveryreq/HeaderDlvreq";
import { Spacer, Text } from "@nextui-org/react";

export default function DeliveryRequest() {

    return (
    <>
       <HeaderDlvReq/>
       <Spacer x={2} />
      <Spacer y={1} />
      
     <Text size="$2xl" align="left">  При избор на Заявки:
     </Text>
     <Text size="$2xl" align="left">  имате достъп до,
     </Text>
     <Text size="$2xl" align="left">  списък на заявки,
     </Text>

     <Text size="$2xl" align="left">  редактиране, изтриване  
     </Text>
     <Text size="$2xl" align="left">  и добавяне на заявки.
     </Text>
     <Spacer y={7} />


       <FooterOP/>
    </>
    );
}