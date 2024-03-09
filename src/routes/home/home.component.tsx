import { CategoryDirectory } from "../../components/category-directory/category-directory";
import { Category } from "../../components/category/category-item";
import Skates from "../../assets/images/categories/category-skates.png";
import Sticks from "../../assets/images/categories/category-stick.png";
import Gloves from "../../assets/images/categories/category-gloves.png";
import Helmets from "../../assets/images/categories/category-helmets.png";
import Apparel from "../../assets/images/categories/category-apparel.jpg";
import Protective from "../../assets/images/categories/category-protective.png";

const categories: Category[] = [
  { id: 1, title: "Sticks", imageURL: Sticks },
  { id: 2, title: "Skates", imageURL: Skates },
  { id: 3, title: "Protective Gear", imageURL: Protective },
  { id: 4, title: "Gloves", imageURL: Gloves },
  { id: 5, title: "Helmets", imageURL: Helmets },
  { id: 6, title: "Apparel", imageURL: Apparel },
];
function Home() {
  return (
    <>
      <CategoryDirectory categories={categories} />
    </>
  );
}

export default Home;
