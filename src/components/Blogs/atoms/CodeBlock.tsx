import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "@styles/objects/projects/CodeBlock.module.scss";

type Props = {
  className?: string;
  children?: React.ReactNode;
};
const CodeBlock: React.FC<Props> = ({ className, children = "" }: Props) => {
  const match = /language-(\w+)(:?.*)/.exec(className || "");
  const language = match && match[1] ? match[1] : "";
  const fileName = match && match[2] ? match[2].slice(1) : "";
  const code = String(children).replace(/\n$/, "");
  return (
    <>
      <div className={styles.codeBlock}>
        {fileName && <div className={styles.codeBlockTitle}>{fileName}</div>}
        <SyntaxHighlighter language={language} style={atomDark} className={styles.codeBlockHighlight}>
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default CodeBlock;
