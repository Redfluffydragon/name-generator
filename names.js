const copyAllBtn = document.getElementById('copyAllBtn');

const allNames = JSON.parse(sessionStorage.getItem('names')) || [];

window.addEventListener('load', () => {
  if (allNames.length) {
    allNames.forEach(name => {
      displayName(name);
    });
  }
}, false);

document.addEventListener('click', e => {
  if (e.target.matches('#newName')) {
    let newName = '';
    newName += `${firstName()} ${middleInitial()} ${lastName()}`;

    displayName(newName);

    window.scrollTo(0, document.body.scrollHeight);

    allNames.push(newName);
    sessionStorage.setItem('names', JSON.stringify(allNames));
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
  else if (e.target.matches('#copyAllBtn')) {
    try {
      navigator.clipboard.writeText(allNames.join('\n'));
    }
    catch (e) {
      let range = document.createRange();
      range.selectNode(targetName);
      window.getSelection().addRange(range);

      document.execCommand('copy');

      window.getSelection().removeRange(range);
    }

    copyAllBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyAllBtn.textContent = 'Copy all';
    }, 500);
  }
  else if (e.target.matches('#clearAllBtn')) {
    if (confirm('Are you sure you want to clear all names?')) {
      allNames.length = 0;
      sessionStorage.removeItem('names');
      document.querySelector('.names').innerHTML = '';
    }
  }
}, false);
