export type Course = {
  slug: string;
  title: string;
  description: string;
  startDate: string;
  schedule: string;
  duration: string;
  mode: string;
  mentors: string[];
  payment: {
    amount: string;
  };
};

export const courses: Course[] = [
  {
    slug: "full-stack-development-live-bootcamp",
    title: "Full-Stack Development Live Bootcamp",
    description:
      "Master modern web development with real-world projects covering React, Node.js, and cloud deployment.",
    startDate: "Begins Nov 18, 2025",
    schedule: "Mon · Wed · Fri · 7:00 – 9:30 PM IST",
    duration: "12 weeks",
    mode: "Live Online",
    mentors: ["Ananya Deshpande", "Rahul Mehta"],
    payment: {
      amount: "₹24,999",
    },
  },
  {
    slug: "ui-ux-design-intensive",
    title: "UI/UX Design Intensive",
    description:
      "Collaborate in live design sprints, build design systems, and learn user research fundamentals.",
    startDate: "Begins Dec 02, 2025",
    schedule: "Tue · Thu · 6:30 – 9:00 PM IST",
    duration: "8 weeks",
    mode: "Live Online",
    mentors: ["Meera Sethi", "Arjun Kulkarni"],
    payment: {
      amount: "₹18,499",
    },
  },
  {
    slug: "data-science-with-python-live-lab",
    title: "Data Science with Python Live Lab",
    description:
      "Work with streaming datasets, build predictive models, and deploy insights with dashboards.",
    startDate: "Begins Jan 06, 2026",
    schedule: "Sat · Sun · 10:00 AM – 1:30 PM IST",
    duration: "10 weeks",
    mode: "Hybrid · Bengaluru Campus",
    mentors: ["Ishaan Verma", "Dr. Kavya Rao"],
    payment: {
      amount: "₹22,999",
    },
  },
  {
    slug: "ai-product-strategy-studio",
    title: "AI Product Strategy Studio",
    description:
      "Learn to ship AI-powered features responsibly with guidance from product and ML mentors.",
    startDate: "Begins Jan 20, 2026",
    schedule: "Wed · Fri · 7:30 – 9:30 PM IST",
    duration: "6 weeks",
    mode: "Live Online",
    mentors: ["Sana Qureshi", "Matthews Joseph"],
    payment: {
      amount: "₹19,999",
    },
  },
  {
    slug: "parentu-parenting-toolkit-workshop",
    title: "ParentU: The Parenting Toolkit Workshop",
    description:
      "Eight-day live coaching circle supporting parents with compassionate routines and purposeful family practices.",
    startDate: "Begins Nov 17, 2025",
    schedule: "Daily · 8:30 – 9:30 PM IST",
    duration: "8 days",
    mode: "Live on Zoom",
    mentors: ["Anas Amani Pushpagiri", "Dr. Noorudheen Razi"],
    payment: {
      amount: "₹2,499",
    },
  },
];

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find((course) => course.slug === slug);
