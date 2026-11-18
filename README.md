# 🌱 AI 배움터

취약 계층(노인, 디지털 소외 계층)을 위한 AI 학습 웹 플랫폼입니다.  
4명의 팀원이 각자 독립 브랜치에서 담당 기능을 개발하고 `main`으로 합칩니다.

---

## 📋 목차

1. [프로젝트 구조](#-프로젝트-구조)
2. [팀원 역할 분담](#-팀원-역할-분담)
3. [실행 방법](#-실행-방법)
4. [작업 시작 가이드](#-작업-시작-가이드)
5. [커밋 메시지 규칙](#-커밋-메시지-규칙)
6. [협업 규칙](#-협업-규칙)
7. [테스트 체크리스트](#-테스트-체크리스트)
8. [localStorage 네임스페이스](#-localstorage-네임스페이스)
9. [공통 API](#-공통-api-sharedutilsjs)
10. [기술 스택](#-기술-스택)

---

## 📁 프로젝트 구조

```
ai-learning-for-vulnerable/
├── index.html                  # 메인 대시보드 (공통 — 수정 시 팀 협의)
├── digital-diagnosis.html      # 디지털 기초 진단       ← 팀원 A
├── diagnosis.html              # AI 활용 능력 진단      ← 팀원 B
├── education.html              # 단계별 AI 교육         ← 팀원 C
├── prompt-helper.html          # 프롬프트 작성 도우미   ← 팀원 D
├── simulation.html             # AI 활용 시뮬레이션     ← 팀원 E
├── group.html                  # 그룹 학습              ← 팀원 A
└── shared/
    ├── style.css               # 공통 스타일   ⚠️ 직접 수정 금지
    ├── utils.js                # 공통 유틸리티 ⚠️ 직접 수정 금지
    └── nav.js                  # 공통 네비게이션 ⚠️ 직접 수정 금지
```

---

## 👥 팀원 역할 분담

| 팀원 | 브랜치 | 담당 파일 | 기능 |
|------|--------|----------|------|
| 팀원 A | `feature/digital-diagnosis` | `digital-diagnosis.html`<br>`group.html` | 디지털 기초 진단 (0단계)<br>그룹 학습 |
| 팀원 B | `feature/ai-diagnosis` | `diagnosis.html` | AI 활용 능력 진단 |
| 팀원 C | `feature/education` | `education.html` | 단계별 AI 기초 교육 |
| 팀원 D | `feature/prompt-helper` | `prompt-helper.html` | 프롬프트 작성 도우미 |
| 팀원 E | `feature/simulation` | `simulation.html` | AI 활용 시뮬레이션 |

---

## 🚀 실행 방법

이 프로젝트는 백엔드가 없는 순수 HTML/CSS/JS 프로젝트입니다.  
브라우저에서 직접 열거나, 로컬 서버를 띄워서 확인합니다.

### 방법 1 — VS Code Live Server (권장)

1. VS Code에서 프로젝트 폴더를 엽니다.
2. 확장 프로그램 **Live Server** (ritwickdey.LiveServer) 를 설치합니다.
3. `index.html` 파일에서 우클릭 → **Open with Live Server** 클릭.
4. 브라우저에서 `http://127.0.0.1:5500/index.html` 로 자동 열립니다.

### 방법 2 — Python 내장 서버

```bash
# Python 3
python -m http.server 5500

# 브라우저에서 열기
http://localhost:5500/index.html
```

### 방법 3 — Node.js serve

```bash
npx serve .
# 브라우저에서 출력된 주소로 접속
```

> **주의:** `file://` 프로토콜로 직접 열면 일부 브라우저에서 `shared/` 파일 로딩이 막힐 수 있습니다.  
> 반드시 로컬 서버를 통해 `http://` 로 접속하세요.

---

## 🌿 작업 시작 가이드

### 1단계 — 저장소 클론

```bash
git clone <저장소 URL>
cd ai-learning-for-vulnerable
```

### 2단계 — 내 브랜치로 이동

```bash
# 브랜치가 이미 원격에 있는 경우
git checkout feature/ai-diagnosis          # 팀원 B 예시
git pull origin feature/ai-diagnosis       # 최신 상태 동기화

# 처음 받은 경우 (원격 브랜치 추적)
git checkout -b feature/ai-diagnosis origin/feature/ai-diagnosis
```

### 3단계 — main 최신 변경 사항 반영 (작업 전 매일 실행)

```bash
git fetch origin
git merge origin/main
# 충돌이 발생하면 아래 충돌 해결 절차 참고
```

### 4단계 — 작업 & 커밋

```bash
# 담당 파일만 스테이징
git add diagnosis.html

# 커밋 (아래 커밋 메시지 규칙 참고)
git commit -m "feat: AI 활용 능력 진단 퀴즈 10문항 추가"

# 원격 푸시
git push origin feature/ai-diagnosis
```

### 5단계 — Pull Request 생성

1. GitHub 저장소 페이지에서 **Compare & pull request** 클릭.
2. base: `main` ← compare: `feature/ai-diagnosis` 확인.
3. PR 제목: `[팀원 B] AI 활용 능력 진단 구현`
4. PR 본문에 구현 내용, 테스트 방법, 스크린샷(선택) 작성.
5. 팀원 1명 이상의 리뷰 승인 후 Merge.

### ⚠️ 충돌 발생 시 해결 절차

```bash
# 충돌 파일 확인
git status

# 충돌 마커(<<<<<<<, =======, >>>>>>>) 직접 편집하여 해결
# 해결 후
git add <충돌파일>
git commit -m "fix: main 머지 충돌 해결"
```

> 충돌이 `shared/` 파일에서 발생하면 혼자 해결하지 말고 팀 채팅에 공유하세요.

---

## 📝 커밋 메시지 규칙

```
<타입>: <변경 내용 요약>
```

| 타입 | 사용 시점 |
|------|----------|
| `feat` | 새 기능 추가 |
| `fix` | 버그 수정 |
| `style` | 스타일(CSS) 변경, 코드 포맷 |
| `refactor` | 기능 변화 없는 코드 구조 개선 |
| `docs` | README 등 문서 수정 |
| `chore` | 빌드 설정, 기타 잡무 |

**예시**

```bash
feat: 디지털 기초 진단 10문항 퀴즈 추가
fix: 점수 계산 오류 수정
style: 버튼 색상 접근성 기준에 맞게 조정
docs: README 테스트 항목 보완
```

---

## 🤝 협업 규칙

### 파일 소유권
- **내 담당 HTML 파일만 수정합니다.** 다른 팀원의 파일을 직접 고치지 마세요.
- 다른 팀원 파일에 문제가 있으면 이슈 또는 PR 코멘트로 알립니다.

### shared/ 파일 수정 금지
- `shared/style.css`, `shared/utils.js`, `shared/nav.js` 는 직접 수정하지 않습니다.
- 공통 파일 변경이 꼭 필요하면 팀 전체 합의 후 담당자가 `main` 에 직접 반영합니다.

### 스타일 작성 위치
- 모듈 고유 CSS는 각 HTML 파일 내 `<style>` 블록에만 작성합니다.
- `shared/style.css` 의 CSS 변수(`--color-primary` 등)를 최대한 활용합니다.

### localStorage prefix 준수
- 반드시 담당 모듈의 prefix만 사용합니다. (아래 표 참고)
- 다른 모듈의 key를 읽거나 쓰지 않습니다.

### PR 규칙
- PR은 **기능 단위**로 작게 만듭니다. 한 번에 모든 것을 올리지 않습니다.
- main 머지 전 최소 1명이 코드 리뷰합니다.
- 리뷰어는 48시간 이내에 응답합니다.

### 소통
- 작업 중 막히면 혼자 오래 고민하지 말고 팀 채팅에 질문합니다.
- `shared/` 변경, 구조적 변경은 반드시 사전에 팀 전체에 공유합니다.

---

## ✅ 테스트 체크리스트

빌드 도구가 없는 프로젝트이므로 브라우저에서 직접 확인합니다.  
PR 생성 전 아래 항목을 본인 화면에서 직접 체크하세요.

### 공통 (모든 페이지)

- [ ] 로컬 서버(`http://`)로 열었을 때 오류 없이 로드된다
- [ ] 브라우저 콘솔(F12)에 JavaScript 오류가 없다
- [ ] 네비게이션 바가 정상 표시되고 각 링크가 올바른 페이지로 이동한다
- [ ] 글자 크기 조절 버튼(가 / 가 / 가)이 동작하고 페이지를 새로고침해도 유지된다
- [ ] 모바일 화면(360px 너비)에서 햄버거 메뉴가 열리고 닫힌다
- [ ] 모든 버튼의 클릭 영역이 충분히 크다 (손가락으로 누르기 쉬운 크기)

### 기능별 체크리스트

#### 팀원 A — 디지털 기초 진단 (`digital-diagnosis.html`)
- [ ] 퀴즈 문항이 8개 이상 표시된다
- [ ] 모든 문항에 답한 뒤 결과가 표시된다
- [ ] 결과가 "디지털 기초 필요" 또는 "AI 학습 준비 완료" 중 하나로 나온다
- [ ] 결과 페이지에서 `index.html` 대시보드로 돌아가는 버튼이 있다
- [ ] 브라우저 개발자 도구 → Application → Local Storage 에서 `ailv:digital:result` 키가 저장된다
- [ ] 페이지를 새로고침해도 이전 결과가 유지된다

#### 팀원 A — 그룹 학습 (`group.html`)
- [ ] 운영자 모드에서 6자리 그룹 코드가 생성된다
- [ ] 참여자 모드에서 그룹 코드와 닉네임 입력 후 참여가 된다
- [ ] `ailv:group:info` 키에 그룹 정보가 저장된다
- [ ] JSON 가져오기로 구성원 현황을 불러올 수 있다

#### 팀원 B — AI 활용 능력 진단 (`diagnosis.html`)
- [ ] 퀴즈 문항이 10개 이상 표시된다
- [ ] 결과가 초급 / 중급 / 고급 중 하나로 나온다
- [ ] 단계에 맞는 추천 학습 경로가 표시된다
- [ ] `ailv:diagnosis:result` 키에 `{ level, score, date }` 형태로 저장된다
- [ ] 재응시 버튼이 있고 이전 결과와 비교가 표시된다

#### 팀원 C — 단계별 AI 교육 (`education.html`)
- [ ] 초급 / 중급 / 고급 탭(또는 메뉴)이 표시된다
- [ ] 각 단계에 레슨이 3개 이상 있다
- [ ] 레슨을 완료하면 체크 표시가 된다
- [ ] `ailv:education:completed` 배열에 완료 레슨 ID가 저장된다
- [ ] 페이지 새로고침 후 완료 상태가 유지된다
- [ ] 단계 간 자유롭게 이동할 수 있다

#### 팀원 D — 프롬프트 작성 도우미 (`prompt-helper.html`)
- [ ] 좋은/나쁜 프롬프트 예시가 5쌍 이상 표시된다
- [ ] 초안 입력 후 개선 피드백이 표시된다
- [ ] 템플릿이 3가지 이상 선택 가능하다
- [ ] 클립보드 복사 버튼이 동작한다 (복사 후 안내 메시지 표시)
- [ ] `ailv:prompt:saved` 에 저장된 프롬프트가 기록된다

#### 팀원 E — AI 활용 시뮬레이션 (`simulation.html`)
- [ ] 시나리오가 5가지 이상 목록으로 표시된다
- [ ] 시나리오 선택 후 채팅 UI가 열린다
- [ ] 사용자가 메시지를 입력하면 AI 목업 응답이 표시된다
- [ ] 시나리오당 3턴 이상 대화가 가능하다
- [ ] 시나리오 완료 후 `ailv:simulation:completed` 에 저장된다
- [ ] 완료된 시나리오에 완료 표시가 된다

### 크로스 브라우저 최소 확인

| 브라우저 | 버전 | 확인 |
|---------|------|------|
| Chrome | 최신 | [ ] |
| Edge | 최신 | [ ] |
| 모바일 Safari (iOS) | 최신 | [ ] |

---

## 💾 localStorage 네임스페이스

각 모듈이 사용하는 키 prefix입니다. **다른 모듈의 prefix를 사용하면 안 됩니다.**

| 모듈 | Prefix | 주요 키 | 담당 |
|------|--------|---------|------|
| 공통 설정 | `ailv:settings:` | `fontSize` | 공통 |
| 디지털 진단 | `ailv:digital:` | `result` | 팀원 A |
| AI 진단 | `ailv:diagnosis:` | `result`, `history` | 팀원 B |
| AI 교육 | `ailv:education:` | `completed` | 팀원 C |
| 프롬프트 | `ailv:prompt:` | `saved` | 팀원 D |
| 시뮬레이션 | `ailv:simulation:` | `completed` | 팀원 E |
| 그룹 | `ailv:group:` | `info`, `members` | 팀원 A |

**데이터 저장 예시:**
```js
// 올바른 예 — 담당 prefix 사용
Utils.saveData('ailv:diagnosis:result', { level: '초급', score: 60, date: new Date().toISOString() });

// 잘못된 예 — 다른 모듈 prefix 사용 금지
Utils.saveData('ailv:education:result', ...); // ❌ 팀원 B가 education 키를 쓰면 안 됨
```

---

## 🛠 공통 API (`shared/utils.js`)

모든 페이지에서 `shared/utils.js` 를 불러오면 `Utils` 객체를 사용할 수 있습니다.

```js
// 데이터 저장
Utils.saveData('ailv:diagnosis:result', { level: '초급', score: 60 });

// 데이터 불러오기 (없으면 두 번째 인자 반환)
const result = Utils.loadData('ailv:diagnosis:result', null);

// 모듈 데이터 전체 삭제
Utils.clearModuleData('ailv:diagnosis:');

// 전체 데이터 JSON 문자열로 내보내기
const json = Utils.exportAllData();

// JSON 문자열 가져와서 복원
const ok = Utils.importAllData(jsonString); // 성공 시 true

// 글자 크기 적용 ('small' | 'medium' | 'large')
Utils.applyFontSize('large');

// 저장된 글자 크기 복원 (페이지 로드 시 호출)
Utils.restoreFontSize();
```

**모든 페이지 최소 초기화 코드:**
```js
Utils.restoreFontSize(); // 글자 크기 복원
Nav.render();            // 네비게이션 삽입
```

---

## 🎨 기술 스택

| 항목 | 내용 |
|------|------|
| 마크업 | HTML5 |
| 스타일 | CSS3 (CSS 변수, Flexbox, Grid) |
| 스크립트 | JavaScript ES6+ (바닐라, 프레임워크 없음) |
| 폰트 | Google Fonts — Noto Sans KR |
| 데이터 저장 | localStorage + JSON 내보내기/가져오기 |
| 외부 라이브러리 | 없음 |
| 백엔드 | 없음 (완전 프론트엔드) |
| 빌드 도구 | 없음 (직접 실행) |
