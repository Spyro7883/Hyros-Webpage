import styles from "../styles/testimonials.module.scss";
import Image from "next/image";
import type { TestimonialPost } from "../utils";

type TestimonialsProps = {
    testimonials: TestimonialPost[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    return (
        <>
            <section
                className={styles.container}
                aria-label="Testimonials"
            >
                <h4 className={styles.title}>
                    Testimonials from brands you may know
                </h4>
                {testimonials.map((post, id) => (
                    <div className={styles.block} key={id}>
                        <Image
                            src="/Hyros_Quotes.svg"
                            alt="Quotes"
                            width={26}
                            height={24}
                            priority
                        />
                        <p className={styles.testimonials_message}>
                            {post.author_message.map((message, message_id) => {
                                if (typeof message === 'string') {
                                    return <span key={message_id}>{message}</span>;
                                }
                                return <span key={message_id} className={styles[message.className]}>{message.content}</span>;
                            })}
                        </p>
                        <div className={styles.author_block}>
                            <Image
                                src={`/${post.author_profile}`}
                                alt={post.author_name}
                                width={57}
                                height={57}
                                priority
                            />
                            <div className={styles.testimonials_text_wrapper}>
                                <p className={styles.author_review_title}>
                                    {post.author_name}
                                </p>
                                <p className={styles.author_review_subtitle}>
                                    {post.author_description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>)
}

export default Testimonials;