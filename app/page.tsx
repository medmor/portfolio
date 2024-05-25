import {
  Header,
  Hero,
  About,
  Skills,
  Testimonials,
  Projects,
  Contact,
  Footer
} from '@/components/sections';

import Preloader from '@/components/preloader/preloader';


export default function Home() {
  return (
    <>
      <Preloader />
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex flex-col gap-y-48">
          <Hero />
          <About />
          <Projects />
          <Skills />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </main>
      </div>
      {/* <Cursor /> */}
    </>
  );
}
