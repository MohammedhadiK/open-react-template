export const metadata = {
  title: "Courses - Open PRO",
  description: "Discover our live programs designed for hands-on growth.",
};

import Image from "next/image";

import CourseEnrollmentGrid from "./CourseEnrollmentGrid";
import { courses } from "./courses-data";
import PageIllustration from "@/components/page-illustration";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function CoursesPage() {
  return (
    <>
      <PageIllustration />
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-40 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={BlurredShapeGray}
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>
        <div
          className="pointer-events-none absolute bottom-10 left-1/2 -z-10 -translate-x-[120%] opacity-70"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={BlurredShape}
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 md:pb-24 md:pt-36">
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <span className="inline-flex items-center gap-3 pb-4 font-medium uppercase tracking-[0.3em] text-indigo-200/70">
              Live Programs
            </span>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              WEFI live programs for lifelong learners ready to grow.
            </h1>
            <p className="text-lg text-indigo-200/65">
              Learn with experienced educators, engage in collaborative sessions, and apply new skills across disciplines.
            </p>
          </div>
          <CourseEnrollmentGrid courses={courses} showDetailLink />
        </div>
      </section>
    </>
  );
}
