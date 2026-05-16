import { motion } from "framer-motion";
import { FaAws, FaDocker, FaGithub, FaJenkins } from "react-icons/fa";
import { SiTerraform, SiKubernetes } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Terraform AWS Infrastructure",
      description:
        "Provisioned AWS infrastructure using Terraform, EC2, security groups, networking, and reusable IaC workflows.",
      tools: ["AWS", "Terraform", "EC2", "Linux"],
      icon: <SiTerraform />,
      github: "https://github.com/owotee/terraform-aws-iac",
    },
    {
      title: "Jenkins CI/CD Pipelines",
      description:
        "Created Jenkins pipelines to provision AWS infrastructure and deploy five web applications automatically.",
      tools: ["Jenkins", "Terraform", "GitHub", "AWS"],
      icon: <FaJenkins />,
      github: "https://github.com/owotee/terraform-aws-iac",
    },
    {
      title: "Dockerized Five Web Apps",
      description:
        "Built Docker images for Python, Node.js, PHP, Ruby, and Java applications and pushed them to Docker Hub.",
      tools: ["Docker", "Docker Hub", "Containers"],
      icon: <FaDocker />,
      github: "https://github.com/owotee/multi-language-webapps",
    },
    {
      title: "Multi-Language App Deployment",
      description:
        "Deployed five web applications to AWS EC2 using Bash scripts, SQLite databases, and automated runtime setup.",
      tools: ["Python", "Node.js", "PHP", "Ruby", "Java"],
      icon: <FaAws />,
      github: "https://github.com/owotee/multi-language-webapps",
    },
    {
      title: "DevOps Portfolio Deployment",
      description:
        "Built and deployed a React DevOps portfolio to Vercel using GitHub Actions instead of Jenkins.",
      tools: ["React", "Vite", "GitHub Actions", "Vercel"],
      icon: <FaGithub />,
      github: "https://github.com/owotee/devops-portfolio",
    },
    {
      title: "Cloud-Native Learning Lab",
      description:
        "Hands-on DevOps practice covering Kubernetes, Docker, CI/CD, monitoring, and infrastructure automation.",
      tools: ["Kubernetes", "Docker", "Monitoring"],
      icon: <SiKubernetes />,
      github: "https://github.com/owotee",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6">
        My Recent <span className="text-purple-400">Works</span>
      </h1>

      <p className="text-slate-400 text-xl mb-14 max-w-4xl">
        DevOps, cloud infrastructure, automation, and containerization projects
        that demonstrate real engineering workflows.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-[#0f172a] border border-purple-500/20 backdrop-blur-xl bg-white/5 rounded-3xl p-8 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition"
          >
            <div className="text-5xl text-purple-400 mb-6">{project.icon}</div>
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-slate-400 leading-8 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.tools.map((tool) => (
                <span key={tool} className="bg-purple-500/10 border border-purple-500 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>

            <a href={project.github} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">
              View Repository →
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default Projects;