import React from "react";
import {Input, Table, Spacer, Dropdown, Radio, Container,Row, Col, Button, Link, Text } from "@nextui-org/react";


export default function PrList() {
  const columns = [
    {
      key: "from",
      label: "От къде",
    },
    {
      key: "to",
      label: "До къде",
    },
    {
      key: "letter",
      label: "Писмо",
    },

    {
      key: "parcel",
      label: "Колет",
    },
    
    {
      key: "pallet",
      label: "Палет",
    },
    {
      key: "unpalletized",
      label: "Непалетизирана пратка",
    },

  ];
  const rows = [
    {
      key: "1",
      from: "Офис",
      to: "Офис",
      letter: "5,50 лв.",
      parcel: "7,30 лв.",
      pallet: "15,20 лв.",
      unpalletized: "20,10 лв",
    },
    {
      key: "2",
      from: "Адрес на подател",
      to: "Офис",
      letter: "8,50 лв.",
      parcel: "10,30 лв.",
      pallet: "18,20 лв.",
      unpalletized: "30,10 лв.",
    },
    {
      key: "3",
      from: "Адрес на подател",
      to: "Адрес на получател",
      letter: "11,50 лв.",
      parcel: "13,30 лв.",
      pallet: "21,20 лв",
      unpalletized: "35,10 лв",
    },
    {
      key: "4",
      from: "Офис",
      to: "Адрес на получател",
      letter: "8,50 лв.",
      parcel: "10,30 лв.",
      pallet: "18,20 лв.",
      unpalletized: "30,10 лв.",
    },
  ];
  
  const [selected, setSelected] = React.useState(new Set(["писмо"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const [checked, setChecked] = React.useState('');
  const [checked2, setChecked2] = React.useState('');
  const [checked3, setChecked3] = React.useState('');

  return (
      <>
      <Spacer y={1} />
      <Text size="$2xl">
       Ценова листа
    </Text>
       <Table
      aria-label="Table with price list"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
       
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    <Spacer y={2} />
     

      </>
  );
}
