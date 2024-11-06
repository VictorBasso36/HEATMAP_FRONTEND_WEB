import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/landingPage/footer';
import Banner from '@/components/landingPage/banner';
export default function page() {
  return (
    <>
      <Header />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  );
}
