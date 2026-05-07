import PageHeader from "@/components/seal/PageHeader";
import { PILLARS } from "@/data/seal";

const About = () => (
  <section className="py-20">
    <div className="container">
      <PageHeader
        label="About the Club"
        title={<>Engineering<br />tomorrow's <span className="text-primary">innovators</span></>}
        description="SEAL Club is more than an after-school activity — it's a launchpad. Students design, build, race, calculate, and present, gaining real exposure to how engineers and scientists solve the world's toughest problems."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PILLARS.map((p) => (
          <div key={p.title} className="bold-card p-6">
            <div className="circle-icon w-14 h-14 mb-5">
              <p.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display uppercase text-xl mb-2 tracking-wide">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
