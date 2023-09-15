import styles from "../styles/carousel.module.scss";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

type CarouselProps = {
    twitterArray: any[]
}

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

const Carousel: React.FC<CarouselProps> = ({ twitterArray }) => {

    return (<>

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
    </>)
}

export default Carousel