function SavedJobs() {
  const jobs =
    JSON.parse(localStorage.getItem("savedJobs")) || [];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Saved Jobs
      </h1>

      {jobs.length === 0 ? (
        <p>No saved jobs yet.</p>
      ) : (
        jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow mb-4"
          >
            <h2 className="text-xl font-bold">
              {job.title}
            </h2>

            <p>{job.company}</p>

            <p>{job.salary}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedJobs;