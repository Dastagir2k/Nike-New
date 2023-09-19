// const App=()=>(
//   <main className="relative">
//     Nav
//     <section className="xl:padding-1 wide:padding-r padding-b">
//       Hero
//     </section>
//     <section className="padding">
//       Popular Porducts
//     </section>
//   </main>
// );
// export default App;

import Nav from "./components/Nav";
import Contact from "./sections/Contact";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

import PopularProduct from "./sections/PopularProduct";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscirbe from "./sections/Subscirbe";
import SuperQuality from "./sections/SuperQuality";


function App() {
  return (
    <div>
        <main className="relative">
        <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProduct/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscirbe/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full lg:hidden">
      <Contact/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
    </div>
  )
}

export default App;

