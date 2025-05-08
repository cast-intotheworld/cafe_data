// app.js
document.getElementById('svgMap').addEventListener('load', () => {
  const svgDoc = document.getElementById('svgMap').contentDocument;

  svgDoc.querySelectorAll('circle[data-seat]').forEach(circle => {
    circle.addEventListener('click', () => {
      circle.classList.toggle('occupied');   // 초록 ↔ 빨강
    });
  });
});
