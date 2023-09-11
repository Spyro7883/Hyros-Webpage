"use client";
import Header from "./components/Header";
import StarIcon from "./components/StarIcon";
import ClientsIcon from "./components/ClientsIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Image from "next/image";
import styles from "./styles/home.module.scss";
import { useState, useEffect, useRef } from "react";
import { businessList, adSpendCounter, boxTitle, twitterArray } from "./utils";

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
        <section className={styles.title} aria-label="Title section">
          <h1>
            <p className={`${styles.title_ads}`}>Track Ads.</p>
            <p className={`${styles.subtitle_ai}`}>Feed AI.</p>
            <p className={`${styles.ad_roi}`}>
              HYROS AI Print Tracking is proven to increase AD ROI in over 3,000
              businesses
            </p>
          </h1>
        </section>
        <section
          className={`${styles.business_list} d-flex clmn-dir`}
          aria-label="Select your business type"
        >
          <div className="d-flex center-Oy">
            <Image
              src="/Logo_Business.png"
              alt="Business Logo"
              width={48}
              height={48}
              priority
            />
            <p className={`${styles.business_type}`}>
              Select your business type
            </p>
          </div>
          {businessList.map((business_option) => (
            <a
              href={`/${business_option}`}
              className={`${styles.option_type} d-flex center-Oy`}
              key={business_option}
            >
              <p className={styles.business_type}>{business_option}</p>
              <Image
                src="/Logo_Arrow.png"
                alt="Arrow Icon"
                className={styles.arrow_icon}
                width={16}
                height={16}
                priority
              />
            </a>
          ))}
          <button className={styles.get_demo}>Just Get Me A Demo</button>
        </section>
        <section
          className={styles.trustpilot_review}
          aria-label="TrustPilot Review"
        >
          <p className={styles.message_review_text}>
            "In just 6 months HYROS allowed us to scale our ad spend by 43% for
            Business Mastery and over 100% for Unleash The Power Within."
          </p>
          <p className={styles.message_review_author}>
            — TonyRobbins.com Ad Team
          </p>
          <p className={styles.message_review_author}>
            Excellent 4.8 out of 5
            <StarIcon className={styles.star_icon} />
            Trustpilot
          </p>

          <h2 className={styles.ad_spend_title}>
            3,000+ Businesses Have Used HYROS To Track Over
          </h2>
          <figure className={`${styles.ad_container} d-flex text-center`}>
            <Image
              src="/Hyros_Price_Counter.png"
              alt="Price Counter Background"
              width={415}
              height={96}
              priority
            />

            <figcaption
              className={`${styles.ad_value} d-flex clmn-dir center-Oy`}
            >
              <Image
                src="/Hyros_Green_Polygon.png"
                alt="Green Polygon"
                className={styles.green_polygon}
                width={12}
                height={10}
                priority
              />
              <p>{`$${adSpendCounter[adValue]}`}</p>
            </figcaption>
          </figure>
          <p className={styles.ad_spend_subtitle}>In Ad Spend</p>
        </section>
        <section
          className={`center-Oy d-flex clmn-dir`}
          aria-label="Ad Spend Counter"
        >
          <h3>
            <p className={styles.features}>
              HYROS is{" "}
              <span className={styles.highlight}>the HIGHEST level</span> of AD
              Tracking & AI Optimization for digital businesses
            </p>
            <p className={styles.features_subtitle}>
              Click To See Features That Apply To YOUR Business Model
            </p>
          </h3>
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
        </section>
        <section
          className={`center-Oy d-flex clmn-dir`}
          aria-label="Testimonials"
        >
          <h4 className={styles.testimonials_title}>
            Testimonials from brands you may know
          </h4>
          <div className={styles.testimonials_block}>
            <Image
              src="/Hyros_Quotes.svg"
              alt="Quotes"
              width={26}
              height={24}
              priority
            />
            <p className={styles.testimonials_message}>
              In just 6 months allowed us to scale our ad spend by 43% for
              Business Mastery and over 100% for Unleash The Power Within.{" "}
              <span className={styles.highlight}>
                And I can't say how impressed.
              </span>{" "}
              I am with HYROS's world class team.
            </p>
            <div className="d-flex clmn-dir">
              <Image
                src="/robbins.png"
                alt="Tony Robbins"
                width={57}
                height={57}
                priority
              />
              <div className={styles.testimonials_text_wrapper}>
                <p className={styles.author_review_title}>
                  TONY ROBBINS Ad Team
                </p>
                <p className={styles.author_review_subtitle}>
                  The nation's top life and business strategist.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.testimonials_block}>
            <Image
              src="/Hyros_Quotes.svg"
              alt="Quotes"
              width={26}
              height={24}
              priority
            />
            <p className={styles.testimonials_message}>
              <span className={styles.highlight}>
                Has made such a huge difference in the GC camp.
              </span>{" "}
              Has Helped us really see what’s really going on.
            </p>
            <div className="d-flex clmn-dir">
              <Image
                src="/cardone.png"
                alt="Grant Cardone"
                width={57}
                height={57}
                priority
              />
              <div className={styles.testimonials_text_wrapper}>
                <p className={styles.author_review_title}>
                  GRANT CARDONE Ad Team
                </p>
                <p className={styles.author_review_subtitle}>
                  #1 sales and marketing trainer in the world
                </p>
              </div>
            </div>
          </div>
          <div className={styles.testimonials_block}>
            <Image
              src="/Hyros_Quotes.svg"
              alt="Quotes"
              width={26}
              height={24}
              priority
            />
            <p className={styles.testimonials_message}>
              Everybody who uses it in my mastermind swears by it. The ROI
              increase from increased tracking accurancy outweights the cost.
              It's a simple math decision.
            </p>
            <div className="d-flex clmn-dir">
              <Image
                src="/sam.png"
                alt="Sam Ovens"
                width={57}
                height={57}
                priority
              />
              <div className={styles.testimonials_text_wrapper}>
                <p className={styles.author_review_title}>SAM OVENS</p>
                <p className={styles.author_review_subtitle}>
                  Founder Consulting.com
                </p>
              </div>
            </div>
          </div>
          <div className={styles.testimonials_block}>
            <Image
              src="/Hyros_Quotes.svg"
              alt="Quotes"
              width={26}
              height={24}
              priority
            />
            <p className={styles.testimonials_message}>
              With HYROS, I can see exactly where my sales are coming from and
              we are already 300% more profitable within 72 hours of using the
              software.
            </p>
            <div className="d-flex clmn-dir">
              <Image
                src="/dan.png"
                alt="Dan Henry"
                width={57}
                height={57}
                priority
              />
              <div className={styles.testimonials_text_wrapper}>
                <p className={styles.author_review_title}>DAN HENRY</p>
                <p className={styles.author_review_subtitle}>
                  Founder of GetClients.com and Closedeals.com
                </p>
              </div>
            </div>
          </div>
        </section>
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
        <section
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
        </section>
      </main>
      <footer className={styles.essentials}>
        <div className={styles.footer_container}>
          <Image
            src="/Logo_Hyros.png"
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
