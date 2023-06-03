import { Card, Col, Row, Button, Text, Container} from "@nextui-org/react";

export const Backpictwo = () => (

    <Container gap={0}>
      
       

  <Card css={{ w: "100%", h: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Text size={12} weight="bold" transform="uppercase" color="black">
          
        </Text>
  
    
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="../worktime2.png"
        objectFit="fill"
        width="100%"
        height="100%"
        alt="Wing Express"
      />
    </Card.Body>
    
     
  </Card>
       




</Container>
  );