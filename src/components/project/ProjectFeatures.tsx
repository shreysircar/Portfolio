// src/components/project/ProjectFeatures.tsx

type Feature = {
  title: string;
  description: string;
};

type Props = {
  title?: string;
  features: Feature[];
};

export default function ProjectFeatures({
  title = "Key Features",
  features,
}: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h2>

      <div className="mt-12 grid md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <div key={index}>
            <h3 className="text-lg font-medium text-neutral-900">
              {feature.title}
            </h3>

            {feature.description && (
              <p className="mt-3 text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}