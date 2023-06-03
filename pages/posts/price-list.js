import Link from 'next/link';
import { Layout } from "../../components/LayoutOP.js";
import  PrList from "../../components/PrList.js";
import { Card, Col, Row, Button, Text, Container, Spacer, Collapse} from "@nextui-org/react";

export default function PriceList() {
   
  return (
    <>
      <Layout>
        <PrList/>

      <Collapse.Group>
     <Text> 
      Видове куриерски пратки:<br/>
      </Text>

      <Collapse title="1.Писма">
      <Text> 
        Писма - Всички видове дакументални пратки и писма с тегло до 1кг.<br/>
      </Text>
      </Collapse>


      <Collapse title="2.Колетни пратки">
      <Text> 
      Колетни пратки - Колетни пратки с размери до 90 см x 90 см x 90 см и тегло до 50кг.<br/>
      </Text>
      </Collapse>

      <Collapse title="3.Палетни пратки">
      <Text> 
      Палетни пратки - Пратки поставени върху палет с размери ширина 80 см х дължина 120 см х височина 180 см и тегло до 1000 кг.<br/>
      </Text>
      </Collapse>

      <Collapse title="4.Непалетизирана пратка">
      <Text> 
      Непалетизирана пратка - Пратка с повече от една част с тегло от 50 до 1000 кг.Всяка част от пратката може да бъде с максимални размери 90 х 90 х 90 см.<br/>
      </Text>
      </Collapse>
    
     </Collapse.Group>

        <h5>
          <Link href="/">Обратно в начало</Link>
        </h5>
      </Layout>
    </>
  );
}