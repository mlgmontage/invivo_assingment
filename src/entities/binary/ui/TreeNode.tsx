import type { Node } from "entities/binary";

type TreeNodeProps = {
  node: Node;
};

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  return <div>TreeNode</div>;
};

export default TreeNode;
