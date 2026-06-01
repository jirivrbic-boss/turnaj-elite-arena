import { faceitPlayerUrl } from "@/lib/faceit";

type FaceitPlayerLinkProps = {
  nickname: string;
  className?: string;
};

export function FaceitPlayerLink({ nickname, className = "" }: FaceitPlayerLinkProps) {
  const nick = nickname.trim();
  if (!nick) return <span className={className}>—</span>;

  return (
    <a
      href={faceitPlayerUrl(nick)}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-colors hover:text-accent-bright hover:underline ${className}`}
    >
      {nick}
    </a>
  );
}
