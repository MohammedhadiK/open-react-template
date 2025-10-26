import Image from "next/image";

export default function PageIllustration() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -ml-16 -mt-16 h-[800px] w-[800px] opacity-50">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 blur-3xl" />
    </div>
  );
}
