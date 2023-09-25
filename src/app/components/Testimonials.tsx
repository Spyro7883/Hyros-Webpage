import styles from "../styles/testimonials.module.scss";
import Image from "next/image";
import type { TestimonialPost } from "../utils";
import useWindowWidth from "../hooks/useWindow";

type TestimonialsProps = {
    testimonials: TestimonialPost[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    const usersWidth = useWindowWidth() || 0;
    return (
        <>
            <section
                className={styles.container}
                aria-label="Testimonials"
            >
                <h4 className={styles.title}>
                    Testimonials from brands you may know
                </h4>
                <div className={styles.group}>
                    {testimonials.map((post, id) => (
                        <div className={styles.content} key={id}>
                            {usersWidth >= 287 ?
                                <Image
                                    src="/Hyros_Quotes.svg"
                                    alt="Quotes"
                                    width={26}
                                    height={24}
                                    priority
                                /> : ""}
                            <p className={styles.message}>
                                {post.author_message.map((message, message_id) => {
                                    if (typeof message === 'string') {
                                        return <span key={message_id}>{message}</span>;
                                    }
                                    return <span key={message_id} className={styles[message.className]}>{message.content}</span>;
                                })}
                            </p>
                            <div className={styles.writer}>
                                {usersWidth >= 287 ?
                                    <Image
                                        src={`/${post.author_profile}`}
                                        alt={post.author_name}
                                        width={57}
                                        height={57}
                                        priority
                                    /> : ""}
                                <div className={styles.wrapper}>
                                    <p className={styles.author}>
                                        {post.author_name}
                                    </p>
                                    <p className={styles.description}>
                                        {post.author_description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>)
}

export default Testimonials;