import  { useState } from "react";
import { Send, MapPin, Mail, Facebook, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "c6e14656-a43d-4c71-852a-e79f03973570"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main className="pt-10 sm:pt-24 lg:pt-[0rem] bg-[#0f1629] text-white min-h-screen">
       
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
       
          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop us a message!
                </p>
              </div>

              <div className="space-y-6">
                <div onClick={()=> window.location.href = "https://www.facebook.com/MostasirMahim"} className="flex items-center space-x-4 cursor-pointer">
                  <div className="bg-purple-500/10 p-3 rounded-lg ">
                    <Facebook className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Facebook</h3>
                    <p className="text-gray-400">@mostasirmahim</p>
                  </div>
                </div>
                <div onClick={()=>  window.location.href = 'https://www.linkedin.com/in/mostasirmahim/'} className="flex items-center space-x-4 cursor-pointer">
                  <div className="bg-purple-500/10 p-3 rounded-lg ">
                    <Linkedin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Linkedin</h3>
                    <p className="text-gray-400">Mostasir Mahim</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">mostasirmahim@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Mirpur-13,Block D, Dhaka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <div className="mt-4 text-center text-gray-300">
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
