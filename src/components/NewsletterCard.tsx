export default function NewsletterCard() {
  return (
    <div className="bg-white rounded-md p-4 border">
      <h3 className="font-semibold mb-2">뉴스레터</h3>
      <p className="text-sm text-gray-600">아침마다 주요 이슈를 받아보세요.</p>
      <form className="mt-3 flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2 text-sm"
          placeholder="이메일 입력"
          type="email"
        />
        <button className="border rounded px-3 py-2 text-sm bg-[var(--primary)] text-white border-[var(--primary)]">
          구독
        </button>
      </form>
    </div>
  );
}
