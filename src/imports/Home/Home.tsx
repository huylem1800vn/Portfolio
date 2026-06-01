import svgPaths from "./svg-mnzj7kq3mr";
import imgImage12 from "./3609830dd9bd88850417109a84487adc6aeef9b9.png";
import imgImage from "./b24feb21d76668b3d4f86dd1de6ff9c0f8b4f4c8.png";
import imgImage1 from "./b833e8424bb930049e049e051fa13e903c0c162f.png";
import imgBannerFoodPh1 from "./50fb50082f523e25568d5e5b6fc4204458dc0320.png";
import imgBannerFoodPh2 from "./067663b262c4095779f86037c77e49725e1724c9.png";

function Background() {
  return (
    <div className="absolute bg-white h-[223px] left-0 overflow-clip top-0 w-[375px]" data-name="Background">
      <div className="absolute h-[657px] left-0 top-[-104px] w-[375px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return <div className="h-[10px] relative shrink-0 w-[124px]" data-name="Frame" />;
}

function Group() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Group">
          <rect height="12" id="Rectangle" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Vector" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Rectangle_2" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
          <Group />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-0 pointer-events-none px-[12px] top-[245px]">
      <div className="h-[231px] relative rounded-[16px] shrink-0 w-[197px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgImage} />
        <div aria-hidden className="absolute border border-[#9dd325] border-solid inset-0 rounded-[16px]" />
      </div>
      <div className="h-[231px] relative rounded-[16px] shrink-0 w-[148px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgImage1} />
        <div aria-hidden className="absolute border border-[rgba(173,219,64,0.9)] border-solid inset-0 rounded-[16px]" />
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Left Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="search">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
            <path d={svgPaths.p1e3af300} fill="var(--fill-0, #B0B0B0)" id="Vector " />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#b0b0b0] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Tìm quán ăn</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <LeftContent />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#e7e7e7] content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[8px] relative rounded-[16px] shrink-0 w-[123px]" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="map-pin">
        <div className="absolute inset-[8.33%_12.5%_6.31%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0003 13.6567">
            <path d={svgPaths.p3cf96c80} fill="var(--fill-0, #454545)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#454545] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quán Chay
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#e7e7e7] content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[8px] relative rounded-[16px] shrink-0 w-[110px]" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="map-pin">
        <div className="absolute inset-[8.33%_12.5%_6.31%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0003 13.6567">
            <path d={svgPaths.p3cf96c80} fill="var(--fill-0, #454545)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#454545] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bún Mắm
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#e7e7e7] content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[8px] relative rounded-[16px] shrink-0 w-[71px]" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="map-pin">
        <div className="absolute inset-[8.33%_12.5%_6.31%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0003 13.6567">
            <path d={svgPaths.p3cf96c80} fill="var(--fill-0, #454545)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#454545] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Phở
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] items-center left-[12px] p-[8px] rounded-[8px] top-[125px] w-[351px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
        <div aria-hidden className="absolute border-[#b0b0b0] border-b-[0.5px] border-solid inset-[0_0_-0.25px_0] pointer-events-none" />
        <Input />
      </div>
      <Frame4 />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Image">
      <div className="h-[174px] relative shrink-0 w-[172px]" data-name="banner food_phở 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBannerFoodPh1} />
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="relative shrink-0 w-full" data-name="Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center px-[4px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#262626] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Phở Sen
          </p>
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="shield-check">
            <div className="absolute inset-[8.33%_8.39%_8.33%_8.38%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.98722 10">
                <path d={svgPaths.p24128580} fill="var(--fill-0, #00BC7D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pin() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center relative shrink-0" data-name="Pin">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="map-pin">
        <div className="absolute inset-[8.33%_12.5%_6.31%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00023 10.2425">
            <path d={svgPaths.pb4f1c40} fill="var(--fill-0, #888888)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.7km
      </p>
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Rating">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="star">
        <div className="absolute inset-[4.18%_4.26%_8.35%_4.19%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.986 10.4968">
            <path d={svgPaths.p5504600} fill="var(--fill-0, #FFBE1B)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-full leading-[normal] relative shrink-0 text-[#737373] text-[12px] w-[42px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.5
      </p>
    </div>
  );
}

function RatingKm() {
  return (
    <div className="relative shrink-0 w-full" data-name="Rating-Km">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] relative size-full">
          <div className="flex flex-row items-center self-stretch">
            <Pin />
          </div>
          <div className="relative shrink-0 size-[2px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
              <circle cx="1" cy="1" fill="var(--fill-0, #737373)" id="Ellipse 4" r="1" />
            </svg>
          </div>
          <Rating />
        </div>
      </div>
    </div>
  );
}

function Conten() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-center py-[8px] relative rounded-[4px] shrink-0 w-full" data-name="Conten">
      <Name />
      <RatingKm />
    </div>
  );
}

