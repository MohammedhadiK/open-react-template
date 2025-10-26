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
          </p>
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
                />
                <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Strategic Initiatives
              </h3>
              <p className="text-indigo-200/65">
                Track progress across custom flows for your team. Find the right
                balance for the user, privacy and security.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                />
                <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Flexible Workflows
              </h3>
              <p className="text-indigo-200/65">
                Track progress across custom flows for your team. Find the right
                balance for the user, privacy and security.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
                />
                <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Unified Timeline
              </h3>
              <p className="text-indigo-200/65">
                Track progress across custom flows for your team. Find the right
                balance for the user, privacy and security.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
