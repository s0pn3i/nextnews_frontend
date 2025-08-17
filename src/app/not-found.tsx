import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center gap-3 py-16">
      <h1 className="text-2xl font-bold">페이지를 찾을 수 없습니다</h1>
      <p className="text-gray-600">
        요청하신 페이지가 존재하지 않거나 이동되었어요.
      </p>
      <Link
        href="/"
        className="mt-2 inline-block px-4 py-2 rounded border bg-white hover:bg-gray-50"
      >
        홈으로 가기
      </Link>
    </div>
  );
}
