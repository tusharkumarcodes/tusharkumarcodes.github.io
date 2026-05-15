import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('cv');

  // Navigation Component
  const Nav = () => (
    <nav className="flex justify-center space-x-8 border-b border-gray-200 mb-8 bg-white sticky top-0 z-10">
      <button
        onClick={() => setActiveTab('cv')}
        className={`py-4 px-2 font-medium transition-colors ${
          activeTab === 'cv' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-blue-500'
        }`}
      >
        Interactive CV
      </button>
      <button
        onClick={() => setActiveTab('pdf')}
        className={`py-4 px-2 font-medium transition-colors ${
          activeTab === 'pdf' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-blue-500'
        }`}
      >
        PDF Version
      </button>
    </nav>
  );

  // Interactive CV Content
  const CVContent = () => (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Tushar Kumar</h1>
        <p className="text-xl text-blue-600 font-semibold">Technical Project Manager (11 Years Experience)</p>
        <p className="text-gray-600">Mohali, Punjab | B.Tech Computer Science</p>
      </header>

      {/* Skills Grid */}
      <section>
        <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4 mb-6">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">Methodologies</h3>
            <p className="text-gray-700">Agile (Scrum, Kanban), Waterfall, SDLC Management</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">MERN Stack</h3>
            <p className="text-gray-700">MongoDB, Express.js, React, Node.js, Java</p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4 mb-6">Professional Experience</h2>
        
        <div className="relative pl-8 border-l-2 border-gray-200 space-y-10">
          {/* iTechnolabs */}
          <div className="relative">
            <div className="absolute -left-[41px] bg-blue-600 h-4 w-4 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-bold">Project Manager @ iTechnolabs</h3>
            <p className="text-sm text-gray-500 mb-2">Feb 2025 — Present</p>
            <p className="text-gray-700">Leading end-to-end delivery of custom web and mobile applications. Acting as technical expert in pre-sales to architect project roadmaps.</p>
          </div>

          {/* Trycyfer */}
          <div className="relative">
            <div className="absolute -left-[41px] bg-gray-400 h-4 w-4 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-bold">Project Manager @ Trycyfer</h3>
            <p className="text-sm text-gray-500 mb-2">Jan 2023 — Jan 2025</p>
            <p className="text-gray-700">Managed 15+ external IT vendors and a 30+ member internal team. Implemented Agile processes that significantly boosted delivery efficiency.</p>
          </div>

          {/* AblySoft */}
          <div className="relative">
            <div className="absolute -left-[41px] bg-gray-400 h-4 w-4 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-bold">Business Analyst @ AblySoft</h3>
            <p className="text-sm text-gray-500 mb-2">Feb 2018 — Jan 2023</p>
            <p className="text-gray-700">Bridged technical execution with business needs. Led product development and technical demos for the sales team.</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4 mb-6">Top Certifications</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>Advanced Digital Transformation — IIM Ahmedabad</li>
          <li>FinTech Specialization — The Wharton School</li>
          <li>Full Stack Developer — IBM</li>
          <li>Strategic Business Leadership — University of Glasgow</li>
        </ul>
      </section>
    </div>
  );

  // PDF Viewer Content
  const PDFContent = () => (
    <div className="flex flex-col items-center space-y-6">
      <div className="w-full h-[800px] border rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="./CV-Tushar-Kumar-iTechnolabs.pdf"
          className="w-full h-full"
          title="Tushar Kumar CV"
        />
      </div>
      <a
        href="./CV-Tushar-Kumar-iTechnolabs.pdf"
        download
        className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md"
      >
        Download CV (PDF)
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Nav />
      <main className="px-4">
        {activeTab === 'cv' ? <CVContent /> : <PDFContent />}
      </main>
    </div>
  );
};

export default App;
