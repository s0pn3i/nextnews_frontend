"use client";
import { useEffect, useRef } from "react";

type Props = {
  slotId?: string;
  layout?: "responsive" | "in-article" | "fluid";
  format?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export default function AdSlot({
  slotId,
  layout = "responsive",
  format = "auto",
  className,
  width = "100%",
  height = 90,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ADSENSE_CLIENT) return; // 환경변수 없으면 아무 것도 하지 않음
    try {
      // @ts-expect-error adsbygoogle global
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  if (!ADSENSE_CLIENT) {
    return (
      <div
        ref={ref}
        className={
          className ||
          "border rounded-md bg-gray-50 text-gray-400 text-xs flex items-center justify-center"
        }
        style={{ width, height }}
      >
        광고 자리
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle block ${className || ""}`}
      style={{ display: "block" }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slotId}
      data-ad-format={format}
      data-ad-layout={layout}
      data-full-width-responsive="true"
    />
  );
}
