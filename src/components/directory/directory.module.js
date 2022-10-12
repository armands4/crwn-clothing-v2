import "./directory.styles.scss";
import Category from "../category-item/category.module";

const Directory = (props) => {
  return (
    <div className="categories-container">
      {props.categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
