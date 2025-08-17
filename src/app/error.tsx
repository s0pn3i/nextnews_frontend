"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 서버/분석 도구로 오류를 전송하려면 이 지점에서 처리하세요.
    // 예: Sentry.captureException(error)
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-100 text-red-600 text-2xl mb-4">
          !
        </div>
        <h1 className="text-2xl font-bold mb-2">문제가 발생했습니다</h1>
        <p className="text-gray-600 mb-6">
          예상치 못한 오류가 발생했어요. 잠시 후 다시 시도해 주세요.
        </p>

        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 rounded-md bg-black text-white hover:bg-black/90"
          >
            다시 시도
          </button>
          <button
            type="button"
            onClick={() => {
              try {
                reset();
              } finally {
                window.location.href = "/";
              }
            }}
            className="px-4 py-2 rounded-md border border-black/10 hover:bg-gray-50"
          >
            홈으로
          </button>
        </div>
      </div>
    </div>
  );
}
