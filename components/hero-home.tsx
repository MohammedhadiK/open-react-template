<<<<<<< HEAD
// Video content removed

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Educational courses running live on WEFI institute
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Explore a wide range of courses and start your learning journey with us today.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Schedule Demo
                  </a>
                </div>
=======
import { GraduationCap } from 'lucide-react';

export default function HeroHome() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 to-indigo-800">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center" data-aos="fade-up">
              <div className="relative rounded-full bg-indigo-700/50 px-4 py-2 text-sm leading-6 text-indigo-200 ring-1 ring-white/10 hover:ring-white/20">
                <span className="flex items-center gap-x-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>Empowering the next generation of leaders</span>
                </span>
>>>>>>> 2c63acc4a1708cdd751b9653573221932861ddcd
              </div>
            </div>
            <h1
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Empowering Education, Enriching Futures
            </h1>
            <p
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              WEFI Institute is dedicated to providing quality education and skill development 
              programs to shape the leaders of tomorrow.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6" data-aos="fade-up" data-aos-delay={300}>
              <a
                href="#programs"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Programs
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-200"
              >
                Contact us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
<<<<<<< HEAD
=======
        </div>
        <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[40rem] w-[40rem] rounded-full bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 blur-3xl" />
>>>>>>> 2c63acc4a1708cdd751b9653573221932861ddcd
        </div>
      </div>
    </section>
  );
}
