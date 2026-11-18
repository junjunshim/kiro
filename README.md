# 🌱 AI 배움터

취약 계층(노인, 디지털 소외 계층)을 위한 AI 학습 웹 플랫폼입니다.

## 📁 프로젝트 구조

```
project/
├── index.html                  # 메인 대시보드 (공통 - 수정 시 팀 협의)
├── digital-diagnosis.html      # 디지털 기초 진단 (팀원 A 담당)
├── diagnosis.html              # AI 활용 능력 진단 (팀원 B 담당)
├── education.html              # 단계별 AI 교육 (팀원 C 담당)
├── prompt-helper.html          # 프롬프트 작성 도우미 (팀원 D 담당)
├── simulation.html             # AI 활용 시뮬레이션 (팀원 E 담당)
├── group.html                  # 그룹 학습 (팀원 A 담당)
└── shared/
    ├── style.css               # 공통 스타일 ⚠️ 수정 금지
    ├── utils.js                # 공통 유틸리티 ⚠️ 수정 금지
    └── nav.js                  # 공통 네비게이션 ⚠️ 수정 금지
```

## 🌿 브랜치 전략

| 브랜치 | 담당 | 작업 파일 |
|--------|------|----------|
| `main` | 전체 | 공통 인프라 (`shared/`, `index.html`) |
| `feature/digital-diagnosis` | 팀원 A | `digital-diagnosis.html`, `group.html` |
| `feature/ai-diagnosis` | 팀원 B | `diagnosis.html` |
| `feature/education` | 팀원 C | `education.html` |
| `feature/prompt-helper` | 팀원 D | `prompt-helper.html` |
| `feature/simulation` | 팀원 E | `simulation.html` |

## 🚀 작업 시작 방법

### 1. 저장소 클론 & 최신화
```bash
git clone <저장소 URL>
cd ai-learning-for-vulnerable
git pull origin main
```

### 2. 내 브랜치로 이동
```bash
# 예: 팀원 B
git checkout feature/ai-diagnosis
```

### 3. 작업 후 커밋 & 푸시
```bash
git add diagnosis.html
git commit -m "feat: AI 활용 능력 진단 퀴즈 구현"
git push origin feature/ai-diagnosis
```

### 4. GitHub에서 main으로 PR 생성

## 💾 localStorage 네임스페이스

각 모듈이 사용하는 키 prefix (충돌 방지):

| 모듈 | Prefix | 주요 키 |
|------|--------|---------|
| 공통 설정 | `ailv:settings:` | `fontSize` |
| 디지털 진단 | `ailv:digital:` | `result` |
| AI 진단 | `ailv:diagnosis:` | `result`, `history` |
| AI 교육 | `ailv:education:` | `completed` |
| 프롬프트 | `ailv:prompt:` | `saved` |
| 시뮬레이션 | `ailv:simulation:` | `completed` |
| 그룹 | `ailv:group:` | `info`, `members` |

## 🛠 공통 함수 (shared/utils.js)

```js
Utils.saveData(key, value)        // localStorage 저장
Utils.loadData(key, defaultValue) // localStorage 로드
Utils.clearModuleData(prefix)     // 모듈 데이터 삭제
Utils.exportAllData()             // 전체 JSON 내보내기
Utils.importAllData(jsonString)   // 전체 JSON 가져오기
Utils.applyFontSize(size)         // 글자 크기 적용 ('small'|'medium'|'large')
Utils.restoreFontSize()           // 저장된 글자 크기 복원
```

## 📐 개발 가이드

- **내 파일만 수정하세요** — 다른 팀원의 HTML 파일을 직접 수정하지 마세요.
- **shared/ 는 수정 금지** — 공통 파일 변경이 필요하면 팀 전체와 협의하세요.
- **스타일은 `<style>` 블록에** — 각 HTML 파일 내 `<style>` 블록에 모듈 고유 스타일만 추가하세요.
- **localStorage prefix 준수** — 반드시 담당 모듈의 prefix를 사용하세요.

## 🎨 기술 스택

- HTML5 / CSS3 / JavaScript (바닐라, 프레임워크 없음)
- Google Fonts (Noto Sans KR)
- 외부 라이브러리 없음 · 백엔드 없음
- 데이터: localStorage + JSON 내보내기/가져오기
