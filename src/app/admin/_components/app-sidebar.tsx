"use client";

import * as React from "react";
import {
  BrainCog,
  CalendarCheck,
  ChartArea,
  ChartPie,
  ClipboardPlus,
  Megaphone,
  SquareTerminal,
  TableOfContents,
  UserCog,
  Video,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";


const data = {
  user: {
    name: "Lazada Administrator",
    email: "LazadaLogisticsPh",
    avatar: "/avatars/shadcn.jpg",
  },
   navMain: [
    {
      title: "Application Management",
      url: "/admin/application-management",
      icon: SquareTerminal,
    },
    {
      title: "Video Trainings",
      url: "/admin/video-trainings",
      icon: Video,
    },