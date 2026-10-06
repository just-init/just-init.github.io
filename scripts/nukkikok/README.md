# 누끼콕 소개 페이지 이미지

`static/nukkikok/`의 `original.webp`, `auto.webp`, `sticker.webp`를 만드는 원본과 스크립트.

```bash
python3 scripts/nukkikok/make_images.py
```

| 결과 | 만드는 법 |
|---|---|
| `original.webp` | `static/nukkikok/sample/baby1.png`을 줄인 것 |
| `auto.webp` | `source/auto_full.png` (Apple Vision 피사체 추출 결과, 부모님 다리 포함)을 줄인 것 |
| `sticker.webp` | `source/sticker_face.webp` (직접 만든 얼굴 스티커)를 줄인 것 |

- `--recut`: `cut.swift`로 원본 사진의 누끼를 다시 따서 `source/auto_full.png`를 새로 만든다. macOS 14 이상.
- `--body-sticker`: 얼굴 스티커 대신 `auto_full.png`에서 다리를 뺀 몸 전체 스티커를 쓴다 (`source/sticker_body.png`도 갱신).
- 이 폴더는 배포되지 않는다 (`static/`만 배포).
