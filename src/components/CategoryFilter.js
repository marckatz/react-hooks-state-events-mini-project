import React, {Children} from "react";

function CategoryFilter({categories, setSelected, selected}) {
  let currentKey = 0
  const categoryButtons = Children.toArray(categories.map(c => {
    return <button onClick={() => setSelected(c)} className={c===selected?"selected":""}>{c}</button>
  }))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
