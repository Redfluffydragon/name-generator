const noCapitalize = ['von', 'van', 'de', 'den', 'der', 'het', "'t"];

String.prototype.toTitleCase = function (str) {
  const string = this || str;
  return string
    .split(' ')
    .map(word => 
      noCapitalize.includes(word.toLowerCase()) ?
        word :
        word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
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
  return makeName(makeRandomLanguage());
}

function middleInitial() {
  const initials = ['A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'I.', 'J.', 'K.', 'L.', 'M.', 'N.', 'O.', 'P.', 'Q.', 'R.', 'S.', 'T.', 'U.', 'V.', 'W.', 'X.', 'Y.', 'Z.', 'of'];
  return initials[Math.floor(Math.random() * initials.length)];
}

const capitalPrefixes = ['mc', 'mac', 'mck', 'mic', 'mhic', "o'", "m'"];

function lastName() {
  let name = '';

  const prefixChance = Math.random();
  if (prefixChance > 0.5) {
    name += prefixes[Math.floor(Math.random() * prefixes.length)];
  }

  // name += randomLetters();
  if (capitalPrefixes.includes(name.toLowerCase())) {
    name += nouns[Math.floor(Math.random() * nouns.length)].toTitleCase();
  }
  else {
    name += nouns[Math.floor(Math.random() * nouns.length)];
  }

  if (Math.random() < 1 - prefixChance) {
    name += suffixes[Math.floor(Math.random() * suffixes.length)];
  }

  return name.toTitleCase();
}

function displayName(name) {
  const nameTemplate = document.querySelector('#nameListItem');

  const clone = nameTemplate.content.cloneNode(true);

  clone.querySelector('.name').textContent = name;
  document.querySelector('.names').appendChild(clone);
}