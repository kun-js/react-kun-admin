import "./json.scss";
import React from "react";
import { Card } from "antd";
import ReactJson from "react-json-view";

type JsonValueType = string | number | boolean | undefined | object | Date;

type JsonFileType<T = JsonValueType> = {
  [key: string]: T;
};

const JsonFile: JsonFileType = {
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
      <Card className="card-container" title="JSON编辑器示例">
        <ReactJson src={JsonFile} onEdit={() => {}} onAdd={() => {}} onDelete={() => {}} />
      </Card>
    </div>
  );
};

export default JSONEditor;
