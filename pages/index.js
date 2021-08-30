import Footer from "../component/Footer";
import Header from "../component/Header";
import Layout from "../component/Layout";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from 'next/image'

export default function Home() {
  return (
      <Layout pageTitle="Homepage">
        <Image src="/profile.jpg" width={200} height={200} alt="profile"/>
        <h1 className={styles["title-homepage"]}>Welcome Alex</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Image src="/wordcloud.JPG" width={200} height={200} alt="profile"/>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </Layout>
  );
}
