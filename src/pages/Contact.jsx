import { FaGithub, FaDocker, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6">
        Get In <span className="text-purple-400">Touch</span>
      </h1>

      <p className="text-slate-400 text-xl max-w-3xl leading-9 mb-10">
        I’m open to DevOps, cloud engineering, automation, and infrastructure
        opportunities. Feel free to connect.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <a href="mailto:eowoloye2@gmail.com" className="bg-[#0f172a] border border-purple-500/20 backdrop-blur-xl bg-white/5 rounded-3xl p-8 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition">
          <FaEnvelope className="text-5xl text-purple-400 mb-5" />
          <h2 className="text-2xl font-bold mb-2">Email</h2>
          <p className="text-slate-400">eowoloye2@gmail.com</p>
        </a>

        <a href="https://github.com/owotee" target="_blank" rel="noreferrer" className="bg-[#0f172a] border border-purple-500/20 backdrop-blur-xl bg-white/5 rounded-3xl p-8 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition">
          <FaGithub className="text-5xl text-purple-400 mb-5" />
          <h2 className="text-2xl font-bold mb-2">GitHub</h2>
          <p className="text-slate-400">github.com/owotee</p>
        </a>

        <a href="https://hub.docker.com/u/owotee" target="_blank" rel="noreferrer" className="bg-[#0f172a] border border-purple-500/20 backdrop-blur-xl bg-white/5 rounded-3xl p-8 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition">
          <FaDocker className="text-5xl text-purple-400 mb-5" />
          <h2 className="text-2xl font-bold mb-2">Docker Hub</h2>
          <p className="text-slate-400">hub.docker.com/u/owotee</p>
        </a>
      </div>
    </main>
  );
}

export default Contact;