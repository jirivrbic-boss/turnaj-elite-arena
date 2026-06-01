export function faceitPlayerUrl(nickname: string): string {
  return `https://faceit.com/players/${encodeURIComponent(nickname.trim())}`;
}
