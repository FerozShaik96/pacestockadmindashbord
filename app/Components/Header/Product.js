import { FiSearch, FiChevronDown } from "react-icons/fi";
import ProductBody from "./ProductBody";
import Image from "next/image";
import left from "@/public/left.png";
import right from "@/public/right.png";
export default function Product() {
  return (
    <div className="rounded-3xl bg-white py-10">
      <ProductHead />
      <ProductBody />
      <ProductFooter />
    </div>
  );
}
function ProductHead() {
  return (
    <div className="flex items-center justify-between px-10">
      <div>
        <h1 className="text-xl font-semibold">All Customers</h1>
        <small style={{ color: "rgba(22, 192, 152, 1)" }}>Active Members</small>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-56 items-center gap-2 rounded-[12px] border-2 border-white bg-light-blue px-4 py-2 shadow-sm">
          <FiSearch size={20} className="text-search-col" />
          <span className="text-xs text-search-text">Search</span>
        </div>
        <div className="flex items-center rounded-lg bg-light-blue px-4 py-2">
          <p className="me-1 text-xs text-search-text">short by : </p>
          <span className="me-2 text-xs font-semibold text-black"> Newest</span>
          <FiChevronDown />
        </div>
      </div>
    </div>
  );
}

function ProductFooter() {
  return (
    <div className="mt-8 flex items-center justify-between pl-10 pr-20">
      <h2 className="text-xs text-nav-text">
        Showing data 1 to 8 of 256k entries
      </h2>
      <div className="flex items-center gap-3 text-xs text-Prod-Footer">
        <Image src={right} alt="right" />
        <p className="rounded-md bg-violet-900 px-3 py-1 text-white">1</p>
        <p className="rounded-md bg-slate-300 px-3 py-1">2</p>
        <p className="rounded-md bg-slate-300 px-3 py-1">3</p>
        <p className="rounded-md bg-slate-300 px-3 py-1">4</p>
        <p className="text-xl">...</p>
        <p className="rounded-md bg-slate-300 px-3 py-1">40</p>
        <Image src={left} alt="left" />
      </div>
    </div>
  );
}
