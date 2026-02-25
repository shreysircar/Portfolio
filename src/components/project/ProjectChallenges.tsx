// src/components/project/ProjectChallenges.tsx

type Props = {
  challenges: string[];
};

export default function ProjectChallenges({ challenges }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        Challenges
      </h2>

      <ul className="mt-10 space-y-4 text-neutral-600">
        {challenges.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}