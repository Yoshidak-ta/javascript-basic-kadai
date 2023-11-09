// HTML要素の取得
const Text = document.getElementById('text');
const Btn = document.getElementById('btn');
// ボタンクリックで2秒後に入れ替え
  Btn.addEventListener('click', () => {
    setTimeout(() => {
      Text.textContent = 'ボタンをクリックしました';
    }, 2000);
  })
