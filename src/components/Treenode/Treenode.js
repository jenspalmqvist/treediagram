import React, { useState, useEffect } from 'react';
import classes from './Treenode.module.css';
const Treenode = ({ nodes }) => {
  const { parentid, id, title, status, children } = nodes;
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

  const treenodeClasses = [classes.Treenode];
  if (status === 'success') {
    treenodeClasses.push(classes.TreenodeSuccess);
  } else if (status === 'failed') {
    treenodeClasses.push(classes.TreenodeFailed);
  } else {
    treenodeClasses.push(classes.TreenodeWaiting);
  }

  return (
    <div id={`treenode_wrapper_${id}`} className={classes.TreenodeWrapper}>
      <div id={`treenode_${id}`} className={treenodeClasses.join(' ')}>
        <p className={classes.TreenodeTitle}>{`id: ${id}`}</p>
        {parentid !== undefined && <p className={classes.TreenodeSubtitle}>{`parentid: ${parentid}`}</p>}
      </div>
      <div className={classes.childrenWrapper}>
        {childrenOutput}
      </div>
    </div>
  );
}

export default Treenode;
