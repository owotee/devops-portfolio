import { motion } from "framer-motion";

import {
  FaAws,
  FaDocker,
  FaGithub,
  FaJenkins,
  FaLinux,
  FaArrowDown,
} from "react-icons/fa";

import {
  SiTerraform,
  SiKubernetes,
  SiGithubactions,
} from "react-icons/si";

import { Typewriter } from "react-simple-typewriter";

function Home() {
  const tools = [
    { name: "AWS", icon: <FaAws /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Jenkins", icon: <FaJenkins /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <main className="min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center min-h-screen">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-purple-400 text-xl mb-4">
            Hi There! 👋
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            I’m{" "}
            <span className="text-purple-400">
              Manny Owoloye
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl mt-8 text-slate-300 h-20">

            <Typewriter
              words={[
                "DevOps Engineer",
                "Cloud Engineer",
                "CI/CD Automation Engineer",
                "Software Engineer",
                "AWS Engineer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />

          </h2>

          <p className="text-slate-400 text-lg leading-8 mt-6 max-w-2xl">

            I build scalable cloud infrastructure, automated CI/CD pipelines,
            containerized applications, monitoring systems, and secure DevOps
            workflows using AWS, Terraform, Jenkins, Docker, Kubernetes,
            Linux, and GitHub Actions.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/projects"
              className="bg-purple-600 hover:bg-purple-700 px-7 py-3 rounded-2xl font-semibold shadow-lg shadow-purple-500/30 transition duration-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/resume/Updated-Owoloye-Resume.docx"
              download
              className="border border-purple-500 hover:bg-purple-500/10 px-7 py-3 rounded-2xl font-semibold transition duration-300 hover:scale-105"
            >
              Download Resume
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl text-slate-300">

            <a
              href="https://github.com/owotee"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://hub.docker.com/u/owotee"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaDocker />
            </a>

          </div>

        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="relative">

            <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-30 rounded-full"></div>

            <img
              src="/profile.jpeg"
              alt="Manny Owoloye"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-purple-400 shadow-2xl"
            />

          </div>

        </motion.div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold mb-12">
          DevOps{" "}
          <span className="text-purple-400">
            Toolbox
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {tools.map((tool) => (

            <motion.div
              key={tool.name}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 text-center hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition"
            >

              <div className="text-5xl text-purple-400 flex justify-center mb-4">
                {tool.icon}
              </div>

              <p className="text-slate-300">
                {tool.name}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      <div className="flex justify-center pb-10 text-purple-400 animate-bounce text-3xl">
        <FaArrowDown />
      </div>

    </main>
  );
}

export default Home;