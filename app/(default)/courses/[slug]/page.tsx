import { Metadata } from "next";
import { notFound } from "next/navigation";

import CourseEnrollmentGrid from "../CourseEnrollmentGrid";
import { courses, getCourseBySlug } from "../courses-data";

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

const defaultMetadata: Metadata = {
  title: "WEFI Course",
  description: "Discover WEFI live programs designed for lifelong learners.",
};

type CoursePageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return defaultMetadata;
  }

  return {
    title: `${course.title} — WEFI Live Program`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-24 sm:px-6 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-3xl pb-12 text-center">
        <span className="inline-flex items-center gap-3 pb-4 font-medium uppercase tracking-[0.3em] text-indigo-200/70">
          WEFI Live Program
        </span>
        <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
          {course.title}
        </h1>
        <p className="text-lg text-indigo-200/70">{course.description}</p>
      </div>
      <CourseEnrollmentGrid courses={[course]} />
    </div>
  );
}
