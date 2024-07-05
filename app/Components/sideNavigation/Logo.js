import { FiHexagon } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";
export default function Logo() {
  return (
    <div className="relative text-lg">
      <FiHexagon
        size={38}
        className="stroke-current font-extrabold"
        style={{ strokeWidth: 1.5 }}
      ></FiHexagon>
      <div className="absolute left-[12px] top-[12px] font-extrabold">
        <FaRegCircle size={14} className="font-extrabold" />
      </div>
    </div>
  );
}
