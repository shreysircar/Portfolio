// src/components/project/ProjectArchitecture.tsx

type Props = {
  architecture: {
    hldImage?: string;
    lldImage?: string;
    hldDescription?: string;
    lldDescription?: string;
  };
};

export default function ProjectArchitecture({ architecture }: Props) {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        System Architecture
      </h2>

      {/* HLD */}
      {architecture.hldImage && (
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-neutral-800">
            High-Level Design
          </h3>

          <img
            src={architecture.hldImage}
            alt="HLD"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-md"
          />

          {architecture.hldDescription && (
            <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              {architecture.hldDescription}
            </p>
          )}
        </div>
      )}

      {/* LLD */}
      {architecture.lldImage && (
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-neutral-800">
            Low-Level Design
          </h3>

          <img
            src={architecture.lldImage}
            alt="LLD"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-md"
          />

          {architecture.lldDescription && (
            <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              {architecture.lldDescription}
            </p>
          )}
        </div>
      )}
    </div>
  );
}