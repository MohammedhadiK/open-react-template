import Image from "next/image";

// Simple gradient background component
const EducationBackground = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-indigo-800" />
    <div className="absolute left-1/2 top-0 -ml-[39%] h-full w-[113%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 to-transparent" />
  </div>
);

export default function PageIllustration() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -ml-16 -mt-16 h-[800px] w-[800px] opacity-50">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 blur-3xl" />
    </div>
          >
            <Image
              className="max-w-none"
              src={BlurredShape}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
        </>
      )}
    </>
  );
}
