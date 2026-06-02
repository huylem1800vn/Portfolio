import reviewerSvg from "./reviewer.svg?raw";

export default function Reviewer() {
  return (
    <div
      className="relative size-full [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
      dangerouslySetInnerHTML={{ __html: reviewerSvg }}
      data-name="Reviewer"
    />
  );
}
