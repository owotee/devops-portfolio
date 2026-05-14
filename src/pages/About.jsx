function About() {
  const highlights = [
    "Cloud infrastructure across AWS, Azure, and Google Cloud",
    "CI/CD automation using Jenkins, GitHub Actions, GitLab CI, and Azure DevOps",
    "Containerization with Docker and orchestration with Kubernetes",
    "Infrastructure as Code using Terraform, Ansible, and CloudFormation",
    "Monitoring and observability with Prometheus, Grafana, ELK, and Splunk",
    "Security-focused DevOps practices including IAM, hardening, and compliance",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-10 md:px-20 py-20">
      <h1 className="text-5xl font-bold text-cyan-400 mb-6">About Me</h1>

      <p className="text-slate-300 text-xl leading-9 max-w-5xl mb-12">
        I am Manny Owoloye, a DevOps Engineer focused on building reliable,
        automated, and scalable cloud infrastructure. My work centers around
        Infrastructure as Code, CI/CD pipelines, containerized deployments,
        Linux systems, cloud security, and modern DevOps automation.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <p className="text-slate-300 text-lg">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;