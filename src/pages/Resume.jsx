function Resume() {
  const jobs = [
    ["Intel Corporation", "DevOps Engineer", "Feb 2023 – Present"],
    ["Comcast Corporation", "DevOps Engineer", "Oct 2021 – Jan 2023"],
    ["IBM", "DevOps Engineer", "Aug 2019 – Oct 2021"],
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-8">
        My <span className="text-purple-400">Resume</span>
      </h1>

      <div className="grid lg:grid-cols-2 gap-10">
        <section className="bg-[#0f172a] border border-purple-500/20 backdrop-blur-xl bg-white/5 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-2">Manny Owoloye</h2>
          <p className="text-purple-400 text-xl mb-6">DevOps Engineer</p>

          <div className="space-y-4 text-slate-300">
            <p><strong>Email:</strong> eowoloye2@gmail.com</p>
            <p><strong>Location:</strong> Garland, TX</p>
            <p><strong>Security Clearance:</strong> Secret</p>
            <p><strong>Certifications:</strong> CompTIA Security+, AWS Certified Cloud Practitioner</p>
          </div>

          <a
            href="/resume/Updated-Owoloye-Resume.docx"
            download
            className="inline-block mt-8 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold"
          >
            Download Resume
          </a>
        </section>

        <section className="bg-[#0f172a] border border-purple-500/20 backdrop-blur-xl bg-white/5 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-purple-400 mb-8">Experience</h2>

          <div className="space-y-8">
            {jobs.map(([company, role, date]) => (
              <div key={company} className="border-l-4 border-purple-400 pl-5">
                <h3 className="text-2xl font-bold">{company}</h3>
                <p className="text-slate-300">{role}</p>
                <p className="text-slate-500">{date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Resume;