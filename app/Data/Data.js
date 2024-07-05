import { IoKeyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa6";
import { TbHexagonalPrism } from "react-icons/tb";
import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import img4 from "@/public/img4.png";
import img5 from "@/public/img5.png";
export const Data = [
  {
    customerName: "Jane Cooper",
    compant: "Microsoft",
    phoneNumber: "(205) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: true,
    content: "Active",
  },
  {
    customerName: "Floyd Miles",
    compant: "yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "kiribati",
    status: false,
    content: "Inactive",
  },
  {
    customerName: "Ronald Richards",
    compant: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: false,
    content: "Inactive",
  },
  {
    customerName: "Marvin Mckinney",
    compant: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: true,
    content: "Active",
  },
  {
    customerName: "Jerome Bell",
    compant: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: true,
    content: "Active",
  },
  {
    customerName: "Kathryn Murphy",
    compant: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: true,
    content: "Active",
  },
  {
    customerName: "Jacob Jones",
    compant: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: true,
    content: "Active",
  },
  {
    customerName: "Kristin Watson",
    compant: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "lristin@facebook.com",
    country: "Aland Island",
    status: false,
    content: "Inactive",
  },
];

export const NavigationData = [
  {
    icon: <IoKeyOutline />,
    title: "Dashboard",
    outline: true,
    greaterSymbol: false,
    greateIcon: <FaGreaterThan />,
  },
  {
    icon: <TbHexagonalPrism />,
    title: "Product",
    outline: true,
    greaterSymbol: true,
    greateIcon: <FaGreaterThan />,
  },
  {
    icon: <FaRegUser />,
    title: "Customers",
    outline: true,
    greaterSymbol: true,
    greateIcon: <FaGreaterThan />,
  },
  {
    icon: <CiWallet />,
    title: "Income",
    outline: false,
    greaterSymbol: true,
    greateIcon: <FaGreaterThan />,
  },
  {
    icon: <BiSolidOffer />,
    title: "Promote",
    outline: false,
    greaterSymbol: true,
    greateIcon: <FaGreaterThan />,
  },
  {
    icon: <MdOutlineLiveHelp />,
    title: "Help",
    outline: false,
    greaterSymbol: true,
    greateIcon: <FaGreaterThan />,
  },
];

export const ImgData = [img5, img4, img3, img2, img1];
