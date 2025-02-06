
import profileImage from "../assets/images/profileImg.png";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
          Hello! I’m Mostasir Mahim, a passionate Full-Stack MERN Developer dedicated to building scalable, secure, and structured web applications. I specialize in crafting efficient web solutions with intuitive, user-friendly interfaces, ensuring seamless performance and modern design.Currently, I’m expanding my expertise in TypeScript to enhance my ability to develop large-scale, maintainable applications. A lifelong learner, I thrive on innovation and aim to contribute to the developer community by creating cutting-edge tools and solutions that drive real value.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-xl object-cover  shadow-2xl shadow-sky-400"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
