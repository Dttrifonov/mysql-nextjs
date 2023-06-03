import { Box } from "./Box.js";
import { Navbar, Link, Text } from "@nextui-org/react";
import FooterOP  from "./FooterOP.js";
import HeaderOP from "./HeaderOP.js";
import Logo from "./Logo.js";



export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"     
    }}
  >
   <HeaderOP/>
       <Navbar isBordered variant="floating">
        
        <Navbar.Content hideIn="xs">
         <Navbar.Brand>
          <Logo />
           <Text b color="inherit" hidein="xs">
            Wing
           </Text>
         </Navbar.Brand>
        </Navbar.Content>

        <Navbar.Content>
        <Navbar.Toggle showIn="xs" />
        <Text b color="inherit" showIn="xs" alight="left">
            Меню
        </Text>
        </Navbar.Content>
         <Navbar.Collapse>
           <Navbar.CollapseItem
            key={1}
            activeColor="primary"
           >
            <Link css={{
              minWidth: "100%",
              }}
              href="/">
              Начало
             </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem
             key={2}
             activeColor="primary"
           >
             <Link css={{
              minWidth: "100%",
               }}
               href="/posts/deliveryreq"
             >
             Заяви куриер
             </Link>
             </Navbar.CollapseItem>

             <Navbar.CollapseItem
              key={3}
              activeColor="primary"
             >
              <Link css={{
               minWidth: "100%",
               }}
               href="/posts/price-list">
               Ценова листа
              </Link>
             </Navbar.CollapseItem>
        
              <Navbar.CollapseItem
               key={4}
               activeColor="primary"
              >
              <Link css={{
               minWidth: "100%",
              }}
               href="/posts/offices">
                Офиси
              </Link>
              </Navbar.CollapseItem>

              <Navbar.CollapseItem
               key={5}
               activeColor="primary"
              >
                <Link css={{
                 minWidth: "100%",
                }}
                href="/posts/faq">
                Често задавани въпроси
                </Link>
               </Navbar.CollapseItem>
         </Navbar.Collapse>
 
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="/">Начало</Navbar.Link>
          <Navbar.Link href="/posts/deliveryreq">Заяви куриер</Navbar.Link>
          <Navbar.Link href="/posts/price-list">Ценова листа</Navbar.Link>
          <Navbar.Link href="/posts/offices">Офиси</Navbar.Link>
          <Navbar.Link href="/posts/faq">Често задавани въпроси</Navbar.Link>
        </Navbar.Content>

      </Navbar>
     {children}
      <FooterOP/>
  </Box>
 );
 

