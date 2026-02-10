import { NextRequest,NextResponse } from "next/server";
const courses = [
  {
    topic: "Voix Off",
    courses: [
      {
        id: 1,
        name: "Voice Acting Essentials",
        title: "Mastering the Basics of Voice Acting",
        organizer: "Studio Pro Voices",
        goal: "This course teaches fundamental techniques in voice acting, including breathing, articulation, tone control, and emotional delivery. Students will develop the confidence and skill to perform narration, commercials, and character voices professionally.",
        reviews: ["Excellent training!", "Helped me improve my tone", "Perfect for beginners"],
        description: {
          introduction: "Voice acting is more than reading a script. Learn to control your breathing, manage tone, and bring scripts to life through expressive delivery. Practice techniques used in entertainment and advertising industries.",
          moduleExplanation: "Modules: voice warmups, diction and clarity, emotional expression, character building, professional recording practices.",
          prerequisites: "Basic knowledge of English and access to a microphone."
        },
        otherInfo: {
          price: "4500 DZD",
          status: "Open",
          type: "Online",
          duration: "6 weeks",
          level: "Beginner"
        }
      },
      {
        id: 2,
        name: "Narration Techniques",
        title: "Telling Stories with Your Voice",
        organizer: "Creative Voices Lab",
        goal: "Students will learn to narrate stories with clarity, authenticity, and emotion, understanding pacing, rhythm, and connection with listeners.",
        reviews: ["Very inspiring", "My narration improved a lot"],
        description: {
          introduction: "Narration is about creating an emotional experience. Learn professional techniques for documentaries, audiobooks, and educational content.",
          moduleExplanation: "Breathing techniques, storytelling flow, emotional emphasis, practice with sample scripts.",
          prerequisites: "No prior experience required."
        },
        otherInfo: {
          price: "3800 DZD",
          status: "Open",
          type: "Hybrid",
          duration: "4 weeks",
          level: "Beginner"
        }
      },
      {
        id: 3,
        name: "Commercial Voice Over",
        title: "Advertising Voice Techniques",
        organizer: "VoicePro Academy",
        goal: "Focus on crafting compelling commercial scripts, delivering persuasive and engaging advertisements with professional voice techniques.",
        reviews: ["Very useful", "Improved my commercial recordings"],
        description: {
          introduction: "This course teaches how to interpret commercial scripts and deliver them convincingly. Includes practical exercises and feedback.",
          moduleExplanation: "Script reading, emphasis techniques, pacing, microphone handling.",
          prerequisites: "Basic voice control recommended."
        },
        otherInfo: {
          price: "4200 DZD",
          status: "Open",
          type: "Online",
          duration: "5 weeks",
          level: "Beginner"
        }
      },
      {
        id: 4,
        name: "Character Voice Mastery",
        title: "Bring Characters to Life with Your Voice",
        organizer: "Voice Lab Pro",
        goal: "Learn to create distinct character voices, understand personality traits, and apply emotional expression for storytelling or animation.",
        reviews: ["Fun and creative", "Great for animation projects"],
        description: {
          introduction: "Explore voice modulation, pitch variation, and accent techniques to develop unique characters for audio and animation.",
          moduleExplanation: "Modules: character design, voice modulation, accents, expressive delivery, roleplay exercises.",
          prerequisites: "Basic voice acting skills recommended."
        },
        otherInfo: {
          price: "5000 DZD",
          status: "Open",
          type: "Online",
          duration: "6 weeks",
          level: "Intermediate"
        }
      },
      {
        id: 5,
        name: "Podcast Voice Training",
        title: "Engage Your Listeners Effectively",
        organizer: "Podcast Academy",
        goal: "Develop a captivating voice for podcasts, mastering tone, pacing, clarity, and consistency to retain audience attention.",
        reviews: ["Very informative", "Helped improve my recordings"],
        description: {
          introduction: "Learn how to sound natural, expressive, and professional in podcast recordings. Covers preparation, script reading, and recording techniques.",
          moduleExplanation: "Modules: voice projection, intonation, pacing, recording setup, editing basics.",
          prerequisites: "No prior experience needed."
        },
        otherInfo: {
          price: "4000 DZD",
          status: "Open",
          type: "Online",
          duration: "5 weeks",
          level: "Beginner"
        }
      },
      {
        id: 6,
        name: "Audiobook Narration",
        title: "Professional Audiobook Techniques",
        organizer: "Narration Academy",
        goal: "Train students to narrate audiobooks professionally, handling long scripts, character differentiation, and consistent tone throughout recordings.",
        reviews: ["Great tips for long recordings", "Improved stamina and clarity"],
        description: {
          introduction: "Covers preparation, voice endurance, pacing, and expressive narration for fiction and non-fiction audiobooks.",
          moduleExplanation: "Modules: script analysis, pacing, character differentiation, long-session recording practice.",
          prerequisites: "Some experience in voice or reading aloud recommended."
        },
        otherInfo: {
          price: "5500 DZD",
          status: "Open",
          type: "Hybrid",
          duration: "6 weeks",
          level: "Intermediate"
        }
      },
      {
        id: 7,
        name: "Commercial Jingle Voice",
        title: "Singing and Speaking for Ads",
        organizer: "Voice Pro Music Lab",
        goal: "Combine singing and speaking skills to record catchy and persuasive commercial jingles effectively.",
        reviews: ["Fun and musical", "Good for ad work"],
        description: {
          introduction: "Students learn to match voice tone with jingles, pitch, and rhythm for effective advertising.",
          moduleExplanation: "Modules: singing basics, diction, rhythm, commercial interpretation.",
          prerequisites: "Basic singing or vocal control helpful."
        },
        otherInfo: {
          price: "4700 DZD",
          status: "Open",
          type: "Online",
          duration: "4 weeks",
          level: "Beginner"
        }
      },
      {
        id: 8,
        name: "Advanced Dubbing Techniques",
        title: "Professional Film and Animation Dubbing",
        organizer: "Cinema Voice Lab",
        goal: "Learn dubbing for films and animation, including syncing to lip movements, emotional delivery, and character consistency.",
        reviews: ["Excellent course for dubbing", "Highly practical"],
        description: {
          introduction: "Advanced techniques for matching voice with characters on screen. Covers timing, emotion, and studio practice.",
          moduleExplanation: "Modules: lip-sync, character voice, timing, recording practice.",
          prerequisites: "Intermediate voice acting experience required."
        },
        otherInfo: {
          price: "6000 DZD",
          status: "Open",
          type: "Hybrid",
          duration: "6 weeks",
          level: "Advanced"
        }
      },
      {
        id: 9,
        name: "Professional Voice Studio Work",
        title: "Recording Like a Pro in a Studio",
        organizer: "Studio Pro Voices",
        goal: "Teach students professional studio workflow, recording techniques, mic placement, and post-processing basics to produce broadcast-quality audio.",
        reviews: ["Very technical and useful", "Learned studio workflow"],
        description: {
          introduction: "Focuses on recording in professional studios, using equipment correctly, and producing high-quality audio ready for commercial use.",
          moduleExplanation: "Modules: microphone techniques, audio processing, editing basics, workflow management.",
          prerequisites: "Some voice experience recommended."
        },
        otherInfo: {
          price: "6500 DZD",
          status: "Open",
          type: "In-person",
          duration: "6 weeks",
          level: "Advanced"
        }
      }
    ]
  }
];

