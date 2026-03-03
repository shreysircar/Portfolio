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
    <div className="space-y-10">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        System Architecture
      </h2>

      {architecture.hldImage && (
        <div className="space-y-4">
          <h3 className="text-base font-medium text-neutral-700">
            High-Level Design
          </h3>

          <img
            src={architecture.hldImage}
            alt="HLD"
            className="w-full max-w-4xl mx-auto rounded-xl shadow-sm"
          />

          {architecture.hldDescription && (
            <p className="text-neutral-600 text-sm leading-relaxed max-w-3xl mx-auto">
              {architecture.hldDescription}
            </p>
          )}
        </div>
      )}

      {architecture.lldImage && (
        <div className="space-y-4">
          <h3 className="text-base font-medium text-neutral-700">
            Low-Level Design
          </h3>

          <img
            src={architecture.lldImage}
            alt="LLD"
            className="w-full max-w-4xl mx-auto rounded-xl shadow-sm"
          />

          {architecture.lldDescription && (
            <p className="text-neutral-600 text-sm leading-relaxed max-w-3xl mx-auto">
              {architecture.lldDescription}
            </p>
          )}
        </div>
      )}
    </div>
  );
}