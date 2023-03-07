import { treeSelector, insert } from "entities/binary";
import TreeNode from "entities/binary/ui/TreeNode";
import { KeyboardEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateNumber } from "shared/functions";

const Home = () => {
  const dispatch = useDispatch();
  const tree = useSelector(treeSelector);

  useEffect(() => {
    const press = (ev: KeyboardEvent) => {
      if (ev.code === "Space") {
        const data = generateNumber();
        dispatch(insert({ data, left: null, right: null }));
      }
    };

    document.addEventListener("keypress", press);

    return () => document.removeEventListener("keypress", press);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Press "space" to insert random number.
      </h1>
      <TreeNode node={tree} />
    </div>
  );
};

export default Home;
