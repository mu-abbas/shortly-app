import Short from './Short';

export default function Shorts({ shorts, setShorts }) {
  return (
    <section className="mx-auto -mt-8">
      <ul className="space-y-6 max-w-lg md:max-w-4xl mx-auto">
        {shorts.map(short => (
          <Short short={short} setShorts={setShorts} key={short.short_url} />
        ))}
      </ul>
    </section>
  );
}
