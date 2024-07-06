import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import img4 from "@/public/img4.png";
import img5 from "@/public/img5.png";
import prism from "@/public/prism.png";
import walletMoney from "@/public/walletMoney.png";
import KeySquare from "@/public/KeySquare.png";
import message from "@/public/message.png";
import userSquar from "@/public/userSquar.png";
import discountShape from "@/public/discountShape.png";
import chevronRight from "@/public/chevronRight.png";
export const Data = [
  {
    customerName: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(205) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: true,
    content: "Active",
  },
  {
    customerName: "Floyd Miles",
    company: "yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "kiribati",
    status: false,
    content: "Inactive",
  },
  {
    customerName: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: false,
    content: "Inactive",
  },
  {
    customerName: "Marvin Mckinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: true,
    content: "Active",
  },
  {
    customerName: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: true,
    content: "Active",
  },
  {
    customerName: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: true,
    content: "Active",
  },
  {
    customerName: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: true,
    content: "Active",
  },
  {
    customerName: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "lristin@facebook.com",
    country: "Aland Island",
    status: false,
    content: "Inactive",
  },
];

export const NavigationData = [
  {
    icon: KeySquare,
    title: "Dashboard",
    href: "/",
    outline: true,
    greaterSymbol: false,
    greateIcon: chevronRight,
  },
  {
    icon: prism,
    title: "Product",
    href: "/product",
    outline: true,
    greaterSymbol: true,
    greateIcon: chevronRight,
  },
  {
    icon: userSquar,
    title: "Customers",
    href: "/customers",
    outline: true,
    greaterSymbol: true,
    greateIcon: chevronRight,
  },
  {
    icon: walletMoney,
    title: "Income",
    href: "/income",
    outline: false,
    greaterSymbol: true,
    greateIcon: chevronRight,
  },
  {
    icon: discountShape,
    title: "Promote",
    href: "/promote",
    outline: false,
    greaterSymbol: true,
    greateIcon: chevronRight,
  },
  {
    icon: message,
    title: "Help",
    href: "/help",
    outline: false,
    greaterSymbol: true,
    greateIcon: chevronRight,
  },
];

export const ImgData = [img5, img4, img3, img2, img1];
