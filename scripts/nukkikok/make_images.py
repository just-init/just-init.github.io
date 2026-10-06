#!/usr/bin/env python3
"""누끼콕 소개 페이지 이미지(static/nukkikok/*.webp)를 원본에서 다시 만든다.

쓰는 법: python3 scripts/nukkikok/make_images.py [--recut] [--body-sticker]
  --recut         Apple Vision으로 원본 사진의 누끼를 다시 딴다 (macOS 14+, swiftc 필요).
                  없으면 source/auto_full.png를 그대로 쓴다.
  --body-sticker  sticker.webp를 얼굴 스티커(source/sticker_face.webp) 대신
                  몸 전체 스티커(auto_full에서 다리를 뺀 것)로 만든다.
필요: Pillow (pip install pillow)
"""
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
SRC = HERE / 'source'
OUT = ROOT / 'static' / 'nukkikok'
PHOTO = OUT / 'sample' / 'baby1.png'

WEB_MAX = 900

# auto_full.png를 665x900으로 줄였을 때 기준, 아기만 남기는 영역 (부모님 다리 제외)
BODY_POLY = [(150, 0), (665, 0), (665, 600), (470, 600), (455, 470), (380, 446),
             (300, 410), (240, 413), (176, 416), (162, 330), (180, 205), (150, 0)]


def recut():
    with tempfile.TemporaryDirectory() as tmp:
        exe = Path(tmp) / 'cut'
        subprocess.run(['swiftc', '-O', str(HERE / 'cut.swift'), '-o', str(exe)], check=True)
        subprocess.run([str(exe), str(PHOTO), str(SRC / 'auto_full.png')], check=True)


def body_sticker(auto):
    """자동 추출 결과에서 BODY_POLY 밖(다리)을 지운다. 2배 해상도로 작업."""
    s = 2
    cut = auto.resize((665 * s, 900 * s), Image.LANCZOS)
    mask = Image.new('L', cut.size, 0)
    ImageDraw.Draw(mask).polygon([(x * s, y * s) for x, y in BODY_POLY], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(1.5))
    cut.putalpha(ImageChops.multiply(cut.getchannel('A'), mask))
    return trim(cut, pad=40 * s)


def trim(im, pad=0):
    box = im.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox()
    return im.crop((box[0] - pad, box[1] - pad, box[2] + pad, box[3] + pad))


def save_webp(im, name, quality=85):
    im = im.copy()
    im.thumbnail((WEB_MAX, WEB_MAX if im.mode == 'RGBA' else 1200), Image.LANCZOS)
    im.save(OUT / name, quality=quality, method=6)
    print(f'{name}: {im.size[0]}x{im.size[1]}, {(OUT / name).stat().st_size // 1024}KB')


def main():
    if '--recut' in sys.argv:
        recut()

    save_webp(Image.open(PHOTO).convert('RGB'), 'original.webp', quality=80)

    auto = Image.open(SRC / 'auto_full.png').convert('RGBA')
    save_webp(auto, 'auto.webp')

    if '--body-sticker' in sys.argv:
        sticker = body_sticker(auto)
        sticker.save(SRC / 'sticker_body.png', optimize=True)
    else:
        sticker = trim(Image.open(SRC / 'sticker_face.webp').convert('RGBA'))
    save_webp(sticker, 'sticker.webp')


if __name__ == '__main__':
    main()
