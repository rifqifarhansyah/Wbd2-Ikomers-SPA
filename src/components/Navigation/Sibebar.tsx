import Logo from "../../assets/logo-color.svg";
import SidebarLink from "./Sidebar/SidebarLink"
import { ReactNode } from "react";

interface InterfaceSidebar {
    icon: ReactNode;
    text: string;
    url?: string;
    action?: () => void;
}

const Sidebar = ({ sidebarLinks }: { sidebarLinks: InterfaceSidebar[] }) => {
    return (
      <aside className="w-80 h-screen bg-black sticky top-0 p-8 none md:block hidden">
        <img src={Logo} alt="Ikomers Logo" title="Ikomers logo"/>
        <div className="mt-8 flex flex-col gap-2">
          {sidebarLinks.map(({icon, text, url, action}) => {
            return <SidebarLink key={text} icon={icon} text={text} url={url} action={action} />
          })}
        </div>
      </aside>
    );
  };
  
  export default Sidebar;