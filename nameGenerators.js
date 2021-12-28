String.prototype.toTitleCase = function (str) {
  const string = this || str;
  return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function randomLetters(length) {
  if (!length) {
    length = Math.floor(Math.random() * 9) + 1;
  }
  
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  let string = '';
  for (let i = 0; i < length; i++) {
    string += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return string;
}

function firstName() {
  const name = randomLetters();

  return name.toTitleCase() + (name.length === 1 ? '.' : '');
}

function middleInitial() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)] + '.';
}

function lastName() {
  let name = '';

  const prefixChance = Math.random();
  if (prefixChance > 0.75) {
    name += prefixes[Math.floor(Math.random() * prefixes.length)];
  }

  // name += randomLetters();
  name += nouns[Math.floor(Math.random() * nouns.length)];


  if (Math.random() < 1 - prefixChance) {
    name += suffixes[Math.floor(Math.random() * suffixes.length)];
  }

  return name.toTitleCase();
}