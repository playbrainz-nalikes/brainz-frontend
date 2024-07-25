export default function Loading() {
  return (
    <div className="fixed top-0 right-0 flex items-center justify-center w-full h-screen gap-4 text-white bg-primary/68 z-[1000000]">
      <div className="z-50 border-4 rounded-full w-10 h-10 animate-spin border-secondary border-s-secondary/20 " />
      Loading
    </div>
  );
}
