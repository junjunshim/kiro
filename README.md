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
10. [공통 디자인 규칙](#-공통-디자인-규칙)
11. [기술 스택](#-기술-스택)

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

## 🎨 공통 디자인 규칙

모든 페이지는 `shared/style.css` 에 정의된 CSS 변수와 공통 클래스를 기준으로 만들어야 합니다.  
팀원마다 다른 색상·글꼴·간격을 직접 하드코딩하면 전체 디자인이 통일되지 않습니다.

---

### 색상

**CSS 변수를 그대로 사용하고, 색상 코드를 직접 쓰지 마세요.**

| 변수 | 값 | 용도 |
|------|----|------|
| `--color-primary` | `#2563eb` | 주요 버튼, 링크, 강조 |
| `--color-primary-dark` | `#1d4ed8` | 버튼 hover 상태 |
| `--color-secondary` | `#f59e0b` | 보조 강조, 뱃지 |
| `--color-bg` | `#f8fafc` | 페이지 배경 |
| `--color-surface` | `#ffffff` | 카드·패널 배경 |
| `--color-text` | `#1e293b` | 본문 텍스트 |
| `--color-text-muted` | `#64748b` | 설명·보조 텍스트 |
| `--color-border` | `#e2e8f0` | 구분선, 비활성 버튼 배경 |
| `--color-success` | `#16a34a` | 완료·성공 상태 |
| `--color-warning` | `#d97706` | 주의·경고 상태 |
| `--color-danger` | `#dc2626` | 오류·삭제·위험 |

```css
/* ✅ 올바른 사용 */
color: var(--color-primary);
background: var(--color-surface);

/* ❌ 하드코딩 금지 */
color: #2563eb;
background: white;
```

---

### 글꼴 크기

글꼴 크기도 변수로 관리합니다. 사용자가 글자 크기 조절 버튼을 누르면 변수값이 자동으로 바뀝니다.  
`px` 값을 직접 쓰면 글자 크기 조절 기능이 동작하지 않습니다.

| 변수 | 기본값 | 용도 |
|------|--------|------|
| `--font-size-sm` | `16px` | 보조 텍스트, 뱃지, 레이블 |
| `--font-size-md` | `18px` | 본문, 버튼 텍스트 (기본값) |
| `--font-size-lg` | `22px` | 소제목, 카드 제목 |
| `--font-size-xl` | `28px` | 페이지 제목 (`.page-header h1`) |
| `--font-size-2xl` | `36px` | 히어로 섹션 대제목 |

```css
/* ✅ 올바른 사용 */
font-size: var(--font-size-md);
font-size: var(--font-size-lg);

/* ❌ px 직접 지정 금지 */
font-size: 18px;
font-size: 1.2rem;
```

---

### 간격·모양

| 변수 | 값 | 용도 |
|------|----|------|
| `--radius` | `12px` | 카드·버튼·입력 필드 모서리 |
| `--shadow` | `0 2px 8px rgba(0,0,0,0.08)` | 카드 그림자 |
| `--touch-target` | `48px` | 버튼 최소 높이·너비 |
| `--transition` | `0.2s ease` | hover·포커스 전환 효과 |

---

### 공통 클래스

새 요소를 만들기 전에 아래 클래스를 먼저 활용하세요. 같은 모양이 필요할 때 직접 CSS를 작성하면 중복이 생깁니다.

#### 버튼 (`.btn`)

모든 버튼은 `.btn` 에 색상 변형 클래스를 조합해 사용합니다.  
`min-height: 48px` 이 적용되어 있어 접근성 기준을 자동으로 충족합니다.

```html
<button class="btn btn-primary">시작하기</button>
<button class="btn btn-secondary">취소</button>
<button class="btn btn-success">완료</button>
<button class="btn btn-danger">삭제</button>
```

| 클래스 | 배경색 | 텍스트 | 용도 |
|--------|--------|--------|------|
| `btn-primary` | `#2563eb` | 흰색 | 주요 액션 |
| `btn-secondary` | `#e2e8f0` | 본문색 | 보조 액션, 취소 |
| `btn-success` | `#16a34a` | 흰색 | 완료·확인 |
| `btn-danger` | `#dc2626` | 흰색 | 삭제·위험 액션 |

#### 카드 (`.card`)

콘텐츠 그룹을 감싸는 흰색 패널입니다.

```html
<div class="card">
  콘텐츠
</div>
```

#### 컨테이너 (`.container`)

콘텐츠 최대 너비(900px)와 좌우 여백을 잡아줍니다. `<main>` 바로 안쪽에 감싸세요.

```html
<main>
  <div class="container">
    <!-- 페이지 콘텐츠 -->
  </div>
</main>
```

#### 페이지 헤더 (`.page-header`)

페이지 상단 제목 + 설명 영역입니다. 모든 기능 페이지에서 동일하게 사용합니다.

```html
<div class="page-header">
  <h1>🤖 AI 활용 능력 진단</h1>
  <p>현재 AI 이해도를 측정하고 나에게 맞는 학습 경로를 추천받으세요.</p>
</div>
```

#### 진행 바 (`.progress-bar`)

```html
<div class="progress-bar">
  <div class="progress-bar__fill" style="width: 60%;"></div>
</div>
```

#### 뱃지 (`.badge`)

단계·상태·레벨 표시에 사용합니다.

```html
<span class="badge badge-blue">초급</span>
<span class="badge badge-green">완료</span>
<span class="badge badge-yellow">진행 중</span>
<span class="badge badge-red">미완료</span>
```

---

### 접근성 필수 규칙

취약 계층 사용자를 위한 항목입니다. 모든 팀원이 반드시 지켜야 합니다.

| 항목 | 기준 | 확인 방법 |
|------|------|----------|
| 버튼 최소 크기 | 너비·높이 각 48px 이상 | `.btn` 클래스 사용 시 자동 충족 |
| 명암비 | 텍스트와 배경 간 4.5:1 이상 | CSS 변수 조합 사용 시 자동 충족 |
| 글꼴 크기 | 본문 최소 18px | `--font-size-md` 이상 사용 |
| 포커스 표시 | 키보드 이동 시 외곽선 표시 | `:focus-visible` 전역 적용됨 |
| 대체 텍스트 | 이미지에 `alt` 속성 필수 | 직접 확인 |
| 버튼 레이블 | 아이콘만 있는 버튼에 `aria-label` 필수 | 직접 확인 |
| 폼 레이블 | 모든 `<input>` 에 연결된 `<label>` 필수 | 직접 확인 |

```html
<!-- ✅ 올바른 예 -->
<button class="btn btn-primary" aria-label="퀴즈 시작">▶</button>
<img src="ai-example.png" alt="AI가 질문에 답변하는 화면 예시">
<label for="nickname">닉네임</label>
<input id="nickname" type="text" name="nickname">

<!-- ❌ 잘못된 예 -->
<button style="width:30px; height:30px;">▶</button>  <!-- 너무 작음 -->
<img src="ai-example.png">                           <!-- alt 없음 -->
<input type="text" placeholder="닉네임 입력">         <!-- label 없음 -->
```

---

### 반응형 기준점

| 구간 | 범위 | 주요 고려사항 |
|------|------|-------------|
| 모바일 | ~ 600px | 1열 레이아웃, 패딩 축소, 햄버거 메뉴 |
| 태블릿 | 601px ~ 900px | 2열 그리드 가능 |
| 데스크탑 | 901px ~ | 최대 너비 900px (`.container`) |

```css
/* 모듈 고유 반응형 — 각 HTML <style> 블록에 작성 */
@media (max-width: 600px) {
  .my-grid { grid-template-columns: 1fr; }
}
```

---

### 페이지 기본 구조 템플릿

새 기능 페이지를 작성할 때 아래 구조를 그대로 복사해서 시작하세요.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>페이지 제목 - AI 배움터</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="shared/style.css">
  <style>
    /* 이 페이지 전용 스타일만 여기에 작성 */
    /* shared/style.css 의 변수를 최대한 활용할 것 */
  </style>
</head>
<body>
  <div id="nav-container"></div>

  <main>
    <div class="container">

      <div class="page-header">
        <h1>이모지 페이지 제목</h1>
        <p>이 페이지에 대한 한두 줄 설명.</p>
      </div>

      <!-- 콘텐츠 -->

    </div>
  </main>

  <script src="shared/utils.js"></script>
  <script src="shared/nav.js"></script>
  <script>
    Utils.restoreFontSize(); // 반드시 호출
    Nav.render();            // 반드시 호출

    // 페이지 고유 JavaScript
  </script>
</body>
</html>
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
