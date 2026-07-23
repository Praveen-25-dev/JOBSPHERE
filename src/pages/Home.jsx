import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import FeaturedCompanies from "../components/FeaturedCompanies";
import JobList from "../components/JobList";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonial from "../components/Testimonial"
import NewsLetter from "../components/NewsLetter"
import Stats from "../components/Stats"



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCompanies />
            <Stats/>
       <JobList />
      <WhyChooseUs/>
      <Testimonial/>
      <NewsLetter/>
       <Footer/>
      

    </>
  );
}

export default Home;