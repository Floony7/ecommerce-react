import { useState } from "react";
import { CategoryItem, Category } from "../category/category-item";
import { CategoriesContainer } from "./category-directory.styles";

// Have one unifying category and then Keywords for mor eprecise filtering
const intialCategories: Category[] = [
  { id: 1, title: "Sticks", imageURL: "https://picsum.photos/500" },
  { id: 1, title: "Skates", imageURL: "https://picsum.photos/500" },
  { id: 1, title: "Protective Gear", imageURL: "https://picsum.photos/500" },
  { id: 1, title: "Gloves", imageURL: "https://picsum.photos/500" },
  { id: 1, title: "Helmets", imageURL: "https://picsum.photos/500" },
  { id: 1, title: "Apparel", imageURL: "https://picsum.photos/500" },
];

export const CategoryDirectory = () => {
  const [categories] = useState<Category[]>(intialCategories);
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};
