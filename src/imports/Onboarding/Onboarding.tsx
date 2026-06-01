import svgPaths from "./svg-o50hgsa1m1";

function Frame() {
  return (
    <div className="absolute bg-[#9dd325] content-stretch flex flex-col items-center left-[96px] top-[287px] w-[184.011px]">
      <div className="h-[165.136px] relative shrink-0 w-[134.797px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.797 165.136">
          <path d={svgPaths.p3acdf300} fill="var(--fill-0, white)" id="Subtract" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Baloo_Bhaijaan:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[48.003px] text-center text-white w-[min-content]">{`Ăng Ăng `}</p>
    </div>
  );
}

export default function Onboarding() {
  return (
    <div className="bg-[#9dd325] relative size-full" data-name="Onboarding">
      <Frame />
    </div>
  );
}