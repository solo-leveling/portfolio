export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
      )}
      <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
      <div className="mt-3 h-1 w-12 rounded bg-accent" />
    </div>
  )
}
