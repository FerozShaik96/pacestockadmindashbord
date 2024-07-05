import { FiSearch, FiChevronDown } from "react-icons/fi";
export default function Product() {
  return (
    <div className="rounded-3xl bg-white py-10">
      <ProductHead />
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
