"use client";
import { useState } from "react";

export default function ArticleMetaBar({
  createdAt,
}: {
  createdAt: string;
}) {
  const [size, setSize] = useState<"base" | "lg">("base");

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // optional: toast 등은 생략
    } catch {}
  };

  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 border-y py-2 my-4">
      <time dateTime={createdAt}>{new Date(createdAt).toLocaleString("ko-KR")}</time>
      <span className="flex-1" />
      <div className="flex items-center gap-1">
        <span className="hidden sm:inline">글자크기</span>
        <button
          className={`px-2 py-1 border rounded ${size === "base" ? "bg-black text-white" : "bg-white"}`}
          onClick={() => {
            setSize("base");
            document.documentElement.classList.remove("article-lg");
          }}
        >
          기본
        </button>
        <button
          className={`px-2 py-1 border rounded ${size === "lg" ? "bg-black text-white" : "bg-white"}`}
          onClick={() => {
            setSize("lg");
            document.documentElement.classList.add("article-lg");
          }}
        >
          크게
        </button>
      </div>
      <button className="px-2 py-1 border rounded bg-white" onClick={onCopy}>
        링크복사
      </button>
      <button className="px-2 py-1 border rounded bg-white" onClick={() => window.print()}>
        인쇄
      </button>
    </div>
  );
}


