import profileImg from "./images/WhatsApp Image 2026-03-06 at 17.06.47.jpeg";

const AboutSection = () => (
  <section id="about" className="section-padding bg-card mt-20">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg">
            <img
              src={profileImg}
              alt="Sumaya Abdi Ali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-5">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Hello! I'm <span className="gradient-text">Sumaya Abdi Ali</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A passionate Frontend Developer with a deep love for creating innovative digital experiences. I specialize in building scalable web applications using modern technologies like React and Tailwind CSS.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm particularly passionate about creating user-centric solutions that not only look great but also perform exceptionally well.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              { label: "Frontend Developer", value: "" },
              { label: "Location: Somalia", value: "" },
              { label: "Experience: 1+ Years", value: "" },
            ].map((b) => (
              <span
                key={b.label}
                className="text-xs font-medium px-4 py-2 rounded-full border border-primary/30 text-primary"
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
