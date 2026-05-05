type MarkdownRendererProps = {
  content: string;
};

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const blocks = content.trim().split(/\n\s*\n/);

  return (
    <div className="markdown-body">
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={index} id={slugify(block.replace("## ", ""))}>
              {block.replace("## ", "")}
            </h2>
          );
        }

        if (block.startsWith("- ")) {
          const items = block.split("\n").map((line) => line.replace(/^- /, ""));
          return (
            <ul key={index}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return <p key={index}>{block}</p>;
      })}
    </div>
  );
};

export const extractHeadings = (content: string) =>
  content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => ({ id: slugify(line.replace("## ", "")), label: line.replace("## ", "") }));

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
