// app.js
// 웹앱 URL
const ENDPOINT = 'https://script.google.com/macros/s/AKfycbxbulHRyY-c97OpsSUvC8yQeXFC82KrRM8bxaC-Y_jd5tnkRZAt_Y0Kh27ck15G-8pn/exec;

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
