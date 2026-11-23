import { Instagram } from 'lucide-react';

interface InstagramBrandMarkProps {
  className: string;
  iconClassName: string;
}

export default function InstagramBrandMark({
  className,
  iconClassName,
}: InstagramBrandMarkProps) {
  return (
    <span
      className={`instagram-brand-mark inline-flex shrink-0 items-center justify-center rounded-[28%] ${className}`}
      aria-hidden="true"
    >
      <Instagram className={`${iconClassName} text-white`} />
    </span>
  );
}
