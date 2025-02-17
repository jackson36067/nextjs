import { LensDemo } from "./lensDemo";
import { MarqueeDemo } from "./marqueeDemo";
import { MeteorsDemo } from "./meteorDemo";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full">
        <MarqueeDemo />
      </div>
      <div className="flex justify-between items-center w-full pl-10 pr-10 box-border leading-tight rounded-xl bg-pink-500">
        <LensDemo />
        <MeteorsDemo />
      </div>
    </div>
  );
}
