#!/usr/bin/env bash
#
# 작업 내용을 커밋하고 빌드 후 gh-pages 로 배포한다.
#
#   ./scripts/deploy.sh                 # 기본 커밋 메시지 사용
#   ./scripts/deploy.sh "feat: 소개 페이지 수정"
#
set -euo pipefail

cd "$(dirname "$0")/.."

COMMIT_MESSAGE="${1:-"chore: 배포 $(date '+%Y-%m-%d %H:%M:%S')"}"

step() {
  printf '\n\033[1;34m==> %s\033[0m\n' "$1"
}

step "변경 사항 확인"
if [ -n "$(git status --porcelain)" ]; then
  git status --short
  step "커밋: ${COMMIT_MESSAGE}"
  git add -A
  git commit -m "${COMMIT_MESSAGE}"
else
  echo "커밋할 변경 사항이 없습니다."
fi

step "npm run build"
npm run build

step "npm run generate"
npm run generate

step "npm run deploy"
npm run deploy

step "완료"
echo "현재 브랜치($(git rev-parse --abbrev-ref HEAD))는 아직 push 되지 않았습니다."
echo "필요하면 'git push' 를 실행하세요."
