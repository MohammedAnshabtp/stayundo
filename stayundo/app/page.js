// export default function Home() {
//   return (
//     <main className="flex flex-col min-h-screen items-center justify-center">
//       <h1 className="text-4xl font-bold text-blue-600">Stayundo</h1>
//       <p className="font-bold text-blue-400">Find Your Stay And Essentials</p>
//     </main>
//   );
// }
import BeyondAccommodation from "./components/home/BeyondAccommodation";
import Categories from "./components/home/Categories";
import Districts from "./components/home/Districts";
import Essentials from "./components/home/Essentials";
import Hero from "./components/home/Hero";
import HostProperty from "./components/home/HostProperty";
import MembershipPage from "./components/home/MembershipPage";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Districts />
      <Essentials />
      <HostProperty />
      <MembershipPage />
      <BeyondAccommodation />
    </>
  );
}
