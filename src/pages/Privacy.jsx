import Navbar from "../components/NavBar";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-12">

          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">
              Privacy Policy
            </h1>

            <p className="text-gray-500 mt-3">
              Last Updated: June 2026
            </p>
          </div>

          <div className="space-y-8 text-gray-700">

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                1. Introduction
              </h2>

              <p>
                Welcome to JobSphere. Your privacy is important
                to us. This Privacy Policy explains how we
                collect, use, and protect your personal
                information when you use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                2. Information We Collect
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact details</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Resume and job application data</li>
                <li>Account and login information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                3. How We Use Your Information
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>To create and manage your account</li>
                <li>To connect job seekers with employers</li>
                <li>To improve our services</li>
                <li>To send job alerts and notifications</li>
                <li>To ensure platform security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                4. Information Sharing
              </h2>

              <p>
                We do not sell your personal information.
                Information may be shared with employers when
                you apply for jobs through JobSphere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                5. Data Security
              </h2>

              <p>
                We implement reasonable security measures to
                protect your information from unauthorized
                access, misuse, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                6. Cookies
              </h2>

              <p>
                Our platform may use cookies to improve user
                experience and analyze website traffic.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                7. User Rights
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Update or correct your information</li>
                <li>Request account deletion</li>
                <li>Opt out of promotional emails</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                8. Third-Party Services
              </h2>

              <p>
                JobSphere may contain links to third-party
                websites. We are not responsible for their
                privacy practices or content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                9. Policy Updates
              </h2>

              <p>
                We may update this Privacy Policy from time to
                time. Any changes will be posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                10. Contact Us
              </h2>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <p>
                  <strong>Email:</strong> itspraveen220@gmail.com
                </p>

                <p>
                  <strong>Phone:</strong> 8797389898
                </p>

                <p>
                  <strong>Location:</strong> India
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;