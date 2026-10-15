import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Unity } from "@/components/ui/svgs/unity";
import { Php } from "@/components/ui/svgs/php";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Flutter } from "@/components/ui/svgs/flutter";
import { Mysql } from "@/components/ui/svgs/mysql";

export const DATA = {
  name: "Thanatorn",
  initials: "Best",
  url: "https://dillion.io",//เด้ะเอาลิ้งตัวเองมาใส่
  //location: "San Francisco, CA",
  //locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "CPE or CP with a passion for learning to be a software developer, web developer. ",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Mysql", icon: Mysql },
    { name: "Docker", icon: Docker },
    { name: "Unity", icon: Unity },
    { name: "flutter", icon: Flutter },
    { name: "C++", icon: Cpp },
    { name: "Php", icon: Php },
    { name: "C#", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Projects" },
  ],
  contactinfo: [
    {
      name: "Email",
      value: "thanabest08@gmail.com",
      url: "#",
      icon: Icons.email
    },
    {
      name: "Facebook",
      value: "Thana Best",
      url: "https://www.facebook.com/thana.best.2024/",
      icon: Icons.facebook
    },
    {
      name: "Phone",
      value: "+0917395070",
      url: "#",
      icon: Icons.phone
    },
    {
      name: "Instagram",
      value: "thnthrbest",
      url: "https://www.instagram.com/thnthrbest/",
      icon: Icons.instagram
    },
  ],
  contact: {
    email: "thanabest08@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },


  portfolio: [
    {
      slug: "project-1",
      title: "ชื่อโปรเจคตัวอย่าง 1",
      dates: "2026",
      description: "คำอธิบายโปรเจคตัวอย่าง ใส่ข้อมูลจริงทีหลัง",
      tags: ["Next.js", "TypeScript"],
      image: "/atomic.png",
      gallery: ["/atomic.png", "/buildspace.jpg"],
      certificates: ["/laurier.png"],
      competitions: [
        { name: "ชื่องานแข่งขันตัวอย่าง", date: "2026", location: "สถานที่ตัวอย่าง", result: "รางวัลตัวอย่าง" },
      ],
      links: [{ title: "GitHub", href: "#" }],
    },
    {
      slug: "project-2",
      title: "ชื่อโปรเจคตัวอย่าง 2",
      dates: "2026",
      description: "คำอธิบายโปรเจคตัวอย่าง ใส่ข้อมูลจริงทีหลัง",
      tags: ["Python", "PostgreSQL"],
      image: "/waterloo.png",
      gallery: ["/waterloo.png"],
      certificates: [],
      competitions: [],
      links: [],
    },
    {
      slug: "project-3",
      title: "ชื่อโปรเจคตัวอย่าง 3",
      dates: "2025",
      description: "คำอธิบายโปรเจคตัวอย่าง ใส่ข้อมูลจริงทีหลัง",
      tags: ["React", "Docker"],
      image: "/mitremedia.png",
      gallery: ["/mitremedia.png", "/nvidia.png"],
      certificates: ["/ib.png", "/splunk.svg"],
      competitions: [
        { name: "ชื่องานแข่งขันตัวอย่าง 2", date: "2025", location: "สถานที่ตัวอย่าง", result: "รางวัลตัวอย่าง" },
        { name: "ชื่องานแข่งขันตัวอย่าง 3", date: "2025", location: "สถานที่ตัวอย่าง", result: "รางวัลตัวอย่าง" },
      ],
      links: [{ title: "Website", href: "#" }],
    },
  ],

  work: [
    {
      company: "Lucky Cat Tech Solution Co., Ltd.",
      href: "https://luckycat.co.th/",
      badges: [],
      location: "Toronto, ON",
      title: "QA / tester",
      logoUrl: "/mitremedia.png",
      start: "September 6 2026",
      end: "ปัจจุบัน",
      description:
        "ทดสอบ Web app เพื่อหาข้อผิดพลาดและตรวจสอบความถูกต้องเป็นไปตามที่ลูกค้าต้องการ",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Cyber Hero นครเชียงราย CTF",
      dates: "November 11 2026",
      location: "online",
      description:
        "การแข่งขันทักษะทางด้าน Cybersecurity ในรูปแบบ CTF เพื่อเฟ้นหาและพัฒนาศักยภาพเยาวชนรุ่นใหม่ให้มีความรู้และพร้อมรับมือกับภัยคุกคามทางไซเบอร์",
      image:
        "Cyber_Hero.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "National Software Contest 2026 - NSC Thailand (Final Round)",
      dates: "August 21 2026",
      location: "Waterloo, Ontario",
      description:
        "เวทีการแข่งขันเขียนโปรแกรมและพัฒนาซอฟต์แวร์ระดับประเทศสำหรับนักเรียน นิสิต และนักศึกษา",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Nnr0DHG8Jbz6QEthwLOEn4x_aDrW1V4iAbKEXmLj4A&s=10",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Thailand Cyber Top Talent 2026",
      dates: "August 14 2026",
      location: "Waterloo, Ontario",
      description:
        "การแข่งขันทักษะทางไซเบอร์ในรูปแบบ Capture The Flag (CTF) รายการที่ใหญ่ที่สุดของประเทศไทย",
      image:
        "https://ctf.in.th/wp-content/uploads/2022/09/TCTT-LOGO.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "National Software Contest 2026 - NSC Thailand (Semi-finals) ",
      dates: "September 23 2026",
      location: "Waterloo, Ontario",
      description:
        "เวทีการแข่งขันเขียนโปรแกรมและพัฒนาซอฟต์แวร์ระดับประเทศสำหรับนักเรียน นิสิต และนักศึกษา",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Nnr0DHG8Jbz6QEthwLOEn4x_aDrW1V4iAbKEXmLj4A&s=10",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "งานศิลปหัตถกรรมนักเรียน ครั้งที่ 73 ปีการศึกษา 2568 สพม.สิงห์บุรี อ่างทอง ",
      dates: "January 13 2026",
      location: "San Francisco, California",
      description:
        "แข่งขันเขียนโปรแกรมด้วยภาษาคอมพิวเตอร์ ม.4-ม.6",
      image:
        "https://nitedcr1.go.th/wp-content/uploads/2025/01/%E0%B8%AA%E0%B8%9E%E0%B8%90-1.png",
      links: [],
    },
    {
      title: "Prime Minister’s Award for Health Promotion Innovation 2025 (Final Round)",
      dates: "November 27 2025",
      location: "San Francisco, California",
      description:
        "การแข่งขันรอบชิงชนะเลิศ การประกวดนวัตกรรมสร้างเสริมสุขภาพ Prime Minister’s Award for Health Promotion Innovation 2025 ประเภทมัธยมศึกษาตอนปลาย โดยสำนักงานกองทุนสนับสนุนการสร้างเสริมสุขภาพ (สสส.) ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRT5yTvCUnv9HCfq1kqe8KMWI_VOeWJnAL2IgT7FX8oJ4WTNV6bpYncjZQ&s=10",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "การคัดเลือกเข้าค่ายโอลิมปิกวิชาการ สอวน. วิชาคอมพิวเตอร์ ค่าย 2 POSN-COM",
      dates: "October 31 2025",
      location: "Davis, California",
      description:
        "ค่ายอบรมและคัดเลือกขั้นสูงในโครงการ มูลนิธิ สอวน. ต่อจากค่าย 1 เพื่อคัดเลือกตัวแทนนักเรียนไปแข่งขัน คอมพิวเตอร์โอลิมปิกระดับชาติ (TMO)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMNR2h27rsyTDrCKYntIiUEkuPgmYBTw74NkEKvXAQ2CYwZLh4uqG_za8&s=10",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "แข่งขันทักษะวิชาการด้านบริหารธุรกิจระดับชาติ BA&IT EXPO 2025 (รอบชิงชนะเลิศ)",
      dates: "June 20 2025",
      location: "Waterloo, Ontario",
      description:
        "แข่งขันเป็นผู้ประกอบการนวัตกรรม (INNOVATOR NEXT GEN)",
      image:
        "https://docbait.rmutsb.ac.th/assets/uploads/logo_%E0%B8%84%E0%B8%93%E0%B8%B0-removebg-preview.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "การคัดเลือกเข้าร่วมการอบรม ค่ายโอลิมปิกวิชาการ สอวน. ค่าย 1 วิชาคอมพิวเตอร์ ปีการศึกษา 2567",
      dates: "September 30 2024",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMNR2h27rsyTDrCKYntIiUEkuPgmYBTw74NkEKvXAQ2CYwZLh4uqG_za8&s=10",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "National Software Contest 2024 - NSC Thailand (Semi-finals) ",
      dates: "August 1 2024",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Nnr0DHG8Jbz6QEthwLOEn4x_aDrW1V4iAbKEXmLj4A&s=10",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: " International Creativity & Innovation Award (ICIA) 2024",
      dates: "April 3 2024",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://startupwheel.vn/wp-content/uploads/2025/03/Web-International-Partner-1000-x-500-px-27.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "งานศิลปหัตถกรรมนักเรียนครั้งที่ 71 ระดับเขตพื้นที่การศึกษาสิงห์บุรี อ่างทอง",
      dates: "January 11 2024",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://nitedcr1.go.th/wp-content/uploads/2025/01/%E0%B8%AA%E0%B8%9E%E0%B8%90-1.png",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "National Software Contest 2023 - NSC Thailand (Semi-finals)",
      dates: "April 1 2023",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Nnr0DHG8Jbz6QEthwLOEn4x_aDrW1V4iAbKEXmLj4A&s=10",
      links: [],
    },
    {
      title: "งานศิลปหัตถกรรมนักเรียนครั้งที่ 70 ระดับภาคกลางและภาคตะวันออก",
      dates: "January 27 2023",
      location: "Toronto, Ontario",
      description:
        "การประกวดโครงงานคอมพิวเตอร์ประเภทซอฟต์แวร์ ระดับชั้น ม.ต้น",
      image:
        "https://nitedcr1.go.th/wp-content/uploads/2025/01/%E0%B8%AA%E0%B8%9E%E0%B8%90-1.png",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
  ],
} as const;
