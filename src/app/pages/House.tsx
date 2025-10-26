import React, { useState } from "react";

/** Small, framework-free code block with a copy button */
function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <div style={{ position: "relative", margin: "1rem 0" }}>
      {label && (
        <div
          style={{
            fontSize: 12,
            opacity: 0.7,
            marginBottom: 6,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          }}
        >
          {label}
        </div>
      )}
      <pre
        style={{
          background: "#0f172a",
          color: "#e5e7eb",
          padding: "14px 16px",
          borderRadius: 10,
          overflowX: "auto",
          lineHeight: 1.5,
          fontSize: 14,
        }}
      >
        <code style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
          {code}
        </code>
      </pre>

      <button
        onClick={onCopy}
        aria-label="Copy code"
        style={{
          position: "absolute",
          top: 4,
          right: 4,
          fontSize: 12,
          background: copied ? "#16a34a" : "#111827",
          color: "white",
          border: "1px solid #374151",
          borderRadius: 8,
          padding: "6px 10px",
          cursor: "pointer",
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function House() {
  return (
    <main>
      <header style={{ margin: "2rem 0 1.25rem" }}>
        <h1 style={{ fontSize: "2rem", lineHeight: 1.2, marginBottom: 8 }}>
          React + TypeScript + Webpack Starter
        </h1>
        <p style={{ opacity: 0.85 }}>
          This project is built using <strong>React</strong>, <strong>TypeScript</strong>, and{" "}
          <strong>Webpack 5</strong> — a flexible setup that lets you customize every layer.
        </p>
      </header>

      <section style={{ margin: "2rem 0 1rem" }}>
        <h1 style={{ fontSize: "1.5rem", lineHeight: 1.2, marginBottom: 12 }}>🚀 Getting Started</h1>

        <h3 style={{ margin: "1rem 0 0.25rem" }}>Install dependencies</h3>
        <CodeBlock code={`bun install`} label="Terminal" />

        <h3 style={{ margin: "1rem 0 0.25rem" }}>Run the development server</h3>
        <CodeBlock code={`bun run dev`} label="Terminal" />
      </section>

      <section style={{ margin: "2rem 0 1rem" }}>
        <h1 style={{ fontSize: "1.5rem", lineHeight: 1.2, marginBottom: 12 }}>🧩 Available Scripts</h1>
        <h3 style={{ margin: "0.5rem 0 0.5rem" }}>
          Just like Next.js or Create React App, this project defines scripts in{" "}
          <code>package.json</code> for different tasks
        </h3>

        <CodeBlock
          label="package.json → scripts"
          code={`{
  "scripts": {
    "dev": "webpack serve --config webpack.config.ts --mode development",
    "build": "webpack --config webpack.config.ts --mode production",
    "preview": "serve -s dist -l 5050",
    "typecheck": "tsc --noEmit"
  }
}`}
        />

        <h3 style={{ marginTop: 16 }}>Bun shortcuts</h3>
        <p style={{ opacity: 0.85 }}>
          With Bun installed, you can run the same scripts using{" "}
          <code style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
            bun run &lt;script&gt;
          </code>
          :
        </p>
        <CodeBlock
          label="Terminal"
          code={`bun run dev
bun run build
bun run preview
bun run typecheck`}
        />
      </section>
    </main>
  );
}
