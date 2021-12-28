const namesList = document.querySelector('.names');

document.addEventListener('click', e => {
  if (e.target.matches('#newName')) {
    let newName = '';
    newName += `${firstName()} ${middleInitial()} ${lastName()}`;
  
    const nameTemplate = document.querySelector('#nameListItem');
  
    const clone = nameTemplate.content.cloneNode(true);
  
    clone.querySelector('.name').textContent = newName;
    namesList.appendChild(clone);
  
    window.scrollTo(0, document.body.scrollHeight);  
  }
  else if (e.target.closest('.copyName')) {
    const parentLi = e.target.closest('.nameLi');
    const targetName = parentLi.querySelector('.name');

    try {
      navigator.clipboard.writeText(targetName.textContent);
    }
    catch (e) {
      let range = document.createRange();
      range.selectNode(targetName);
      window.getSelection().addRange(range);

      document.execCommand('copy');

      window.getSelection().removeRange(range);
    }

    parentLi.querySelector('.toast').classList.add('grow');
    setTimeout(() => {
      parentLi.querySelector('.toast').classList.remove('grow');
    }, 500);

  }
}, false);
