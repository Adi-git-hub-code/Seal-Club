import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { MoreVertical, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { NAV, PATHWAYS } from "@/data/seal";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 font-heading uppercase tracking-wider text-sm transition-colors ${
      isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
    }`;

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <header className="fixed top-0 inset-x-0 z-50 bg-ink text-white border-b-4 border-primary">
        <nav className="container flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 font-display uppercase text-xl tracking-wider">
            <span className="w-8 h-8 bg-primary flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </span>
            <span>SEAL</span>
            <span className="text-accent">CLUB</span>
          </Link>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden sm:inline-flex bg-primary hover:bg-primary/90 rounded-none font-heading uppercase tracking-wider">
              <Link to="/register">Register</Link>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="w-10 h-10 border-2 border-white/30 hover:border-accent flex items-center justify-center transition-colors"
                >
                  <MoreVertical className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[88vw] sm:w-[400px] overflow-y-auto bg-background">
                <SheetHeader>
                  <SheetTitle className="font-display uppercase text-3xl tracking-wider">
                    SEAL <span className="text-primary">CLUB</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6">
                  <div className="font-heading text-[10px] tracking-[0.3em] text-primary uppercase mb-2 px-3">
                    Main
                  </div>
                  <div className="space-y-1">
                    {NAV.map((l) => (
                      <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={close} className={linkClass}>
                        {l.label}
                      </NavLink>
                    ))}
                  </div>

                  <div className="font-heading text-[10px] tracking-[0.3em] text-primary uppercase mb-2 mt-8 px-3">
                    Competitions
                  </div>
                  <div className="space-y-1">
                    {PATHWAYS.map((p) => (
                      <NavLink
                        key={p.slug}
                        to={`/competition/${p.slug}`}
                        onClick={close}
                        className={linkClass}
                      >
                        <span className="inline-flex items-center gap-2">
                          <p.icon className="w-4 h-4" />
                          {p.title}
                        </span>
                      </NavLink>
                    ))}
                  </div>

                  <div className="mt-8 px-3 sm:hidden">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-none font-heading uppercase tracking-wider">
                      <Link to="/register" onClick={close}>Register Now</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <div className="pt-14 flex-1" key={location.pathname}>
        <Outlet />
      </div>

      <footer className="bg-ink text-white border-t-4 border-primary">
        <div className="container py-12 text-center">
          <Rocket className="w-8 h-8 mx-auto mb-4 text-accent" />
          <p className="font-display uppercase text-2xl lg:text-3xl tracking-wide max-w-3xl mx-auto leading-tight">
            From Wheels to Wings, From Earth to Sky —<br />
            At SEAL Club, <span className="text-accent">We Rise</span>,{" "}
            <span className="text-primary">We Soar</span>,{" "}
            <span className="text-accent">We Fly</span>.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-heading uppercase tracking-[0.3em] text-white/60">
            <span>Ambassador School Dubai</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} SEAL Club</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Layout;
