import { Card, Col, Text } from "@nextui-org/react";

export const Backpic = () => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="black">
        Wing Express
        </Text>
        <Text h4 color="black">
          Delivery with care
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="../truck4.png"
      objectFit="contain"
      width="100%"
      height={270}
      alt="Card image background"
    />
  </Card>
)