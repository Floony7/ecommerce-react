import { useState } from "react";
import { CategoriesContainer } from "./components/category.styles";
import CategoryItem, { Category } from "./components/category/category-item";

// Have one unifying category and then Keywords for mor eprecise filtering
const intialCategories: Category[] = [
  { id: 1, title: "Sticks", imageURL: "https://picsum.photos/500" },
  { id: 1, title: "Skates", imageURL: "https://picsum.photos/500" },
  { id: 1, title: "Protective Gear", imageURL: "https://picsum.photos/500" },
  { id: 1, title: "Gloves", imageURL: "https://picsum.photos/500" },
  { id: 1, title: "Helmets", imageURL: "https://picsum.photos/500" },
  { id: 1, title: "Apparel", imageURL: "https://picsum.photos/500" },
];

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categories, setCategories] = useState<Category[]>(intialCategories);
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
}

export default App;
