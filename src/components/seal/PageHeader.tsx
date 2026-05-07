interface Props {
  label: string;
  title: React.ReactNode;
  description?: string;
}

const PageHeader = ({ label, title, description }: Props) => (
  <div className="mb-12">
    <div className="font-heading text-xs tracking-[0.4em] text-primary uppercase mb-3">{label}</div>
    <h1 className="font-display uppercase text-5xl lg:text-7xl leading-[0.9] mb-6">{title}</h1>
    {description && <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{description}</p>}
  </div>
);

export default PageHeader;
