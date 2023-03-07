import { treeSelector, insert } from "entities/binary";
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

  return <div>{}</div>;
};

export default Home;
