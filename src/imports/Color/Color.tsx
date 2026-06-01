function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-black" data-name="Frame">
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[64px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Colors
      </p>
      <p className="font-['Roboto:Light',sans-serif] font-light relative shrink-0 text-[16px] w-[421px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        There I uses a flexible color palette to achieve clean interfaces and impressive brand experience.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white h-[188px] relative rounded-[10px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[80px] py-[32px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#181d27] text-[24px] w-full">Primary colors</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#535862] text-[18px] w-full">These are the main colors that make up the majority of the colors used in the design system.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-full items-start leading-[normal] not-italic relative shrink-0 w-[400px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-black w-full">Shade</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#808080] text-[16px] w-full">{`Black & White`}</p>
    </div>
  );
}

function Frame8() {
  return <div className="bg-white h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">00</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#ffffff</p>
      </div>
    </div>
  );
}

function Frame10() {
  return <div className="bg-black h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">100</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#000000</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame8 />
          <Frame9 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame10 />
          <Frame11 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <Frame6 />
      </div>
      <Frame7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-full items-start leading-[normal] not-italic relative shrink-0 w-[400px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-black w-full">Neutral Colors</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#808080] text-[16px] w-full">Basically, neutral colors are used as supporting colors or secondary colors like backgrounds, text, separators, etc.</p>
    </div>
  );
}

function Frame15() {
  return <div className="bg-[#f6f6f6] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">50</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#f6f6f6</p>
      </div>
    </div>
  );
}

function Frame17() {
  return <div className="bg-[#e7e7e7] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">100</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#e7e7e7</p>
      </div>
    </div>
  );
}

function Frame19() {
  return <div className="bg-[#d1d1d1] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">200</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#d1d1d1</p>
      </div>
    </div>
  );
}

function Frame21() {
  return <div className="bg-[#b0b0b0] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">300</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#b0b0b0</p>
      </div>
    </div>
  );
}

function Frame23() {
  return <div className="bg-[#888] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">400</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#888888</p>
      </div>
    </div>
  );
}

function Frame25() {
  return <div className="bg-[#737373] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">500</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#737373</p>
      </div>
    </div>
  );
}

function Frame27() {
  return <div className="bg-[#5d5d5d] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">600</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#5d5d5d</p>
      </div>
    </div>
  );
}

function Frame29() {
  return <div className="bg-[#4f4f4f] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">700</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#4f4f4f</p>
      </div>
    </div>
  );
}

function Frame31() {
  return <div className="bg-[#454545] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">800</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#454545</p>
      </div>
    </div>
  );
}

function Frame33() {
  return <div className="bg-[#3d3d3d] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">900</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#3d3d3d</p>
      </div>
    </div>
  );
}

function Frame35() {
  return <div className="bg-[#262626] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">950</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#262626</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame15 />
          <Frame16 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame17 />
          <Frame18 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame19 />
          <Frame20 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame21 />
          <Frame22 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame23 />
          <Frame24 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame25 />
          <Frame26 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame27 />
          <Frame28 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame29 />
          <Frame30 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame31 />
          <Frame32 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame33 />
          <Frame34 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame35 />
          <Frame36 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <Frame13 />
      </div>
      <Frame14 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-full items-start leading-[normal] not-italic relative shrink-0 w-[400px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-black w-full">Primary Colors</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#808080] text-[16px] w-full">Primary color palette is used for all the interactive elements like CTA button, links, inputs, active status, etc.</p>
    </div>
  );
}

function Frame40() {
  return <div className="bg-[#fcfff3] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">50</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#f8fde8</p>
      </div>
    </div>
  );
}

function Frame42() {
  return <div className="bg-white h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">100</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#eff9ce</p>
      </div>
    </div>
  );
}

function Frame44() {
  return <div className="bg-[#def3a3] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">200</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#def3a3</p>
      </div>
    </div>
  );
}

function Frame46() {
  return <div className="bg-[#c7e96d] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">300</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#c7e96d</p>
      </div>
    </div>
  );
}

function Frame48() {
  return <div className="bg-[rgba(173,219,64,0.9)] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">400</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#addb40</p>
      </div>
    </div>
  );
}

function Frame50() {
  return <div className="bg-[#9dd325] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">500</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#9dd325</p>
      </div>
    </div>
  );
}

function Frame52() {
  return <div className="bg-[#6e9917] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">600</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#6e9917</p>
      </div>
    </div>
  );
}

function Frame54() {
  return <div className="bg-[#547516] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">700</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#547516</p>
      </div>
    </div>
  );
}

function Frame56() {
  return <div className="bg-[#445d17] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">800</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#445d17</p>
      </div>
    </div>
  );
}

function Frame58() {
  return <div className="bg-[#3b4f18] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">900</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#3b4f18</p>
      </div>
    </div>
  );
}

