export const metadata = {
  title: "Courses - Open PRO",
  description: "Discover our live programs designed for hands-on growth.",
};

import Image from "next/image";

import CourseEnrollmentGrid from "./CourseEnrollmentGrid";
import PageIllustration from "@/components/page-illustration";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

const courses = [
  {
    title: "Full-Stack Development Live Bootcamp",
    description:
      "Master modern web development with real-world projects covering React, Node.js, and cloud deployment.",
    startDate: "Begins Nov 18, 2025",
    schedule: "Mon · Wed · Fri · 7:00 – 9:30 PM IST",
    duration: "12 weeks",
    mode: "Live Online",
    link: "#",
    mentors: ["Ananya Deshpande", "Rahul Mehta"],
    payment: {
      amount: "₹24,999",
    },
  },
  {
    title: "UI/UX Design Intensive",
    description:
      "Collaborate in live design sprints, build design systems, and learn user research fundamentals.",
    startDate: "Begins Dec 02, 2025",
    schedule: "Tue · Thu · 6:30 – 9:00 PM IST",
    duration: "8 weeks",
    mode: "Live Online",
    link: "#",
    mentors: ["Meera Sethi", "Arjun Kulkarni"],
    payment: {
      amount: "₹18,499",
    },
  },
  {
    title: "Data Science with Python Live Lab",
    description:
      "Work with streaming datasets, build predictive models, and deploy insights with dashboards.",
    startDate: "Begins Jan 06, 2026",
    schedule: "Sat · Sun · 10:00 AM – 1:30 PM IST",
    duration: "10 weeks",
    mode: "Hybrid · Bengaluru Campus",
    link: "#",
    mentors: ["Ishaan Verma", "Dr. Kavya Rao"],
    payment: {
      amount: "₹22,999",
    },
  },
  {
    title: "AI Product Strategy Studio",
    description:
      "Learn to ship AI-powered features responsibly with guidance from product and ML mentors.",
    startDate: "Begins Jan 20, 2026",
    schedule: "Wed · Fri · 7:30 – 9:30 PM IST",
    duration: "6 weeks",
    mode: "Live Online",
    link: "#",
    mentors: ["Sana Qureshi", "Matthews Joseph"],
    payment: {
      amount: "₹19,999",
    },
  },
  {
    title: "ParentU: The Parenting Toolkit Workshop",
    description:
      "Eight-day live coaching circle supporting parents with compassionate routines and purposeful family practices.",
    startDate: "Begins Nov 17, 2025",
    schedule: "Daily · 8:30 – 9:30 PM IST",
    duration: "8 days",
    mode: "Live on Zoom",
    link: "tel:+919633687336",
    mentors: ["Anas Amani Pushpagiri", "Dr. Noorudheen Razi"],
    payment: {
      amount: "₹2,499",
    },
  },
];

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
          <CourseEnrollmentGrid courses={courses} />
        </div>
      </section>
    </>
  );
}
