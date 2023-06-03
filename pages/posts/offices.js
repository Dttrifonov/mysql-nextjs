import Link from 'next/link';
import { Layout } from "../../components/LayoutOP.js";
import Mymap from "../../components/Mymap.js";


export default function Offices() {
  return (
    <>
      <Layout>
        <h2>Офиси</h2>
        <Mymap/>
        <h5>
           <Link href="/">Обратно в начало</Link>
        </h5>
      </Layout>
    </>
  );
}