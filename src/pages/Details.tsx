import { Link } from "react-router-dom";
import { Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DETAILS, ORIENTATION } from "@/data/seal";

const Details = () => (
  <section className="py-20">
    <div className="container grid lg:grid-cols-2 gap-12">
      <div>
        <div className="font-heading text-xs tracking-[0.4em] text-primary uppercase mb-3">Club Details</div>
        <h1 className="font-display uppercase text-5xl lg:text-6xl mb-8 leading-none">
          The <span className="text-primary">essentials</span>
        </h1>
        <div className="grid sm:grid-cols-2 gap-4">
          {DETAILS.map((d) => (
            <div key={d.label} className="bold-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <d.icon className="w-5 h-5 text-primary" />
                <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{d.label}</span>
              </div>
              <div className="font-display uppercase text-xl">{d.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="font-heading text-xs tracking-[0.4em] text-primary uppercase mb-3">Orientation</div>
        <h2 className="font-display uppercase text-5xl lg:text-6xl mb-8 leading-none">
          Join us on <span className="text-primary">April 30</span>
        </h2>
        <div className="space-y-4">
          {ORIENTATION.map((s) => (
            <div key={s.grade} className="bg-ink text-white p-6 border-l-4 border-primary flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-display uppercase text-2xl mb-1">{s.grade}</div>
                <div className="text-sm text-white/70 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {s.time}
                </div>
              </div>
              <Button asChild className="bg-accent hover:bg-accent/90 text-ink rounded-none font-heading uppercase tracking-wider">
                <Link to="/register"><Video className="mr-1" /> Join Online</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Details;
