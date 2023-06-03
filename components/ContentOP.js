import { Card, Col, Row, Button, Text, Container, Spacer} from "@nextui-org/react";
import { Box } from "./Box.js"
import { Backpic } from "./Backpic.js"
import { Backpictwo } from "./Backpictwo.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./slideshow/Slider.js";
import Slidertwo from "./slideshow/Slidertwo.js";
import styles from "../styles/Contentop.module.css"



export const Content = () => (
  <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
   <Container>
    <Row>

    <Col>
    <Slider/>
    </Col>
    <Spacer x={1} />
    <Col>
    <Slidertwo/>
    </Col>

    </Row>
    </Container>
    <Backpic/>
    

    <Text h2>УИНГ ЕКСПРЕС
   </Text>
    <Text size="$lg">
    Основна дейност на "Уинг Експрес" е осъществяване на куриерски услуги на територията на Република България.
 Куриерските услуги осигуряват приемане, обработка, пренасяне и доставка на документи и стоки в най-кратки срокове.
 Притежава удостоверение от Комисията за регулиране на съобщенията за извършване на неуниверсални пощенски услуги.
  "Уинг Експрес" ЕООД разполага със собствен автопарк от над сто и петдесет автомобила от всички категории, като основните инвестиции на фирмата са насочени към постоянното му обновяване и разширяване,с цел подобряване качеството на предлаганите услуги.
    </Text>
    <Spacer y={1} />

  
   
    
    <p className={styles.boxshadow}></p>

    <Container gap={2}>
  

      <Row gap={1}>
        <Col >
        <Text size="$lg">
За връзка с нас: <br/>
GSM: 07007  77228 - за справки и допълнителна информация за международни пратки.<br/>
GSM: 07007 77882 - за абонати на фиксирани мрежи на цената на един градски разговор.<br/>
GSM: 0877227722 - запитвания за оферти, сключване на договори<br/> за дългосрочно обслужване.<br/><Spacer x={2} />
e-mail:  wingexpress@wing.express.com
</Text>


        </Col>
        <Text size="$lg">
        Обратна връзка, препоръки и рекламации:<br/>
        wingexpress@wing.express.com<br/>

        <Spacer y={1} />
        Сигнали и запитвания към отдел Сигурност:
        security.wingexpress@wing.express.com<br/>

        </Text>
        </Row>
        
        </Container>

        <p className={styles.boxshadow}></p>

  </Box>

);