function Frame60() {
  return <div className="bg-[#1d2b08] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">950</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#1d2b08</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame40 />
          <Frame41 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame42 />
          <Frame43 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame44 />
          <Frame45 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame46 />
          <Frame47 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame48 />
          <Frame49 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame50 />
          <Frame51 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame52 />
          <Frame53 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame54 />
          <Frame55 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame56 />
          <Frame57 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame58 />
          <Frame59 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame60 />
          <Frame61 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <Frame38 />
      </div>
      <Frame39 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-full items-start leading-[normal] not-italic relative shrink-0 w-[400px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-black w-full">Success</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#808080] text-[16px] w-full">This color palette carry on emotion of posibility. Generally it used for success, complete status etc.</p>
    </div>
  );
}

function Frame65() {
  return <div className="bg-[#ecfdf5] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">50</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#ecfdf5</p>
      </div>
    </div>
  );
}

function Frame67() {
  return <div className="bg-[#d0fae5] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">100</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#cdfee5</p>
      </div>
    </div>
  );
}

function Frame69() {
  return <div className="bg-[#a4f4cf] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">200</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#a0fad1</p>
      </div>
    </div>
  );
}

function Frame71() {
  return <div className="bg-[#5ee9b5] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">300</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#63f2b8</p>
      </div>
    </div>
  );
}

function Frame73() {
  return <div className="bg-[#00d492] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame74() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">400</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#25e29c</p>
      </div>
    </div>
  );
}

function Frame75() {
  return <div className="bg-[#00bc7d] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame76() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">500</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#00bc7d</p>
      </div>
    </div>
  );
}

function Frame77() {
  return <div className="bg-[#096] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">600</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#00a46d</p>
      </div>
    </div>
  );
}

function Frame79() {
  return <div className="bg-[#007a55] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">700</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#00835c</p>
      </div>
    </div>
  );
}

function Frame81() {
  return <div className="bg-[#006045] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame82() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">800</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#00674a</p>
      </div>
    </div>
  );
}

function Frame83() {
  return <div className="bg-[#004f3b] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">900</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#00553e</p>
      </div>
    </div>
  );
}

function Frame85() {
  return <div className="bg-[#002c22] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">950</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#003024</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame65 />
          <Frame66 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame67 />
          <Frame68 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame69 />
          <Frame70 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame71 />
          <Frame72 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame73 />
          <Frame74 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame75 />
          <Frame76 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame77 />
          <Frame78 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame79 />
          <Frame80 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame81 />
          <Frame82 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame83 />
          <Frame84 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame85 />
          <Frame86 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <Frame63 />
      </div>
      <Frame64 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative self-stretch shrink-0 w-[400px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-black w-full">Warning</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#808080] text-[16px] w-full">This color palette carry the feelings of caution like warning status.</p>
    </div>
  );
}

function Frame90() {
  return <div className="bg-[#fffcea] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame91() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">50</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#fffcea</p>
      </div>
    </div>
  );
}

function Frame92() {
  return <div className="bg-[#fff3c5] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">100</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#fff3c5</p>
      </div>
    </div>
  );
}

function Frame94() {
  return <div className="bg-[#ffe685] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame95() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">200</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#ffe685</p>
      </div>
    </div>
  );
}

function Frame96() {
  return <div className="bg-[#ffd346] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame97() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">300</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#ffd346</p>
      </div>
    </div>
  );
}

function Frame98() {
  return <div className="bg-[#ffbe1b] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">400</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#ffbe1b</p>
      </div>
    </div>
  );
}

function Frame100() {
  return <div className="bg-[#fe9a00] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">500</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#fe9a00</p>
      </div>
    </div>
  );
}

function Frame102() {
  return <div className="bg-[#e27300] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame103() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">600</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#e27300</p>
      </div>
    </div>
  );
}

function Frame104() {
  return <div className="bg-[#bb4e02] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame105() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">700</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#bb4e02</p>
      </div>
    </div>
  );
}

function Frame106() {
  return <div className="bg-[#983c08] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame107() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">800</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#983c08</p>
      </div>
    </div>
  );
}

function Frame108() {
  return <div className="bg-[#7c320b] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame109() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">900</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#7c320b</p>
      </div>
    </div>
  );
}

function Frame110() {
  return <div className="bg-[#481700] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame111() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">950</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#481700</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[32px] h-[210px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame90 />
          <Frame91 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame92 />
          <Frame93 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame94 />
          <Frame95 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame96 />
          <Frame97 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame98 />
          <Frame99 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame100 />
          <Frame101 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame102 />
          <Frame103 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame104 />
          <Frame105 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame106 />
          <Frame107 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame108 />
          <Frame109 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame110 />
          <Frame111 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame88 />
      <Frame89 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative self-stretch shrink-0 w-[400px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-black w-full">Error</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#808080] text-[16px] w-full">This color palette carry on emotion of negativity like error status.</p>
    </div>
  );
}

