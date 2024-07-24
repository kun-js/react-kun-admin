import "./markdown.scss";
import React, { useState } from "react";
import { Card } from "antd";
import MDEditor, { MDEditorProps } from "@uiw/react-md-editor";

const MarkDownEditor: React.FC = () => {
  const [value, setValue] = useState("**Hello world!!!**");

  return (
    <div className="markdown-container">
      <Card className="card-container" title="MarkDown编辑器示例" bordered={false}>
        <MDEditor value={value} onChange={setValue as MDEditorProps["onChange"]} height="80vh" visibleDragbar={false} />
      </Card>
    </div>
  );
};

export default MarkDownEditor;
