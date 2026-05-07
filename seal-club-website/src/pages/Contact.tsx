import { Mail, User } from "lucide-react";

const Contact = () => (
  <section className="py-20">
    <div className="container">
      <div className="bold-card p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="font-heading text-xs tracking-[0.4em] text-primary uppercase mb-3">Contact</div>
          <h1 className="font-display uppercase text-5xl lg:text-6xl mb-4 leading-none">
            Talk to the <span className="text-primary">team</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Questions about the program, eligibility or registration? We're here to help.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-5 bg-ink text-white border-l-4 border-primary">
            <div className="circle-icon w-12 h-12">
              <User className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="font-heading text-[10px] uppercase tracking-[0.3em] text-white/60">Coordinator</div>
              <div className="font-display uppercase text-lg">Mr. Salman</div>
            </div>
          </div>
          <a href="mailto:salman@ambassadorschool.com" className="flex items-center gap-4 p-5 bg-ink text-white border-l-4 border-accent hover:bg-ink/90 transition-colors group">
            <div className="circle-icon w-12 h-12">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="font-heading text-[10px] uppercase tracking-[0.3em] text-white/60">Email</div>
              <div className="font-display uppercase text-lg group-hover:text-accent transition-colors">
                salman@ambassadorschool.com
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
