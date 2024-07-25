import { Button } from '../ui/button';
import style from './banner.module.css';

export default function Banner() {
  return (
    <main className={style.mainContent}>
      <section className={style.mainContentContainer}>
        <h1>
          All your business, <br /> expenses in one place.
        </h1>
        <p className={style.mainContentDescription}>
          Your one-stop finance empower platform. Manage all your business
          expenses with our supafast app.{' '}
        </p>

        <div className={style.mainContentButtons}>
          <Button className="w-[180px]">
            <p style={{ color: 'white' }}>Teste gratuitamente</p>
          </Button>
          <Button className="w-[180px]" variant="secondary">
            Login
          </Button>
        </div>
      </section>
    </main>
  );
}
