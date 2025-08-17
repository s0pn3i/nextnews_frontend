"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  total,
  limit,
  totalPages,
}: {
  total: number;
  limit: number;
  totalPages?: number;
}) {
  const router = useRouter();
  const sp = useSearchParams();
  const offset = Number(sp.get("offset") || 0);
  const currentPage = Math.floor(offset / limit) + 1;
  const computedTotalPages =
    totalPages ?? Math.max(1, Math.ceil(total / limit));
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < computedTotalPages;

  const go = (nextOffset: number) => {
    const params = new URLSearchParams(sp.toString());
    params.set("offset", String(nextOffset));
    router.push(`/?${params.toString()}`);
  };

  const goToPage = (page: number) => {
    const safe = Math.min(Math.max(1, page), computedTotalPages);
    go((safe - 1) * limit);
  };

  const windowSize = 5;
  let start = Math.max(1, currentPage - Math.floor(windowSize / 2));
  let end = start + windowSize - 1;
  if (end > computedTotalPages) {
    end = computedTotalPages;
    start = Math.max(1, end - windowSize + 1);
  }

  return (
    <div className="mt-6 select-none">
      <div className="flex items-center">
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button
            className="text-base text-gray-700 hover:underline disabled:text-gray-300 disabled:no-underline"
            disabled={!hasPrev}
            onClick={() => goToPage(1)}
          >
            처음
          </button>
          <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border bg-white hover:bg-gray-50 disabled:opacity-50 text-gray-700 text-2xl leading-none"
            disabled={!hasPrev}
            onClick={() => goToPage(currentPage - 1)}
            aria-label="이전 페이지"
          >
            ‹
          </button>
        </div>

        <div className="flex items-center gap-4 justify-center px-4">
          {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
            (p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                aria-current={p === currentPage ? "page" : undefined}
                className={
                  p === currentPage
                    ? "w-10 h-10 rounded-full bg-black text-white text-base tabular-nums"
                    : "w-10 h-10 rounded-full text-base text-gray-700 hover:bg-gray-50 tabular-nums"
                }
              >
                {p}
              </button>
            )
          )}
        </div>

        <div className="flex items-center gap-4 flex-1">
          <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border bg-white hover:bg-gray-50 disabled:opacity-50 text-gray-700 text-2xl leading-none"
            disabled={!hasNext}
            onClick={() => goToPage(currentPage + 1)}
            aria-label="다음 페이지"
          >
            ›
          </button>
          <button
            className="text-base text-gray-700 hover:underline disabled:text-gray-300 disabled:no-underline"
            disabled={!hasNext}
            onClick={() => goToPage(computedTotalPages)}
          >
            마지막
          </button>
        </div>
      </div>
    </div>
  );
}
