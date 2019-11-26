import React, { useState, useEffect } from 'react';
import classes from './Treenode.module.css';
const Treenode = ({ nodes }) => {
  const { parentid, id, children } = nodes;
  const [childrenOutput, setChildrenOutput] = useState([]);

  useEffect(() => {
    const tmpChildrenOutput = [];
    if (children && children.length > 0) {
      children.forEach((childNode) => {
        tmpChildrenOutput.push(
          <Treenode
            nodes={childNode}
          />
        );
      });
    }

    setChildrenOutput(tmpChildrenOutput);
  }, [children]);

  return (
    <div id={`treenode_wrapper_${id}`} className={classes.TreenodeWrapper}>
      <div id={`treenode_${id}`} className={classes.Treenode}>
        {parentid !== undefined && <p>{`parentid: ${parentid}`}</p>}
        <p>{`id: ${id}`}</p>
      </div>
      <div className={classes.childrenWrapper}>
        {childrenOutput}
      </div>
    </div>
  );
}

export default Treenode;
