import {
  FaAws,
  FaDocker,
  FaGithub,
  FaJenkins,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import { SiTerraform, SiKubernetes } from "react-icons/si";

function Home() {
  const tools = [
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiTerraform />, name: "Terraform" },
    { icon: <FaJenkins />, name: "Jenkins" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaGithub />, name: "GitHub Actions" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-10 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <img
  src="/profile.jpeg"
  alt="Manny Owoloye"
  className="w-72 h-72 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
/>
        <p className="text-cyan-400 text-xl mb-4">Hello, I'm</p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Manny Owoloye
        </h1>

        <h2 className="text-3xl md:text-4xl text-slate-300 mb-8">
          DevOps Engineer | Cloud Engineer
        </h2>

        <p className="max-w-4xl text-slate-400 text-lg md:text-xl leading-9">
          I build scalable cloud infrastructure, CI/CD pipelines,
          containerized applications, and automated DevOps workflows using
          AWS, Terraform, Jenkins, Docker, Kubernetes, GitHub Actions, Linux,
          and modern cloud technologies.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="/projects"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-lg font-semibold"
          >
            View Projects
          </a>

          <a
            href="/resume/Updated-Owoloye-Resume.docx"
            download
            className="border border-cyan-500 hover:bg-cyan-500/10 px-6 py-3 rounded-xl text-lg"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-cyan-400 transition"
            >
              <div className="text-4xl text-cyan-400">{tool.icon}</div>
              <p className="text-slate-300">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;