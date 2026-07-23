exports.getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
};

exports.updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedJob);
};