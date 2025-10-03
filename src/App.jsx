function App() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          👋 Welcome to My Portfolio
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Hi, I'm <span className="font-semibold text-blue-600">Navin Kumar Jha</span> — a passionate MERN Stack Developer from Madhubani, Bihar.<br />
          I build full-stack web applications that are scalable, efficient, and user-friendly.
        </p>

        <p className="text-base text-gray-500 mt-4 max-w-xl">
          🚀 Always excited to solve real-world problems through code. <br />
          🌱 This portfolio is a reflection of my learning journey, skills, and projects I’ve crafted with dedication.
        </p>
        <div>
          <div className="rounded-xl p-6  mt-10 max-w-4xl mx-auto shadow-lg border border-blue-200">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">📂 Project Management System (PMS)</h2>

            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              A full-stack <span className="font-semibold text-blue-600">Project Management System</span> built with a modern and modular architecture using:
              <span className="font-medium text-blue-500"> React, Vite, Tailwind CSS, Zustand</span> on the frontend and
              <span className="font-medium text-blue-500"> Node.js, Express, MySQL</span> on the backend.
              <br /><br />
              The system efficiently handles <span className="text-green-700 font-semibold">projects, tasks, priorities, roles, logs, notifications</span>, and more — offering role-based access control, document generation (PDF/XLSX), and real-time task collaboration.
              <br /><br />
              🚀 Backend is secured with cookie-based authentication and JWT, uses structured APIs, and integrates robust tools like Nodemailer, OTP generator, and MySQL foreign keys for data integrity.<br />
              🧠 Frontend leverages <span className="font-semibold text-blue-600">Zustand</span> for state management, <span className="font-semibold text-blue-600">React Query</span> for data caching, and <span className="font-semibold text-blue-600">React Hot Toast</span> for dynamic notifications.
              <br /><br />
              This platform is designed for teams and organizations to manage multiple projects, track task statuses, generate reports, and streamline communication.
            </p>
            <a
              href="https://pms-frontend-topaz-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
            >
              🔗 Explore PMS Project
            </a>
          </div>


          <div className="rounded-xl p-6  mt-10 max-w-4xl mx-auto shadow-lg border border-blue-200">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">🧩 Human Capital Management System (HCM)</h2>

            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              A complete <span className="font-semibold text-blue-600"> Human Resource Management System (HRMS)</span> solution developed with a powerful full-stack architecture.
              <br /><br />
              🔹 <span className="font-medium text-blue-500">Frontend:</span> Built using <span className="font-semibold">React 19</span>, <span className="font-semibold">Vite</span>, <span className="font-semibold">Tailwind CSS</span>, and <span className="font-semibold">React Router 7</span>.
              It's fast, responsive, and built with modular components and clean routing — offering a modern and intuitive user interface.
              <br /><br />
              🔹 <span className="font-medium text-blue-500">Backend:</span> Developed using <span className="font-semibold">Node.js, Express,</span> and <span className="font-semibold">MySQL</span>.
              The backend manages complex organizational data like companies, divisions, departments, job roles, and positions using modular RESTful APIs and strict data structure validation.
              <br /><br />
              🧠 Features include structured routing, secure API communication with Axios, role-based access (RBAC), and scalable design — making it ready for enterprise-level integration.
              <br /><br />
              Whether it's HR operations, org-structure modeling, or employee data handling — this system handles it all with performance and clarity.
            </p>

            <a
              href="#projects"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
            >
              🔗 Explore HRMS Project
            </a>
          </div>
        </div>
        <div className="mt-16 bg-white w-full py-12 px-4 shadow-inner border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-6">📞 Get in Touch</h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Interested in working together or just want to say hi? Feel free to reach out!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-center text-lg text-gray-700">
            <a
              href="mailto:njha55360@gmail.com"
              className="hover:text-blue-600 transition duration-300"
            >
              ✉️ Gmail..
            </a>
            <a
              href="https://www.linkedin.com/in/navinjha04/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              🔗 LinkedIn..
            </a>
            <a
              href="https://github.com/navin-jha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              💻 GitHub..
            </a>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;

