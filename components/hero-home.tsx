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
        </div>
        <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[40rem] w-[40rem] rounded-full bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
