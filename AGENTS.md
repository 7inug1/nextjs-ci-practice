# 작업 규칙

1. 한 번에 한 단계만 진행하고 끝나면 멈춰서 확인받는다. 질문도 한 번에 하나만 한다.
   참고: [agents-md-snippets의 "One question at a time"](https://github.com/jasonku09/agents-md-snippets), [next-lesson 스킬](https://github.com/jasonku09/altitude-skills/tree/HEAD/skills/next-lesson)
2. 비밀값과 개인 정보(키, 이메일)는 코드와 커밋에 넣지 않는다. 저장소가 공개이고, AI 도구는 .env를 열지 않는다.
3. 첫 커밋 이후에는 main에 직접 push하지 않고 작업 브랜치에서 PR을 올린다.
4. 커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/)(feat: fix: test: docs: chore:)를 따라 한국어 한 줄, 명사형으로 끝낸다.
   본문은 소제목 아래 - 불릿으로 쓰고, 공동작성 trailer는 넣지 않는다.
5. AI에게 맡긴 작업은 목표, 완료 조건, 확인 방법을 docs/ai-log.md에 남긴다.
6. 워크플로(YAML)의 모든 줄은 "왜 있는지" 직접 설명할 수 있어야 한다.
