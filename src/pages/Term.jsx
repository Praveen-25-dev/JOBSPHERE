import Navbar from "../components/Navbar";

function TermsConditions() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-12">

          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">
              Terms & Conditions
            </h1>

            <p className="text-gray-500 mt-3">
              Last Updated: June 2026
            </p>
          </div>

          <div className="space-y-8 text-gray-700">

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                1. Acceptance of Terms
              </h2>

              <p>
                By accessing and using JobSphere, you agree to
                comply with and be bound by these Terms &
                Conditions. If you do not agree, please do not
                use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                2. User Accounts
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Users must provide accurate information.
                </li>
                <li>
                  Users are responsible for maintaining the
                  confidentiality of their accounts.
                </li>
                <li>
                  Fake or misleading accounts are prohibited.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                3. Job Seeker Responsibilities
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Submit genuine resumes and applications.
                </li>
                <li>
                  Avoid fraudulent or misleading information.
                </li>
                <li>
                  Use the platform responsibly.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                4. Employer Responsibilities
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Post only legitimate job opportunities.
                </li>
                <li>
                  Provide accurate job descriptions.
                </li>
                <li>
                  Avoid discriminatory or misleading content.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                5. Prohibited Activities
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Fake job postings.</li>
                <li>Fake applications.</li>
                <li>Spamming users.</li>
                <li>Attempting to hack or exploit the platform.</li>
                <li>Sharing harmful or illegal content.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                6. Intellectual Property
              </h2>

              <p>
                All content, branding, logos, and website
                design are the property of JobSphere and may
                not be copied or reused without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                7. Privacy Policy
              </h2>

              <p>
                Your personal information is handled according
                to our Privacy Policy. By using JobSphere, you
                agree to the collection and use of information
                as described therein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                8. Limitation of Liability
              </h2>

              <p>
                JobSphere acts only as a platform connecting
                job seekers and employers. We do not guarantee
                job placement, hiring decisions, or employment
                outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                9. Account Suspension & Termination
              </h2>

              <p>
                We reserve the right to suspend or terminate
                any account that violates these Terms &
                Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                10. Changes to Terms
              </h2>

              <p>
                JobSphere may update these Terms & Conditions
                at any time. Continued use of the platform
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                11. Contact Us
              </h2>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <p>
                  <strong>Email:</strong> itspraveen220@gmai.com
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

export default TermsConditions;