import React, { useState } from "react";
import "./content.css";
import { FaLongArrowAltUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export interface TodoNode {
  date: string;
  id: number;
  content: string;
}
const BoxNodeContent = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const allDate = day + "/" + month + "/" + year;
  const [todoNode, setTodoNode] = useState<TodoNode[]>([]);
  const [content, setContent] = useState<string>("");
  const addNewTodoNode = (todoNode: TodoNode): void => {
    setTodoNode((prev: TodoNode[]) => [...prev, todoNode]);
  };
  const handleAddNode = (): void => {
    const newTodo = {
      date: allDate,
      id: Math.random() * 10000,
      content: content,
    };
    addNewTodoNode(newTodo);
    setContent("");
  };
  const deleteContent = (id: number) => {
    const newContent = todoNode.filter((item: TodoNode) => {
      return item.id !== id;
    });
    setTodoNode(newContent);
  };
  const lengthContent: number | null = 200 - content.length;
  if (lengthContent <= 0) {
    alert("stop least 200");
  }
  return (
    <div className="list-content">
      {todoNode.map((item, index) => {
        return (
          <div className="render-node-content">
            <div className="render-node">
              <textarea value={item.content} placeholder="." readOnly />
            </div>
            <div className="render-add-content">
              <span className="render-length">{item.date}</span>
              <button>
                {" "}
                .
                <MdDelete onClick={() => deleteContent(item.id)} />
              </button>
            </div>
          </div>
        );
      })}
      <div className="node-content">
        <div className="node">
          <textarea
            value={content}
            placeholder="node content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="add-content">
          <span className="length">{200 - content.length} left</span>
          <button onClick={handleAddNode}>
            PUBLISH <FaLongArrowAltUp />
          </button>
        </div>
      </div>
    </div>
  );
};
export default BoxNodeContent;
