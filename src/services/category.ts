import { CategoryDataProps } from "../types/Components/Category";

import Mountain from "../assets/mountain.png";
import Tent from "../assets/tent.png";
import Vacation from "../assets/vacations.png";

const Categorys: CategoryDataProps[] = [
  {
    title: "Mountain",
    source: Mountain,
    active: false
  },
  {
    title: "Tent",
    source: Tent,
    active: false
  },
  {
    title: "Vacations",
    source: Vacation,
    active: false
  },
];

export default Categorys;