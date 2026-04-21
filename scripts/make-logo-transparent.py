"""Remove flat black background from the Rose Foundation logo PNG (local script)."""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image
from scipy.ndimage import binary_dilation, distance_transform_edt

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "rose-foundation-logo.png"
OUT = ROOT / "public" / "rose-foundation-logo.png"


def main() -> None:
    im = Image.open(SRC).convert("RGBA")
    a = np.array(im, dtype=np.uint8)
    rgb = a[:, :, :3].astype(np.float32)

    # Foreground: visible colour (dark grey text, green wordmark, rose, etc.)
    fg = np.max(rgb, axis=2) > 42

    # Expand foreground so black outlines/strokes stay adjacent to "content"
    structure = np.ones((9, 9), dtype=bool)
    fg_dilated = binary_dilation(fg, structure=structure)
    dist = distance_transform_edt(~fg_dilated)

    # Remove pixels that are still dark but far from any dilated foreground
    dark = np.max(rgb, axis=2) < 42
    remove = dark & (dist > 8.0)

    # Soft halos: slightly brighter greys that are only background
    halo = (np.max(rgb, axis=2) < 58) & (dist > 14.0) & ~fg
    remove = remove | halo

    a[remove, 3] = 0
    a[remove, :3] = 0

    Image.fromarray(a, "RGBA").save(OUT, optimize=True)
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
