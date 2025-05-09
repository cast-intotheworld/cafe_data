// app.js
// 웹앱 URL
const ENDPOINT = 'https://script.google.com/macros/s/AKfycby3__gTPIkVHuZVKou5ZQrouaGVQRMQVQ4l0KkXgJtRJONsWZ-b34adp2Rtlw5CZM9Z/exec;

document.getElementById('svgMap').addEventListener('load', () => {
  const svgDoc = document.getElementById('svgMap').contentDocument;

  svgDoc.querySelectorAll('circle[data-seat]').forEach(circle => {
    // 기본 색상은 빨강(not available) ─ 클릭 시 초록(available)로 토글
  circle.addEventListener('click', () => {
    const nowAvailable = circle.classList.toggle('available'); // 초록 ↔ 빨강
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        seat: circle.id,
        occupied: !nowAvailable   // 빨강(true) / 초록(false)
      }),
      mode: 'no-cors'
    });
  });
});
