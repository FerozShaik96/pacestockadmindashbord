import { FiSearch } from "react-icons/fi";
import DashBoard from "./DashBoard";
import Product from "./Product";
export default function Header() {
  return (
    <div className="flex h-full w-[1050px] flex-col gap-9 ps-16 pt-10">
      <ProductHead />
      <DashBoard />
      <Product />
    </div>
  );
}
function ProductHead() {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-medium">Hello Evano 👋🏼, </h1>
      <div className="flex h-8 w-56 items-center gap-2 rounded-2xl border-2 border-white bg-white px-4 py-2 shadow-sm">
        <FiSearch size={24} className="text-search-col" />
        <span className="text-sm text-search-text">Search</span>
      </div>
    </div>
  );
}
