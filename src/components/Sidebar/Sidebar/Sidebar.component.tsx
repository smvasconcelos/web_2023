import { Icons } from "global/icons.constants";

import { SidebarContent } from "../SidebarContent";
import { SidebarHeader } from "../SidebarHeader";
import { SidebarItem } from "../SidebarItem";

import { type ISidebarProps } from "./Sidebar.types";

import { Container, SidebarTrigger, SidebarWrapper } from "./Sidebar.styles";

export function Sidebar({
  isCollapsed,
  setIsCollapsed,
}: ISidebarProps): JSX.Element {
  return (
    <Container isCollapsed={isCollapsed}>
      <SidebarWrapper>
        <SidebarTrigger
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
          isCollapsed={isCollapsed}
        >
          <Icons.ChevronIcon />
        </SidebarTrigger>
        <SidebarHeader />
        <SidebarContent>
          <SidebarItem active label="Inicio" icon="DashboardIcon" />
          <SidebarItem label="Configuração" icon="ConfigIcon" />
          <SidebarItem label="Suas Reservas" icon="BulletinIcon" />
          <SidebarItem label="Gestão" icon="Managementcon" />
        </SidebarContent>
      </SidebarWrapper>
    </Container>
  );
}
