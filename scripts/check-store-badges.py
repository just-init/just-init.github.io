#!/usr/bin/env python3
"""정적 페이지의 App Store / Google Play 마크가 정본과 같은지 확인한다.

정본: static/common/store-badges.html
쓰는 법: python3 scripts/check-store-badges.py
정본과 다른 path 가 있으면 그 자리를 찍고 exit 1.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
CANON = ROOT / 'static' / 'common' / 'store-badges.html'
TARGETS = sorted((ROOT / 'static').glob('*/index.html'))


def norm(d):
    return re.sub(r'\s+', ' ', d).strip()


def paths_in(text):
    return [norm(d) for d in re.findall(r'\sd="([^"]+)"', text)]


def load_canon():
    """정본 문서의 데모 칩(<span class="chip">)에서 허용 path 를 모은다."""
    html = CANON.read_text(encoding='utf-8')
    allowed = set()
    for m in re.finditer(r'<span class="chip[^"]*">(.*?)</span>', html, re.S):
        allowed.update(paths_in(m.group(1)))
    if not allowed:
        sys.exit(f'정본에서 path 를 못 읽었다: {CANON}')
    return allowed


def main():
    allowed = load_canon()
    bad = []
    checked = 0
    for f in TARGETS:
        if f.parent.name == 'common':
            continue
        html = f.read_text(encoding='utf-8')
        for host in ('apps.apple.com', 'play.google.com'):
            for m in re.finditer(r'<a\b[^>]*' + re.escape(host) + r'.*?</a>', html, re.S):
                block = m.group(0)
                if '<svg' not in block:
                    continue
                checked += 1
                for d in paths_in(block):
                    if d not in allowed:
                        line = html[:m.start()].count('\n') + 1
                        rel = f.relative_to(ROOT)
                        bad.append(f'{rel}:{line}  {host}  {d[:64]}…')

    if bad:
        print(f'정본과 다른 마크 {len(bad)}건:')
        for b in bad:
            print('  ' + b)
        print(f'\n정본: {CANON.relative_to(ROOT)}')
        return 1

    print(f'스토어 배지 {checked}개 — 전부 정본과 같다.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
