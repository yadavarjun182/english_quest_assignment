import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValues = searchParams.getAll("category");
  // console.log(searchParams.getAll("category"));
  const [category, setCategory] = useState(initialValues || []);
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

  const handlefilter = (e) => {
    let newCategory = [...category];
    if (newCategory.includes(e.target.value))
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    else newCategory.push(e.target.value);
    setCategory(newCategory);
  };

  const handlesort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);

    setSearchParams(params);
  }, [category, order, searchParams]);

  console.log(category);

  return (
    <div>
      <h3>filter by</h3>
      <div>
        {" "}
        <input
          type="checkbox"
          value="Novel"
          onChange={handlefilter}
          checked={category.includes("Novel")}
        />
        <label>Novel</label>
      </div>
      <div>
        {" "}
        <input
          type="checkbox"
          value="Science_Fiction"
          onChange={handlefilter}
          checked={category.includes("Science_Fiction")}
        />
        <label>Science Fiction</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Motivational"
          onChange={handlefilter}
          checked={category.includes("Motivational")}
        />
        <label>Motivational</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Thriller"
          onChange={handlefilter}
          checked={category.includes("Thriller")}
        />
        <label>Thriller</label>
      </div>
      <h3>sort by order</h3>
      <div onChange={handlesort}>
        <input
          type="radio"
          name="sort-btn"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <input
          type="radio"
          name="sort-btn"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};
export default SideBar;
