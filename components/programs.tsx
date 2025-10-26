import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

type ProgramCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ProgramCard = ({ icon, title, description }: ProgramCardProps) => (
  <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export default function Programs() {
  const programs = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Programs",
      description: "Comprehensive academic courses designed to provide in-depth knowledge and practical skills.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Professional Courses",
      description: "Industry-relevant courses to enhance professional skills and career growth.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Workshops",
      description: "Interactive sessions with industry experts to gain hands-on experience.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certification Programs",
      description: "Recognized certification programs to validate your skills and knowledge.",
    },
  ];

  return (
    <section id="programs" className="bg-white py-20 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Educational Programs
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover our comprehensive range of educational programs designed to empower your learning journey.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-12">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
