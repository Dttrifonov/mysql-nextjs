import Head from 'next/head'
import styles from '../styles/Home.module.css';
//import Link from 'next/link';
import { Layout } from "../components/LayoutOP.js";
import {Content}  from '../components/ContentOP.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
       <Head>
         <title>Wing Express</title>
         <link rel="icon" href="/favicon.ico" />
       </Head>
       <Layout>
         <Content/>
       </Layout>
    </div>
  )
}