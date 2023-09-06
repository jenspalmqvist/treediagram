import React, { useState, useEffect } from "react";
import Treenode from "../../components/Treenode/Treenode";
import Treelines from "../../components/Treelines/Treelines";
import classes from "./Tree.module.css";

export type Node = {
  parentid?: number;
  id: number;
  title: string;
  status?: "failed" | "success" | "";
  children?: Node[];
};
const nodes: Node = {
  id: 0,
  title: "Treenode",
  status: "failed",
  children: [
    {
      parentid: 0,
      id: 1,
      title: "Treenode",
      status: "success",
      children: [
        { parentid: 1, id: 2, title: "Treenode", status: "success" },
        {
          parentid: 1,
          id: 3,
          title: "Treenode",
          status: "success",
          children: [
            { parentid: 3, id: 4, title: "Treenode", status: "success" },
            { parentid: 3, id: 5, title: "Treenode", status: "success" },
            { parentid: 3, id: 6, title: "Treenode", status: "success" },
          ],
        },
      ],
    },
    {
      parentid: 0,
      id: 7,
      title: "Treenode",
      status: "",
      children: [
        { parentid: 7, id: 8, title: "Treenode", status: "success" },
        {
          parentid: 7,
          id: 9,
          title: "Treenode",
          status: "",
          children: [
            { parentid: 9, id: 10, title: "Treenode", status: "success" },
            { parentid: 9, id: 11, title: "Treenode", status: "success" },
            { parentid: 9, id: 12, title: "Treenode" },
          ],
        },
      ],
    },
    {
      parentid: 0,
      id: 13,
      title: "Treenode",
      status: "failed",
      children: [
        { parentid: 13, id: 14, title: "Treenode", status: "success" },
        { parentid: 13, id: 18, title: "Treenode", status: "success" },
        {
          parentid: 13,
          id: 19,
          title: "Treenode",
          status: "failed",
          children: [
            {
              parentid: 19,
              id: 20,
              title: "Treenode",
              status: "failed",
              children: [
                {
                  parentid: 20,
                  id: 21,
                  title: "Treenode",
                  status: "failed",
                  children: [],
                },
              ],
            },
          ],
        },
        { parentid: 13, id: 15, title: "Treenode", status: "success" },
        { parentid: 13, id: 16, title: "Treenode", status: "success" },
        { parentid: 13, id: 17, title: "Treenode", status: "success" },
      ],
    },
    {
      parentid: 0,
      id: 38,
      title: "Treenode",
      children: [
        { parentid: 38, id: 22, title: "Treenode" },
        { parentid: 38, id: 23, title: "Treenode" },
        {
          parentid: 38,
          id: 24,
          title: "Treenode",
          children: [
            {
              parentid: 24,
              id: 25,
              title: "Treenode",
              children: [
                {
                  parentid: 25,
                  id: 26,
                  title: "Treenode",
                  children: [],
                },
              ],
            },
          ],
        },
        { parentid: 38, id: 27, title: "Treenode" },
        { parentid: 38, id: 28, title: "Treenode" },
        { parentid: 38, id: 29, title: "Treenode" },
      ],
    },
  ],
};

const Tree = () => {
  const [lines, setLines] = useState<React.JSX.Element | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLines(<Treelines nodes={nodes} />);
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={classes.Tree}>
      <div>
        <Treenode node={nodes} />
        {lines}
      </div>
    </div>
  );
};

export default Tree;
