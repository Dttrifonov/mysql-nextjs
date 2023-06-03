import Link from 'next/link';
import { Layout } from "../../components/LayoutOP.js";
import AddDlvreqCust from "../../components/AddDlvreqCust.js";
import styles from "../../styles/AddDlvreqCust.module.css";
import React from "react";


export default function Deliveryreq() {
  
  return (
    <>
      <Layout>
        <h2 className={styles.h1} >Заяви куриер</h2>
        <h5 className={styles.h1} >попълни формуляра или позвъни на телефон 0877227722</h5>

        <div>
          <AddDlvreqCust/>
        </div>

        <h5>
          <Link href="/">Обратно в начало</Link>
        </h5>
      </Layout>
    </>
  );
}