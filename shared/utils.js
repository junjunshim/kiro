/**
 * AI 학습 플랫폼 - 공통 유틸리티
 * 모든 팀원이 공유하는 파일입니다. 직접 수정하지 마세요.
 *
 * localStorage 네임스페이스 (모듈별 prefix):
 *   ailv:settings:   공통 설정 (글자 크기 등)
 *   ailv:digital:    디지털 활용 능력 진단 (팀원 A)
 *   ailv:diagnosis:  AI 활용 능력 진단 (팀원 B)
 *   ailv:education:  단계별 AI 기초 교육 (팀원 C)
 *   ailv:prompt:     프롬프트 작성 도우미 (팀원 D)
 *   ailv:simulation: 상황별 AI 활용 시뮬레이션 (팀원 E)
 *   ailv:group:      단체/팀 사용 기능 (팀원 A)
 */

const Utils = (() => {

  /** localStorage에 JSON 저장 */
  function saveData(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('[Utils] saveData 실패:', key, e);
    }
  }

  /** localStorage에서 JSON 로드 */
  function loadData(key, defaultValue = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : defaultValue;
    } catch (e) {
      console.error('[Utils] loadData 실패:', key, e);
      return defaultValue;
    }
  }

  /** 특정 모듈 prefix에 해당하는 키 모두 삭제 */
  function clearModuleData(prefix) {
    Object.keys(localStorage)
      .filter(k => k.startsWith(prefix))
      .forEach(k => localStorage.removeItem(k));
  }

  /** 전체 ailv: 데이터를 JSON 문자열로 내보내기 */
  function exportAllData() {
    const data = {};
    Object.keys(localStorage)
      .filter(k => k.startsWith('ailv:'))
      .forEach(k => { data[k] = localStorage.getItem(k); });
    return JSON.stringify(data, null, 2);
  }

  /** JSON 문자열을 읽어 ailv: 데이터 가져오기 */
  function importAllData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      Object.entries(data).forEach(([k, v]) => {
        if (k.startsWith('ailv:')) localStorage.setItem(k, v);
      });
      return true;
    } catch (e) {
      console.error('[Utils] importAllData 실패:', e);
      return false;
    }
  }

  /** 글자 크기 설정 적용 및 저장 */
  function applyFontSize(size) {
    const valid = ['small', 'medium', 'large'];
    const s = valid.includes(size) ? size : 'medium';
    document.documentElement.setAttribute('data-font-size', s);
    saveData('ailv:settings:fontSize', s);
  }

  /** 저장된 글자 크기 불러와 적용 */
  function restoreFontSize() {
    const size = loadData('ailv:settings:fontSize', 'medium');
    document.documentElement.setAttribute('data-font-size', size);
  }

  return { saveData, loadData, clearModuleData, exportAllData, importAllData, applyFontSize, restoreFontSize };
})();
