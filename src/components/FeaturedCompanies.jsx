// import { FcGoogle } from "react-icons/fc";
// import { FaAmazon, FaMicrosoft  } from "react-icons/fa";
// import { SiTcs } from "react-icons/si";
// import { SiFlipkart } from "react-icons/si";








// function FeaturedCompanies() {
//   const companies = [
//     {
//       name: "Google",
//       logo: <FcGoogle size={40} />,
//     },
//     {
//       name: "Amazon",
//       logo: <FaAmazon size={40} />,
//     },
//     {
//       name: "Microsoft",
//       logo: <FaMicrosoft size={40} />,
//     },
//     {
//       name: "TCS",
//       logo: <SiTcs size={40} /> 

//     },
//     {
//       name: "flipkart",
//       logo: <SiFlipkart size={40} />

//     }
//   ];

//   return (
//     <section className="bg-blue-800 py-16">
//       <h2 className="text-center text-4xl font-bold mb-10">
//         Top Companies
//       </h2>

//       <div className="flex justify-center flex-wrap gap-5">
//         {companies.map((company) => (
//           <div
//             key={company.name}
//             className="bg-white shadow p-5 rounded-xl w-20 h-20 flex items-center justify-center"
//           >
//             {company.logo}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturedCompanies;



import { FcGoogle } from "react-icons/fc";
import { FaAmazon, FaMicrosoft } from "react-icons/fa";
import { SiTcs, SiFlipkart } from "react-icons/si";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"

function FeaturedCompanies() {
  const companies = [
    {
      name: "Google",
      logo: <FcGoogle size={50} />,
    },
    {
      name: "Amazon",
      logo: <FaAmazon size={50} />,
    },
    {
      name: "Microsoft",
      logo: <FaMicrosoft size={50} />,
    },
    {
      name: "TCS",
      logo: <SiTcs size={50} />,
    },
    {
      name: "Flipkart",
      logo: <SiFlipkart size={50} />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Trusted Companies
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Top Hiring Companies
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover opportunities from the world's leading companies
            and start building your dream career today.
          </p>

        </div>
        {/* <div className="overflow-hidden whitespace-nowrap bg-gray-900 py-4">
  <div className="inline-block animate-marquee text-white text-2xl font-bold">
    Google • Microsoft • Amazon • Netflix • Meta • Apple • Google • Microsoft • Amazon • Netflix • Meta • Apple
  </div>
</div> */}

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {companies.map((company) => (
            <div
              key={company.name}
              className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col items-center justify-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">
                {company.logo}
              </div>

              <h3 className="font-semibold text-gray-700 group-hover:text-blue-600 transition">
                {company.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    

    </section>
  
  );
}

export default FeaturedCompanies;