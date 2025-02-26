// import { MarqueeDemo } from "./marqueeDemo";
// import { OrbitingCirclesDemo } from "@/components/OrbitingCirclesDemo";
// import { IconCloudDemo } from "@/components/IconCloudDemo";
import PayDemo from "@/components/pay";
// import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    // sidebarInset is a flex container with a header and a main content area.
    <div className="flex flex-1 p-4 pt-0">
      {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="flex justify-center aspect-video rounded-xl bg-muted/50">
            <MarqueeDemo />
          </div>
          <div className="aspect-video rounded-xl bg-muted/50">
            <OrbitingCirclesDemo />
          </div>
          <div className="aspect-video rounded-xl bg-muted/50">
            <IconCloudDemo />
          </div>
        </div> */}
      <div className="min-h-[100vh] size-full flex-1 rounded-xl bg-muted/90 md:min-h-min">
        <PayDemo />
      </div>
    </div>
  );
}
