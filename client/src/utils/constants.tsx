import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
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
    icon: <GiCompass size={50} style={{ color: "#de9e49" }} />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard size={50} />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote size={50} />,
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
