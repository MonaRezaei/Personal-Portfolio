import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";
import imagehover1 from "../assets/imagehover1.jpg";
import imagehover2 from "../assets/imagehover2.jpg";
import imagehover3 from "../assets/imagehover3.jpg";
import imagehover4 from "../assets/imagehover4.jpg";
import imagehover5 from "../assets/imagehover5.jpg";
import imagehover6 from "../assets/imagehover6.jpg";

import {
  RiCss3Fill,
  RiGitBranchFill,
  RiGitBranchLine,
  RiHtml5Line,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTypescript,
  TbHtml,
  TbJoinStraight,
} from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiHtml53dEffects, DiJavascript, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoCss3, BiLogoHtml5, BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Mona Rezaei",
  greet: "سلام 👋🏻",
  description:
    " به دنیای من خوش آمدید.جایی که طراحی و کدنویسی به هم میرسند تا تجربه ای جذاب و تعاملی خلق کنند. من یک توسعه دهنده فرانت اند هستم که عاشق چالش های جدید و ساخت رابط های کاربری زیبا و کارآمدم.خوشحال میشم نمونه کارهای من رو ببینید شاید چیزی که دنبالش هستید همین جا باشه",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Tic-Tac-Toe-with-Ai",
    description:
      "بازی محبوب که با جاوااسکریپت نوشته شده و حریف شما هوش مصنوعی است که اصلا نمیتونید شکستش بدید",
    image: projectImage1,
    imagehover: imagehover1,
    githubLink: "https://monarezaei.github.io/Tic-Tac-Toe-with-Ai/",
  },
  {
    id: 2,
    name: "Snake",
    description:
      "بازی نوستالژِی مار که نمونه آن را در گوشی های قدیمی دیده ایم .با جاوااسکریپت نوشته شده و بالاترین امتیاز را نگه میدارد",
    image: projectImage2,
    imagehover: imagehover2,
    githubLink: "https://monarezaei.github.io/Snake/",
  },
  {
    id: 3,
    name: "Quiz-app",
    description:
      "یک کوئیز با 10 سوال رندوم که وقتی گزینه رو انتخاب میکنید به شما میگوید که درست است یا خیر.درضمن برای پاسخگویی به هرسوال 10ثانیه بیشتر زمان ندارید",
    image: projectImage3,
    imagehover: imagehover3,
    githubLink: "https://monarezaei.github.io/Quiz-app/",
  },
  {
    id: 4,
    name: "3D-Gallery",
    description:
      "یک گالری سه بعدی جذاب که وقتی ماوس روی عکس مورد نظر مرود شما شگفت زده میشوید",
    image: projectImage4,
    imagehover: imagehover4,
    githubLink: "https://monarezaei.github.io/3D-Gallery/",
  },
  {
    id: 5,
    name: "Guess-The-Color",
    description:
      "بازی جذاب و سرگرم کننده حدس رنگ که با کمک کد رنگ ها باید رنگ درست را انتخاب نمایید",
    image: projectImage5,
    imagehover: imagehover5,
    githubLink: "https://monarezaei.github.io/Guess-The-Color/",
  },
  {
    id: 6,
    name: "chronometer",
    description:
      "یک کرونومتر که میتونید درگرفتن زمان به شما کمک کنه و قابلیت سیو زمان ها را دارد",
    image: projectImage6,
    imagehover: imagehover6,
    githubLink: "https://monarezaei.github.io/chronometer/",
  },
];

export const BIO = [
  "سلام! من مونا هستم، توسعه‌دهنده‌ی فرانت‌اند. از همون روزی که برای اولین بار وارد دنیای وب شدم، فهمیدم چیزی که منو جذب می‌کنه، ترکیب خلاقیت و منطق در کنار همدیگه‌ست. اینکه می‌تونی با چند خط کد، ایده‌ای که فقط توی ذهنت بوده رو به یه محصول واقعی و قابل لمس تبدیل کنی، همیشه برام .هیجان‌انگیز بوده",
  "تخصص اصلی من کار با React و ابزارهای مرتبط با اون هست. اما چیزی که بیشتر از هرچیزی برام مهمه، اینه که بتونم هر روز چیز جدیدی یاد بگیرم و اون رو توی پروژه‌های واقعی پیاده کنم. برای من هر پروژه مثل یه آزمایشگاه کوچیکه که می‌تونم توش خلاقیت به خرج بدم، اشتباه کنم، دوباره امتحان کنم و در نهایت به یه نتیجه‌ی بهتر برسم",
  "انگیزه‌ی اصلی من برای ساخت پروژه‌های بیشتر، تنها تمرین و یادگیری نیست؛ بلکه رسیدن به این حسه که دارم قدم به قدم جلوتر می‌رم و توانایی‌هام رو ارتقا می‌دم. هر بار که یه پروژه رو تموم می‌کنم، به جای اینکه متوقف بشم، بیشتر مشتاق می‌شم تا ایده‌های بعدی رو بسازم. به نظرم دنیای فرانت‌اند پر از چالش‌های جذابه؛ از طراحی تجربه کاربری گرفته تا پیاده‌سازی دقیق جزئیات، همه و همه باعث می‌شن هیچ‌وقت یکنواختی حس نکنم",
  "برای من کدنویسی فقط یه مهارت یا شغل نیست، بلکه یه مسیر بی‌پایانه؛ مسیری که پر از فرصت برای خلاقیت، حل مسئله و رشد شخصیه. آینده‌ای که برای خودم می‌بینم اینه که با هر پروژه‌ی جدید، هم سطح کارهام بالاتر بره و هم تجربه‌ای که کاربر از محصول می‌گیره، لذت‌بخش‌تر بشه",
];

