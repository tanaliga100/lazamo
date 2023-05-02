import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

import { BsBorderStyle } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { MdOutlineReviews, MdProductionQuantityLimits } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import DashboardView from "../components/views/DashboardView";
import OrdersView from "../components/views/OrdersView";
import ProductsView from "../components/views/ProductsView";
import ReviewsView from "../components/views/ReviewsView";
import UsersView from "../components/views/UsersView";

export const content = {
  login: "Login",
  signUp: "Sign Up",
  logout: "Logout",
};

export interface ILinks {
  id: number;
  icon: JSX.Element;
  url: string;
  text: string;
  component: JSX.Element;
}

export const links: ILinks[] = [
  {
    id: 1,
    text: "Dashboard",
    url: "/dashboard",
    icon: <RxDashboard size={20} style={{ color: "#de9e49" }} />,
    component: <DashboardView />,
  },
  {
    id: 2,
    text: "Users",
    url: "/dashboard/users",
    icon: <ImProfile size={20} style={{ color: "#de9e49" }} />,
    component: <UsersView />,
  },
  {
    id: 3,
    text: "Products",
    url: "/dashboard/products",
    icon: <MdProductionQuantityLimits size={20} style={{ color: "#de9e49" }} />,
    component: <ProductsView />,
  },
  {
    id: 4,
    text: "Orders",
    url: "/dashboard/orders",
    icon: <BsBorderStyle size={20} style={{ color: "#de9e49" }} />,
    component: <OrdersView />,
  },
  {
    id: 5,
    text: "Reviews",
    url: "/dashboard/reviews",
    icon: <MdOutlineReviews size={20} style={{ color: "#de9e49" }} />,
    component: <ReviewsView />,
  },

  {
    id: 6,
    text: "Profile",
    url: "/dashboard/profile",
    icon: <GrUserSettings size={20} style={{ color: "#de9e49" }} />,
    component: <ProductsView />,
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
