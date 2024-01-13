type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    tech: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Valentin Bouis — Software Engineer",
    fullName: "Valentin Bouis",
    email: "valentin.bouis@gmail.com",
  },
  hero: {
    name: "Valentin",
    p: ["I'm a software engineer", "Fullstack developer and DevOps"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say ?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Software Engineer with over 3 years of experience in full-stack development and leading product
      cycle from conception to completion. I enjoy solving problems, both on a professional and personal
      level. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. I am never done learning and am ready for new challenges !`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    tech: {
      p: "Languages I speak...",
      h2: "Technologies I master..."
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Some of my work",
      h2: "Projects.",
      content: ``,
    },
  },
};
