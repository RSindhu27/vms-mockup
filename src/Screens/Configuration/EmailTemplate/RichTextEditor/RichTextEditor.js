import { EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./RichTextEditor.css";

function RichTextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
  };

  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="editorToolbar"
        wrapperClassName="editorWrapper"
        editorClassName="editorMain"
      />
    </>
  );
}

export default RichTextEditor;
