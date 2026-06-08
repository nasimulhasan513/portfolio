# Gallery images

The website displays the optimized photos in `web/`. The manifest
(`components/gallery-manifest.json`) is generated — don't edit it by hand.

## Adding new photos

1. Drop your originals (`.jpg`, `.jpeg`, `.png`, `.heic`) into this folder.
2. Run the optimizer from the project root:

   ```bash
   python3 scripts/optimize-gallery.py
   ```

   It bakes in correct rotation (no sideways photos), resizes to max 1400px,
   writes optimized copies to `web/`, and regenerates the manifest with each
   image's dimensions (prevents layout shift).

   First time only:
   ```bash
   python3 -m pip install Pillow pillow-heif
   ```

> Note: the full-resolution originals are no longer kept in this folder — the
> optimized `web/` set is the source of truth used by the site. Keep your own
> backup of originals elsewhere.
