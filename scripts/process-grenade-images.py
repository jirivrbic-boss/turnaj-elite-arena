#!/usr/bin/env python3
"""Převede granátové obrázky (i JPEG v .png) na skutečné PNG s průhledným pozadím."""

from __future__ import annotations

from pathlib import Path

from PIL import Image

FOTKY = Path(__file__).resolve().parents[1] / "public" / "fotky"
FILES = ("grenade-left.png", "grenade-right.png")
THRESHOLD = 42
FEATHER = 40


def remove_dark_bg(path: Path) -> None:
    img = Image.open(path).convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, _a = px[x, y]
            lum = max(r, g, b)
            if lum <= THRESHOLD:
                px[x, y] = (0, 0, 0, 0)
            elif lum < THRESHOLD + FEATHER:
                t = (lum - THRESHOLD) / FEATHER
                alpha = int(255 * min(1, max(0, t)))
                px[x, y] = (r, g, b, alpha)
    img.save(path, "PNG", optimize=True)


def main() -> None:
    for name in FILES:
        path = FOTKY / name
        if not path.exists():
            raise SystemExit(f"Chybí soubor: {path}")
        remove_dark_bg(path)
        print(f"OK: {path.name}")


if __name__ == "__main__":
    main()
