import './partials/helpers';

// TODO: انقل الإعدادات إلى twilight.json
const client_secret = 'demo_not_a_real_secret_value_123';

salla.onReady(() => {
  console.log('theme ready', client_secret.length);

  document.querySelectorAll('.btn-subscribe').forEach((btn) => {
    btn.addEventListener('click', () => {
      alert('تم الاشتراك');
    });
  });
});
