import { ReactNode } from "react";

interface InterfaceSidebar {
    icon: ReactNode;
    text: string;
    url?: string;
    action?: () => void;
}

const SidebarLink = ({ icon, text, url, action }: InterfaceSidebar) => {
    if (url) {
        return (
            <a href={url} className="flex flex-row gap-4 items-center transition-all duration-300 ease-linear hover:pl-4 hover:cursor-pointer">
            <span className="w-4 h-4">{icon}</span>
            <p className="text-white">{text}</p>
            </a>
        );
    }
    else {
        return (
            <a className="flex flex-row gap-4 items-center transition-all duration-300 ease-linear hover:pl-4 hover:cursor-pointer" onClick={() => action!()}>
            <span className="w-4 h-4">{icon}</span>
            <p  className="text-white">{text}</p>
            </a>
        );
    }
};

export default SidebarLink;