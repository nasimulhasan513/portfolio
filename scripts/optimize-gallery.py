#!/usr/bin/env python3
"""
Optimize gallery photos for the web.

Usage:
    python3 scripts/optimize-gallery.py

Reads every image in public/gallery/ (jpg/jpeg/png/heic), bakes in the correct
EXIF orientation (so nothing displays sideways), resizes to max 1400px, writes
optimized JPEGs to public/gallery/web/, and regenerates
components/gallery-manifest.json (with width/height for zero layout shift).

Requires: Pillow, pillow-heif  ->  python3 -m pip install Pillow pillow-heif
"""
from PIL import Image, ImageOps
import glob, os, json, sys

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
except ImportError:
    print("note: pillow-heif not installed; .heic files will be skipped")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(ROOT, "public/gallery")
WEB_DIR = os.path.join(SRC_DIR, "web")
os.makedirs(WEB_DIR, exist_ok=True)

srcs = []
for ext in ("jpg", "jpeg", "JPG", "JPEG", "png", "PNG", "heic", "HEIC"):
    srcs += glob.glob(os.path.join(SRC_DIR, f"*.{ext}"))
srcs = sorted(set(srcs))

# If no originals remain, just re-normalize the existing web/ set in place.
if not srcs:
    srcs = sorted(glob.glob(os.path.join(WEB_DIR, "*.jpg")))
    print(f"No originals found — re-normalizing {len(srcs)} files in web/")

items = []
for f in srcs:
    name = os.path.splitext(os.path.basename(f))[0]
    out = os.path.join(WEB_DIR, f"{name}.jpg")
    try:
        im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
        im.thumbnail((1400, 1400))
        im.save(out, "JPEG", quality=72, optimize=True)
        w, h = im.size
        alt = "Photo from Nasimul's collection" if name[:8].isdigit() else name.replace("_", " ").title()
        items.append({"src": f"/gallery/web/{name}.jpg", "alt": alt, "w": w, "h": h})
    except Exception as e:
        print("skip", f, e, file=sys.stderr)

items.sort(key=lambda x: x["src"])
with open(os.path.join(ROOT, "components/gallery-manifest.json"), "w") as fh:
    json.dump(items, fh, indent=2)
print(f"Done: {len(items)} images optimized; manifest updated.")
