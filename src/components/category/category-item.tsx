import { CategoryCard, CategoryBody, CategoryImage } from "./category.styles";

export type Category = {
  id: number;
  title: string;
  imageURL: string;
};

const CategoryItem = (props: { category: Category }) => {
  const { id, title, imageURL } = props.category;
  return (
    <CategoryCard key={id}>
      <CategoryImage style={{ backgroundImage: `url(${imageURL})` }} />
      <CategoryBody>
        <h3>{title}</h3>
        <p>Shop now</p>
      </CategoryBody>
    </CategoryCard>
  );
};

export default CategoryItem;
