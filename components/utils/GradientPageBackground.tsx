/**
 * Ensure that sibling components do not have a static positioning because then z-index will be ignored
 */

interface GradientPageBackgroundProps {
  className: string;
}

export default function GradientPageBackground({
  className,
}: GradientPageBackgroundProps) {
  return (
    <div
      className={`absolute top-0 left-0 z-0 w-full min-h-screen blur-3xl ${className}`}
    />
  );
}
