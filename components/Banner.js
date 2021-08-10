import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative bg-yellow-400">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-yellow-800">
            <span className="md:hidden">Due to staff shortages our Kirkstall Store is closed this week. </span>
            <span className="hidden md:inline">Due to staff shortages our Kirkstall Store is closed this week.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