export const SKILLS = [
  {
    icon: <BiLogoHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Html",
    experience: "8+ years",
  },
  {
    icon: <BiLogoCss3 className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CSS",
    experience: "8+ years",
  },
  {
    icon: <RiTailwindCssLine className="text-4xl  text-cyan-400 lg:text-5xl" />,
    name: "Tailwind",
    experience: "1+ year",
  },

  {
    icon: (
      <TbBrandJavascript className="text-4xl text-yellow-400 lg:text-5xl" />
    ),
    name: "Javascript",
    experience: "2+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <RiGitBranchLine className="text-4xl text-green-900 lg:text-5xl" />,
    name: "Git",
    experience: "2+ year",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-900 lg:text-5xl" />,
    name: "TypeScript",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "طراحی و پیاده‌سازی وبسایت شخصی",

    description:
      "ایجاد وبسایت پرسونال برای معرفی نمونه‌کارها و مهارت‌ها با استفاده ازری اکت و تلویند با تمرکز بر طراحی مدرن و واکنش‌گرا",
  },
  {
    title: "توسعه وب‌اپلیکیشن‌های تمرینی",

    description:
      "ساخت چند پروژه ی کوچک جهت تمرین مفاهیم پایه و پیشرفته ی ری اکت شامل مدیریت وضعیت، کار با ای پی آی و پیاده سازی کامپوننت های قابل استفاده مجدد",
  },
  {
    title: "طراحی رابط کاربری نمونه‌کارها",

    description:
      "ایجاد و توسعه چند نمونه رابط کاربری  به‌صورت مستقل با تمرکز بر اصول طراحی کاربرمحور، تایپوگرافی و رنگ‌بندی هماهنگ",
  },
];

export const EDUCATION = [
  {
    degree: "دوره جامع طراحی و برنامه نویسی وب",
    institution: "آموزشگاه لایتک",
    duration: "1402",
    description: {
      1: "برای ساختار و استایل صفحات HTML و CSS",
      2: " برای تعاملات پویا JavaScript",
      3: " برای طراحی واکنش‌گرا Bootstrap",
      4: " برای مدیریت نسخه و کنترل پروژه Git",
    },
  },
  {
    degree: "React.js دوره ",
    institution: "آموزشگاه لایتک",
    duration: "1403",
    description: {
      1: "برای ساختار و استایل صفحات HTML و CSS",
      2: " برای تعاملات پویا JavaScript",
      3: " برای طراحی واکنش‌گرا Bootstrap",
      4: " برای مدیریت نسخه و کنترل پروژه Git",
    },
  },
  {
    degree: "Photoshop دوره",
    institution: "مدرسه آنلاین اینورس",
    duration: "1401",
    description: {
      1: "طراحی رابط کاربری",
      2: " کار با لایه‌ها و افکت‌ها",
      3: " آماده‌سازی تصاویر برای وب",
    },
  },
  {
    degree: "Illustrator دوره",
    institution: "مدرسه آنلاین اینورس",
    duration: "1401",
    description: {
      1: "UI طراحی آیکن و المان‌های  ",
      2: "Pen و Shape کار با ابزار  ",
      3: "آماده‌سازی طرح‌ها برای وب و چاپ",
    },
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.fb.com/l/6lp1kJRRR",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "https://www.instagram.com/_mona_rezaeiiii?igsh=Y2VkYXpoNnRhcDR2",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/MonaRezaei",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/mona-rezaei-669200282/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
