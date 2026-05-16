import { motion } from "framer-motion";

function About() {
  const cards = [
    "Cloud infrastructure across AWS, Azure, and Google Cloud",
    "CI/CD pipelines using Jenkins, GitHub Actions, GitLab CI, and Azure DevOps",
    "Containerized deployments with Docker and Kubernetes",
    "Infrastructure as Code using Terraform, Ansible, and CloudFormation",
    "Monitoring with Prometheus, Grafana, ELK Stack, and Splunk",
    "Security-focused DevOps using IAM, hardening, and compliance practices",
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-6">
        About <span className="text-purple-400">Me</span>
      </motion.h1>

      <p className="text-slate-400 text-xl leading-9 max-w-5xl mb-14">
        I’m Manny Owoloye, a DevOps Engineer focused on building reliable,
        automated, secure, and scalable cloud systems. My work combines cloud
        engineering, CI/CD automation, containerization, monitoring, and
        infrastructure as code.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-[#0f172a] border border-purple-500/20 backdrop-blur-xl bg-white/5 rounded-3xl p-7 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition"
          >
            <p className="text-slate-300 text-lg leading-8">{card}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default About;