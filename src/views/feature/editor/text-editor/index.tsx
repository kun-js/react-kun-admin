import "./text.scss";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";

const TextEditor: React.FC = () => {
  const [editor, setEditor] = useState<IDomEditor | null>(null);
  const [html, setHtml] = useState<string>("<p>hello</p>");

  useEffect(() => {
    setTimeout(() => {
      setHtml("<p>hello world</p>");
    }, 1000);
  }, []);

  const toolbarConfig: Partial<IToolbarConfig> = {};

  const editorConfig: Partial<IEditorConfig> = {
    placeholder: "请输入内容...",
  };

  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <div className="text-container">
      <Card className="card-container" title="文本编辑器示例">
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="mode"
          style={{ borderBottom: "1px solid #ccc", zIndex: "100" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: "75vh", overflowY: "hidden", zIndex: "100" }}
        />
      </Card>
    </div>
  );
};

export default TextEditor;
