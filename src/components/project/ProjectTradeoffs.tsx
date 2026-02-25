// src/components/project/ProjectTradeoffs.tsx

type Props = {
  tradeoffs: string[];
};

export default function ProjectTradeoffs({ tradeoffs }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        Trade-offs
      </h2>

      <ul className="mt-10 space-y-4 text-neutral-600">
        {tradeoffs.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}