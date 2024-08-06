export default function HTPLayout({ children }) {
  return (
    <div className="text-white overflow-hidden font-basement max-w-[1080px] mx-auto px-3 xl:px-16">
      <h1 className="text-3xl xl:text-4xl font-black mt-6 text-center mb-12 xl:mb-16">
        How To Play
      </h1>
      {children}
    </div>
  );
}
