// src/components/project/ProjectOverview.tsx

type Props = {
  overview: string;
};

export default function ProjectOverview({ overview }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        Overview
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-3xl">
        {overview}
      </p>
    </div>
  );
}