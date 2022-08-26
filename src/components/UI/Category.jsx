import styles from "./Category.module.css";
const Category = () => {
  return (
    <>
      <div className="my-3   container">
        <div className={`${styles["category-card"]} row p-2`}>
          <div className="col-sm-4">
            <button className=" fs-3 fw-bold w-100 border ">Groceries</button>
          </div>
          <div className="col-sm-4">
            <button className="fs-3 fw-bold w-100 border ">Electronics</button>
          </div>
          <div className="col-sm-4">
            <button className=" fs-3 fw-bold w-100 border ">Beverage</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
