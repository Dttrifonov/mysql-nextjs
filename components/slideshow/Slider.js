import React from "react";
import { Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/Slider.module.css";

const Slider = () => {
    return(
        <div className={styles.container}> 
        <Carousel variant="dark" className={styles.slider}>
        <Carousel.Item className={styles.sliderItem}>
          <img
            className="d-block w-100"
            src="../deliveryinperson3.jpg"
            alt="First slide"
          />
          <Carousel.Caption className={styles.sliderTitle}>
            <h3 className={styles.sliderTitleh3}>Доставки до адрес</h3>
            <p className={styles.sliderTitlep}>До вашата входна врата</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.sliderItem}>
          <img
            className="d-block w-100"
            src="../pos5.png"
            alt="Second slide"
          />
  
          <Carousel.Caption className={styles.sliderTitle}>
            <h3 className={styles.sliderTitleh3}>Платете с карта</h3>
            <p className={styles.sliderTitlep}>Плащате удобно и сигурно чрез ПОС.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.sliderItem}>
          <img 
            className="d-block w-100"
            src="sendpackage3.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption className={styles.sliderTitle}>
            <h3 className={styles.sliderTitleh3}>Пратки от адрес</h3>
            <p className={styles.sliderTitlep2}>Изпращайте пратки от входната си врата..
            
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}
export default Slider