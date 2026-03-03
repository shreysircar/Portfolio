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
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        System Architecture
      </h2>

      <div className="mt-12 space-y-16">

        {architecture.hldImage && (
          <div>
            <h3 className="text-lg font-medium text-neutral-800">
              High-Level Design
            </h3>

            <img
              src={architecture.hldImage}
              alt="HLD"
              className="mt-6 w-full rounded-2xl shadow-sm"
            />
          </div>
        )}

        {architecture.lldImage && (
          <div>
            <h3 className="text-lg font-medium text-neutral-800">
              Low-Level Design
            </h3>

            <img
              src={architecture.lldImage}
              alt="LLD"
              className="mt-6 w-full rounded-2xl shadow-sm"
            />
          </div>
        )}

      </div>
    </div>
  );
}