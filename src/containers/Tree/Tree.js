import React, { useState, useEffect } from 'react';
import Treenode from '../../components/Treenode/Treenode';
import Treelines from '../../components/Treelines/Treelines';
import classes from './Tree.module.css';

const nodes = {
  id: 0,
  title: 'node 1 -> root',
  children: [
    {
      parentid: 0,
      id: 1,
      title: 'node 2 -> parent 1',
      children: [
        { parentid: 1, id: 2, title: 'node 4 -> parent 2' },
        {
          parentid: 1,
          id: 3,
          title: 'node 5 -> parent 2',
          children: [
            { parentid: 3, id: 4, title: 'node 7 -> parent 7 -> parent 2' },
            { parentid: 3, id: 5, title: 'node 7 -> parent 7 -> parent 3' },
            { parentid: 3, id: 6, title: 'node 7 -> parent 7 -> parent 4' }
          ]
        }
      ]
    },
    {
      parentid: 0,
      id: 7,
      title: 'node 2 -> parent 1',
      children: [
        { parentid: 7, id: 8, title: 'node 4 -> parent 2' },
        {
          parentid: 7,
          id: 9,
          title: 'node 5 -> parent 2',
          children: [
            { parentid: 9, id: 10, title: 'node 7 -> parent 7 -> parent 2' },
            { parentid: 9, id: 11, title: 'node 7 -> parent 7 -> parent 3' },
            { parentid: 9, id: 12, title: 'node 7 -> parent 7 -> parent 4' }
          ]
        }
      ]
    },
    {
      parentid: 0,
      id: 13,
      title: 'node 3 -> parent 1',
      children: [
        { parentid: 13, id: 14, title: 'node 5 -> parent 3 -> parent 1' },
        { parentid: 13, id: 18, title: 'node 5 -> parent 3 -> parent 1' },
        {
          parentid: 13,
          id: 19,
          title: 'node 5 -> parent 3 -> parent 1',
          children: [
            {
              parentid: 19,
              id: 20,
              title: 'node 5 -> parent 3 -> parent 1',
              children: [
                {
                  parentid: 20,
                  id: 21,
                  title: 'node 5 -> parent 3 -> parent 1',
                  children: [
                  ]
                }
              ]
            }
          ]
        },
        { parentid: 13, id: 15, title: 'node 5 -> parent 3 -> parent 1' },
        { parentid: 13, id: 16, title: 'node 5 -> parent 3 -> parent 1' },
        { parentid: 13, id: 17, title: 'node 5 -> parent 3 -> parent 1' },
      ]
    },
    // {
    //   parentid: 0,
    //   id: 38,
    //   title: 'node 3 -> parent 1',
    //   children: [
    //     { parentid: 38, id: 22, title: 'node 5 -> parent 3 -> parent 1' },
    //     { parentid: 38, id: 23, title: 'node 5 -> parent 3 -> parent 1' },
    //     {
    //       parentid: 38,
    //       id: 24,
    //       title: 'node 5 -> parent 3 -> parent 1',
    //       children: [
    //         {
    //           parentid: 24,
    //           id: 25,
    //           title: 'node 5 -> parent 3 -> parent 1',
    //           children: [
    //             {
    //               parentid: 25,
    //               id: 26,
    //               title: 'node 5 -> parent 3 -> parent 1',
    //               children: [
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     { parentid: 38, id: 27, title: 'node 5 -> parent 3 -> parent 1' },
    //     { parentid: 38, id: 28, title: 'node 5 -> parent 3 -> parent 1' },
    //     { parentid: 38, id: 29, title: 'node 5 -> parent 3 -> parent 1' },
    //   ]
    // },
  ]
};

const Tree = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLines(
        <Treelines
          nodes={nodes}
        />
      );
    }, 200);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div className={classes.Tree}>
      <div>
        <Treenode
          nodes={nodes}
        />
        {lines}
      </div>
    </div>
  );
}

export default Tree;
