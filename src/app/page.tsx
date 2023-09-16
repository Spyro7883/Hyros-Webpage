"use client";
import { useState, useEffect } from "react";
import { businessList, adSpendCounter, boxTitle, testimonials, twitterContent, } from "./utils";
import styles from "./styles/home.module.scss";
import Header from "./components/Header";
import Title from "./components/Title";
import BusinessType from "./components/BusinessType";
import Review from "./components/Review";
import BusinessModel from "./components/BusinessModel";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

export default function Home() {
  const [adValue, setAdValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdValue((prevValue) => (prevValue + 1) % adSpendCounter.length);
    }, 1000);
    return () => clearTimeout(timer);
  }, [adValue]);

  return (
    <>
      <Header />
      <main className={styles.page_layout}>
        <Title />
        <BusinessType businessList={businessList} />
        <Review adSpendCounter={adSpendCounter} adValue={adValue} />
        <BusinessModel boxTitle={boxTitle} firstBusinessModel={true} />
        <Testimonials testimonials={testimonials} />
        <Clients />
        <Carousel twitterContent={twitterContent} />
        <BusinessModel boxTitle={boxTitle} firstBusinessModel={false} />
      </main>
      <Footer />
    </>
  );
}
