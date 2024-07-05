import SideNavigation from "@/app/Components/sideNavigation/SideNavigation";
import Header from "@/app/Components/Header/Header";
export default function Home() {
  return (
    <div className="flex h-full bg-light-blue">
      <SideNavigation />
      <Header />
    </div>
  );
}
