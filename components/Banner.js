import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative bg-yellow-400">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">Bank holiday opening times.</span>
            <span className="hidden md:inline">Bank holiday opening times.</span>
            <span className="block sm:ml-2 sm:inline-block">
              <Link href="/opening-times">
                <a className="text-white font-bold underline">
                  {' '}
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
