"use client";

import { Button } from "@/components/ui/button";
import { EditorContent, type Editor } from "@tiptap/react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-5">
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        type="button"
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "secondary"
        }
      >
        H1
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        type="button"
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "secondary"
        }
      >
        H2
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        type="button"
        variant={
          editor.isActive("heading", { level: 3 }) ? "default" : "secondary"
        }
      >
        H3
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        type="button"
        variant={editor.isActive("bold") ? "default" : "secondary"}
      >
        Bold
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        type="button"
        variant={editor.isActive("italic") ? "default" : "secondary"}
      >
        Italic
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        type="button"
        variant={editor.isActive("strike") ? "default" : "secondary"}
      >
        Strike
      </Button>
    </div>
  );
};

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content:
      "<p>Example: Callaway Paradym Driver, slight face damage, stiff flex, 10.5 degrees of loft. Good condition.</p>",
    editorProps: {
      attributes: {
        class:
          "focus:outline-none min-h-[9.375rem] prose prose-sm sm:prose-base text-white",
      },
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="rounded-lg border p-2 min-h-[9.375rem] mt-2"
      />
    </div>
  );
};

export default Tiptap;
