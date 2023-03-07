import { treeSelector, Node } from "entities/binary";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const inOrder = (node: Node): any => {
  if (node === null) return;
  const result = [];

  result.push(<div>{node.data}</div>);
  result.push(inOrder(node.left));
  result.push(inOrder(node.right));

  return result;
};

const Home = () => {
  const tree = useSelector(treeSelector);

  useEffect(() => {}, []);

  return <div>{inOrder(tree)}</div>;
};

export default Home;
