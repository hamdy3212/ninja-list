import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae
          amet quis facilis? Illum non ut aliquid similique facilis autem
          voluptate, ad soluta beatae qui exercitationem consequuntur quibusdam
          nihil unde!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eos,
          reprehenderit eveniet velit, aut aspernatur voluptates repellat error
          laudantium quisquam quos et at ut unde libero illo facilis totam
          voluptate.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>see ninja listing</a>
        </Link>
      </div>
    </>
  );
}
