import styles from './newsContent.module.css';
import { Link } from 'react-router-dom';


function NewsContent() {
    return (
        <div>
            {/* 網頁路徑 */}
            <div>

            </div>

            {/* 主要內容 */}
            <div className={styles.content}>
                <h2 className={styles.title1}>How to Manifest Your 2023 Goals Using Nail Polish Colors</h2>
                <h5 className={styles.title2}>Good nails, good vibes.</h5>
                <div className={styles.title3}>
                <h5  className={styles.title31}>By Danielle Sinay</h5>
                <h5  className={styles.title32}>January 4, 2023</h5>
                </div>
                

                <img className={styles.news_img} src='/images/img_news.svg' />
                <div className={styles.text_box}>
                <h3 className={styles.text1}>What is manifestation?</h3>
                <h5 className={styles.text2}>Manifesting is the act of visualizing what you want to happen in real life, like getting into your dream graduate program, negotiating a higher salary, or meeting your soulmate (Megan Fox insists she manifested her fiancé). Imagining your ideal future as real makes your goals feel closer and more attainable, which, in theory, inspires you to take action to achieve them.
                    “Manifestation is the purpose of thinking thoughts that you want to attain in real life. If thinking can make you a believer, then anything can happen—including your dreams,” Lisa Stardust, astrologer and writer of The Love Deck, explains. That said, Stardust adds that many people don’t realize that the simple act of thinking something doesn’t necessarily make it come true. “For instance, you have to do the daily work needed. Many people meditate on their aspirations twice a day for 30 minutes, or they journal their goals daily to mark progress, while some create a vision board to ensure they are always looking at their hopes.”
                </h5>

                <h3 className={styles.text1}>How does color tie into manifestation?</h3>
                <h5 className={styles.text2}>“Every color holds a vibrational energy that can enhance our intentions,” Sarah Potter, a tarot reader and psychic medium, tells Glamour. “When we use color consciously, we can manifest our desires, shift how we feel, and change the energy. We all relate to color; we all know which colors we live and which ones we repel. This is reflective of the energy we are working with and what we need to feel balanced.”
                    There is also a color for every intention, she adds. Red, for example, is associated with confidence, while tangerine orange boosts creativity and inspiration. Thus, painting your nails specific colors helps you harness that energy, while seeing those colors every day can impact your outlook—regardless of whether or not you even believe in manifestation.
                </h5>
                
                </div>
                
            </div>
        </div>

    );
}

export default NewsContent;