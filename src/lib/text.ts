export function extractSummary(text: string, maxSentences = 3): string[] {
  if (!text) return [];
  const normalized = text.replace(/\n+/g, " ").trim();
  // 간단한 문장 분리: 마침표/물음표/느낌표/종결 따옴표 기준
  const parts = normalized.split(/(?<=[\.\?\!])\s+/).filter(Boolean);
  return parts.slice(0, maxSentences);
}


