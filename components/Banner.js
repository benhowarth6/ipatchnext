import Link from "next/link";

const Banner = () => {

  return (
<div className="relative bg-yellow-600">
<div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
  <div className="pr-16 sm:text-center sm:px-16">
    <p className="font-medium text-white">
      <span className="md:hidden">
        Beta build 2 - Do not use for quoting customers.
      </span>
      <span className="hidden md:inline">
        Beta build 2 - Do not use for quoting customers.
      </span>
    </p>
  </div>
</div>
</div>
  )
}
export default Banner;
