import React from "react";
import { Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/Slidertwo.module.css";

const Slider = () => {
    return(
        <div className={styles.container}> 
        <Carousel variant="dark" className={styles.slider}>
        <Carousel.Item className={styles.sliderItem}>
          <img
            className="d-block w-100"
            id = "bag"
            src="../bag5.png"
            alt="First slide"
          />
          <Carousel.Caption className={styles.sliderTitle}>
            <h3 className={styles.sliderTitleh3}>Екологични торбички</h3>
            <p className={styles.sliderTitlep}>100% разградима опаковка</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.sliderItem}>
          <img
            className="d-block w-100"
            src="../ecobag4.png"
            alt="Second slide"
          />
  
          <Carousel.Caption className={styles.sliderTitle}>
            <h3 className={styles.sliderTitleh3}>100% Екологични опаковки.</h3>
            <p className={styles.sliderTitlep}>Закупете в нашите офиси.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.sliderItem}>
          <img
            className="d-block w-100"
            src="pallet4.png"
            alt="Third slide"
          />
  
          <Carousel.Caption className={styles.sliderTitle}>
            <h3 className={styles.sliderTitleh3}>Палетни пратки</h3>
            <p className={styles.sliderTitlep2}>Вече от и до адрес.
            
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}
export default Slider