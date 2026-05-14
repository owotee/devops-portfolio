function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-20 py-20">
      <h1 className="text-5xl font-bold text-cyan-400 mb-8">Contact</h1>

      <p className="text-slate-300 text-xl max-w-3xl leading-8 mb-10">
        Interested in cloud infrastructure, CI/CD automation, Dockerized
        applications, or DevOps collaboration? Let’s connect.
      </p>

      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-3xl space-y-5">
        <p>
          <strong>Email:</strong>{" "}
          <a className="text-cyan-400" href="mailto:Mannyowoloye1@gmail.com">
            Mannyowoloye1@gmail.com
          </a>
        </p>

        <p>
          <strong>Location:</strong> Garland, TX
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            className="text-cyan-400"
            href="https://github.com/owotee"
            target="_blank"
            rel="noreferrer"
          >
            github.com/owotee
          </a>
        </p>

        <p>
          <strong>Docker Hub:</strong>{" "}
          <a
            className="text-cyan-400"
            href="https://hub.docker.com/u/owotee"
            target="_blank"
            rel="noreferrer"
          >
            hub.docker.com/u/owotee
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;