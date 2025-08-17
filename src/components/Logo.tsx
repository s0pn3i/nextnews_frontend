import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  withText?: boolean;
  /** intrinsic pixel size for quality (kept at 300 as requested) */
  size?: number;
  /** rendered height in px to control layout without changing intrinsic size */
  displayHeight?: number;
  className?: string;
};

export default function Logo({
  href = "/",
  withText = true,
  size = 300,
  className,
}: Props) {
  const icon = (
    <span className="inline-flex items-center">
      <Image
        src="/logo.png"
        alt="넥스트뉴스 로고"
        width={size}
        height={size}
        priority
        className="rounded-sm h-full w-auto object-contain"
      />
    </span>
  );

  return (
    <Link href={href} className={`flex items-center ${className || ""}`}>
      {icon}
    </Link>
  );
}
