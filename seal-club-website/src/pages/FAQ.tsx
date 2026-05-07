import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/seal";

const FAQ = () => (
  <section className="py-20">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <div className="font-heading text-xs tracking-[0.4em] text-primary uppercase mb-3">FAQ</div>
        <h1 className="font-display uppercase text-5xl lg:text-7xl leading-none">
          Got <span className="text-primary">questions?</span>
        </h1>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bold-card px-5 border-2">
            <AccordionTrigger className="font-heading uppercase tracking-wider text-left hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
