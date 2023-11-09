// HTML要素を取得
const changeBtn = document.getElementById('btn');
const h2Text = document.getElementById('text');
// クリックしたときのイベント処理
changeBtn.addEventListener('click', () => {
  const newText = h2Text;
  newText.textContent = 'ボタンがクリックされました';
})
