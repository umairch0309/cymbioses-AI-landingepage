import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";

const DraftInlineEditor = () => {
  const [editorData, setEditorData] = useState(
    `<div class="sc-bpuAaX bFdkNd">The client presented for her first telehealth session due to a phobia of bridges that prevents her from attending in-person therapy. She reported significant distress and impairment in functioning due to this fear, which has developed relatively recently. Ava has a history of trauma (abusive previous marriage) and current stressors (job insecurity, marital strain) that may be contributing to her anxiety. She demonstrated a willingness to engage in therapy and learn coping strategies.<br> <br> Demographic &amp; Background: 42-year-old Black female, U.S. citizen, Christian (active in local church), middle socioeconomic status (successful business owner). Remarried, heterosexual.<br> <br><b>Cultural Considerations:</b><ul><li>Faith: Explore how the client's faith and involvement in her church community may be a source of strength and support. Consider how her faith might influence her perspective on mental health and treatment.</li><li>Family: Strong family bonds are important to the client. Assess how her family dynamics may be impacting her anxiety and treatment.</li><li>Stigma: Be mindful of the potential stigma surrounding mental health within the Black community. Provide a safe and non-judgmental space for the client to share her experiences.</li><li>Strengths: Acknowledge the client's resilience in overcoming past challenges (abusive relationship, alcohol abuse). Highlight her strengths (strong familial bonds, successful business, active lifestyle, faith) as resources for coping with her current anxiety</li></ul></div>`
  );

  const editorConfig = {
    toolbar: [
      "Heading",
      "bold",
      "italic",
      "underline",
      "|",
      "bulletedList",
      "numberedList",
    ],
    fontSize: {
      options: [14, 16, 18, 20, 24],
      defaultSize: "14px",
    },
    contentStyle: "div { font-size: 14px; }",
  };

  return (
    <div>
      <CKEditor
        editor={InlineEditor}
        config={editorConfig}
        data={editorData}
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
        }}
      />
    </div>
  );
};

export default DraftInlineEditor;
