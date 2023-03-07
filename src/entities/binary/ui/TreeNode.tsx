import type { Node } from "entities/binary";

type TreeNodeProps = {
  node: Node;
};

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {node ? (
        <div>
          <h3>{node.data}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TreeNode node={node.left} />
            <TreeNode node={node.right} />
          </div>
        </div>
      ) : (
        <div>(empty)</div>
      )}
    </div>
  );
};

export default TreeNode;
