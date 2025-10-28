'use client';

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";

import { Course } from "./courses-data";
import WefiUpiQrCode from "@/public/images/wefi_upi_qr_code.jpeg";

type CourseEnrollmentGridProps = {
  courses: Course[];
  showDetailLink?: boolean;
};

type CourseFormValues = {
  name: string;
  address: string;
  mobile: string;
  whatsapp: string;
  email: string;
  screenshot: File | null;
};

const GLOBAL_UPI_ID = "wisdomedu123@fbl";

const createInitialFormState = (): CourseFormValues => ({
  name: "",
  address: "",
  mobile: "",
  whatsapp: "",
  email: "",
  screenshot: null,
});

export default function CourseEnrollmentGrid({
  courses,
  showDetailLink = false,
}: CourseEnrollmentGridProps) {
  const [activeCourse, setActiveCourse] = useState<string | null>(null);
  const [formSteps, setFormSteps] = useState<Record<string, number>>(() =>
    Object.fromEntries(courses.map((course) => [course.title, 1]))
  );
  const [formValues, setFormValues] = useState<Record<string, CourseFormValues>>(() =>
    Object.fromEntries(courses.map((course) => [course.title, createInitialFormState()]))
  );
  const [submittedCourse, setSubmittedCourse] = useState<string | null>(null);
  const [copiedCourse, setCopiedCourse] = useState<string | null>(null);

  const stepLabels = useMemo(
    () => ({ 1: "Learner details", 2: "Payment" }) as Record<number, string>,
    []
  );

  const handleOpenForm = (courseTitle: string) => {
    setSubmittedCourse(null);
    setActiveCourse((current) => (current === courseTitle ? null : courseTitle));
    setFormSteps((prev) => ({
      ...prev,
      [courseTitle]: 1,
    }));
  };

  const handleNext = (courseTitle: string) => {
    setFormSteps((prev) => ({
      ...prev,
      [courseTitle]: Math.min(2, (prev[courseTitle] ?? 1) + 1),
    }));
  };

  const handlePrevious = (courseTitle: string) => {
    setFormSteps((prev) => ({
      ...prev,
      [courseTitle]: Math.max(1, (prev[courseTitle] ?? 1) - 1),
    }));
  };

  const handleTextChange = (
    courseTitle: string,
    field: keyof Omit<CourseFormValues, "screenshot">
  ) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setFormValues((prev) => ({
        ...prev,
        [courseTitle]: {
          ...prev[courseTitle],
          [field]: value,
        },
      }));
    };

  const handleFileChange = (courseTitle: string) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] ?? null;
      setFormValues((prev) => ({
        ...prev,
        [courseTitle]: {
          ...prev[courseTitle],
          screenshot: file,
        },
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>, courseTitle: string) => {
    event.preventDefault();
    setSubmittedCourse(courseTitle);
    setActiveCourse(null);
    setFormSteps((prev) => ({
      ...prev,
      [courseTitle]: 1,
    }));
    setFormValues((prev) => ({
      ...prev,
      [courseTitle]: createInitialFormState(),
    }));
  };

  const handleCopyUpi = async (courseTitle: string) => {
    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
      return;
    }

    try {
      await navigator.clipboard.writeText(GLOBAL_UPI_ID);
      setCopiedCourse(courseTitle);
      setTimeout(() => {
        setCopiedCourse((current) => (current === courseTitle ? null : current));
      }, 2000);
    } catch (error) {
      setCopiedCourse(null);
    }
  };

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => {
        const isActive = activeCourse === course.title;
        const currentStep = formSteps[course.title] ?? 1;
        const values = formValues[course.title];

        if (!values) {
          return null;
        }

        return (
          <article
            key={course.title}
            className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.35)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-indigo-400/60 hover:bg-white/10"
            data-aos="fade-up"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-200">
                Live Now
              </div>
              <h2 className="mb-3 font-nacelle text-2xl font-semibold text-gray-100">
                {course.title}
              </h2>
              <p className="mb-6 text-indigo-200/70">{course.description}</p>
            </div>
            <dl className="space-y-3 text-sm text-indigo-100/80">
              <div className="flex items-center justify-between gap-3">
                <dt className="uppercase tracking-[0.2em] text-indigo-200/60">Starts</dt>
                <dd className="font-medium text-gray-100">{course.startDate}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="uppercase tracking-[0.2em] text-indigo-200/60">Schedule</dt>
                <dd className="font-medium text-gray-100">{course.schedule}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="uppercase tracking-[0.2em] text-indigo-200/60">Duration</dt>
                <dd className="font-medium text-gray-100">{course.duration}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="uppercase tracking-[0.2em] text-indigo-200/60">Mode</dt>
                <dd className="font-medium text-gray-100">{course.mode}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="uppercase tracking-[0.2em] text-indigo-200/60">Fee</dt>
                <dd className="font-medium text-gray-100">{course.payment.amount}</dd>
              </div>
            </dl>
            <div className="mt-6 border-t border-white/10 pt-6">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200/70">
                Course Mentor(s)
              </h3>
              <ul className="space-y-2 text-sm text-indigo-100/85">
                {course.mentors.map((mentor) => (
                  <li key={mentor} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-300/80" />
                    <span className="font-medium text-gray-100">{mentor}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={() => handleOpenForm(course.title)}
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500/80 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-400/90"
              >
                {isActive ? "Close form" : "Start enrollment form"}
                <svg
                  className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
            {showDetailLink && (
              <div className="pt-3">
                <Link
                  href={`/courses/${course.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 transition duration-300 hover:text-white"
                >
                  View course details
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            )}
            {submittedCourse === course.title && (
              <p className="pt-4 text-sm font-medium text-emerald-300">
                Enrollment submitted. We will reach out soon with next steps.
              </p>
            )}
            {isActive && (
              <form
                className="mt-6 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                onSubmit={(event) => handleSubmit(event, course.title)}
              >
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-indigo-500/5 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-indigo-200/70">
                  <span>Step {currentStep} of 2</span>
                  <span>{stepLabels[currentStep]}</span>
                </div>
                {currentStep === 1 ? (
                  <div className="space-y-4 text-left">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200/70">
                        Name
                      </label>
                      <input
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-gray-100 placeholder-indigo-200/50 focus:border-indigo-400/60 focus:outline-none focus:ring-0"
                        placeholder="Full name"
                        value={values.name}
                        onChange={handleTextChange(course.title, "name")}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200/70">
                        Address
                      </label>
                      <textarea
                        rows={3}
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-gray-100 placeholder-indigo-200/50 focus:border-indigo-400/60 focus:outline-none focus:ring-0"
                        placeholder="City, Country"
                        value={values.address}
                        onChange={handleTextChange(course.title, "address")}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200/70">
                          Mobile Number
                        </label>
                        <input
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-gray-100 placeholder-indigo-200/50 focus:border-indigo-400/60 focus:outline-none focus:ring-0"
                          placeholder="e.g. +91 90000 00000"
                          value={values.mobile}
                          onChange={handleTextChange(course.title, "mobile")}
                          type="tel"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200/70">
                          WhatsApp Number
                        </label>
                        <input
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-gray-100 placeholder-indigo-200/50 focus:border-indigo-400/60 focus:outline-none focus:ring-0"
                          placeholder="WhatsApp contact"
                          value={values.whatsapp}
                          onChange={handleTextChange(course.title, "whatsapp")}
                          type="tel"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200/70">
                        Email ID
                      </label>
                      <input
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-gray-100 placeholder-indigo-200/50 focus:border-indigo-400/60 focus:outline-none focus:ring-0"
                        placeholder="name@wefi.in"
                        value={values.email}
                        onChange={handleTextChange(course.title, "email")}
                        type="email"
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 text-left">
                    <div className="flex flex-col items-center gap-4 rounded-3xl border border-indigo-400/40 bg-white/5 p-5 text-center">
                      <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-indigo-400/60 bg-indigo-500/10">
                        <Image
                          src={WefiUpiQrCode}
                          alt="WEFI UPI QR code"
                          className="h-full w-full object-contain"
                          priority
                        />
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <span className="rounded-full border border-indigo-400/60 bg-indigo-500/20 px-4 py-2 text-sm font-semibold tracking-[0.15em] text-indigo-100">
                          {GLOBAL_UPI_ID}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyUpi(course.title)}
                          className="rounded-full border border-indigo-400/60 bg-indigo-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 transition duration-300 hover:bg-indigo-400/40"
                        >
                          {copiedCourse === course.title ? "Copied" : "Copy"}
                        </button>
                        <a
                          href="/images/wefi_upi_qr_code.jpeg"
                          download
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 transition duration-300 hover:bg-white/20"
                        >
                          Download QR
                        </a>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-center sm:text-left">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-indigo-200/70">
                        Course Fee
                      </p>
                      <p className="mt-2 text-base font-semibold text-gray-100">{course.payment.amount}</p>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200/70">
                        Upload Payment Screenshot
                      </label>
                      <input
                        className="mt-2 w-full cursor-pointer rounded-2xl border border-dashed border-indigo-400/60 bg-indigo-500/10 px-4 py-3 text-sm text-indigo-100 file:mr-4 file:rounded-full file:border-0 file:bg-indigo-400/80 file:px-4 file:py-2 file:font-semibold file:text-white hover:border-indigo-400/80"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange(course.title)}
                      />
                      {values.screenshot ? (
                        <p className="mt-2 text-xs text-indigo-200/70">Uploaded: {values.screenshot.name}</p>
                      ) : (
                        <p className="mt-2 text-xs text-indigo-200/60">
                          Share a clear screenshot after completing the UPI payment.
                        </p>
                      )}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => handlePrevious(course.title)}
                      className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/80 transition duration-300 hover:border-indigo-400/60"
                    >
                      Back
                    </button>
                  )}
                  {currentStep < 2 && (
                    <button
                      type="button"
                      onClick={() => handleNext(course.title)}
                      className="ml-auto inline-flex items-center gap-2 rounded-full bg-indigo-500/80 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-400/90"
                    >
                      Continue
                      <svg
                        className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  )}
                  {currentStep === 2 && (
                    <button
                      type="submit"
                      className="ml-auto inline-flex items-center gap-2 rounded-full bg-emerald-500/80 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-emerald-400/90"
                    >
                      Submit form
                    </button>
                  )}
                </div>
              </form>
            )}
          </article>
        );
      })}
    </div>
  );
}
