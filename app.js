// app.js
// 웹앱 URL을 아래 따옴표 안에 붙여넣으세요.
const ENDPOINT = 'https://script.google.com/macros/s/AKfycbxiFQx0AwmHEWEpFVwsYdcZQz_YnbIlkCe_53Fi6witgbylwJCvzyS78bcnYLRcMqxM/exec';

document.getElementById('svgMap').addEventListener('load', () => {
  const svgDoc = document.getElementById('svgMap').contentDocument;

  svgDoc.querySelectorAll('circle[data-seat]').forEach(circle => {
    circle.addEventListener('click', () => {
      // 빨강(.seat) ↔ 초록(.available) 토글
      const nowAvailable = circle.classList.toggle('available');

      // Google Apps Script로 상태 전송
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seat: circle.id,          // 예: "S03"
          occupied: !nowAvailable   // 빨강 = not available
        }),
        mode: 'no-cors'
      });
    });
  });
});
