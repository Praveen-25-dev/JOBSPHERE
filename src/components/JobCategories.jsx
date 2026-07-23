import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
function JobCategories() {
  const categories = [
    "Frontend",
    "Backend",
    "Full Stack",
    "UI/UX",
    "Data Science",
    "DevOps"
  ];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Popular Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl cursor-pointer"
            >
              <h3 className="text-xl font-semibold">
                {cat}
              </h3>
            </div>
          ))}

        </div>
        <NavBar/>
        <footer/>

      </div>

    </section>
  );
}

export default JobCategories;