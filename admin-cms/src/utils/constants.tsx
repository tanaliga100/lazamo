import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

import { BsBorderStyle } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { MdOutlineReviews, MdProductionQuantityLimits } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
export interface ILinks {
  id: number;
  icon: React.ReactNode;
  url: string;
  text: string;
}

export const links: ILinks[] = [
  {
    id: 1,
    text: "Dashboard",
    url: "/",
    icon: <RxDashboard size={20} style={{ color: "#de9e49" }} />,
  },
  {
    id: 2,
    text: "Users",
    url: "/users",
    icon: <GrUserSettings size={20} style={{ color: "#de9e49" }} />,
  },
  {
    id: 3,
    text: "Products",
    url: "/products",
    icon: <MdProductionQuantityLimits size={20} style={{ color: "#de9e49" }} />,
  },
  {
    id: 4,
    text: "Orders",
    url: "/orders",
    icon: <BsBorderStyle size={20} style={{ color: "#de9e49" }} />,
  },
  {
    id: 5,
    text: "Reviews",
    url: "/reviews",
    icon: <MdOutlineReviews size={20} style={{ color: "#de9e49" }} />,
  },

  {
    id: 6,
    text: "Profile",
    url: "/profile",
    icon: <ImProfile size={20} style={{ color: "#de9e49" }} />,
  },
];
export interface IServices {
  id: number;
  icon: React.ReactNode;
  title: string;
  text: string;
}
export const services: IServices[] = [
  {
    id: 1,
    icon: <GiCompass size={30} style={{ color: "#de9e49" }} />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard size={30} />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote size={30} />,
    title: "goals",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const Category = [
  { id: 1, name: "ALl" },
  { id: 2, name: "Office" },
  { id: 3, name: "Living Room" },
  { id: 4, name: "Kitchen" },
  { id: 5, name: "Bedroom" },
  { id: 6, name: "Dining" },
  { id: 7, name: "Kids" },
];
export const Company = [
  { id: 1, name: "ALL" },
  { id: 2, name: "marcos" },
  { id: 3, name: "liddy" },
  { id: 4, name: "ikea" },
  { id: 5, name: "caressa" },
];
