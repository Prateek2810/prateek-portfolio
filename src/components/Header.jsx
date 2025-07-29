function Header() {
  return (
    <header className="bg-black/30 backdrop-blur-sm text-white p-4">
      <h1 className="text-4xl font-bold text-center text-white">Prateek Dubey</h1>
      <h2 className="text-lg text-center text-white mt-1">
        Senior WordPress & WooCommerce Full Stack Developer
      </h2>

      <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
        <a
          href="/Prateek_Dubey_Resume.pdf"
          download
          className="bg-[rgb(44,49,54)] hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          📄 Download Resume
        </a>

        <a
          href="https://www.linkedin.com/in/your-linkedin-id"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgb(44,49,54)] hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          🔗 LinkedIn
        </a>

        <a
          href="https://github.com/your-github-id"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgb(44,49,54)] hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          🐙 GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
