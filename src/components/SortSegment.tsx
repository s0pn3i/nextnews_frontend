"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function SortSegment() {
  const router = useRouter();
  const sp = useSearchParams();
  const current = sp.get("sortBy") || "latest";

  const go = (value: string) => {
    const params = new URLSearchParams(sp.toString());
    params.set("sortBy", value);
    params.delete("offset");
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="inline-flex bg-white border rounded-full p-1 text-sm border-[var(--primary)]">
      {[
        { key: "latest", label: "최신" },
        { key: "views", label: "조회수" },
      ].map((opt) => (
        <button
          key={opt.key}
          onClick={() => go(opt.key)}
          className={`px-3 py-1 rounded-full ${
            current === opt.key
              ? "bg-[var(--primary)] text-white"
              : "hover:bg-gray-50 text-[var(--primary)]"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
