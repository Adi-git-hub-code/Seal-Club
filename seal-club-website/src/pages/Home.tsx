import { Link } from "react-router-dom";
import { ArrowRight, Check, Trophy, Rocket, Zap, Users, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PATHWAYS, PILLARS, DETAILS } from "@/data/seal";

const PARTNERS = [
  "AMBASSADOR SCHOOL",
  "STEM RACING",
  "GREENPOWER",
  "FORMULA ETHARA",
  "IAAC",
  "IPhyC",
  "IYMC",
];

const WHY_JOIN = [
  "World-class STEM exposure from Grade 3 to 12",
  "Compete on national & international stages",
  "Hands-on engineering — design, build, race",
  "Mentorship from real engineering coaches",
  "Build leadership, teamwork & confidence",
  "Pathway into top universities & industry",
];

const Home = () => (
  <>
    {/* Partner ticker */}
    <div className="bg-ink border-b-4 border-primary overflow-hidden">
      <div className="flex gap-12 py-3 animate-ticker whitespace-nowrap">
        {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, i) => (
          <span key={i} className="font-heading text-xs tracking-[0.3em] text-accent uppercase">
            ★ {p}
          </span>
        ))}
      </div>
    </div>

    {/* HERO */}
    <section className="relative bg-sky-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(220_35%_10%)_0%,_transparent_60%)]" />
      <div className="container relative pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[11px] font-heading tracking-[0.3em] uppercase">Now Enrolling · 2026–27</span>
        </div>

        <div className="font-heading italic text-lg sm:text-xl tracking-wide text-accent mb-4">
          Inspire · Inquire · Innovate
        </div>

        <h1 className="font-display uppercase leading-[0.85] tracking-tight">
          <span className="block text-[18vw] sm:text-[14vw] lg:text-[11rem] drop-shadow-[0_4px_0_rgba(0,0,0,0.4)]">
            SEAL
          </span>
          <span className="block text-[12vw] sm:text-[9vw] lg:text-[7rem] text-accent -mt-4">
            CLUB
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-8 text-base sm:text-lg text-white/90">
          Science · Engineering · Aerospace · Leadership. Where Ambassador School students
          design, build, race and rise into tomorrow's champions.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="default" size="xl" asChild className="bg-primary hover:bg-primary/90 rounded-none border-2 border-white shadow-[6px_6px_0_0_rgba(0,0,0,0.4)]">
            <Link to="/register">REGISTER NOW <ArrowRight className="ml-1" /></Link>
          </Button>
          <Button variant="outline" size="xl" asChild className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-ink rounded-none">
            <Link to="/pathways">EXPLORE PATHWAYS</Link>
          </Button>
        </div>
      </div>

      {/* Champions banner */}
      <div className="stripe-banner relative">
        <div className="container py-6 flex items-center justify-center gap-6">
          <Trophy className="w-7 h-7 text-accent shrink-0" />
          <h2 className="font-display uppercase text-3xl sm:text-5xl text-white tracking-wider text-center">
            Tomorrow's <span className="text-accent">Champions</span>
          </h2>
          <Trophy className="w-7 h-7 text-accent shrink-0" />
        </div>
      </div>
    </section>

    {/* PILLARS — circular icon cards */}
    <section className="py-20 bg-ink-grad text-white">
      <div className="container">
        <div className="text-center mb-14">
          <div className="font-heading text-xs tracking-[0.4em] text-accent uppercase mb-3">The Programme</div>
          <h2 className="font-display uppercase text-5xl lg:text-7xl">
            Four <span className="text-primary">Pillars</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center">
              <div className="circle-icon w-28 h-28 mb-5">
                <p.icon className="w-12 h-12 text-accent" />
              </div>
              <h3 className="font-display uppercase text-2xl mb-2 tracking-wide">{p.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-[220px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHY JOIN */}
    <section className="py-20 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="font-heading text-xs tracking-[0.4em] text-primary uppercase mb-3">Why Join?</div>
          <h2 className="font-display uppercase text-5xl lg:text-6xl mb-6 leading-none">
            Built for the <span className="text-primary">bold</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            SEAL Club isn't a hobby class — it's a launchpad. Students step into real engineering
            challenges, compete with the world's best, and walk out as creators.
          </p>
        </div>
        <ul className="space-y-4">
          {WHY_JOIN.map((line) => (
            <li key={line} className="flex items-start gap-4 bold-card p-4">
              <div className="w-7 h-7 rounded-full bg-[hsl(140_70%_40%)] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="font-medium">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* PATHWAYS — numbered tracks */}
    <section className="py-20 bg-ink text-white">
      <div className="container">
        <div className="text-center mb-14">
          <div className="font-heading text-xs tracking-[0.4em] text-accent uppercase mb-3">Programme Tracks</div>
          <h2 className="font-display uppercase text-5xl lg:text-7xl">
            Choose your <span className="text-accent">arena</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-6">
          {PATHWAYS.map((p, i) => (
            <Link
              key={p.slug}
              to={`/competition/${p.slug}`}
              className="group flex items-start gap-6 p-6 border-l-4 border-primary bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="number-badge shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="font-heading text-[10px] tracking-[0.3em] text-accent uppercase mb-1">
                  {p.grades}
                </div>
                <h3 className="font-display uppercase text-2xl lg:text-3xl mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* DETAILS strip */}
    <section className="py-16 bg-accent text-ink">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {DETAILS.map((d) => (
            <div key={d.label}>
              <d.icon className="w-6 h-6 mx-auto mb-2" />
              <div className="font-heading text-[10px] uppercase tracking-[0.2em] mb-1">{d.label}</div>
              <div className="font-display uppercase text-lg leading-tight">{d.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-sky-hero text-white text-center">
      <div className="container">
        <Rocket className="w-12 h-12 mx-auto mb-6 text-accent" />
        <h2 className="font-display uppercase text-5xl lg:text-7xl mb-6 leading-none">
          Ready to <span className="text-accent">launch?</span>
        </h2>
        <p className="text-lg text-white/90 max-w-xl mx-auto mb-10">
          Limited seats. Limitless ambition. Lock in your child's place in the SEAL Club 2026–27 cohort.
        </p>
        <Button variant="default" size="xl" asChild className="bg-primary hover:bg-primary/90 rounded-none border-2 border-white shadow-[6px_6px_0_0_rgba(0,0,0,0.4)]">
          <Link to="/register">SECURE YOUR SPOT <ArrowRight className="ml-1" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Home;
