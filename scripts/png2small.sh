#!/usr/bin/env bash
# png2small.sh — convert a PNG to the smallest of AVIF/WebP/JPEG on macOS
# deps: sips (built-in), cwebp (brew install webp), avifenc (brew install libavif)

set -euo pipefail

usage() {
  cat <<EOF
Usage: $(basename "$0") /path/image.png

Env knobs (optional):
  AVIF_Q=50        # 0..100 (higher = better quality, larger file)
  AVIF_SPEED=4     # 0..10 (lower = slower encode, smaller file)
  WEBP_Q=80        # 0..100
  JPEG_Q=85        # 0..100
EOF
}

if [[ $# -ne 1 || "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then usage; exit 1; fi

IN="$1"
[[ -f "$IN" ]] || { echo "Error: file not found: $IN" >&2; exit 2; }

# Verify the file is truly a PNG (not just .png extension)
MIME="$(file -b --mime-type "$IN" 2>/dev/null || echo "")"
if [[ "$MIME" != "image/png" ]]; then
  echo "Error: input must be a PNG. Detected: $MIME" >&2
  exit 3
fi

BASE="${IN##*/}"; BASE="${BASE%.png}"
DIR="$(cd "$(dirname "$IN")" && pwd)"
TMP="$(mktemp -d)"
cleanup(){ rm -rf "$TMP"; }
trap cleanup EXIT

# Helper: macOS stat for bytes
size_bytes() { stat -f%z "$1"; }

echo "Encoding candidates to: $TMP"

# AVIF (libavif / avifenc)
if command -v avifenc >/dev/null 2>&1; then
  avifenc -q "${AVIF_Q:-50}" -s "${AVIF_SPEED:-4}" --no-overwrite "$IN" "$TMP/$BASE.avif" >/dev/null
else
  echo "Note: 'avifenc' not found; skip AVIF (brew install libavif)" >&2
fi

# WebP (cwebp)
if command -v cwebp >/dev/null 2>&1; then
  cwebp -quiet -q "${WEBP_Q:-80}" "$IN" -o "$TMP/$BASE.webp"
else
  echo "Note: 'cwebp' not found; skip WebP (brew install webp)" >&2
fi

# JPEG (sips) — skip if the PNG has alpha, unless user allows it
HAS_ALPHA="$(sips -g hasAlpha "$IN" 2>/dev/null | awk '/hasAlpha/ {print $2}')"
sips -s format jpeg -s formatOptions "${JPEG_Q:-85}" "$IN" --out "$TMP/$BASE.jpg" >/dev/null
if [[ "$HAS_ALPHA" != "no" ]]; then
  echo "Note: PNG has transparency - it's recommended to verify the JPEG image is correct if chosen." >&2
fi

# Pick the smallest output
BEST=""
BEST_SIZE=""
for f in "$TMP/$BASE.avif" "$TMP/$BASE.webp" "$TMP/$BASE.jpg"; do
  [[ -f "$f" ]] || continue
  sz="$(size_bytes "$f")"
  if [[ -z "$BEST" || "$sz" -lt "$BEST_SIZE" ]]; then BEST="$f"; BEST_SIZE="$sz"; fi
done

[[ -n "$BEST" ]] || { echo "Error: no outputs were generated (check dependencies above)." >&2; exit 4; }

EXT="${BEST##*.}"
OUT="$DIR/$BASE.$EXT"
mv -f "$BEST" "$OUT"

# (optional) report the other sizes
printf "Chosen: %s (%s bytes)\n" "$OUT" "$BEST_SIZE"
for f in "$TMP/$BASE.avif" "$TMP/$BASE.webp" "$TMP/$BASE.jpg"; do
  [[ -f "$f" ]] || continue
  printf " - candidate: %s (%s bytes)\n" "$f" "$(size_bytes "$f")"
done
