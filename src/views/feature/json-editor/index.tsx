import "./json.scss";
import React from "react";
import { Card } from "antd";
import ReactJson from "react-json-view";

const JsonFile = {
  string: "this is a test ...",
  integer: 42,
  array: [1, "two", NaN],
  float: 3.14159,
  undefined: undefined,
  object: { a: true, b: false, c: { e: "item1", f: "item2" } },
  string_number: "1234",
  date: new Date(),
};

const JSONEditor: React.FC = () => {
  return (
    <div className="json-container">
      <Card className="card-container" title="JSON编辑器示例" bordered={false}>
        <ReactJson
          src={JsonFile}
          onEdit={(key) => {
            console.log(key);
          }}
          onAdd={(key) => {
            console.log(key);
          }}
          onDelete={(key) => {
            console.log(key);
          }}
        />
      </Card>
    </div>
  );
};

export default JSONEditor;
