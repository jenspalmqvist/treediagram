import React, { useState, useEffect } from "react";
import classes from "./Treenode.module.css";
import { Node } from "../../containers/Tree/Tree";

type TreenodeProps = { node: Node };

const Treenode = ({ node }: TreenodeProps) => {
  const { parentid, id, status, children } = node;
  const [childrenOutput, setChildrenOutput] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const tmpChildrenOutput: JSX.Element[] = [];
    if (children && children.length > 0) {
      children.forEach((childNode) => {
        tmpChildrenOutput.push(
          <Treenode key={childNode.id} node={childNode} />
        );
      });
    }

    setChildrenOutput(tmpChildrenOutput);
  }, [children]);

  const treenodeClasses = [classes.Treenode];
  if (status === "success") {
    treenodeClasses.push(classes.TreenodeSuccess);
  } else if (status === "failed") {
    treenodeClasses.push(classes.TreenodeFailed);
  } else {
    treenodeClasses.push(classes.TreenodeWaiting);
  }

  return (
    <div id={`treenode_wrapper_${id}`} className={classes.TreenodeWrapper}>
      <div id={`treenode_${id}`} className={treenodeClasses.join(" ")}>
        <p className={classes.TreenodeTitle}>{`id: ${id}`}</p>
        {parentid !== undefined && (
          <p className={classes.TreenodeSubtitle}>{`parentid: ${parentid}`}</p>
        )}
      </div>
      <div className={classes.childrenWrapper}>{childrenOutput}</div>
    </div>
  );
};

export default Treenode;
