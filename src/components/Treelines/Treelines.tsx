import React from "react";
import Treeline from "../Treeline/Treeline";
import { Node } from "../../containers/Tree/Tree";

type TreelineProps = {
  nodes: Node;
};
const Treelines = ({ nodes }: TreelineProps) => {
  const getLines = (node: Node) => {
    if (node.parentid === undefined) {
      const linesOutputs: any = [];
      if (node.children) {
        node.children.forEach((childNode) => {
          linesOutputs.push(getLines(childNode));
        });
      }
      return linesOutputs;
    }

    const { parentid, id, children } = node;

    const linesOutput = [];

    const nodeWrapper = document.getElementById(`treenode_wrapper_${id}`);
    if (nodeWrapper) {
      const nodeWrapperRect = nodeWrapper.getBoundingClientRect();

      const parentNodeWrapper = document.getElementById(
        `treenode_wrapper_${parentid}`
      );
      if (parentNodeWrapper) {
        const parentNodeWrapperRect = parentNodeWrapper.getBoundingClientRect();

        const width = parentNodeWrapperRect.width;
        const height = 42;
        const xstart = parentNodeWrapperRect.left;
        const ystart = nodeWrapperRect.top - 20;
        const x1 = parentNodeWrapperRect.width / 2;
        const y1 = 3;
        const x2 =
          nodeWrapperRect.left -
          parentNodeWrapperRect.left +
          nodeWrapperRect.width / 2;
        const y2 = 37;

        linesOutput.push(
          <Treeline
            key={id}
            id={`treeline_${id}`}
            width={width}
            height={height}
            xstart={xstart}
            ystart={ystart}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
          />
        );

        if (children) {
          children.forEach((childNode) =>
            linesOutput.push(getLines(childNode))
          );
        }

        return linesOutput;
      }
    }
  };
  return getLines(nodes);
};

export default Treelines;
