import Link from 'next/link';
import style from './footer.module.css';

export default function Footer() {
  return (
    <footer className={style.main}>
      <div className={style.mainContainer}>
        <section>
          <div className={style.menus}>
            <ul>
              <li>
                <p>
                  <strong>LOGO</strong>
                </p>
              </li>
              <li>
                <p>
                  Data visualization, and expense management for your business.
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  <strong>Product</strong>
                </p>
              </li>
              <li>
                <p>teste</p>
              </li>
              <li>
                <p>teste2</p>
              </li>
              <li>
                <p>teste3</p>
              </li>
            </ul>
          </div>
          <div className={style.policies}>
            <Link href="/PrivacyPolicy">
              <p>
                <strong>Privacy Policy</strong>
              </p>
            </Link>
            <Link href="/PrivacyPolicy">
              <p>
                <strong>Terms & Conditions</strong>
              </p>
            </Link>
            <Link href="/PrivacyPolicy">
              <p>
                <strong>Cookie Policy</strong>
              </p>
            </Link>
          </div>
        </section>
      </div>
      <p style={{ marginTop: '3rem' }}>
        <strong>© Heatmap</strong>
      </p>
    </footer>
  );
}
