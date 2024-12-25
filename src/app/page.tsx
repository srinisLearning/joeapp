import Image from "next/image";

export default function Home() {
  return (
    <>
      <h3 className="flex justify-center items-center text-3xl text-primary font-black mt-4">
        E-Lint & Tailwind Demo
      </h3>
      <h3 className="flex justify-center items-center text-3xl text-primary-200 font-black mt-4">
        This is secondry color
      </h3>
      <h3 className="flex justify-center items-center text-3xl text-primary-400 font-black mt-4">
        This is tertiary color
      </h3>
    </>
  );
}