function CardFood() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Card food">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Image />
        <Conten />
      </div>
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Image">
      <div className="h-[174px] relative shrink-0 w-[172px]" data-name="banner food_phở 1">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBannerFoodPh1} />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[128.44%] left-[-0.38%] max-w-none top-0 w-[99.47%]" src={imgBannerFoodPh2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center px-[4px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#262626] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Phố sương
          </p>
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="shield-check">
            <div className="absolute inset-[8.33%_8.39%_8.33%_8.38%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.98722 10">
                <path d={svgPaths.p24128580} fill="var(--fill-0, #00BC7D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pin1() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center relative shrink-0" data-name="Pin">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="map-pin">
        <div className="absolute inset-[8.33%_12.5%_6.31%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00023 10.2425">
            <path d={svgPaths.pb4f1c40} fill="var(--fill-0, #888888)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.7km
      </p>
    </div>
  );
}

function Rating1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Rating">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="star">
        <div className="absolute inset-[4.18%_4.26%_8.35%_4.19%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.986 10.4968">
            <path d={svgPaths.p5504600} fill="var(--fill-0, #FFBE1B)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-full leading-[normal] relative shrink-0 text-[#737373] text-[12px] w-[42px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.5
      </p>
    </div>
  );
}

function RatingKm1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Rating-Km">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] relative size-full">
          <div className="flex flex-row items-center self-stretch">
            <Pin1 />
          </div>
          <div className="relative shrink-0 size-[2px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
              <circle cx="1" cy="1" fill="var(--fill-0, #737373)" id="Ellipse 4" r="1" />
            </svg>
          </div>
          <Rating1 />
        </div>
      </div>
    </div>
  );
}

function Conten1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-center py-[8px] relative rounded-[4px] shrink-0 w-full" data-name="Conten">
      <Name1 />
      <RatingKm1 />
    </div>
  );
}

function CardFood1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Card food">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Image1 />
        <Conten1 />
      </div>
      <div aria-hidden className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <CardFood />
      <CardFood1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 px-[12px] top-[497px] w-[375px]">
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hơn 100+ quán ngon gần bạn
      </p>
      <Frame15 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[56px] items-center justify-center min-w-px relative" data-name="Frame">
      <div className="aspect-[24/24] content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative shrink-0" data-name="home">
        <div className="h-[20px] relative shrink-0 w-[20.004px]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0037 19.9998">
            <path d={svgPaths.p21f7eff0} fill="var(--fill-0, #6E9917)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#6e9917] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Trang chủ
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[56px] items-center justify-center min-w-px relative" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="award">
        <div className="absolute inset-[8.33%_10.02%_8.79%_10.01%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1942 19.8902">
            <path d={svgPaths.p2c661180} fill="var(--fill-0, #D1D1D1)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#d1d1d1] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reviewer
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[56px] items-center justify-center min-w-px relative" data-name="Frame">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="location">
        <div className="relative shrink-0 size-[20.321px]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3212 20.3212">
            <path d={svgPaths.p3ae5d280} fill="var(--fill-0, #D1D1D1)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#d1d1d1] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bản đồ
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[56px] items-center justify-center min-w-px relative" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heart">
        <div className="absolute inset-[12.45%_8.35%_12.5%_8.28%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0094 18.0109">
            <path d={svgPaths.p4a1e440} fill="var(--fill-0, #D1D1D1)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#d1d1d1] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cảm xúc
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[56px] items-center justify-center min-w-px relative" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="user">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <path d={svgPaths.p1ceb3b80} fill="var(--fill-0, #D1D1D1)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#d1d1d1] text-[12px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tôi
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
          <Frame9 />
          <Frame10 />
          <Frame11 />
          <Frame12 />
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <div className="absolute bg-[#9dd325] h-[218px] left-0 shadow-[0px_8px_18px_-6px_rgba(19,25,39,0.12),0px_12px_42px_-4px_rgba(19,25,39,0.12)] top-0 w-[375px]" data-name="Rectangle" />
      <Background />
      <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[50px] items-center left-0 pt-[21px] top-0 w-[375px]" data-name="Background=True">
        <Frame />
      </div>
      <Frame16 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[55px] text-[16px] text-black text-center top-[94px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chào Chen
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[112.5px] text-[14px] text-black text-center top-[441px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tìm quán ăn quá dễ
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[290.5px] text-[#262626] text-[14px] text-center top-[441px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gợi ý theo cảm xúc
      </p>
      <div className="absolute left-[97px] overflow-clip size-[24px] top-[89px]" data-name="medal">
        <div className="absolute inset-[12.5%_27.08%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9998 18.0002">
            <path d={svgPaths.pb3c0700} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <Frame14 />
      <Frame17 />
      <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch drop-shadow-[0px_-4px_6px_rgba(0,0,0,0.04)] flex flex-col items-start left-1/2 pt-[8px] w-[375px]" data-name="State=Trang chủ">
        <Frame8 />
        <div className="h-[34px] relative shrink-0 w-[375px]" data-name="Home Indicator">
          <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-[calc(50%+0.5px)] w-[144px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="bg-black h-[5px] relative rounded-[100px] w-[144px]" data-name="Rectangle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}