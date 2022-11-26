import { categories } from "../../mocks/categories";
import { Category } from "../Category";
import { CategoriesContainer } from "./styles";

export function Categories() {
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return <Category key={category._id} name={category.name} icon={category.icon}/>;
      })}
    </CategoriesContainer>
  );
}
