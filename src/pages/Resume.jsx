function Resume() {
  const experience = [
    {
      company: "Intel Corporation",
      role: "DevOps Engineer",
      dates: "Feb 2023 – Present",
    },
    {
      company: "Comcast Corporation",
      role: "DevOps Engineer",
      dates: "Oct 2021 – Jan 2023",
    },
    {
      company: "IBM",
      role: "DevOps Engineer",
      dates: "Aug 2019 – Oct 2021",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-10 md:px-20 py-20">
      <h1 className="text-5xl font-bold text-cyan-400 mb-6">Resume</h1>

      <p className="text-slate-300 text-xl max-w-5xl leading-9 mb-10">
        DevOps Engineer with experience in cloud infrastructure, CI/CD
        automation, containerization, Infrastructure as Code, monitoring,
        security, and multi-cloud operations.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-2">Manny Owoloye</h2>
          <p className="text-cyan-400 text-xl mb-6">DevOps Engineer</p>

          <div className="space-y-4 text-slate-300">
            <p><strong>Email:</strong> eowoloye2@gmail.com</p>
            <p><strong>Location:</strong> Garland, TX</p>
            <p><strong>Security Clearance:</strong> Secret</p>
            <p><strong>Certifications:</strong> CompTIA Security+, AWS Certified Cloud Practitioner</p>
          </div>

          <a
            href="/resume/Updated-Owoloye-Resume.docx"
            download
            className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-lg font-semibold"
          >
            Download Resume
          </a>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">
            Experience
          </h2>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-cyan-400 pl-5">
                <h3 className="text-2xl font-bold">{job.company}</h3>
                <p className="text-slate-300">{job.role}</p>
                <p className="text-slate-500">{job.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;