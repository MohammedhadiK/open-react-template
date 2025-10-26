"use client";

import { useState } from "react";
import { Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  category: 'student' | 'parent' | 'alumni' | 'teacher';
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Rahman",
    role: "Grade 11 Student",
    content: "WEFI Institute has transformed my learning experience. The teachers are incredibly supportive and the curriculum is both challenging and engaging. I've seen a significant improvement in my grades and confidence.",
    rating: 5,
    category: 'student'
  },
  {
    id: 2,
    name: "Mohammed Ali",
    role: "Parent of Grade 8 Student",
    content: "As parents, we're extremely satisfied with the Islamic environment and academic excellence at WEFI. Our son has shown remarkable progress in both deen and dunya studies. The teachers truly care about each student's success.",
    rating: 5,
    category: 'parent'
  },
  {
    id: 3,
    name: "Fatima Khan",
    role: "Alumna, Class of 2022",
    content: "The foundation I received at WEFI Institute prepared me exceptionally well for university. The critical thinking skills and Islamic values I learned continue to guide me in my higher education journey.",
    rating: 5,
    category: 'alumni'
  },
  {
    id: 4,
    name: "Yusuf Abdullah",
    role: "Grade 9 Student",
    content: "I love the hands-on learning approach at WEFI. The teachers make even complex topics easy to understand. The extracurricular activities have helped me discover my passion for robotics and programming.",
    rating: 4,
    category: 'student'
  },
  {
    id: 5,
    name: "Amina Hussein",
    role: "Parent of Grade 5 Student",
    content: "We chose WEFI for its strong Islamic values and academic rigor. The school has exceeded our expectations in nurturing both our daughter's faith and intellectual growth. The communication with teachers is excellent.",
    rating: 5,
    category: 'parent'
  },
  {
    id: 6,
    name: "Ibrahim Malik",
    role: "Quran Teacher",
    content: "Teaching at WEFI has been a rewarding experience. The students are eager to learn, and the administration is supportive of innovative teaching methods that make Islamic education relevant to modern times.",
    rating: 5,
    category: 'teacher'
  }
];

type Category = {
  id: 'all' | 'student' | 'parent' | 'alumni' | 'teacher';
  name: string;
};

const categories: Category[] = [
  { id: 'all', name: 'All Testimonials' },
  { id: 'student', name: 'Students' },
  { id: 'parent', name: 'Parents' },
  { id: 'alumni', name: 'Alumni' },
  { id: 'teacher', name: 'Teachers' },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
          <span className="text-indigo-600 dark:text-indigo-300 text-lg font-semibold">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
    </div>
  );
}

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            What People Say
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            Hear from our students, parents, and teachers about their experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
