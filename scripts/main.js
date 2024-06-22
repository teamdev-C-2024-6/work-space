document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button.btn-primary');
    
    button.addEventListener('click', function() {
      alert('ボタンがクリックされました！');
    });
  });