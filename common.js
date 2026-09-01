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

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
