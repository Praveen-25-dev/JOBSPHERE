function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-14 text-center border border-white/20 shadow-2xl">

          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
            📩 Newsletter
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Never Miss Your Dream Job
          </h2>

          <p className="text-blue-100 mt-4 text-lg max-w-2xl mx-auto">
            Get the latest job openings, career tips, and hiring updates
            delivered directly to your inbox.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-xl bg-white text-gray-800 outline-none focus:ring-4 focus:ring-blue-300"
            />

            <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-lg">
              Subscribe Now
            </button>
          </div>

          <p className="text-blue-100 text-sm mt-5">
            🔒 No spam. Unsubscribe anytime.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;