import styles from "../styles/carousel.module.scss";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import type { TwitterPost } from "../utils";

type CarouselProps = {
    twitterContent: TwitterPost[]
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

const Carousel: React.FC<CarouselProps> = ({ twitterContent }) => {

    return (<>

        <section className={styles.container} aria-label="Carousel">
            <h6 className={styles.title}>
                Verified Across Thousands of Businesses
            </h6>
            <Slider {...sliderSettings}>
                {twitterContent.map((tweet) => (
                    <div
                        className={styles.content}
                        key={tweet.post_title}
                    >
                        <div className={styles.writer}>
                            <Image
                                src={`/${tweet.post_profile}`}
                                alt="Picture 2"
                                width={48}
                                height={48}
                                priority
                            />
                            <div className={styles.wrapper}>
                                <p className={styles.name}>
                                    {tweet.post_title}
                                </p>
                                <p className={styles.username}>
                                    @{tweet.post_title}
                                </p>
                            </div>
                            <Image
                                src="/twitter.png"
                                alt="Twitter Logo"
                                className={styles.twitter}
                                width={22}
                                height={18}
                                priority
                            />
                        </div>
                        <p className={styles.message}>
                            {tweet.post_text}
                        </p>
                        <div className={styles.icons}>
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