function Frame115() {
  return <div className="bg-[#fef2f2] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame116() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">50</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#fef2f2</p>
      </div>
    </div>
  );
}

function Frame117() {
  return <div className="bg-[#fee2e2] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame118() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">100</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#fee2e2</p>
      </div>
    </div>
  );
}

function Frame119() {
  return <div className="bg-[#fecaca] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame120() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">200</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#fecaca</p>
      </div>
    </div>
  );
}

function Frame121() {
  return <div className="bg-[#fca5a5] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame122() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">300</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#fca5a5</p>
      </div>
    </div>
  );
}

function Frame123() {
  return <div className="bg-[#f87171] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame124() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">400</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#f87171</p>
      </div>
    </div>
  );
}

function Frame125() {
  return <div className="bg-[#ef4444] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame126() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">500</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#ef4444</p>
      </div>
    </div>
  );
}

function Frame127() {
  return <div className="bg-[#dc2626] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame128() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">600</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#dc2626</p>
      </div>
    </div>
  );
}

function Frame129() {
  return <div className="bg-[#b91c1c] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame130() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">700</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#b91c1c</p>
      </div>
    </div>
  );
}

function Frame131() {
  return <div className="bg-[#991b1b] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame132() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">800</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#991b1b</p>
      </div>
    </div>
  );
}

function Frame133() {
  return <div className="bg-[#7f1d1d] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame134() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">900</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#7f1d1d</p>
      </div>
    </div>
  );
}

function Frame135() {
  return <div className="bg-[#450a0a] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame136() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">950</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#450a0a</p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame115 />
          <Frame116 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame117 />
          <Frame118 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame119 />
          <Frame120 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame121 />
          <Frame122 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame123 />
          <Frame124 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame125 />
          <Frame126 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame127 />
          <Frame128 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame129 />
          <Frame130 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame131 />
          <Frame132 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame133 />
          <Frame134 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame135 />
          <Frame136 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame113 />
      <Frame114 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-full items-start not-italic relative shrink-0 w-[400px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.75] relative shrink-0 text-[18px] text-black w-full">Info</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#808080] text-[16px] w-full">A prominent, easily recognizable color used to attract user attention and indicate important interactive elements or states. The main purpose is to guide actions and convey information quickly and intuitively.</p>
    </div>
  );
}

function Frame140() {
  return <div className="bg-[#eff5ff] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame141() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">50</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#eff5ff</p>
      </div>
    </div>
  );
}

function Frame142() {
  return <div className="bg-[#dbe8fe] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame143() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">100</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#dbe8fe</p>
      </div>
    </div>
  );
}

function Frame144() {
  return <div className="bg-[#bfd7fe] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame145() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">200</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#bfd7fe</p>
      </div>
    </div>
  );
}

function Frame146() {
  return <div className="bg-[#93bbfd] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame147() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">300</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#93bbfd</p>
      </div>
    </div>
  );
}

function Frame148() {
  return <div className="bg-[#609afa] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame149() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">400</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#609afa</p>
      </div>
    </div>
  );
}

function Frame150() {
  return <div className="bg-[#3b82f6] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame151() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">500</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#3b82f6</p>
      </div>
    </div>
  );
}

function Frame152() {
  return <div className="bg-[#2570eb] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame153() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">600</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#2570eb</p>
      </div>
    </div>
  );
}

function Frame154() {
  return <div className="bg-[#1d64d8] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame155() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">700</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#1d64d8</p>
      </div>
    </div>
  );
}

function Frame156() {
  return <div className="bg-[#1e55af] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame157() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">800</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#1e55af</p>
      </div>
    </div>
  );
}

function Frame158() {
  return <div className="bg-[#1e478a] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame159() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">900</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#1e478a</p>
      </div>
    </div>
  );
}

function Frame160() {
  return <div className="bg-[#172e54] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame161() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">950</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#172e54</p>
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame140 />
          <Frame141 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame142 />
          <Frame143 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame144 />
          <Frame145 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame146 />
          <Frame147 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame148 />
          <Frame149 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame150 />
          <Frame151 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame152 />
          <Frame153 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame154 />
          <Frame155 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame156 />
          <Frame157 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame158 />
          <Frame159 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame160 />
          <Frame161 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <Frame138 />
      </div>
      <Frame139 />
    </div>
  );
}

function Frame163() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-full items-start not-italic relative shrink-0 w-[400px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.75] relative shrink-0 text-[18px] text-black w-full">Info</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#808080] text-[16px] w-full">A prominent, easily recognizable color used to attract user attention and indicate important interactive elements or states. The main purpose is to guide actions and convey information quickly and intuitively.</p>
    </div>
  );
}

