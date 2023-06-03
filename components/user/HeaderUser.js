import React from 'react'
import Link from "next/link"
//import styles from '../../styles/Header.module.css'
import { Navbar, Button, Text } from "@nextui-org/react";

export default function HeaderUser () {
 return (
 <>

<h2>
     <a href={"../../postuser/staffuser"}>Администриране на потребители и роли</a>
</h2>
<Navbar isBordered  shouldHideOnScroll variant="sticky">
        
    <Navbar.Content hideIn="xs"  enableCursorHighlight variant="highlight-rounded">
        <Navbar.Link href={"../users"} >Потребители</Navbar.Link>
        <Navbar.Link href={"../addUser"} >Добави потребител</Navbar.Link>
        <Navbar.Link href={"../roles"} >Роли</Navbar.Link>
        <Navbar.Link href={"../addRole"} >Добави роля</Navbar.Link>

    </Navbar.Content>
    
    <Navbar.Content hideIn="xs"  enableCursorHighlight variant="highlight-rounded">        
        <Navbar.Link href={"/"} >Официална страница</Navbar.Link>
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