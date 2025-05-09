// app.js
// ────────────────────────────────
// 1) 카페 식별자(숫자·문자 아무거나)를 여기에 넣으세요
const cafeID = '001';

// 2) Google Apps Script 웹앱 URL을 따옴표 안에 정확히 붙여넣으세요
const ENDPOINT = 'https://script.google.com/macros/s/AKfycbxiFQx0AwmHEWEpFVwsYdcZQz_YnbIlkCe_53Fi6witgbylwJCvzyS78bcnYLRcMqxM/exec';
// ────────────────────────────────

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
          cafe: cafeID,            // Café ID (예: "001")
          seat: circle.id,         // 좌석 ID (예: "S03")
          occupied: !nowAvailable  // true = not available, false = available
        }),
        mode: 'no-cors'            // 응답 본문이 필요 없으니 CORS 무시
      });
    });
  });
});
