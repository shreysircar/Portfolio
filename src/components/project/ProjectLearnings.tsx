// src/components/project/ProjectLearnings.tsx

type Props = {
  learnings: string[];
};

export default function ProjectLearnings({ learnings }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        Learnings
      </h2>

      <ul className="mt-10 space-y-4 text-neutral-600">
        {learnings.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}