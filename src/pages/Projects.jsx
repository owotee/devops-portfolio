import {
  FaAws,
  FaDocker,
  FaJenkins,
  FaGithub,
} from "react-icons/fa";

import {
  SiTerraform,
  SiKubernetes,
} from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Terraform AWS Infrastructure",
      description:
        "Provisioned AWS infrastructure using Terraform with reusable modules, automated deployments, security groups, networking, and EC2 provisioning.",
      tools: ["AWS", "Terraform", "Linux"],
      icon: <SiTerraform />,
    },

    {
      title: "Jenkins CI/CD Pipelines",
      description:
        "Built Jenkins pipelines to provision infrastructure and deploy multi-language web applications automatically with GitHub integration.",
      tools: ["Jenkins", "GitHub", "Terraform"],
      icon: <FaJenkins />,
    },

    {
      title: "Dockerized Multi-App Platform",
      description:
        "Containerized Python, Node.js, PHP, Ruby, and Java applications using Docker and pushed production-ready images to Docker Hub.",
      tools: ["Docker", "Docker Hub"],
      icon: <FaDocker />,
    },

    {
      title: "AWS EC2 Web App Deployment",
      description:
        "Deployed and managed multi-language applications on AWS EC2 with automated scripts, SQLite databases, and Linux administration.",
      tools: ["AWS", "Linux", "SQLite"],
      icon: <FaAws />,
    },

    {
      title: "GitHub Actions + Vercel Deployment",
      description:
        "Implemented GitHub Actions workflows to automatically build and deploy a modern DevOps portfolio website to Vercel.",
      tools: ["GitHub Actions", "Vercel"],
      icon: <FaGithub />,
    },

    {
      title: "Kubernetes & Container Orchestration",
      description:
        "Worked with Kubernetes concepts, container orchestration, scaling, and automated deployments for cloud-native applications.",
      tools: ["Kubernetes", "Docker"],
      icon: <SiKubernetes />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-10 md:px-20 py-20">

      <h1 className="text-5xl font-bold text-cyan-400 mb-6">
        Projects
      </h1>

      <p className="text-slate-400 text-xl mb-14 max-w-4xl">
        A collection of DevOps, cloud infrastructure, CI/CD,
        containerization, and automation projects built using
        modern engineering tools and workflows.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
          >

            <div className="text-5xl text-cyan-400 mb-6">
              {project.icon}
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {project.title}
            </h2>

            <p className="text-slate-400 leading-8 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-cyan-500/10 border border-cyan-500 text-cyan-400 px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Projects;