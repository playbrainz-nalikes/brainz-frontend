export default function HTPLayout({ children }) {
  return (
    <div className="text-white font-basement max-w-[956px] mx-auto">
      <h1 className="text-4xl xl:text-5xl font-black mt-6 text-center mb-[100px]">
        How To Play
      </h1>
      {children}
    </div>
  );
}
