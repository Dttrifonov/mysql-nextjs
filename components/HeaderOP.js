import React from 'react'
import Link from "next/link"
import { Input, Grid, Button, Text, Spacer } from "@nextui-org/react";

export default function HeaderOP () {
return (
<>
<Grid.Container gap={1} justify="left">
<Text  h2>Уинг Експрес</Text>
</Grid.Container>

<Grid.Container gap={1} justify="right">
 <Text  h6>За контакти: e-mail: wingexpress@wing.express.com </Text>
 <Spacer y={1} />
 <Text  h6>GSM: 0877227722</Text>
 <Spacer y={1} />
</Grid.Container>

</>
)
}