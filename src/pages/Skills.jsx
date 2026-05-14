function Skills() {
  const skills = [
    "AWS",
    "Azure",
    "Google Cloud",
    "Terraform",
    "Ansible",
    "CloudFormation",
    "Jenkins",
    "GitHub Actions",
    "GitLab CI",
    "Docker",
    "Kubernetes",
    "Helm",
    "Linux",
    "Bash",
    "Python",
    "PowerShell",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "Splunk",
    "Git",
    "SQLite",
    "Vercel",
    "DevSecOps",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-20 py-20">
      <h1 className="text-5xl font-bold text-cyan-400 mb-10">Technical Skills</h1>

      <div className="grid md:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-center text-lg hover:border-cyan-400 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;