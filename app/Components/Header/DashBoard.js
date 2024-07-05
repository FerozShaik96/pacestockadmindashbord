import { ImgData } from "@/app/Data/Data";
import profile2user from "@/public/profile2user.png";
import profiletick from "@/public/profiletick.png";
import monitor from "@/public/monitor.png";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import Image from "next/image";
export default function DashBoard() {
  return (
    <div className="flex h-32 w-full items-center justify-between rounded-3xl bg-white px-12 py-8">
      <div className="flex gap-4 border-r-2 pe-16">
        <div className="bg-text-gradient rounded-full p-6 text-green-600">
          <Image src={profile2user} alt="users" />
        </div>
        <div className="mt-2">
          <h3 className="pb-1 text-sm text-search-text">Total Customers</h3>
          <h3 className="text-3xl font-semibold">5,423</h3>
          <h3 className="flex items-center text-xs">
            <BiUpArrowAlt className="text-green-600" size={24} />
            <span className="pe-1 font-semibold text-green-600">16% </span> this
            month
          </h3>
        </div>
      </div>
      <div className="flex gap-4 border-r-2 pe-8">
        <div className="bg-text-gradient rounded-full p-6 text-green-600">
          <Image src={profiletick} alt="users" />
        </div>
        <div className="mt-2">
          <h3 className="pb-1 text-sm text-search-text">Members</h3>
          <h3 className="text-3xl font-semibold">1,893</h3>
          <h3 className="flex items-center text-xs">
            <BiDownArrowAlt className="text-red-600" size={24} />
            <span className="pe-1 font-semibold text-red-600">1% </span> this
            month
          </h3>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-text-gradient rounded-full p-6 font-light text-green-600">
          <Image src={monitor} alt="users" />
        </div>
        <div className="mt-2">
          <h3 className="pb-1 text-sm text-search-text">Active Now</h3>
          <h3 className="text-3xl font-semibold">189</h3>
          <StackedImages images={ImgData} />
        </div>
      </div>
    </div>
  );
}
function StackedImages({ images }) {
  return (
    <div className="relative h-6 w-6">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute h-6 w-6 rounded-full"
          style={{ left: `${index * 18}px` }} // Adjust the overlap
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  );
}
