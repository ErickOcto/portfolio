import { Badge } from "@/components/ui/badge";
import { Typing } from "@/components/ui/typing";
import { Button } from "@/components/ui/button";
import { Item } from "@/components/ui/item";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ArrowRight02FreeIcons, Github, Home01Icon, Instagram, Linkedin, Medal, MediumIcon, Warning, WorkIcon, Youtube } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { Menubar } from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ListItem } from "@/components/ui/list-item";

export default function Home() {
  return (
      <div className="absolute inset-0 -z-10 min-h-screen min-w-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#212121_1px,transparent_1px)] [background-size:28px_28px]">
        <Menubar className="w-fit mx-auto mt-4 rounded-2xl">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>My projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-96">
                    <ListItem className="flex-row" href="/docs" title="Web Development">
                      NextJS, Golang, Supabase & Laravel
                    </ListItem>
                    <ListItem href="/docs/installation" title="AI and Machine Learning">
                      Python & OpenCV
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="UIUX Design">
                      Figma & Adobe XD
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Connect with me</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-96">
                    <ListItem href="https://github.com/ErickOcto" title="Github">
                      <HugeiconsIcon icon={Github}></HugeiconsIcon> ErickOcto
                    </ListItem>
                    <ListItem href="https://www.instagram.com/erick_octo" title="Instagram">
                      <HugeiconsIcon icon={Instagram}></HugeiconsIcon> @erick_octo
                    </ListItem>
                    <ListItem href="https://medium.com/@octofrederick" title="Medium">
                      <HugeiconsIcon icon={MediumIcon}></HugeiconsIcon> @octofrederick
                    </ListItem>
                    <ListItem href="https://www.youtube.com/@frederickocto3922" title="Youtube">
                      <HugeiconsIcon icon={Youtube}></HugeiconsIcon> Frederick Octo
                    </ListItem>
                    <ListItem className="col-span-2" href="https://www.linkedin.com/in/frederick-octo-ramadani/" title="LinkedIn">
                      <HugeiconsIcon icon={Linkedin}></HugeiconsIcon> Frederick Octo Ramadani
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <ModeToggle></ModeToggle>
            </NavigationMenuList>
          </NavigationMenu>
        </Menubar>
        <div className="grid grid-cols-12 max-w-7xl mx-auto gap-12 flex-col items-center justify-between p-24">
          <div className="flex flex-col gap-4 col-span-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant={"outline"}><HugeiconsIcon size={32} icon={WorkIcon}></HugeiconsIcon> Available for work</Badge>
            </div>
            <h1 className="text-2xl font-medium">Hi, I'm Frederick Octo. I specialize in—</h1>
            <p className="text-5xl"><Typing strings={["Mobile Development", "Web Development", "UIUX Design.", "Machine Learning", "Artificial Intelligence", "Algorithm Strategy", "DevOPS Engineering"]} /></p>
            <div className="flex gap-2 mt-4">
              <Button>Contact Me</Button>
              <Button variant={"outline"}>My Projects <HugeiconsIcon icon={ArrowRight02FreeIcons}></HugeiconsIcon> </Button>
            </div>
          </div>
          <div className="flex-wrap col-span-6">
            <Image src="/images/winner.jpeg" className="aspect-square object-cover w-full rounded-xl" alt="Hero" width={500} height={500}/>
            <Item className="w-fit bg-white dark:bg-black p-3 gap-2 relative -right-5 -top-15" variant={"outline"}>
              <HugeiconsIcon icon={Medal} size={24} strokeWidth={1.5}></HugeiconsIcon>
              <h3 className="text-md">More than 3 years experience in Web Development</h3>
            </Item>
          </div>
        </div>

      </div>
  );
}
