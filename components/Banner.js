import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">Build 2 - WIP</span>
            <span className="hidden md:inline">Build 2 - WIP</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
