// app.js
// 웹앱 URL을 아래 따옴표 안에 붙여넣으세요.
const ENDPOINT = 'https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXX/exec';

document.getElementById('svgMap').addEventListener('load', () => {
  const svgDoc = document.getElementById('svgMap').contentDocument;

  svgDoc.querySelectorAll('circle[data-seat]').forEach(circle => {
    circle.addEventListener('click', () => {
      // 색상 토글 (초록 ↔ 빨강)
      const nowOccupied = circle.classList.toggle('occupied');

      // Google Apps Script로 상태 전송
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seat: circle.id,           // 예: "S03"
          occupied: nowOccupied      // true = not available
        }),
        mode: 'no-cors'              // 응답 필요 없으므로 CORS 무시
      });
    });
  });
});
