export default function Schedule() {
  return (
    <div className="flex items-center justify-between py-4 lg:py-4 md:py-8 bg-gray-100/10 backdrop-blur-xs absolute bottom-5 lg:mt-24 rounded-4xl shadow-xs shadow-gray-900 text-gray-300 max-w-7xl mx-auto">
      <div className="flex items-center justify-evenly w-screen">
        <h1 className="font-semibold text-nowrap text-gray-300 items-center flex">
          <span className="text-pink-700 px-2 text-lg font-bold">13</span> June
          2025
        </h1>
        <p className="">|</p>
        <div className="text-center text-nowrap">
          <p className="pt-2 text-gray-400">Melrose Ballroom</p>
          <p className="text-sm text-gray-400 w-[50px] pr-8 text-center">
            36-08 33rd St, {""} <br /> Long Island City, NY
          </p>
        </div>
      </div>
    </div>
  );
}
