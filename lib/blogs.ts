// lib/blogs.ts

export interface BlogContentSection {
  type: 'heading' | 'paragraph' | 'list' | 'callout' | 'quote' | 'table';
  level?: 2 | 3;
  text?: string;
  items?: string[];
  calloutTitle?: string;
  headers?: string[];
  rows?: string[][];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: 'Robotics' | 'AI & Tech' | 'STEM Learning' | 'Tutorials' | 'News';
  date: string;
  readTime: string;
  featured?: boolean;
  coverGradient: string;
  tags: string[];
  content: BlogContentSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'top-10-robotic-components-every-kid-must-have',
    title: 'Top 10 Robotic Components Every Kid Must Have',
    subtitle: 'A simple, parent-friendly breakdown of essential hardware components that turn imagination into real working inventions.',
    excerpt: 'Discover the 10 must-have robotics components—from microcontrollers and sensors to motors and servos—and learn how they empower kids aged 10-17 to build real working robots.',
    category: 'Robotics',
    date: 'August 18, 2026',
    readTime: '7 min read',
    featured: true,
    coverGradient: 'linear-gradient(135deg, #1a1060 0%, #5a4fcf 100%)',
    tags: ['Robotics Components', 'Arduino', 'Hardware Kit', 'STEM for Kids', 'Robotics Classes'],
    content: [
      {
        type: 'paragraph',
        text: 'When kids step into the world of robotics, transition from purely staring at software screens to holding real circuit boards and electronic components in their hands is a magical turning point. But for parents looking at a box of wires and chips, it can feel like looking at alien technology. What do these components actually do, and why are they essential for your child’s learning journey?',
      },
      {
        type: 'paragraph',
        text: 'Here is a beginner-friendly breakdown of the top 10 robotics components every young builder needs, explained in plain language every parent can easily understand.',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Arduino / Microcontroller: The "Brain" of the Robot',
      },
      {
        type: 'paragraph',
        text: 'Think of the microcontroller (like the popular Arduino UNO) as the robot’s command center. It holds the computer code written by your child and sends signals to make motors turn or lights blink based on sensor inputs.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Sensors (Ultrasonic & IR): The Robot’s "Eyes and Ears"',
      },
      {
        type: 'paragraph',
        text: 'Sensors allow a robot to perceive its surrounding environment. An ultrasonic sensor emits high-frequency sound waves to measure distance (just like a bat!), preventing the robot from crashing into walls.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. DC Motors & Wheels: The Robot’s "Legs"',
      },
      {
        type: 'paragraph',
        text: 'Direct Current (DC) motors convert electrical energy into rotational physical motion. When connected to wheels, they give mobile robots the power to drive forward, reverse, and execute 360-degree turns.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Breadboard: The Solderless Wire Playground',
      },
      {
        type: 'paragraph',
        text: 'A breadboard lets kids build and test electronic circuits safely without hot soldering irons. Components and jumper wires easily plug into tiny socket grids, allowing endless experimentation without damaging parts.',
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Jumper Wires: The "Nervous System"',
      },
      {
        type: 'paragraph',
        text: 'Color-coded jumper wires carry electrical power and data signals between the microcontroller, breadboard, sensors, and motor drivers. They teach kids about electrical continuity and circuit loops.',
      },
      {
        type: 'heading',
        level: 2,
        text: '6. LEDs (Light Emitting Diodes): Visual Status Indicators',
      },
      {
        type: 'paragraph',
        text: 'LEDs are simple, bright lights used to give instant visual feedback. In robotics, kids program LEDs to light up when an obstacle is detected, acting as headlights or status indicators.',
      },
      {
        type: 'heading',
        level: 2,
        text: '7. Resistors: The Safety Guardians of Current',
      },
      {
        type: 'paragraph',
        text: 'Resistors restrict the flow of electrical current through a circuit. They protect delicate components like LEDs and microcontrollers from burning out due to excess voltage.',
      },
      {
        type: 'heading',
        level: 2,
        text: '8. Battery Pack (18650 / 9V): The Portable Powerhouse',
      },
      {
        type: 'paragraph',
        text: 'Robots need independent power to roam freely without being tied to a laptop cable. Rechargeable battery packs supply steady DC current to both the logical brain and power-hungry motors.',
      },
      {
        type: 'heading',
        level: 2,
        text: '9. Chassis: The Structural Frame & Body',
      },
      {
        type: 'paragraph',
        text: 'The chassis is the physical body (usually lightweight acrylic or durable 3D-printed plastic) that holds all motors, wheels, microcontrollers, and batteries securely together.',
      },
      {
        type: 'heading',
        level: 2,
        text: '10. Servo Motor: Precision Angle Controller',
      },
      {
        type: 'paragraph',
        text: 'Unlike continuous DC motors, servo motors rotate to precise angles (e.g., exactly 45 or 90 degrees). They are crucial for steering mechanisms, robotic arms, and mechanical grippers.',
      },
      {
        type: 'callout',
        calloutTitle: 'Why Hands-On Hardware Matters for Your Child',
        text: 'Understanding these 10 components builds core physics intuition, computational logic, and real-world spatial reasoning. When kids assemble physical parts themselves, engineering stops being an intimidating textbook subject and becomes an exciting playground.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Get All 10 Components Delivered directly to Your Home with CodeBotix',
      },
      {
        type: 'paragraph',
        text: 'At CodeBotix, every enrolled student receives a complete, high-quality physical robotics hardware kit containing all 10 essential components delivered right to their home. Combined with live 1:1 mentorship from ISRO experts, your child will construct autonomous obstacle avoiders, smart home systems, and AI bots step by step.',
      },
    ],
  },
  {
    slug: 'how-to-choose-the-right-online-robotics-class-for-your-kid',
    title: 'How to Choose the Right Online Robotics Class for Your Kid',
    subtitle: '6 key decision factors parents must evaluate before enrolling in a STEM or coding program.',
    excerpt: 'Targeting online robotics classes for kids? Learn how to evaluate age-appropriateness, 1:1 vs group format, ISRO-recognized certification, curriculum depth, live vs recorded, and instructor quality.',
    category: 'STEM Learning',
    date: 'August 14, 2026',
    readTime: '6 min read',
    coverGradient: 'linear-gradient(135deg, #0d0d4a 0%, #2a2a8e 100%)',
    tags: ['Online Robotics Classes for Kids', 'STEM Education', 'Kids Robotics Course', 'ISRO Certification'],
    content: [
      {
        type: 'paragraph',
        text: 'With hundreds of online platforms claiming to offer "the best online robotics classes for kids," parents are often left confused by marketing buzzwords. How do you distinguish between a shallow toy-assembly demo and a genuinely empowering STEM education that sets your child up for future success?',
      },
      {
        type: 'paragraph',
        text: 'Here are the 6 critical decision factors every parent should check before making a choice.',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Age-Appropriateness (Ages 10–17)',
      },
      {
        type: 'paragraph',
        text: 'A great robotics program tailors its tools to the child’s cognitive stage. For students aged 10-12, visual block coding connected to physical sensors provides instant gratification. For teens aged 13-17, the curriculum must transition to real text-based programming in Python and C++ with microcontrollers like Arduino and Raspberry Pi.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. 1:1 Private Mentorship vs. Large Group Formats',
      },
      {
        type: 'paragraph',
        text: 'Hardware robotics involves physical wiring, breadboards, and troubleshooting real circuit errors. In a group class of 15 to 30 students, a child stuck on a single misaligned wire often gets left behind. Dedicated 1:1 instruction ensures instant debugging, customized pacing, and 100% individual focus.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Certification Value & Institutional Recognition',
      },
      {
        type: 'paragraph',
        text: 'Not all certificates carry equal weight. Look for programs whose certification is backed by credible STEM bodies or recognized mentors (such as ISRO recognition). A project-verified certificate adds genuine weight to high school portfolios, university applications, and STEM competitions.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Curriculum Depth & Hardware Quality',
      },
      {
        type: 'paragraph',
        text: 'Avoid programs that rely solely on virtual screen simulations or pre-built plastic snap toys. Look for comprehensive curricula that include real electronic components (microcontrollers, sensors, motors, servos) sent to your doorstep, accompanied by practical AI and computer vision concepts.',
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Live Interactive Classes vs Pre-recorded Videos',
      },
      {
        type: 'paragraph',
        text: 'Robotics cannot be effectively learned from static YouTube videos or pre-recorded lecture packs. Live interactive sessions allow students to ask real-time questions, show their physical circuits via camera, and receive immediate step-by-step guidance.',
      },
      {
        type: 'heading',
        level: 2,
        text: '6. Instructor Expertise & Teaching Passion',
      },
      {
        type: 'paragraph',
        text: 'Who is actually teaching your child? Experienced engineers and passionate educators know how to turn frustrating bugs into motivating "aha!" moments.',
      },
      {
        type: 'callout',
        calloutTitle: 'Why CodeBotix Ticks Every Single Box',
        text: 'CodeBotix offers live 1:1 online robotics classes for kids aged 10–17 mentored by ISRO experts. Every student gets a full physical hardware kit delivered home, personalized pacing, and ISRO-recognized certification upon project completion.',
      },
    ],
  },
  {
    slug: 'why-every-kid-should-learn-robotics-and-ai-today',
    title: 'Why Every Kid Should Learn Robotics and AI Today',
    subtitle: 'Preparing young problem-solvers for an AI-first digital world through hands-on STEM skills.',
    excerpt: 'Explore future job market trends, cognitive problem-solving benefits, early STEM exposure, and confidence-building through building real projects with AI courses for kids.',
    category: 'AI & Tech',
    date: 'August 10, 2026',
    readTime: '5 min read',
    coverGradient: 'linear-gradient(135deg, #2d1060 0%, #6c5ce7 100%)',
    tags: ['AI Courses for Kids', 'Robotics for Kids', 'Future Skills', 'STEM Learning', 'CodeBotix'],
    content: [
      {
        type: 'paragraph',
        text: 'We live in a world where Artificial Intelligence automates tasks, self-driving vehicles navigate streets, and smart algorithms power daily life. For the next generation, understanding how AI and robotics work will not just be a specialized career advantage—it will be a core foundational literacy.',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Future Job Market Trends & Skill Preparedness',
      },
      {
        type: 'paragraph',
        text: 'World Economic Forum reports consistently highlight robotics, artificial intelligence, and machine learning as top growth fields. Early exposure to AI courses for kids ensures that students don’t just passively consume technology built by others, but develop the technical fluency needed to build the tools of tomorrow.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Cognitive & Problem-Solving Superpowers',
      },
      {
        type: 'paragraph',
        text: 'Robotics forces kids to think logically. When a robot fails to turn left, the student must analyze their code, trace wire connections, and debug the error systematically. This instills resilience, computational thinking, and analytical problem-solving skills that spill over into mathematics and science academics.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Early STEM Exposure & Demystifying Complex Concepts',
      },
      {
        type: 'paragraph',
        text: 'Concepts like Ohm’s Law, gear ratios, spatial geometry, and conditional logic can feel dry when presented in school textbooks. However, when applied practically to make a physical robot navigate a maze or respond to voice commands, abstract STEM theory instantly comes alive.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Confidence Building Through Real Working Projects',
      },
      {
        type: 'paragraph',
        text: 'Nothing matches the sheer pride on a 12-year-old’s face when their self-coded robot moves across the floor for the first time. Building tangible projects builds immense creative confidence and self-belief.',
      },
      {
        type: 'quote',
        text: '“Our goal is not just to teach children how to write lines of code, but to instill the confidence that they can engineer solutions to real-world challenges.”',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Start Your Child’s Journey with CodeBotix AI Courses',
      },
      {
        type: 'paragraph',
        text: 'CodeBotix provides tailored AI & Robotics courses designed specifically for young learners aged 10-17. Through 1:1 interactive mentoring and physical kits, your child moves seamlessly from beginner coding blocks to advanced Python, machine learning, and hardware robotics.',
      },
    ],
  },
  {
    slug: 'how-much-do-online-robotics-classes-for-kids-cost-in-india',
    title: 'How Much Do Online Robotics Classes for Kids Cost in India?',
    subtitle: 'A transparent guide breaking down course pricing, hardware kit inclusions, and value metrics.',
    excerpt: 'Confused by robotics course prices in India? We analyze typical per-session costs, group vs 1:1 rates, hardware kit inclusions, and what truly makes a program worth your investment.',
    category: 'STEM Learning',
    date: 'August 06, 2026',
    readTime: '6 min read',
    coverGradient: 'linear-gradient(135deg, #1a1060 0%, #00b4d8 100%)',
    tags: ['Robotics Class Cost India', 'Online Robotics Classes', 'CodeBotix Pricing', 'STEM Kits'],
    content: [
      {
        type: 'paragraph',
        text: 'As parents look to enroll their children in robotics and coding programs, one of the most common questions is: *How much do online robotics classes for kids actually cost in India, and what should be included?*',
      },
      {
        type: 'paragraph',
        text: 'Pricing varies wildly across providers—ranging from cheap pre-recorded recorded packages to expensive group bootcamps. Below is an honest breakdown of market rates, inclusions, and value metrics.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Typical Pricing Breakdown in India (2026)',
      },
      {
        type: 'table',
        headers: ['Format / Type', 'Typical Price Range', 'What Is Included?', 'Best Suited For'],
        rows: [
          [
            'Pre-Recorded Video Courses',
            '₹1,500 – ₹4,000 (One-time)',
            'Video access only; NO live teacher, NO hardware kit included.',
            'Self-motivated older kids with existing coding knowledge.',
          ],
          [
            'Group Online Classes (10-20 kids)',
            '₹400 – ₹700 per session',
            'Group lectures, basic software simulators, minimal individual help.',
            'General introduction to basic block coding concepts.',
          ],
          [
            '1:1 Private Mentorship (Live)',
            '₹800 – ₹1,500 per session',
            'Dedicated ISRO-level mentor, physical kit delivered, custom pace.',
            'Serious STEM learning, hands-on hardware builds & competitions.',
          ],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'What Should Be Included in a Worthwhile Package?',
      },
      {
        type: 'list',
        items: [
          'Physical Hardware Kit: A genuine robotics course MUST include physical microcontrollers (Arduino), sensors, motors, breadboard, and chassis delivered directly to your home.',
          'Live 1:1 Debugging Support: Instructors should inspect hardware wiring via video camera to solve real-time circuit issues.',
          'Recognized Certification: Look for certificates backed by ISRO-recognized mentors or national STEM guidelines.',
          'Post-Course Project Support: Continued guidance for school exhibitions and national robotics competitions.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Red Flags: What Makes a Program a Rip-off?',
      },
      {
        type: 'paragraph',
        text: 'Watch out for platforms charging high upfront package fees (₹50,000+) while delivering only pre-recorded videos or plastic toy snap-kits that don’t teach real programming or electronic circuit logic.',
      },
      {
        type: 'callout',
        calloutTitle: 'The CodeBotix Value Promise',
        text: 'CodeBotix offers transparent, affordable 1:1 live mentorship with no hidden costs. Every course package includes a comprehensive physical robotics kit delivered to your home, flexible session scheduling, and ISRO-recognized certification.',
      },
    ],
  },
  {
    slug: 'group-classes-vs-1-on-1-robotics-classes-which-is-better',
    title: 'Group Classes vs 1:1 Robotics Classes: Which Is Better for Your Child?',
    subtitle: 'A detailed side-by-side breakdown of learning speed, personal attention, and hardware support.',
    excerpt: 'Side-by-side comparison of 1:1 vs group robotics instruction. Discover why personalized pacing and dedicated live mentoring make 1:1 classes ideal for young innovators.',
    category: 'STEM Learning',
    date: 'August 02, 2026',
    readTime: '5 min read',
    coverGradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    tags: ['1:1 Robotics Classes', 'Group vs 1:1', 'Personalized STEM', 'Kids Coding'],
    content: [
      {
        type: 'paragraph',
        text: 'When choosing how your child learns robotics, one of the biggest debates is whether to opt for traditional group classes or personalized 1:1 live instruction. While software-only coding can sometimes work in group settings, hands-on hardware engineering presents unique challenges.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Side-by-Side Comparison',
      },
      {
        type: 'table',
        headers: ['Feature', 'Group Classes (10+ Students)', '1:1 Private Classes (CodeBotix Model)'],
        rows: [
          ['Learning Pace', 'Fixed speed dictated by the average student', '100% customized to your child’s speed and curiosity'],
          ['Hardware Debugging', 'Teacher cannot inspect individual physical wire pinouts', 'Instructor visually checks every wire connection on camera'],
          ['Student Engagement', 'Shy students often stay silent and hesitate to ask', 'Encouraging, interactive environment for active participation'],
          ['Curriculum Flexibility', 'Rigid batch structure with fixed schedule', 'Flexible timing suited to your family schedule'],
          ['Skill Retention', 'Moderate (prone to falling behind during errors)', 'High (mastery of every circuit before moving forward)'],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'When Does 1:1 Instruction Make the Most Sense?',
      },
      {
        type: 'paragraph',
        text: '1:1 private instruction is far superior when:',
      },
      {
        type: 'list',
        items: [
          'Your child is shy or hesitates to raise their hand in front of peers.',
          'Your child learns faster (or wants extra time) than a rigid group pace allows.',
          'You want focused skill-building with physical electronic components where misplacing a single jumper wire can stop the robot from functioning.',
          'You want to prepare your child for specialized STEM competitions, ATL marathons, or portfolio entries.',
        ],
      },
      {
        type: 'callout',
        calloutTitle: 'Experience the CodeBotix 1:1 Advantage',
        text: 'CodeBotix is built natively on a 1:1 personalized teaching model. Every student gets dedicated, undivided attention from an expert mentor, ensuring zero frustration and maximum hardware building success.',
      },
    ],
  },
  {
    slug: 'what-is-a-robotics-certification-and-why-does-it-matter-for-kids',
    title: 'What Is a Robotics Certification and Why Does It Matter for Kids?',
    subtitle: 'How authentic STEM credentials validate skills, elevate portfolios, and open national opportunities.',
    excerpt: 'Learn what a true robotics certificate for kids represents, how it strengthens school applications and competition entries, and why ISRO-recognized certification stands out.',
    category: 'News',
    date: 'July 29, 2026',
    readTime: '5 min read',
    coverGradient: 'linear-gradient(135deg, #1a1060 0%, #f5a623 100%)',
    tags: ['Robotics Certificate for Kids', 'ISRO Recognition', 'STEM Portfolio', 'Skill Validation'],
    content: [
      {
        type: 'paragraph',
        text: 'In recent years, "certificates" have become ubiquitous in online learning. However, many parents wonder: *What does a robotics certification actually mean for my child, and does it hold genuine academic value?*',
      },
      {
        type: 'heading',
        level: 2,
        text: 'What a Credible Robotics Certification Represents',
      },
      {
        type: 'paragraph',
        text: 'A credible robotics certificate for kids is not just a PDF generated for attendance. It serves as objective validation that a student has mastered core engineering competencies—from circuit analysis and microcontroller programming to sensor integration and autonomous logic.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3 Ways Certification Strengthens Your Child’s Future',
      },
      {
        type: 'list',
        items: [
          'Elevates School & College Portfolios: Standardized STEM credentials demonstrate practical initiative and technical distinction beyond standard school marks.',
          'Boosts Competition Entries: Certification from recognized bodies opens doors to national level STEM exhibitions, Atal Tinkering Lab (ATL) marathons, and robotics olympiads.',
          'Instills Practical Pride & Motivation: Completing a rigorous, project-assessed certification program builds immense pride and encourages long-term passion for engineering.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'What to Look for in a Credible Certificate',
      },
      {
        type: 'paragraph',
        text: 'Ensure the certificate is issued by a recognized educational body or mentored by experts (such as ISRO-recognized mentors), requires real project evaluation rather than just passive viewing, and includes unique verification credentials.',
      },
      {
        type: 'callout',
        calloutTitle: 'CodeBotix ISRO-Recognized Certification',
        text: 'Every student completing a CodeBotix robotics path receives an ISRO-recognized certificate backed by project verification, validating their real-world robotics and AI expertise.',
      },
    ],
  },
  {
    slug: 'meet-codebotix-making-robotics-and-ai-fun-for-kids',
    title: 'Meet CodeBotix: Making Robotics and AI Fun for Kids Aged 10–17',
    subtitle: 'Our story, 1:1 teaching philosophy, and passion for turning young curious minds into future creators.',
    excerpt: 'Get to know CodeBotix: our founding mission, 1:1 personalized learning philosophy, ISRO-mentored curriculum, custom hardware kits, and student success highlights.',
    category: 'News',
    date: 'July 25, 2026',
    readTime: '4 min read',
    coverGradient: 'linear-gradient(135deg, #2b1055 0%, #7597de 100%)',
    tags: ['About CodeBotix', 'Robotics for Kids', '1:1 Personalized Learning', 'ISRO Mentors'],
    content: [
      {
        type: 'paragraph',
        text: 'Welcome to CodeBotix! We are on a mission to transform how children interact with technology—turning passive screen time into hands-on engineering, creative problem-solving, and real-world invention.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Our Founding Mission & Vision',
      },
      {
        type: 'paragraph',
        text: 'CodeBotix was founded with a clear vision: every child aged 10-17 should have the opportunity to build real physical robots and write real AI code under expert guidance. We believe textbook physics and math come alive when kids use them to solve practical engineering challenges.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The 1:1 Personalized Learning Difference',
      },
      {
        type: 'paragraph',
        text: 'Unlike mass-enrollment group coding bootcamps, CodeBotix is built natively on a 1:1 live instruction model. Every child learns at their own pace with a dedicated expert mentor who guides them through hardware assembly, line-by-line coding, and circuit debugging.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'What Makes Our Curriculum Unique?',
      },
      {
        type: 'list',
        items: [
          'Physical Hardware Kit Shipped Home: Real microcontrollers, sensors, breadboards, and motors delivered to your doorstep.',
          'ISRO-Level Mentorship: Guidance and curriculum design influenced by space research and robotics industry veterans.',
          'From Block Coding to Python & AI: Smooth, progressive pathway for students aged 10 to 17.',
          'ISRO-Recognized Certification: Formal recognition validating your child’s hands-on project accomplishments.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Join the CodeBotix Family Today',
      },
      {
        type: 'paragraph',
        text: 'Whether your child is a curious 10-year-old taking their first steps in STEM or a 16-year-old preparing for university engineering programs, CodeBotix provides the perfect environment to thrive. Book a free 1:1 live demo session today and experience the difference!',
      },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count: number = 2): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, count);
}
