const PATHWAYS = [
  { icon: "🏎️", title: "STEM Racing (F1 in Schools)", grades: "Grades 3–12", desc: "Design, manufacture, and race miniature F1 cars powered by CO₂ cartridges." },
  { icon: "🏁", title: "Formula Ethara", grades: "Grades 3–8", desc: "UAE-based racing series for younger engineers stepping into motorsport." },
  { icon: "🚙", title: "4×4 in Schools RC", grades: "Grades 6–12", desc: "Engineer remote-control 4x4 vehicles to conquer obstacle courses." },
  { icon: "🚀", title: "Emirates Water Rocket", grades: "Grades 5–12", desc: "Build pressurized water rockets and launch them for distance and accuracy." },
  { icon: "🌌", title: "IAAC Astronomy", grades: "Grades 5–12", desc: "International Astronomy & Astrophysics Competition." },
  { icon: "⚛️", title: "IPhyC Physics", grades: "Grades 8–12", desc: "International Physics Challenge for aspiring physicists." },
  { icon: "📐", title: "IYMC Mathematics", grades: "Grades 6–12", desc: "International Youth Math Challenge — the world's biggest online math olympiad." },
];

const FAQS = [
  { q: "Who can join SEAL Club?", a: "Any student in Grades 3–12 at Ambassador School Dubai with a passion for STEM." },
  { q: "Do I need prior experience?", a: "No. Beginners build foundations while advanced students push into competitions." },
  { q: "What does the fee cover?", a: "AED 600/term covers club operations, mentorship, and most competition entries. Greenpower has an AED 1,000 add-on." },
  { q: "When does the club meet?", a: "Every Thursday from 2:45 to 4:15 PM on campus." },
  { q: "How do I register?", a: "Use the registration link on this site. Spots are limited per pathway." },
];

// Render pathways
const grid = document.getElementById("pathwaysGrid");
grid.innerHTML = PATHWAYS.map(p => `
  <div class="card">
    <div class="icon">${p.icon}</div>
    <div class="grades">${p.grades}</div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
  </div>
`).join("");

// Render FAQs
const faqList = document.getElementById("faqList");
faqList.innerHTML = FAQS.map((f, i) => `
  <div class="faq-item" data-i="${i}">
    <button class="faq-q">${f.q}<span>+</span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  </div>
`).join("");

faqList.querySelectorAll(".faq-q").forEach(btn => {
  btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
});

// Mobile menu
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();
