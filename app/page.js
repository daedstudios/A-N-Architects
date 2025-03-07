import Image from "next/image";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-auto grid-rows-[repeat(11,_22.5rem)]  px-2 gap-2 min-h-screen text-4xl">
      <div className="row-span-1 text-[8rem] md:text-[12rem] lg:text-[17rem] lg:col-span-4 md:col-span-2 sm:col-span-1 place-content-end"> ALT </div>
      {/* <Image className="row-span-1 cols-span-1" src="/plus.svg" alt="plus" width={220} height={160} /> */}
      <div className="row-span-1 text-[8rem] md:text-[12rem] lg:text-[17rem] lg:col-span-3 md:col-span-2 sm:col-span-1 text-center  "> NEU </div>
      
    </div>
  );
}
