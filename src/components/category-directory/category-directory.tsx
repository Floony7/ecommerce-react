import CategoryItem, { Category } from "../category/category-item";
import { CategoriesContainer } from "./category-directory.styles";

// Have one unifying category and then Keywords for mor eprecise filtering

export const CategoryDirectory = ({
  categories,
}: {
  categories: Category[];
}) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};
