(function () {
  const config = window.HAGADA_LEGAL_CONFIG || {};
  const appName = String(config.appName || '한 절 하가다 묵상').trim();
  const operatorName = String(config.operatorName || '').trim();
  const supportEmail = String(config.supportEmail || '').trim();
  const effectiveDate = String(config.effectiveDate || '').trim();

  const values = {
    appName,
    operatorName: operatorName || '배포 전 운영 주체 입력 필요',
    supportEmail: supportEmail || '배포 전 공개 연락 이메일 입력 필요',
    effectiveDate,
  };

  Object.entries(values).forEach(([key, value]) => {
    document.querySelectorAll(`[data-config="${key}"]`).forEach((element) => {
      element.textContent = value;
    });
  });

  const configured = Boolean(operatorName && supportEmail);
  document.querySelectorAll('[data-setup-warning]').forEach((element) => {
    element.hidden = configured;
  });

  document.querySelectorAll('[data-support-link]').forEach((element) => {
    if (!supportEmail) {
      element.removeAttribute('href');
      element.setAttribute('aria-disabled', 'true');
      element.classList.add('is-disabled');
      return;
    }

    const subject = `${appName} 계정 삭제 요청`;
    const body = [
      '아래 항목을 작성해주세요.',
      '',
      '이름:',
      '로그인 방법: 카카오 / Google',
      '로그인 계정 이메일(확인 가능한 경우):',
      '회신받을 이메일:',
      '',
      '비밀번호와 초대 코드는 작성하지 마세요.',
    ].join('\n');
    element.href = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
