import { BookOpen, GraduationCap, Users, Award, Clock, BarChart2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
      title: "Comprehensive Curriculum",
      description: "Our carefully designed curriculum covers all essential topics with a focus on practical, real-world applications.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-indigo-600" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience in their respective fields.",
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Interactive Learning",
      description: "Engage in hands-on projects and collaborative learning experiences with peers.",
    },
    {
      icon: <Award className="h-6 w-6 text-indigo-600" />,
      title: "Certification",
      description: "Earn recognized certifications upon course completion to boost your career prospects.",
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      title: "Flexible Schedules",
      description: "Study at your own pace with our flexible learning schedules and online resources.",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-indigo-600" />,
      title: "Career Support",
      description: "Get assistance with resume building, interview preparation, and job placement.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Choose WEFI Institute?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We provide an exceptional learning experience with a focus on practical skills and career growth.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
