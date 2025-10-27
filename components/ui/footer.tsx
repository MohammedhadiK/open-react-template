import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import wefiLogo from "@/public/images/wefi-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-1 gap-12 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:py-12">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/courses"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Hero
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Workflows
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="md:text-right">
            <div className="mb-3 inline-flex shrink-0">
              <Image
                src={wefiLogo}
                alt="WEFI Institute logo"
                width={120}
                height={40}
              />
            </div>
            <p className="text-sm text-indigo-200/65">© wefiinstitute.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
