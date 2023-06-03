import styles from "../styles/Officemap.module.css";
import { Collapse, Text, Grid, Container,Row, Col, Spacer } from "@nextui-org/react";
import {Backpictwo} from "./Backpictwo";

export default function Mymap() {
return(
    <Container gap={0}>
      <Row gap={1}>
        <Col >
        <Collapse.Group>
      <Collapse title="Благоевград" >
        <Text >
          Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        <Spacer y={1} />
        8000 Благоевград ул.Цар Борис №64а <br/>
        +359 87 636 101 <br/>
        office email: blagoevgradwings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Бургас">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        8000 Бургас ул.Люляк №23 <br/>
        +359 87 636 102 <br/>
        office email: burgaswings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Варна">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        9000 Варна ул.Пролет №16 <br/>
        +359 87 636 103 <br/>
        office email: varnawings@wing.express.com<br/>
        </Text>
        </Collapse>
        <Collapse title="Варна2">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        9000 Варна ул.Васил Левски №7 <br/>
        +359 87 636 104 <br/>
        office email: varna2wings@wing.express.com<br/>
        </Text>
        </Collapse>

      <Collapse title="Велико Търново">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        5000 Велико Търново ул.Цар Иван 5 <br/>
        +359 87 636 105 <br/>
        office email: velikoturnovowings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Велико Търново2">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        5000 Велико Търново ул.Цар Асен 4 <br/>
        +359 87 636 106 <br/>
        office email: velikoturnovo2wings@wing.express.com<br/>
        </Text>
        </Collapse>
      <Collapse title="Видин">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        3700 Видин ул.Извора 54 <br/>
        +359 87 636 107 <br/>
        office email: vidinwings@wing.express.com<br/>
        </Text>
      </Collapse>
      
      <Collapse title="Враца">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        3000 Враца ул.Освобождение 39 <br/>
        +359 87 636 108 <br/>
        office email: vratsawings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Добрич">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        9300 Добрич ул.Първи Май 64 <br/>
        +359 87 636 109 <br/>
        office email: dobrichwings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Кърджали">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        6600 Кърджали ул.Ломско Шосе 44 <br/>
        +359 87 636 110 <br/>
        office email: kurdjaliwings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Пазарджик">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        4400 Пазарджик бул.България 23 <br/>
        +359 87 636 111 <br/>
        office email:pazardjikwings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Перник">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        2300 Перник бул.Освобождение 13 <br/>
        +359 87 636 112 <br/>
        office email:pernikkwings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Перник2">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        2300 Перник бул.Мария Луиза 78 <br/>
        +359 87 636 117 <br/>
        office email:pernik2wings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Плевен">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        5800 Плевен ул.Гордьо Войвода 32 <br/>
        +359 87 636 113 <br/>
        office email:plevenwings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Пловдив">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        4000 Пловдив ул.Самара 3 <br/>
        +359 87 636 114 <br/>
        office email:plovdivwings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Асеновград">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        4230 Асеновград ул.Каприз 39 <br/>
        +359 87 636 115 <br/>
        office email:asenovgradwings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Русе">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        7000 Русе ул.Малина 11 <br/>
        +359 87 636 116 <br/>
        office email:rusewings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Сливен">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        8800 Сливен ул.Кокиче 31 <br/>
        +359 87 636 118 <br/>
        office email:slivenwings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="София">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        1000 София бул.Симеоновско Шосе 22 <br/>
        +359 87 636 119 <br/>
        office email:sofiawings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="София2">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        1000 София бул.Дружба 34 <br/>
        +359 87 636 120 <br/>
        office email:sofia2wings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="София3">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        1000 София бул.Ломско шосе 43 <br/>
        +359 87 636 121 <br/>
        office email:sofia3wings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Стара Загора">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        6000 Стара Загора бул.Освобождение 46 <br/>
        +359 87 636 122 <br/>
        office email:starazagorawings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Димитровград">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        6400 Димитровград бул.България 34 <br/>
        +359 87 636 123 <br/>
        office email:dimitrovgradwings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Свиленград">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        6500 Свиленград ул.Цар Иван 15 <br/>
        +359 87 636 124 <br/>
        office email:svilengradwings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Хасково">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        6300 Хасково ул.Горна 32 <br/>
        +359 87 636 125 <br/>
        office email:haskovowings@wing.express.com<br/>
        </Text>
      </Collapse>
      <Collapse title="Шумен">
        <Text>
        Работно време:<br/>
        Понеделник - Петък 09:00 - 18:30<br/>
        Събота - 9:00 - 13:00<br/>
        Неделя Почивен Ден <br/>     
        <Spacer y={1} />
        Предлагани услуги:<br/>
        1.Куриерски услуги<br/>
        2.Пощенски услуги<br/>
        2.Карго услуги<br/>
        <Spacer y={1} />
        9700 Шумен ул.Лора 87 <br/>
        +359 87 636 126 <br/>
        office email:shumenwings@wing.express.com<br/>
        </Text>
      </Collapse>
    </Collapse.Group>
        </Col>

        <Col >
        <iframe src="https://www.google.com/maps/d/embed?mid=1yQ2eo8FiNyZgi4a5drZeNLL2uSBCniQ&ehbc=2E312F" width="640" height="480"></iframe>
        <Spacer y={1} />
        <Backpictwo/>
        </Col>
      
      </Row>
      </Container>
    
 );

}