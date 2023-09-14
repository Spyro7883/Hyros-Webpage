"use client";
import Header from "./components/Header";
import ClientsIcon from "./components/ClientsIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Image from "next/image";
import styles from "./styles/home.module.scss";
import { useState, useEffect } from "react";
import { businessList, adSpendCounter, boxTitle, twitterArray } from "./utils";
import Title from "./components/Title";
import BusinessType from "./components/BusinessType";
import Review from "./components/Review";
import Counter from "./components/Counter";
import Testimonials from "./components/Testimonials";

export default function Home() {
  const [adValue, setAdValue] = useState(0);

  const sliderSettings = {
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 4,
    draggable: true,
    swipeToSlide: true,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdValue((prevValue) => (prevValue + 1) % adSpendCounter.length);
    }, 1000);
    return () => clearTimeout(timer);
  }, [adValue]);

  return (
    <>
      <Header />
      <main className={`${styles.page_layout} d-flex clmn-dir`}>
        <Title />
        <BusinessType businessList={businessList} />
        <Review adSpendCounter={adSpendCounter} adValue={adValue} />
        <Counter boxTitle={boxTitle} />
        <Testimonials />
        <section className={`${styles.clients}`} aria-label="Clients List">
          <h5 className={`d-flex text-center`}>USED BY:</h5>
          <ClientsIcon
            logos={`${styles.clients_logo} d-flex text-center`}
            gridContainer={styles.logos_container}
          />
        </section>
        <section className={`${styles.carousell}`} aria-label="Carousel">
          <h6 className={`${styles.clients_text_two} d-flex text-center`}>
            Verified Across Thousands of Businesses
          </h6>
          <Slider {...sliderSettings}>
            {twitterArray.map((tweet) => (
              <div
                className={`${styles.carousell_container} clmn-dir`}
                key={tweet.post_title}
              >
                <div className="d-flex">
                  <Image
                    src={`/${tweet.post_profile}`}
                    alt="Picture 2"
                    width={48}
                    height={48}
                    priority
                  />
                  <div className={styles.testimonials_text_wrapper}>
                    <p className={styles.twitter_review_title}>
                      {tweet.post_title}
                    </p>
                    <p className={styles.twitter_review_subtitle}>
                      @{tweet.post_title}
                    </p>
                  </div>
                  <Image
                    src="/twitter.png"
                    alt="Twitter Logo"
                    className={styles.twitter_logo}
                    width={22}
                    height={18}
                    priority
                  />
                </div>
                <p className={styles.twitter_review_subtitle}>
                  {tweet.post_text}
                </p>
                <div className={`${styles.twitter_review_icons} d-flex`}>
                  <Image
                    src="/comment.png"
                    alt="Comment Icon"
                    width={18}
                    height={18}
                    priority
                  />
                  <Image
                    src="/retweet.png"
                    alt="Retweet Icon"
                    width={20}
                    height={15}
                    priority
                  />
                  <Image
                    src="/like.png"
                    alt="Like Icon"
                    width={18}
                    height={17}
                    priority
                  />
                  <Image
                    src="/share.png"
                    alt="Share Icon"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
              </div>
            ))}
          </Slider>
        </section>
        {/* 2nd business model scss */}
        {/* <section
          className={`${styles.second_business_model} center-Oy d-flex clmn-dir`}
          aria-label="Business Lists"
        >
          <p className={styles.features_subtitle}>
            Click To See Features That Apply To YOUR Business Model
          </p>
          {boxTitle.map((box_option) => (
            <a className={styles.menu_box} key={box_option}>
              <div className="text-center">
                <p className={styles.box_title}>{box_option}</p>
                <div className={styles.circle} />
              </div>
              <p className={styles.box_text}>
                The most important tools and features for Info
              </p>
              <div className={`${styles.circle_arrow} text-center`}>
                <Image
                  src="/Logo_Arrow.png"
                  alt="Arrow Icon"
                  className={styles.arrow_icon}
                  width={16}
                  height={14.5}
                  priority
                />
              </div>
            </a>
          ))}
        </section> */}
        <Counter boxTitle={boxTitle} />
      </main>
      <footer className={styles.essentials}>
        <div className={styles.footer_container}>
          <Image
            src="/Logo_Hyros.svg"
            alt="Hyros Logo"
            width={43}
            height={43}
            priority
          />
          <p className={`${styles.footer_title}`}>
            Legendary Tracking And AI Optimization For Ads
          </p>
          <div className={`${styles.footer_container_row} d-flex`}>
            <p className={styles.container_row_title}>Product</p>
            <Image
              src="/Footer_Arrow.svg"
              alt="Arrow"
              width={8}
              height={6}
              priority
            />
          </div>
          <div className={`${styles.footer_container_row} d-flex`}>
            <p className={styles.container_row_title}>Legal</p>
            <Image
              src="/Footer_Arrow.svg"
              alt="Arrow"
              width={8}
              height={6}
              priority
            />
          </div>
          <div className={`${styles.footer_container_row} d-flex`}>
            <p className={styles.container_row_title}>About us</p>
            <Image
              src="/Footer_Arrow.svg"
              alt="Arrow"
              width={8}
              height={6}
              priority
            />
          </div>
          <div className={`${styles.footer_container_row} d-flex`}>
            <p className={styles.container_row_title}>Support</p>
            <Image
              src="/Footer_Arrow.svg"
              alt="Arrow"
              width={8}
              height={6}
              priority
            />
          </div>
          <p className={styles.copyright}>
            © 2022 Hyros INC. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
