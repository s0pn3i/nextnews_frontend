"use client";
import Link from "next/link";
import type { Article } from "@/lib/types";

export default function BreakingTicker({ items }: { items: Article[] }) {
  if (!items?.length) return null;
  // 같은 시퀀스를 두 번 이어 붙여 끊김 없이 한 줄만 흘러가게 처리
  const sequence = [...items, ...items];
  return (
    <div className="relative overflow-hidden border rounded-md bg-white flex items-center">
      <div className="px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-red-500 to-orange-500">
        속보
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="ticker-track whitespace-nowrap">
          {sequence.map((a, i) => (
            <Link
              key={`${a.id}-${i}`}
              href={`/articles/${a.id}`}
              className="mx-4 text-sm hover:underline align-middle inline-block"
            >
              {a.title}
              <span className="mx-3 text-gray-300">•</span>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-track {
          display: inline-block;
          will-change: transform;
          animation: marquee 24s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
