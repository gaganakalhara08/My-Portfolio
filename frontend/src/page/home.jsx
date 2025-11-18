import React from "react";

function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1724] to-[#071020] text-[#e6eef8] pb-20 ">
      {/* NAVBAR */}
      <div className="sticky top-0 max-w-full z-10">
        <div className="backdrop-blur-md bg-white/5 shadow-xl px-5 py-3 text-xl flex items-center justify-between">
          <nav className="ml-20 hidden sm:flex items-center gap-20">
              <a
                href="#home"
                className="px-3 py-2 text-white rounded-md text-slate-400 hover:text-white hover:bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold transition"
              > Home
              </a>
              <a
                href="#projects"
                className="px-3 py-2 text-white rounded-md text-slate-400 hover:text-white hover:bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold transition"
              > Projects
              </a>
              <a
                href="#follow-on"
                className="px-3 py-2 text-white rounded-md text-slate-400 hover:text-white hover:bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold transition"
              > Follow Me
              </a>
          </nav>
          
          <div className="hidden sm:block mr-20">
            <a
              href="#contact"
              className="px-3 py-2 text-white rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold transition-all hover:scale-205 hover:shadow-lg hover:shadow-indigo-500/50"
              >Contact With Me
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-3">
        <section id="home" className="pt-24 -mt-24 mb-10">
          {/* Profile Card */}
          <aside className=" p-5 rounded-xl">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white/5 items-center mx-auto mb-4">
              <img
                src="/profile.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="justify-center flex font-semibold">
              <h1 className="text-3xl font-bold text-blue-500">I'M Gagana Kalhara,  </h1>
              <h1 className="text-3xl font-bold pl-2">  Full stack Developer & UI/UX Designer</h1>
            </div>
          </aside>

          <div className="p-6 shadow-inner text-center font-semibold">
            <h1 className="text-5xl font-bold ">About Me</h1>
            <p className="text-slate-400 mt-2">
              I am a product-minded front-end developer passionate about crafting clean, accessible user
              interfaces and delightful experiences.
            </p>
            <p className="text-slate-500 mt-3">
              UX-focused • responsive-first • performance-conscious • accessibility-aware
            </p>
            
          </div>
        </section>

        {/* PROJECTS - FIX APPLIED HERE */}
        <section id="projects" className="mt-20 pt-24 -mt-24 mb-10">
          <div className="text-center font-semibold">
            <h2 className="text-5xl font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            
          </div>
        </section>

        {/* follow on */}
        <section id="follow-on" className="mt-20 pt-24 -mt-24 mb-10">
          <div className="text-center font-semibold">
            <h2 className="text-5xl font-bold">Follow Me</h2>
          </div>
          <div className="flex justify-center mt-10 mb-20 gap-20 font-semibold text-2xl">
            <div>
              <a href="#">
                <img src="/linkedIn.jpg" alt="LinkedIn" className="w-14 h-14 rounded-xl hover:scale-110 transition-transform"/>
              </a>
              <p className="">LinkedIn</p>
            </div>
            <div>
              <a href="#">
                <img src="/github.jpg" alt="GitHub" className="w-14 h-14 rounded-xl hover:scale-110 transition-transform"/>
              </a>
              <p>GitHub</p>
            </div>
            <div>
              <a href="#">
                <img src="/whatsapp.jpg" alt="WhatsApp" className="w-14 h-14 rounded-xl hover:scale-110 transition-transform"/>
              </a>
              <p>WhatsApp</p>
            </div>
            <div>
              <a href="#">
                <img src="/instagram.jpg" alt="Instagram" className="w-14 h-14 rounded-xl hover:scale-110 transition-transform"/>
              </a>
              <p>Instagram</p>
            </div>
            <div>
              <a href="#">
                <img src="/facebook.jpg" alt="Facebook" className="w-14 h-14 rounded-xl hover:scale-110 transition-transform"/>
              </a>
              <p>Facebook</p>
            </div>
          </div>
        </section>

        {/* CONTACT - FIX APPLIED HERE */}
        <section id="contact" className="mt-10 pt-24 -mt-24 mb-10">
          <h2 className="text-7xl font-bold text-center">Get In Touch</h2>

          <div className="grid md:grid-cols-2 text-white gap-5 mt-10 font-semibold">
            <aside className="">
              <h3 className="font-bold text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-10">Quick details</h3>
              <div className="">
                <div className="flex justify-start gap-5 mb-5">
                  <img src="/email.png" alt="Email" className="w-14 h-14 rounded-xl"/>
                  <div className="text-2xl text-white p-3">ggaganakalhara08@gmail.com</div>
                </div>
                <div className="flex justify-start gap-5 mb-5">
                  <img src="/phone.png" alt="Phone" className="w-14 h-14 rounded-xl"/>
                  <div className="text-2xl text-white p-3">+94729305264</div>
                </div>
                <div className="flex justify-start gap-5 mb-5">
                  <img src="/location.png" alt="Location" className="w-14 h-14 rounded-xl"/>
                  <div className="text-2xl text-white p-3">No-175/2, Indolamulla, Dompe, Sri Lanka</div>
                </div>
              </div>
            </aside>
            
            <div className="text-2xl">
              <form className="grid gap-3 ">
                  <div className="flex flex-col">
                    <label className="">Your Name</label>
                    <input
                      type="text"
                      className="bg-[#1e293b] p-5 mt-5 rounded-lg border border-slate-700 focus:outline-none focus:border-purple-600"/>
                  </div>
                  <div className="flex flex-col">
                    <label className="">Your Email</label>  
                    <input 
                      type="email"
                      className="bg-[#1e293b] p-5 mt-5 rounded-lg border border-slate-700 focus:outline-none focus:border-purple-600"/>
                  </div>
                  <div className="flex flex-col">
                    <label className="">Message</label>
                    <textarea 
                      rows="5"
                      className="bg-[#1e293b] p-2 mt-5 rounded-lg border border-slate-700 focus:outline-none focus:border-purple-600"></textarea>
                  </div>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-lg font-bold mt-5 hover:scale-105 transition-transform">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-500 mt-10">
          © {new Date().getFullYear()} Your Name — Built with care.
        </footer>
      </main>
    </div>
  );
}

export default Portfolio;