courses.push({
  topic: "Divertissement",
  courses: [
    {
      id: 10,
      name: "Stand-Up Comedy Fundamentals",
      title: "The Art of Making People Laugh",
      organizer: "Comedy Hub",
      goal: "Teach students how to write, perform, and deliver jokes effectively. Focus on timing, stage presence, and connecting with audiences to create impactful comedic performances.",
      reviews: ["So much fun!", "Helped me with confidence", "Excellent course for beginners"],
      description: {
        introduction: "Learn the fundamentals of stand-up comedy, from crafting jokes to performing live. Students will practice writing scripts, understanding timing, and building stage presence.",
        moduleExplanation: "Modules include joke writing, delivery techniques, stage performance exercises, and improvisation practice.",
        prerequisites: "No prior experience needed, just a sense of humor and creativity."
      },
      otherInfo: {
        price: "4000 DZD",
        status: "Open",
        type: "In-person",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 11,
      name: "Improvisation Techniques",
      title: "Think Fast and Entertain",
      organizer: "Comedy Hub",
      goal: "Develop quick-thinking and creative skills for improvisational performances. Learn to react spontaneously, collaborate with others, and engage an audience in real-time.",
      reviews: ["Challenging but fun", "Improved my creativity"],
      description: {
        introduction: "This course focuses on improvisation techniques for comedy, theater, and live entertainment. Students will practice spontaneous storytelling and group collaboration.",
        moduleExplanation: "Modules: improvisational exercises, team collaboration, stage games, real-time problem solving.",
        prerequisites: "Open to all skill levels."
      },
      otherInfo: {
        price: "4200 DZD",
        status: "Open",
        type: "In-person",
        duration: "4 weeks",
        level: "Beginner"
      }
    },
    {
      id: 12,
      name: "Entertainment Hosting",
      title: "Engage Audiences as a Professional Host",
      organizer: "Event Masters",
      goal: "Train students in hosting events, shows, and online content with confidence, charisma, and professional communication skills.",
      reviews: ["Very practical", "Great for online streaming"],
      description: {
        introduction: "Learn how to present, moderate, and engage audiences during events or online shows. Covers voice control, stage presence, and audience interaction.",
        moduleExplanation: "Modules: presentation skills, voice modulation, audience engagement, hosting practice.",
        prerequisites: "Basic speaking skills recommended."
      },
      otherInfo: {
        price: "4500 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 13,
      name: "Event Entertainment Planning",
      title: "Design Memorable Shows",
      organizer: "Entertainment Academy",
      goal: "Teach students how to plan and execute live entertainment events, including logistics, audience engagement, and creative programming.",
      reviews: ["Very informative", "Helped me organize events better"],
      description: {
        introduction: "Focus on planning entertainment events that captivate audiences. Learn creative programming, managing performers, and ensuring seamless event execution.",
        moduleExplanation: "Modules: event planning, scheduling, performer coordination, audience interaction, live feedback.",
        prerequisites: "No experience needed, interest in event planning helpful."
      },
      otherInfo: {
        price: "4800 DZD",
        status: "Open",
        type: "In-person",
        duration: "6 weeks",
        level: "Beginner"
      }
    }
  ]
});
courses.push({
  topic: "Workshop",
  courses: [
    {
      id: 52,
      name: "Creative Writing Workshop",
      title: "Develop Your Writing Skills",
      organizer: "Writers Hub",
      goal: "Enhance creative writing skills through exercises, prompts, and feedback, learning to craft compelling stories, characters, and narratives.",
      reviews: ["Inspiring and practical", "Improved my writing style"],
      description: {
        introduction: "Focus on storytelling techniques, character development, plot structuring, and stylistic writing. Students will practice creating engaging content for various formats.",
        moduleExplanation: "Modules: storytelling, character creation, plot development, writing exercises, peer feedback.",
        prerequisites: "Open to all levels."
      },
      otherInfo: {
        price: "4200 DZD",
        status: "Open",
        type: "In-person",
        duration: "4 weeks",
        level: "Beginner"
      }
    },
    {
      id: 53,
      name: "Photography Workshop",
      title: "Mastering Photography Techniques",
      organizer: "Creative Lens Academy",
      goal: "Learn essential photography skills including composition, lighting, and post-processing to create professional-level images.",
      reviews: ["Very hands-on", "Improved my photos greatly"],
      description: {
        introduction: "Explore camera settings, lighting techniques, and editing basics. Students will complete practical assignments and receive feedback on their work.",
        moduleExplanation: "Modules: camera basics, composition, lighting, post-processing, project work.",
        prerequisites: "Basic camera knowledge recommended."
      },
      otherInfo: {
        price: "5000 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 54,
      name: "Public Speaking Workshop",
      title: "Boost Your Confidence and Presentation Skills",
      organizer: "Communication Hub",
      goal: "Develop confidence and clarity in public speaking, learning techniques to engage audiences effectively.",
      reviews: ["Helped me overcome stage fear", "Very practical exercises"],
      description: {
        introduction: "Covers voice modulation, body language, speech structuring, and audience engagement. Practice and feedback sessions included.",
        moduleExplanation: "Modules: speech writing, delivery techniques, audience interaction, practice sessions.",
        prerequisites: "No prior experience required."
      },
      otherInfo: {
        price: "4500 DZD",
        status: "Open",
        type: "Online",
        duration: "4 weeks",
        level: "Beginner"
      }
    },
    {
      id: 55,
      name: "Digital Marketing Workshop",
      title: "Practical Digital Marketing Skills",
      organizer: "Marketing Academy",
      goal: "Learn to plan, execute, and analyze digital marketing campaigns using social media, SEO, and content strategies.",
      reviews: ["Very informative", "Practical exercises helped me a lot"],
      description: {
        introduction: "Focus on real-world digital marketing strategies, analytics, campaign planning, and performance measurement. Hands-on practice included.",
        moduleExplanation: "Modules: SEO, social media, email marketing, campaign analysis, project work.",
        prerequisites: "Basic internet skills recommended."
      },
      otherInfo: {
        price: "4800 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "5 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 56,
      name: "Art and Design Workshop",
      title: "Develop Creative Art Skills",
      organizer: "Creative Arts Academy",
      goal: "Learn techniques in drawing, painting, and visual expression to develop a strong artistic portfolio.",
      reviews: ["Great techniques and exercises", "Fun and creative"],
      description: {
        introduction: "Explore color theory, composition, and various artistic mediums. Practical projects to build creative confidence.",
        moduleExplanation: "Modules: drawing basics, painting techniques, portfolio creation, critique sessions.",
        prerequisites: "No prior experience required."
      },
      otherInfo: {
        price: "4700 DZD",
        status: "Open",
        type: "In-person",
        duration: "6 weeks",
        level: "Beginner"
      }
    },
    {
      id: 57,
      name: "Music Production Workshop",
      title: "Create and Produce Your Own Music",
      organizer: "Sound Lab",
      goal: "Learn music production skills including composition, mixing, and mastering using digital audio workstations.",
      reviews: ["Very practical", "Helped me produce my first track"],
      description: {
        introduction: "Covers DAW operation, recording techniques, audio editing, and mixing/mastering processes. Includes project work for hands-on experience.",
        moduleExplanation: "Modules: DAW basics, composition, mixing, mastering, project creation.",
        prerequisites: "Basic music knowledge recommended."
      },
      otherInfo: {
        price: "5500 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "6 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 58,
      name: "Cooking Workshop",
      title: "Learn Professional Cooking Techniques",
      organizer: "Culinary Arts Academy",
      goal: "Develop culinary skills, recipe planning, and kitchen management to create professional-quality dishes.",
      reviews: ["Fun and informative", "Learned many cooking techniques"],
      description: {
        introduction: "Students will practice preparing various dishes, understand kitchen tools, and learn presentation techniques.",
        moduleExplanation: "Modules: basic cooking techniques, recipe creation, plating, kitchen management.",
        prerequisites: "Open to all levels."
      },
      otherInfo: {
        price: "4300 DZD",
        status: "Open",
        type: "In-person",
        duration: "4 weeks",
        level: "Beginner"
      }
    },
    {
      id: 59,
      name: "Photography Editing Workshop",
      title: "Master Photo Editing Software",
      organizer: "Creative Lens Academy",
      goal: "Learn to edit and enhance photos professionally using modern software, focusing on quality, style, and efficiency.",
      reviews: ["Helped me edit photos professionally", "Very detailed lessons"],
      description: {
        introduction: "Students will learn software techniques, color correction, retouching, and creative effects to enhance their photography work.",
        moduleExplanation: "Modules: software basics, color correction, retouching, creative edits, final projects.",
        prerequisites: "Basic photography knowledge recommended."
      },
      otherInfo: {
        price: "4600 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "5 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 60,
      name: "Film Making Workshop",
      title: "Create Short Films from Concept to Screen",
      organizer: "Cinema Academy",
      goal: "Teach students the complete process of filmmaking including scripting, shooting, directing, and post-production.",
      reviews: ["Very hands-on and creative", "Learned a lot about filmmaking"],
      description: {
        introduction: "Students will plan, shoot, and edit short films, learning professional techniques and storytelling methods used in the industry.",
        moduleExplanation: "Modules: scriptwriting, camera operation, directing, editing, post-production.",
        prerequisites: "No prior experience required."
      },
      otherInfo: {
        price: "6000 DZD",
        status: "Open",
        type: "In-person",
        duration: "6 weeks",
        level: "Intermediate"
      }
    }
  ]
});
courses.push({
  topic: "Informatique",
  courses: [
    {
      id: 61,
      name: "Introduction to Programming",
      title: "Learn the Fundamentals of Coding",
      organizer: "Code Academy",
      goal: "Teach students the basics of programming logic, algorithms, and syntax using beginner-friendly languages like Python or JavaScript.",
      reviews: ["Great start for beginners", "Easy to follow and practical"],
      description: {
        introduction: "Learn programming from scratch. Focus on variables, loops, functions, and problem-solving techniques to build a strong coding foundation.",
        moduleExplanation: "Modules: programming basics, control structures, functions, basic algorithms, small projects.",
        prerequisites: "No prior coding experience required."
      },
      otherInfo: {
        price: "4000 DZD",
        status: "Open",
        type: "Online",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 62,
      name: "Web Development Basics",
      title: "Build Your First Website",
      organizer: "Code Academy",
      goal: "Teach students HTML, CSS, and basic JavaScript to create static and dynamic web pages from scratch.",
      reviews: ["Very practical", "I built my first website"],
      description: {
        introduction: "Students will learn to structure web pages, style them using CSS, and add basic interactivity with JavaScript. Hands-on exercises included.",
        moduleExplanation: "Modules: HTML basics, CSS styling, JavaScript introduction, building mini-projects.",
        prerequisites: "Basic computer literacy."
      },
      otherInfo: {
        price: "4200 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "6 weeks",
        level: "Beginner"
      }
    },
    {
      id: 63,
      name: "Data Structures & Algorithms",
      title: "Core Computer Science Concepts",
      organizer: "CS Academy",
      goal: "Understand essential data structures, algorithm design, and complexity analysis to solve real-world computational problems.",
      reviews: ["Challenging but rewarding", "Excellent explanations"],
      description: {
        introduction: "Focus on arrays, linked lists, stacks, queues, trees, sorting algorithms, and searching algorithms with practical exercises.",
        moduleExplanation: "Modules: basic data structures, algorithm analysis, problem-solving exercises, mini-projects.",
        prerequisites: "Basic programming knowledge recommended."
      },
      otherInfo: {
        price: "5000 DZD",
        status: "Open",
        type: "Online",
        duration: "6 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 64,
      name: "Database Fundamentals",
      title: "Learn SQL and Data Management",
      organizer: "DB Academy",
      goal: "Teach students relational database design, SQL queries, and data management principles for building and maintaining databases.",
      reviews: ["Very informative", "Helped me with projects"],
      description: {
        introduction: "Learn database concepts, table design, querying with SQL, and basic data management. Practical exercises included.",
        moduleExplanation: "Modules: relational database design, SQL basics, CRUD operations, projects.",
        prerequisites: "Basic programming knowledge recommended."
      },
      otherInfo: {
        price: "4500 DZD",
        status: "Open",
        type: "Online",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 65,
      name: "Networking Basics",
      title: "Understand Computer Networks",
      organizer: "Tech Network Academy",
      goal: "Provide foundational knowledge of computer networking, including protocols, IP addressing, and network troubleshooting.",
      reviews: ["Clear and practical", "Good for beginners"],
      description: {
        introduction: "Learn the concepts of networking, LAN/WAN, protocols, and basic troubleshooting techniques for real-world applications.",
        moduleExplanation: "Modules: network types, IP addressing, protocols, practical labs.",
        prerequisites: "No prior experience required."
      },
      otherInfo: {
        price: "4800 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 66,
      name: "Cybersecurity Essentials",
      title: "Protect Systems and Data",
      organizer: "Security Academy",
      goal: "Teach students fundamental cybersecurity concepts including encryption, authentication, and threat mitigation.",
      reviews: ["Very educational", "Useful for my job"],
      description: {
        introduction: "Focus on securing computers, networks, and data. Learn about common threats, attacks, and defense strategies.",
        moduleExplanation: "Modules: security basics, encryption, authentication, threat detection, hands-on exercises.",
        prerequisites: "Basic computer knowledge required."
      },
      otherInfo: {
        price: "5200 DZD",
        status: "Open",
        type: "Online",
        duration: "6 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 67,
      name: "Cloud Computing Fundamentals",
      title: "Learn Cloud Platforms and Services",
      organizer: "Cloud Academy",
      goal: "Introduce cloud computing concepts, architectures, and services such as storage, compute, and deployment in the cloud.",
      reviews: ["Very practical", "Good introduction to cloud"],
      description: {
        introduction: "Learn about cloud providers, virtualization, deploying applications in the cloud, and understanding cloud infrastructure.",
        moduleExplanation: "Modules: cloud concepts, service models, deployment, hands-on exercises.",
        prerequisites: "Basic programming knowledge recommended."
      },
      otherInfo: {
        price: "5500 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "5 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 68,
      name: "Software Testing Basics",
      title: "Ensure Quality in Software Projects",
      organizer: "QA Academy",
      goal: "Provide knowledge of testing methodologies, test case design, and debugging practices for software development.",
      reviews: ["Helped me understand testing", "Very hands-on"],
      description: {
        introduction: "Learn how to plan, execute, and document tests. Focus on manual testing techniques, test management, and bug reporting.",
        moduleExplanation: "Modules: testing basics, test case writing, bug tracking, practical exercises.",
        prerequisites: "Basic programming knowledge recommended."
      },
      otherInfo: {
        price: "4600 DZD",
        status: "Open",
        type: "Online",
        duration: "4 weeks",
        level: "Beginner"
      }
    }
  ]
});
courses.push({
  topic: "Graphic design",
  courses: [
    {
      id: 69,
      name: "Introduction to Graphic Design",
      title: "Learn the Basics of Visual Communication",
      organizer: "Design Academy",
      goal: "Understand the fundamentals of graphic design, including color theory, typography, and layout principles to create visually compelling designs.",
      reviews: ["Very clear", "Great for beginners"],
      description: {
        introduction: "Learn how to combine colors, fonts, and images effectively. Explore basic design tools and create simple visual projects.",
        moduleExplanation: "Modules: color theory, typography, layout, design software basics, projects.",
        prerequisites: "No prior experience required."
      },
      otherInfo: {
        price: "4000 DZD",
        status: "Open",
        type: "Online",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 70,
      name: "Photoshop Essentials",
      title: "Master Adobe Photoshop for Creative Projects",
      organizer: "Design Academy",
      goal: "Learn the core tools and techniques of Photoshop to create and edit images for professional-quality design projects.",
      reviews: ["Very practical", "Helped me a lot with my projects"],
      description: {
        introduction: "Covers layers, masks, selections, retouching, and creative effects. Students will complete hands-on projects.",
        moduleExplanation: "Modules: workspace, layers, selections, retouching, projects.",
        prerequisites: "Basic computer skills recommended."
      },
      otherInfo: {
        price: "4500 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "6 weeks",
        level: "Beginner"
      }
    },
    {
      id: 71,
      name: "Illustrator Essentials",
      title: "Create Vector Graphics Professionally",
      organizer: "Design Academy",
      goal: "Learn to design logos, icons, and vector-based illustrations using Adobe Illustrator.",
      reviews: ["Very hands-on", "Clear instructions"],
      description: {
        introduction: "Focus on vector tools, shapes, pen tool, and illustration techniques. Complete practical projects to build a portfolio.",
        moduleExplanation: "Modules: vector tools, pen tool, illustrations, logo creation, projects.",
        prerequisites: "No prior experience required."
      },
      otherInfo: {
        price: "4700 DZD",
        status: "Open",
        type: "Online",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 72,
      name: "UI Design Basics",
      title: "Design User Interfaces for Web and Mobile",
      organizer: "UX Design Academy",
      goal: "Understand the principles of user interface design, including layout, visual hierarchy, and usability for digital products.",
      reviews: ["Helpful for creating apps", "Very practical"],
      description: {
        introduction: "Learn wireframing, prototyping, and visual design for websites and mobile apps. Focus on user-centered design principles.",
        moduleExplanation: "Modules: UI principles, wireframes, prototypes, visual hierarchy, mini-projects.",
        prerequisites: "Basic design or software knowledge recommended."
      },
      otherInfo: {
        price: "4800 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "6 weeks",
        level: "Beginner"
      }
    },
    {
      id: 73,
      name: "Typography Essentials",
      title: "Master the Art of Typography",
      organizer: "Design Academy",
      goal: "Learn how to select and combine fonts effectively to enhance visual communication in design projects.",
      reviews: ["Very detailed", "Improved my design skills"],
      description: {
        introduction: "Covers font selection, hierarchy, readability, and pairing techniques. Students will practice applying typography to projects.",
        moduleExplanation: "Modules: font selection, hierarchy, pairing, projects, critiques.",
        prerequisites: "No prior experience required."
      },
      otherInfo: {
        price: "4200 DZD",
        status: "Open",
        type: "Online",
        duration: "4 weeks",
        level: "Beginner"
      }
    },
    {
      id: 74,
      name: "Branding Design Workshop",
      title: "Create Strong Brand Identities",
      organizer: "Creative Design Academy",
      goal: "Learn to develop brand identities, including logos, color palettes, typography, and brand guidelines for businesses.",
      reviews: ["Very useful", "Helped me create my own brand"],
      description: {
        introduction: "Focus on branding theory, logo creation, visual identity, and practical projects for real-world applications.",
        moduleExplanation: "Modules: branding principles, logo design, color palette, brand guideline, projects.",
        prerequisites: "Basic design skills recommended."
      },
      otherInfo: {
        price: "5000 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "5 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 75,
      name: "Adobe XD for UI/UX",
      title: "Design and Prototype Digital Interfaces",
      organizer: "UX Design Academy",
      goal: "Learn to create wireframes, mockups, and interactive prototypes for websites and mobile apps using Adobe XD.",
      reviews: ["Very practical", "Helped me in my projects"],
      description: {
        introduction: "Covers interface design, interactive prototyping, and workflow for creating user-centered digital products.",
        moduleExplanation: "Modules: wireframing, prototyping, design system, interactive projects.",
        prerequisites: "Basic design knowledge recommended."
      },
      otherInfo: {
        price: "4700 DZD",
        status: "Open",
        type: "Online",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 76,
      name: "Advanced Photoshop Techniques",
      title: "Take Your Image Editing Skills to the Next Level",
      organizer: "Design Academy",
      goal: "Learn advanced image manipulation techniques including compositing, retouching, and special effects for professional designs.",
      reviews: ["Very advanced", "Loved the practical examples"],
      description: {
        introduction: "Focus on complex Photoshop techniques for professional-quality graphics. Complete real-world projects to apply skills.",
        moduleExplanation: "Modules: compositing, advanced retouching, special effects, projects.",
        prerequisites: "Basic Photoshop knowledge required."
      },
      otherInfo: {
        price: "5200 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "6 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 77,
      name: "Illustration Techniques",
      title: "Develop Your Digital Illustration Skills",
      organizer: "Creative Design Academy",
      goal: "Learn how to create digital illustrations for print and web, including character design, backgrounds, and visual storytelling.",
      reviews: ["Very creative", "Loved learning new techniques"],
      description: {
        introduction: "Students will learn illustration styles, composition, digital brushes, and techniques to bring ideas to life digitally.",
        moduleExplanation: "Modules: character design, backgrounds, composition, digital tools, projects.",
        prerequisites: "Basic design skills recommended."
      },
      otherInfo: {
        price: "5000 DZD",
        status: "Open",
        type: "Online",
        duration: "6 weeks",
        level: "Intermediate"
      }
    }
  ]
});
courses.push({
  topic: "UI/UX",
  courses: [
    {
      id: 78,
      name: "Introduction to UI/UX Design",
      title: "Learn the Fundamentals of User Experience and Interface Design",
      organizer: "UX Design Academy",
      goal: "Understand the basics of UI and UX design principles, user research, wireframing, and prototyping to create effective digital products.",
      reviews: ["Very practical", "Helped me design better apps"],
      description: {
        introduction: "Covers the essential principles of user-centered design, understanding user needs, and designing interfaces that are intuitive and appealing.",
        moduleExplanation: "Modules: UI/UX principles, user research, wireframing, prototyping, usability testing.",
        prerequisites: "No prior experience required."
      },
      otherInfo: {
        price: "4500 DZD",
        status: "Open",
        type: "Online",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 79,
      name: "Wireframing and Prototyping",
      title: "Design Effective Digital Interfaces",
      organizer: "UX Design Academy",
      goal: "Learn to create wireframes and interactive prototypes that communicate design ideas clearly and effectively.",
      reviews: ["Very clear and hands-on", "Practical exercises were helpful"],
      description: {
        introduction: "Students will learn to create low-fidelity and high-fidelity wireframes, turn them into interactive prototypes, and iterate based on feedback.",
        moduleExplanation: "Modules: wireframing techniques, prototyping tools, user testing, project work.",
        prerequisites: "Basic UI/UX understanding recommended."
      },
      otherInfo: {
        price: "4700 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 80,
      name: "User Research Techniques",
      title: "Understand Your Users and Improve Usability",
      organizer: "UX Research Academy",
      goal: "Learn effective user research methods, including interviews, surveys, and usability testing to improve product design.",
      reviews: ["Very insightful", "Helped me understand user behavior"],
      description: {
        introduction: "Focus on gathering user feedback, analyzing data, creating personas, and applying findings to design better experiences.",
        moduleExplanation: "Modules: research methods, user interviews, surveys, persona creation, usability testing.",
        prerequisites: "No prior experience required."
      },
      otherInfo: {
        price: "5000 DZD",
        status: "Open",
        type: "Online",
        duration: "6 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 81,
      name: "Visual Design for UX",
      title: "Create Beautiful and Functional Interfaces",
      organizer: "UX Design Academy",
      goal: "Learn to apply visual design principles, color theory, typography, and layout to enhance user experiences.",
      reviews: ["Loved the visual exercises", "Very applicable to real projects"],
      description: {
        introduction: "Students will practice creating visually appealing interfaces while ensuring usability and accessibility standards are met.",
        moduleExplanation: "Modules: color theory, typography, layout design, accessibility, project exercises.",
        prerequisites: "Basic design skills recommended."
      },
      otherInfo: {
        price: "4800 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "5 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 82,
      name: "Interaction Design",
      title: "Design Engaging User Interactions",
      organizer: "UX Design Academy",
      goal: "Focus on designing intuitive and engaging interactions for websites and mobile applications to improve user satisfaction.",
      reviews: ["Hands-on and detailed", "Learned many practical techniques"],
      description: {
        introduction: "Learn about microinteractions, navigation patterns, gestures, and responsive design. Apply these techniques to real-world projects.",
        moduleExplanation: "Modules: interaction patterns, microinteractions, gestures, responsive design, project work.",
        prerequisites: "Basic UI/UX knowledge recommended."
      },
      otherInfo: {
        price: "4700 DZD",
        status: "Open",
        type: "Online",
        duration: "5 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 83,
      name: "UX Design Project",
      title: "Apply UX Skills in Real Projects",
      organizer: "UX Design Academy",
      goal: "Work on a full UX project from research to final prototype, applying all learned skills in a practical scenario.",
      reviews: ["Excellent practical experience", "Very useful portfolio work"],
      description: {
        introduction: "Students will complete a full project, including user research, wireframing, prototyping, usability testing, and final presentation.",
        moduleExplanation: "Modules: project planning, research, wireframing, prototyping, usability testing, presentation.",
        prerequisites: "Completion of beginner UI/UX courses recommended."
      },
      otherInfo: {
        price: "5200 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "6 weeks",
        level: "Intermediate"
      }
    }
  ]
});
courses.push({
  topic: "Robotique",
  courses: [
    {
      id: 84,
      name: "Introduction to Robotics",
      title: "Learn the Basics of Robotics and Automation",
      organizer: "Robo Academy",
      goal: "Understand fundamental robotics concepts including sensors, actuators, microcontrollers, and basic programming for building simple robots.",
      reviews: ["Very clear explanations", "Good for beginners"],
      description: {
        introduction: "Students will explore how robots sense and interact with the environment, learn basic programming, and complete hands-on mini-projects.",
        moduleExplanation: "Modules: robotics fundamentals, sensors, actuators, microcontroller programming, mini-projects.",
        prerequisites: "Basic programming knowledge recommended."
      },
      otherInfo: {
        price: "5500 DZD",
        status: "Open",
        type: "Online",
        duration: "5 weeks",
        level: "Beginner"
      }
    },
    {
      id: 85,
      name: "Robotics Programming",
      title: "Control Robots with Code",
      organizer: "Robo Academy",
      goal: "Learn to program robots using languages like Python and C++, and understand motion control, logic, and automation.",
      reviews: ["Very practical", "Helped me build my first robot"],
      description: {
        introduction: "Focus on robot motion, sensor integration, and writing code to automate tasks. Hands-on projects included.",
        moduleExplanation: "Modules: programming basics, motion control, sensor integration, project work.",
        prerequisites: "Basic programming skills required."
      },
      otherInfo: {
        price: "5800 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "6 weeks",
        level: "Beginner"
      }
    },
    {
      id: 86,
      name: "Introduction to Mechatronics",
      title: "Integrate Mechanics, Electronics, and Computing",
      organizer: "Tech Robotics Academy",
      goal: "Teach students the integration of mechanical, electronic, and computational systems to design functional robots.",
      reviews: ["Very educational", "Good hands-on exercises"],
      description: {
        introduction: "Learn about actuators, sensors, microcontrollers, and basic mechatronic systems. Apply knowledge in practical lab exercises.",
        moduleExplanation: "Modules: mechatronics basics, electronics, mechanics, control systems, lab projects.",
        prerequisites: "Basic robotics or programming knowledge recommended."
      },
      otherInfo: {
        price: "6000 DZD",
        status: "Open",
        type: "Online",
        duration: "6 weeks",
        level: "Intermediate"
      }
    },
    {
      id: 87,
      name: "Robotics Project",
      title: "Apply Robotics Skills in a Real Project",
      organizer: "Robo Academy",
      goal: "Work on a complete robotics project, integrating sensors, actuators, and programming to create a functional robot.",
      reviews: ["Very hands-on", "Great portfolio experience"],
      description: {
        introduction: "Students will plan, design, and build a functional robot, apply programming, test functionality, and present results.",
        moduleExplanation: "Modules: project planning, design, programming, testing, presentation.",
        prerequisites: "Completion of beginner robotics courses recommended."
      },
      otherInfo: {
        price: "6200 DZD",
        status: "Open",
        type: "Hybrid",
        duration: "6 weeks",
        level: "Intermediate"
      }
    }
  ]
});
 
export async function GET(req: Request) {
  const url = new URL(req.url);
  const topic = url.searchParams.get("topic");
  const idParam = url.searchParams.get("id");

  if (!topic || idParam === null) {
    return NextResponse.json({ error: "Missing topic or id" }, { status: 400 });
  }

  // Find the topic object
  const topicObj = courses.find(t => t.topic === topic);

  if (!topicObj) {
    return NextResponse.json({ error: `No courses found for topic: ${topic}` }, { status: 404 });
  }

  // Find the course inside the topic's courses array
  const course = topicObj.courses.find(c => c.id === Number(idParam));

  if (!course) {
    return NextResponse.json({ error: `Course with id ${idParam} not found in topic ${topic}` }, { status: 404 });
  }

  return NextResponse.json(course);
}




