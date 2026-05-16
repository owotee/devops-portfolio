import { motion } from "framer-motion";

function Skills() {
  const groups = {
    Cloud: ["AWS", "Azure", "Google Cloud", "IAM", "Cost Optimization"],
    "CI/CD": ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"],
    Containers: ["Docker", "Kubernetes", "Helm", "Docker Hub"],
    IaC: ["Terraform", "Ansible", "CloudFormation", "Bash"],
    Monitoring: ["Prometheus", "Grafana", "ELK Stack", "Splunk"],
    Scripting: ["Python", "Bash", "PowerShell", "Linux"],
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-10">
        Professional <span className="text-purple-400">Skillset</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(groups).map(([group, skills]) => (
          <motion.div
            key={group}
            whileHover={{ y: -8 }}
            className="bg-[#0f172a] border border-purple-500/20 backdrop-blur-xl bg-white/5 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-purple-400 mb-5">{group}</h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="bg-purple-500/10 text-slate-300 border border-purple-500/40 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default Skills;