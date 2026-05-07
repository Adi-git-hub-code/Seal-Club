import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GREENPOWER, COMP_IMAGES } from "@/data/seal";

const Greenpower = () => (
  <>
    <section
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(90deg, hsl(var(--ink) / 0.9) 0%, hsl(var(--ink) / 0.6) 55%, hsl(var(--ink) / 0.25) 100%), url(${COMP_IMAGES.greenpower})` }}
    >
      <div className="container py-20 lg:py-28 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground mb-5">
          <span className="font-heading text-[10px] tracking-[0.3em] uppercase">Flagship Program</span>
        </div>
        <h1 className="font-display uppercase text-5xl lg:text-7xl mb-6 leading-none drop-shadow-[0_2px_0_rgba(0,0,0,0.6)]">
          Greenpower <span className="text-accent">Motorsport</span>
        </h1>
        <p className="text-lg text-white/90 leading-relaxed">
          Build a fully functional electric race car from the ground up. The closest students can get to
          real Formula racing while learning to engineer the future of mobility.
        </p>
      </div>
    </section>
    <section className="py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {GREENPOWER.map((f) => (
            <div key={f.title} className="bold-card p-5">
              <div className="circle-icon w-12 h-12 mb-3">
                <f.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="font-display uppercase text-lg mb-1 tracking-wide">{f.title}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 rounded-none font-heading uppercase tracking-wider">
          <Link to="/register">Join Greenpower <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Greenpower;
