import React from 'react'
import Link from "next/link"
import { Navbar, Button } from "@nextui-org/react";

export default function HeaderDlvReq () {
    
  return (
  <>
     <h1>
     <a href={"../postdlvreq/deliveryreq"}>Редактиране на заявки</a>
     </h1>

    <Navbar isBordered  shouldHideOnScroll variant="sticky">
        
        <Navbar.Content hideIn="xs" enableCursorHighlight  variant="highlight-rounded">
          <Navbar.Link href={"../deliveryreqs"} >Заявки</Navbar.Link>
          <Navbar.Link href={"../addDeliveryreq"} >Добави заявка</Navbar.Link>
          <Navbar.Link href={"/"} >към Официална страница</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
           <Navbar.Item>
             <Button auto flat as={Link}  href="../login">
               Sign Out
             </Button>
          </Navbar.Item>
        </Navbar.Content>
    </Navbar>
  </>
  );
}