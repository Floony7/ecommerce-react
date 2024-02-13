import { CategoryDirectory } from "../../components/category-directory/category-directory";
import { Category } from "../../components/category/category-item";

const categories: Category[] = [
  { id: 1, title: "Sticks", imageURL: "https://picsum.photos/500" },
  { id: 2, title: "Skates", imageURL: "https://picsum.photos/500" },
  { id: 3, title: "Protective Gear", imageURL: "https://picsum.photos/500" },
  { id: 4, title: "Gloves", imageURL: "https://picsum.photos/500" },
  { id: 5, title: "Helmets", imageURL: "https://picsum.photos/500" },
  { id: 6, title: "Apparel", imageURL: "https://picsum.photos/500" },
];
function Home() {
  return (
    <>
      <CategoryDirectory categories={categories} />
    </>
  );
}

export default Home;
