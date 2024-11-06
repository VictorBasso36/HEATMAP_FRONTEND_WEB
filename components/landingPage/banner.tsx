import Link from 'next/link';
import { Button } from '../ui/button';
import style from './banner.module.css';

export default function Banner() {
  return (
    <div className={style.mainContent}>
      <section className={style.mainContentContainer}>
        <h1>
          All your business, <br /> expenses in one place.
        </h1>
        <p className={style.mainContentDescription}>
          Your one-stop finance empower platform. Manage all your business
          expenses with our supafast app.{' '}
        </p>

        <div className={style.mainContentButtons}>
          <Link href="/register">
            <Button className="w-[180px]">
              <p style={{ color: 'white' }}>Teste gratuitamente</p>
            </Button>
          </Link>
          <Link href="/auth">
            <Button className="w-[180px]" variant="secondary">
              Login
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
