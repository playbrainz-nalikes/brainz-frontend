export default function HTPLayout({ children }) {
  return (
    <div className="mx-auto max-w-[1080px] overflow-hidden px-3 font-basement text-white xl:px-16">
      <h1 className="my-10 text-center text-3xl font-black">How To Play</h1>
      {children}
    </div>
  )
}
