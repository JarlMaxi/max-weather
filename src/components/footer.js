import styles from '@/styles/footer.module.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Image src='/images/footer_logo.png' width={100} height={100} />
            <p>Tracking weather in my favorite spots around the world.</p>
            <ul>
                <li><a href='https://github.com/JarlMaxi'>GitHub</a></li>
                <li><a href='https://www.linkedin.com/in/max-arvidsson'>LinkedIn</a></li>
            </ul>
        </div>
    );
}