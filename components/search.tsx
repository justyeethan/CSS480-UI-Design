"use client";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";

export default function Search() {
  const actions = [
    {
      id: "recommended",
      name: "Recommended",
      shortcut: ["b"],
      keywords: "writing words",
      perform: () => (window.location.pathname = "recommended"),
    },
    {
      id: "signin",
      name: "Sign In",
      shortcut: ["c"],
      keywords: "email",
      perform: () => (window.location.pathname = "signin"),
    },
  ];
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch style={searchStyle} />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div
            style={{
              background: "#eee",
              margin: "0.5rem 1rem",
            }}
          >
            {item}
          </div>
        ) : (
          <div
            style={{
              padding: "0.5rem 1rem",
							borderTop: "1px solid #eee",
              fontSize: "1.2rem",
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box" as React.CSSProperties["boxSizing"],
  outline: "none",
  border: "none",
  background: "black",
  color: "white",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: "black",
  color: "white",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.2",
};

const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  textTransform: "uppercase" as const,
  opacity: 0.5,
};
