import {
  MapPin,
  Utensils,
  Bus,
  Receipt,
  Home,
  Cross,
} from "lucide-react";


export const services = [
    {
      title: "Accommodation\nRent",
      icon: <MapPin size={20} />,
      color: "text-violet-500",
      border_color: "border-violet-500",
    },
    {
      title: "Daily Food",
      icon: <Utensils size={20} />,
      color: "text-green-500",
      border_color: "border-green-500",
    },
    {
      title: "Transportation",
      icon: <Bus size={20} />,
      color: "text-orange-500",
      border_color: "border-orange-500",
    },
    {
      title: "Utility Bills",
      icon: <Receipt size={20} />,
      color: "text-purple-500",
      border_color: "border-purple-500",
    },
    {
      title: "Essential\nNeeds",
      icon: <Home size={20} />,
      color: "text-indigo-500",
      border_color: "border-indigo-500",
    },
    {
      title: "Emergency\nFund",
      icon: <Cross size={20} />,
      color: "text-red-500",
      border_color: "border-red-500",
    },
  ];