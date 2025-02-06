
import { Github, ExternalLink } from "lucide-react";
import maraz from "../assets/images/maraz1.png";
import mahimx from "../assets/images/mahimx1.png";
import whatsup from "../assets/images/whtasup.png";
import mahimai from "../assets/images/mahimai.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Maraz - A Multi-Seller E-Commerce Platform",
      description:
        "Maraz is a multi-seller e-commerce platform that features a fully functional shop admin dashboard, super admin panel, message system, product management, order tracking, review management, cart, wishlist and excel file export.",
      tags: ["Vite", "Tailwind", "MongoDB", "Express", "Socket.io", "Zustand", "Formik-Yup", "JWT","xlsx"],
      links: {
        github: "https://github.com/MostasirMahim/Maraz-Source-Code",
        demo: "maraz.onrender.com",
      },
      image: maraz,
      featured: true,
    },
    {
      title: "MahimX - Social Media Platform",
      description:
        "MahimX is a social media platform like Twitter(X) that allows users to create, share, send messages and manage their own posts, comments, and reactions. Users can also interact with other users through messages, comments and reactions.",
      tags: ["Vite", "Tailwind", "MongoDB", "Express", "Socket.io", "DaisyUI", "JWT","React-Modal"],
      links: {
        github: "https://github.com/MostasirMahim/Twitter-Clone",
        demo: "https://mahimx.onrender.com",
      },
      image: mahimx,
      featured: true,
    },
    {
      title: "WhtasUp - Realtime Chat Application",
      description:
        "WhtasUp is a realtime chat application like WhatsApp that allows users to send messages and share files with their friends.",
      tags: ["Vite", "Tailwind", "MongoDB Atlas", "Express", "Socket.io", "DaisyUI", "JWT","Zustand"],
      links: {
        github: "https://github.com/MostasirMahim/Whatsapp-Clone",
        demo: "https://whatsup-mmco.onrender.com",
      },
      image: whatsup,
      featured: false,
    },
    {
      title: "MahimAI - AI Chatbot Powered by Gemini",
      description:
        "MahimAI is an AI chatbot that is powered by Gemini, a powerful AI engine that can understand and respond to user queries. MahimAI can provide information, answer questions, and even save chats on browser local storage.",
      tags: ["Vite", "Tailwind", "LocalStorage", "SessionStorage", "Gemini", "Flash-1.5"],
      links: {
        github: "https://github.com/MostasirMahim/Chatbot",
        demo: "https://mahimai.netlify.app",
      },
      image: mahimai,
      featured: false,
    },
  ];

  return (
    <div className="pt-40 min-h-screen bg-[#0f1629] p-8 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      {project.featured ? "Featured Project" : "Practice Project"}
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-md leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
