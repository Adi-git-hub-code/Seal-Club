import {
  Brain, Rocket, Trophy, Users,
  Car, Flag, Wrench, Droplets, Telescope, Atom, Sigma,
  Zap, Leaf, Cog,
  Calendar, Clock, MapPin, GraduationCap, Wallet,
} from "lucide-react";
import imgStemRacing from "@/assets/comp/stem-racing.jpg";
import imgFormulaEthara from "@/assets/comp/formula-ethara.jpg";
import img4x4 from "@/assets/comp/4x4.jpg";
import imgWaterRocket from "@/assets/comp/water-rocket.jpg";
import imgIaac from "@/assets/comp/iaac.jpg";
import imgGreenpower from "@/assets/comp/greenpower.jpg";

export const COMP_IMAGES: Record<string, string> = {
  "stem-racing": imgStemRacing,
  "formula-ethara": imgFormulaEthara,
  "4x4-in-schools": img4x4,
  "water-rocket": imgWaterRocket,
  iaac: imgIaac,
  iphyc: imgIaac,
  iymc: imgIaac,
  greenpower: imgGreenpower,
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Pathways", to: "/pathways" },
  { label: "Greenpower", to: "/greenpower" },
  { label: "Details", to: "/details" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const PILLARS = [
  { icon: Brain, title: "STEM Mastery", desc: "Hands-on science, technology, engineering & math beyond the classroom." },
  { icon: Rocket, title: "Innovation", desc: "Design thinking, prototyping and an engineering mindset from day one." },
  { icon: Users, title: "Leadership", desc: "Teamwork, communication, and project ownership in real challenges." },
  { icon: Trophy, title: "Global Stage", desc: "Compete nationally and internationally with world-class peers." },
];

export const PATHWAYS = [
  {
    slug: "stem-racing",
    icon: Car,
    title: "STEM Racing",
    grades: "Grades 3–12",
    desc: "Multi-level engineering racing competition where students design, build & race miniature F1 cars.",
    long: "STEM Racing (formerly F1 in Schools) is the world's largest STEM competition. Teams of 3–6 students design, manufacture, test and race a miniature CO₂-powered F1 car using CAD/CAM software. Beyond engineering, students manage budgets, sponsorship, branding and a verbal presentation to judges — preparing them for university and industry.",
    highlights: ["CAD design & CFD analysis", "CNC manufacturing", "Team management & branding", "National & world finals"],
  },
  {
    slug: "formula-ethara",
    icon: Flag,
    title: "Formula Ethara",
    grades: "Grades 3–8",
    desc: "Junior motorsport challenge sparking creativity and engineering fundamentals through racing.",
    long: "Formula Ethara is the UAE's flagship junior motorsport STEM challenge. Younger students get a first taste of motorsport engineering — designing, building and decorating their own miniature race cars while learning aerodynamics, friction, and teamwork in a fun, fast-paced format.",
    highlights: ["Intro to aerodynamics", "Hands-on car build", "Pit-crew teamwork", "UAE-wide finals"],
  },
  {
    slug: "4x4-in-schools",
    icon: Wrench,
    title: "4×4 in Schools RC",
    grades: "Grades 6–12",
    desc: "Build remote-controlled off-road vehicles to tackle rugged engineering challenges.",
    long: "4×4 in Schools challenges students to design and build a radio-controlled 4×4 vehicle capable of conquering a demanding off-road course featuring rocks, ramps, and obstacles. Students learn drivetrain design, suspension, torque and traction — and present their engineering portfolio to judges.",
    highlights: ["Suspension & drivetrain design", "Off-road obstacle course", "Engineering portfolio", "International finals"],
  },
  {
    slug: "water-rocket",
    icon: Droplets,
    title: "Emirates Water Rocket",
    grades: "All Grades",
    desc: "Design pressure-powered water rockets and master physics of flight and propulsion.",
    long: "Students design and launch water-propelled rockets, applying Newton's laws, fluid dynamics and aerodynamics. The challenge is precision: maximize altitude, time aloft, or land closest to a target. A pure physics playground.",
    highlights: ["Newton's laws in action", "Nozzle & fin design", "Launch precision events", "UAE national finals"],
  },
  {
    slug: "iaac",
    icon: Telescope,
    title: "IAAC · Astronomy",
    grades: "All Grades",
    desc: "International Astronomy & Astrophysics Competition — explore the cosmos.",
    long: "The International Astronomy and Astrophysics Competition is a global olympiad. Students solve problems on stellar evolution, cosmology, orbital mechanics and observational astronomy — from qualification to global finals.",
    highlights: ["Cosmology & astrophysics", "Orbital mechanics problems", "Global online rounds", "Medals & certificates"],
  },
  {
    slug: "iphyc",
    icon: Atom,
    title: "IPhyC · Physics",
    grades: "All Grades",
    desc: "International Physics Challenge — push your understanding of the physical world.",
    long: "The International Physics Challenge tests deep understanding of mechanics, thermodynamics, electromagnetism and modern physics through creative problems that go far beyond the school syllabus.",
    highlights: ["Olympiad-style problems", "Mechanics to quantum", "Multiple rounds", "International recognition"],
  },
  {
    slug: "iymc",
    icon: Sigma,
    title: "IYMC · Mathematics",
    grades: "All Grades",
    desc: "International Youth Math Challenge — sharpen logic, proofs and problem-solving.",
    long: "The International Youth Math Challenge is one of the largest math competitions for students worldwide. Multiple rounds of increasingly difficult problems develop rigorous proof, logic and creative problem-solving skills.",
    highlights: ["Proof-based problems", "Qualification, pre-final, final", "Global leaderboard", "Medals & honours"],
  },
];

export const GREENPOWER = [
  { icon: Zap, title: "Electric Car Design", desc: "Engineer real single-seater EVs from chassis to drivetrain." },
  { icon: Leaf, title: "Sustainability", desc: "Learn energy efficiency, eco-design and clean mobility." },
  { icon: Cog, title: "Real Engineering", desc: "Apply physics, CAD, and manufacturing in a working machine." },
  { icon: Trophy, title: "Race & Compete", desc: "Test your build on a real track against international teams." },
];

export const DETAILS = [
  { icon: GraduationCap, label: "Eligibility", value: "Grades 3–12" },
  { icon: Calendar, label: "Day", value: "Thursday" },
  { icon: Clock, label: "Time", value: "2:45 – 4:15 PM" },
  { icon: MapPin, label: "Mode", value: "On-campus" },
  { icon: Wallet, label: "SEAL Fee", value: "AED 600" },
  { icon: Wallet, label: "Greenpower Add-on", value: "+ AED 1,000" },
];

export const ORIENTATION = [
  { grade: "Grades 3–5", time: "April 30 · 5:00 – 5:30 PM" },
  { grade: "Grades 6–12", time: "April 30 · 5:30 – 6:00 PM" },
];

export const FAQS = [
  { q: "Who can join SEAL Club?", a: "Any Ambassador School student in Grades 3–12 with curiosity for STEM, racing, design or science." },
  { q: "Do I need prior engineering experience?", a: "No prior experience is required. Our coaches guide students from fundamentals to advanced builds." },
  { q: "What's included in the AED 600 fee?", a: "All SEAL Club sessions, mentoring, equipment access, and entry to multiple STEM competitions." },
  { q: "Why is Greenpower an add-on?", a: "Greenpower involves building a real electric car — the additional AED 1,000 covers specialized parts, kit and competition entry." },
  { q: "Can my child join more than one competition?", a: "Absolutely — students are encouraged to explore multiple pathways across the year." },
  { q: "Where are the sessions held?", a: "All sessions take place on-campus at Ambassador School Dubai every Thursday from 2:45 to 4:15 PM." },
];

export const REGISTER_URL = "https://forms.gle/3UsqWj4LBALaQoAr9";

export const SectionLabelClass = "text-xs tracking-[0.3em] text-primary uppercase mb-3";
