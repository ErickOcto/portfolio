import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#161616_1px,transparent_1px)] [background-size:28px_28px]">
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
          <div className="left">
            <h1 className="mt-4 text-4xl font-bold">Hello, My Name is <br></br>Frederick Octo Ramadani</h1>
            <p className="mt-4 text-lg">Fullstack Web Developer & UIUX Designer</p>
            <div className="flex gap-2 mt-4">
              <Button>Contact Me</Button>
              <Button variant={"outline"}>My Projects</Button>
              <ModeToggle></ModeToggle>
            </div>
          </div>
        </div>
      </div>
  );
}
