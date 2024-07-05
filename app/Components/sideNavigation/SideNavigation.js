import Logo from "@/app/Components/sideNavigation/Logo";
import { NavigationData } from "@/app/Data/Data";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import user from "@/public/user.png";
export default function SideNavigation() {
  return (
    <div className="flex h-[1100px] w-[275px] flex-col justify-between bg-white pe-2 ps-6 pt-8">
      <div>
        <div className="mb-12 flex items-center gap-2">
          <Logo />

          <div className="flex items-end gap-1">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="mb-1 text-xs text-slate-400">v.01</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 pe-4">
          {NavigationData.map((data) => (
            <ul key={data.title} className="">
              <li
                className={`flex items-center justify-between p-2 text-sm ${data.title === "Customers" ? "rounded-lg border-0 bg-indigo-600 text-white" : "text-nav-text"}`}
              >
                <div className="flex items-center gap-3 ps-1 font-light">
                  <span
                    className={`${data.outline ? "border-nav-text rounded-lg border-2 text-xl" : "text-2xl"} p-[2px]`}
                  >
                    {data.icon}
                  </span>
                  <h1 className="text-xs font-medium">{data.title}</h1>
                </div>
                {data.greaterSymbol ? <span>{data.greateIcon}</span> : ""}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div>
        <BottumNavigation />
      </div>
    </div>
  );
}

function BottumNavigation() {
  return (
    <div>
      <div className="bg-custom-gradient h-36 w-full rounded-2xl border-2 py-4">
        <div className="mx-4 mt-2 text-center text-sm">
          <h1 className="mb-3 text-white">
            Upgrade to PRO to get access all Features!
          </h1>
          <button className="rounded-full bg-white px-12 py-2 font-semibold text-blue-800">
            Get Pro Now!
          </button>
        </div>
      </div>
      <div className="mb-16">
        <User />
      </div>
    </div>
  );
}
function User() {
  return (
    <div className="flex items-center justify-between">
      <div className="mt-10 flex items-center gap-2">
        <Image src={user} alt="Evano" className="h-10 w-10 rounded-full" />
        <div className="text-xs">
          <p className="mb-1 font-semibold">Evano</p>
          <p className="text-nav-text">Project Manager</p>
        </div>
      </div>
      <div className="text-nav-text mt-4">
        <IoChevronDown />
      </div>
    </div>
  );
}
