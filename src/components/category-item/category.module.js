import "./category.styles.scss";

const Category = function (props) {
  const { title, imageUrl } = props.category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;
