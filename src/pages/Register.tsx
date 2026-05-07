import { ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGISTER_URL } from "@/data/seal";

const Register = () => (
  <section className="py-20 bg-sky-hero text-white min-h-[calc(100vh-3.5rem)]">
    <div className="container">
      <div className="border-4 border-white p-10 lg:p-16 text-center bg-ink/40 backdrop-blur">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary mb-6">
          <Flame className="w-4 h-4 text-white" />
          <span className="font-heading text-xs tracking-[0.3em] uppercase text-white">Limited Seats</span>
        </div>
        <h1 className="font-display uppercase text-5xl lg:text-7xl mb-6 leading-none">
          Secure Your <span className="text-accent">Spot</span>
        </h1>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Registration for SEAL Club 2026–2027 is open. Lock in your child's place today.
        </p>
        <Button size="xl" asChild className="bg-primary hover:bg-primary/90 rounded-none border-2 border-white shadow-[6px_6px_0_0_rgba(0,0,0,0.4)] font-heading uppercase tracking-wider">
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
            Register Now <ArrowRight className="ml-1" />
          </a>
        </Button>
        <p className="text-xs text-white/70 mt-6 font-heading uppercase tracking-[0.2em]">Opens secure Google Form · ~2 minutes</p>
      </div>
    </div>
  </section>
);

export default Register;
