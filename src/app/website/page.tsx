import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

// @/app/website/page.tsx
interface Props {
    children: React.ReactNode
    defaultSidebarOpen: boolean // remove this if not using cookies for sidebar state
   }
   
   export default function Page(props: Props) {
     return (
        <SidebarProvider defaultSidebarOpen={props.defaultSidebarOpen}>
         <AppSidebar />
         <SidebarInset>
           <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
             <SidebarTrigger className="-ml-1" />
             <Separator orientation="vertical" className="mr-2 h-4" />
           </header>
           <div className="flex flex-1 flex-col gap-4 p-4">
             {props.children}
           </div>
         </SidebarInset>
       </SidebarProvider>
     );
   }
   