import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PATHWAYS, COMP_IMAGES } from "@/data/seal";

const Competition = () => {
  const { slug } = useParams();
  const comp = PATHWAYS.find((p) => p.slug === slug);

  if (!comp) {
    return (
      <section className="py-32 container text-center">
        <h1 className="font-display uppercase text-5xl mb-4">Competition not found</h1>
        <Button asChild className="bg-primary hover:bg-primary/90 rounded-none font-heading uppercase tracking-wider">
          <Link to="/pathways"><ArrowLeft className="mr-1" /> Back to Pathways</Link>
        </Button>
      </section>
    );
  }

  const Icon = comp.icon;

  return (
    <section className="py-16">
      <div className="container">
        <Link to="/pathways" className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4" /> All Pathways
        </Link>

        <div
          className="relative bg-ink text-white p-8 lg:p-12 border-l-4 border-primary mb-10 overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(90deg, hsl(var(--ink) / 0.85) 0%, hsl(var(--ink) / 0.55) 60%, hsl(var(--ink) / 0.2) 100%), url(${COMP_IMAGES[comp.slug] ?? ""})` }}
        >
          <div className="relative flex items-start gap-6 min-h-[220px]">
            <div className="circle-icon w-20 h-20 shrink-0">
              <Icon className="w-9 h-9 text-accent" />
            </div>
            <div>
              <div className="font-heading text-[10px] tracking-[0.3em] text-accent uppercase mb-2">{comp.grades}</div>
              <h1 className="font-display uppercase text-5xl lg:text-7xl leading-none drop-shadow-[0_2px_0_rgba(0,0,0,0.6)]">{comp.title}</h1>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bold-card p-8">
            <div className="font-heading text-xs tracking-[0.4em] text-primary uppercase mb-3">Overview</div>
            <h2 className="font-display uppercase text-3xl mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{comp.long}</p>
          </div>
          <div className="bg-ink text-white p-8">
            <div className="font-heading text-xs tracking-[0.4em] text-accent uppercase mb-3">Highlights</div>
            <h2 className="font-display uppercase text-3xl mb-4">What You'll Do</h2>
            <ul className="space-y-3">
              {comp.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={3} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 rounded-none font-heading uppercase tracking-wider">
            <Link to="/register">Register for {comp.title} <ArrowRight className="ml-1" /></Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-2 border-ink rounded-none font-heading uppercase tracking-wider">
            <Link to="/pathways">Explore Other Pathways</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Competition;
