/**
 * AI 학습 플랫폼 - 공통 네비게이션
 * 모든 팀원이 공유하는 파일입니다. 직접 수정하지 마세요.
 *
 * 사용법: 각 HTML 파일에 <div id="nav-container"></div> 를 두고
 *         Nav.render() 를 호출하면 자동으로 네비게이션이 삽입됩니다.
 */

const Nav = (() => {

  const LINKS = [
    { href: 'index.html',             label: '🏠 홈' },
    { href: 'digital-diagnosis.html', label: '📱 디지털 진단' },
    { href: 'diagnosis.html',         label: '🤖 AI 진단' },
    { href: 'education.html',         label: '📚 AI 교육' },
    { href: 'prompt-helper.html',     label: '✏️ 프롬프트' },
    { href: 'simulation.html',        label: '🎮 시뮬레이션' },
    { href: 'group.html',             label: '👥 그룹' },
  ];

  function render() {
    const container = document.getElementById('nav-container');
    if (!container) return;

    const currentPage = location.pathname.split('/').pop() || 'index.html';

    container.innerHTML = `
      <nav class="site-nav" role="navigation" aria-label="주 메뉴">
        <div class="container nav-inner">
          <a href="index.html" class="nav-logo">AI 배움터</a>
          <button class="nav-toggle" aria-label="메뉴 열기" onclick="Nav.toggleMenu()">☰</button>
          <ul class="nav-links" id="nav-links">
            ${LINKS.map(l => `
              <li>
                <a href="${l.href}"
                   class="nav-link${currentPage === l.href ? ' nav-link--active' : ''}"
                   ${currentPage === l.href ? 'aria-current="page"' : ''}>
                  ${l.label}
                </a>
              </li>`).join('')}
          </ul>
          <div class="nav-font-ctrl" aria-label="글자 크기 조절">
            <button class="btn btn-secondary nav-font-btn" onclick="Utils.applyFontSize('small')"  title="글자 작게" style="font-size:13px;">가</button>
            <button class="btn btn-secondary nav-font-btn" onclick="Utils.applyFontSize('medium')" title="글자 보통" style="font-size:17px;">가</button>
            <button class="btn btn-secondary nav-font-btn" onclick="Utils.applyFontSize('large')"  title="글자 크게" style="font-size:21px;">가</button>
          </div>
        </div>
      </nav>
      <style>
        .site-nav { background: #1e293b; color: #fff; }
        .nav-inner { display: flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1rem; flex-wrap: wrap; }
        .nav-logo { color: #fff; font-size: 1.1rem; font-weight: 700; text-decoration: none; margin-right: auto; white-space: nowrap; }
        .nav-links { list-style: none; display: flex; gap: 0.2rem; flex-wrap: wrap; }
        .nav-link { color: #cbd5e1; text-decoration: none; padding: 0.45rem 0.65rem; border-radius: 8px; font-size: 0.88rem; min-height: 44px; display: inline-flex; align-items: center; white-space: nowrap; }
        .nav-link:hover { background: #334155; color: #fff; }
        .nav-link--active { background: var(--color-primary); color: #fff; }
        .nav-font-ctrl { display: flex; gap: 0.25rem; }
        .nav-font-btn { min-height: 36px !important; min-width: 36px !important; padding: 0 0.5rem !important; }
        .nav-toggle { display: none; background: none; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; min-height: 44px; min-width: 44px; }
        @media (max-width: 700px) {
          .nav-links { display: none; width: 100%; flex-direction: column; background: #0f172a; padding: 0.5rem; border-radius: 8px; margin-top: 0.4rem; }
          .nav-links.open { display: flex; }
          .nav-toggle { display: inline-flex; align-items: center; justify-content: center; }
        }
      </style>
    `;
  }

  function toggleMenu() {
    const ul = document.getElementById('nav-links');
    if (ul) ul.classList.toggle('open');
  }

  return { render, toggleMenu };
})();
