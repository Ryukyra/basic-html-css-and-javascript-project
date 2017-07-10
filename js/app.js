
document.addEventListener('click', (e) => {
  if(e.target.tagName == 'BUTTON') {
    let img = document.getElementById('disappear');
    img.style.display = 'block';
  }
});
