import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/seal/PageHeader";
import { PATHWAYS, COMP_IMAGES } from "@/data/seal";

const Pathways = () => (
  <section className="py-20">
    <div className="container">
      <PageHeader
        label="Competition Pathways"
        title={<>Choose your <span className="text-primary">arena</span></>}
        description="From electric racing to astrophysics — pick the challenges that ignite your curiosity."
      />
      <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4">
        {PATHWAYS.map((p, i) => (
          <Link
            key={p.slug}
            to={`/competition/${p.slug}`}
            className="group relative flex items-start gap-6 p-6 text-white border-l-4 border-primary overflow-hidden bg-ink bg-cover bg-center transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: `linear-gradient(90deg, hsl(var(--ink) / 0.92) 0%, hsl(var(--ink) / 0.7) 55%, hsl(var(--ink) / 0.35) 100%), url(${COMP_IMAGES[p.slug] ?? ""})` }}
          >
            <div className="number-badge shrink-0 relative">{String(i + 1).padStart(2, "0")}</div>
            <div className="flex-1 relative">
              <div className="font-heading text-[10px] tracking-[0.3em] text-accent uppercase mb-1">{p.grades}</div>
              <h3 className="font-display uppercase text-2xl lg:text-3xl mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{p.desc}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-2 group-hover:translate-x-1 transition-transform relative" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Pathways;
