import svgPaths from "./svg-o50hgsa1m1";

function BrandMark() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[165.136px] relative shrink-0 w-[134.797px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.797 165.136">
          <path d={svgPaths.p3acdf300} fill="var(--fill-0, white)" id="Subtract" />
        </svg>
      </div>
      <p
        className="mt-[18px] text-center text-white not-italic whitespace-nowrap"
        style={{
          fontFamily: "'Baloo Bhaijaan', sans-serif",
          fontWeight: 400,
          fontSize: "48px",
          lineHeight: "1.1",
        }}
      >
        Ăng Ăng
      </p>
    </div>
  );
}

export default function Onboarding() {
  return (
    <div
      className="bg-[#9dd325] relative size-full flex items-center justify-center"
      data-name="Onboarding"
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: "100%",
          height: "100%",
          paddingTop: "40px",
        }}
      >
        <BrandMark />
      </div>
    </div>
  );
}