function Frame165() {
  return <div className="bg-[#f3f3ff] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame166() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">50</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#f3f3ff</p>
      </div>
    </div>
  );
}

function Frame167() {
  return <div className="bg-[#eae9fe] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame168() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">100</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#eae9fe</p>
      </div>
    </div>
  );
}

function Frame169() {
  return <div className="bg-[#d7d6fe] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame170() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">200</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#d7d6fe</p>
      </div>
    </div>
  );
}

function Frame171() {
  return <div className="bg-[#b9b5fd] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame172() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">300</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#b9b5fd</p>
      </div>
    </div>
  );
}

function Frame173() {
  return <div className="bg-[#978bfa] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame174() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">400</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#978bfa</p>
      </div>
    </div>
  );
}

function Frame175() {
  return <div className="bg-[#8873f7] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame176() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">500</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#8873f7</p>
      </div>
    </div>
  );
}

function Frame177() {
  return <div className="bg-[#623aed] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame178() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">600</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#623aed</p>
      </div>
    </div>
  );
}

function Frame179() {
  return <div className="bg-[#5328d9] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame180() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">700</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#5328d9</p>
      </div>
    </div>
  );
}

function Frame181() {
  return <div className="bg-[#4521b6] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame182() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">800</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#4521b6</p>
      </div>
    </div>
  );
}

function Frame183() {
  return <div className="bg-[#3a1d95] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame184() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">900</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#3a1d95</p>
      </div>
    </div>
  );
}

function Frame185() {
  return <div className="bg-[#221065] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame186() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">950</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#221065</p>
      </div>
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame165 />
          <Frame166 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame167 />
          <Frame168 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame169 />
          <Frame170 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame171 />
          <Frame172 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame173 />
          <Frame174 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame175 />
          <Frame176 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame177 />
          <Frame178 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame179 />
          <Frame180 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame181 />
          <Frame182 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame183 />
          <Frame184 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame185 />
          <Frame186 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <Frame163 />
      </div>
      <Frame164 />
    </div>
  );
}

function Frame188() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-full items-start leading-[normal] not-italic relative shrink-0 w-[400px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-black w-full">Opacity</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#808080] text-[16px] w-full">Black</p>
    </div>
  );
}

function Frame190() {
  return <div className="bg-[rgba(0,0,0,0.2)] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame191() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">20%</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#000000</p>
      </div>
    </div>
  );
}

function Frame192() {
  return <div className="bg-[rgba(0,0,0,0.4)] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame193() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">40%</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#000000</p>
      </div>
    </div>
  );
}

function Frame194() {
  return <div className="bg-[rgba(0,0,0,0.6)] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame195() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">60%</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#000000</p>
      </div>
    </div>
  );
}

function Frame196() {
  return <div className="bg-[rgba(0,0,0,0.8)] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame197() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">80%</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#000000</p>
      </div>
    </div>
  );
}

function Frame189() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame190 />
          <Frame191 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame192 />
          <Frame193 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame194 />
          <Frame195 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame196 />
          <Frame197 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <Frame188 />
      </div>
      <Frame189 />
    </div>
  );
}

function Frame199() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-full items-start leading-[normal] not-italic relative shrink-0 w-[400px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-black w-full">Opacity</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#808080] text-[16px] w-full">Primary</p>
    </div>
  );
}

function Frame201() {
  return <div className="bg-[rgba(157,211,37,0.2)] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame202() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">20%</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#000000</p>
      </div>
    </div>
  );
}

function Frame203() {
  return <div className="bg-[rgba(157,211,37,0.4)] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame204() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">40%</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#000000</p>
      </div>
    </div>
  );
}

function Frame205() {
  return <div className="bg-[rgba(157,211,37,0.6)] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame206() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">60%</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#000000</p>
      </div>
    </div>
  );
}

function Frame207() {
  return <div className="bg-[rgba(157,211,37,0.8)] h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame208() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[12px] px-[12px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">80%</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">#000000</p>
      </div>
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame201 />
          <Frame202 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame203 />
          <Frame204 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame205 />
          <Frame206 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-[160px]" data-name="Swatch base">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame207 />
          <Frame208 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.1),0px_4px_6px_-2px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0" data-name="Frame">
      <div className="flex flex-row items-center self-stretch">
        <Frame199 />
      </div>
      <Frame200 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[2477px]" data-name="Frame">
      <Frame5 />
      <Frame12 />
      <Frame37 />
      <Frame62 />
      <Frame87 />
      <Frame112 />
      <Frame137 />
      <Frame162 />
      <Frame187 />
      <Frame198 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[80px] items-start px-[80px] py-[32px] relative size-full">
        <Frame3 />
        <Frame4 />
      </div>
    </div>
  );
}

export default function Color() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-start p-[80px] relative size-full" data-name="Color">
      <Frame />
      <Frame2 />
    </div>
  );
}