const namesList = document.querySelector('.names');

const letters = 'abcdefghijklmnopqrstuvwxyz';

String.prototype.toTitleCase = function (str) {
  const string = this || str;
  return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function randomLetters(length) {
  if (!length) {
    length = Math.floor(Math.random() * 9) + 1;
  }

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

document.getElementById('newName').addEventListener('click', () => {
  let newName = '';
  newName += `${firstName()} ${middleInitial()} ${lastName()}`;

  const newNameElement = document.createElement('li');
  newNameElement.textContent = newName;
  namesList.appendChild(newNameElement);
  
}, false);

/**
 * Rrqpc uyyjzykny
Lykvy gnesson
Liwu zemhkmua
Cdepf wxwksens
Zjqvl ordjx
l
Cmsqh gczjeaoská
blicezuaaicz
If skjwk
Azqdhqq hyqhkeg
Yhkom oovo
Ntf Austrcxdcm
Bzsq zxhtjvy

Stoneworklu
Mlsel Mill
Yd MRNAange
Ge Feedbackidas
Uz Platypusci
Hffc Van Het moth
Kzlhox Sundayais
Nh Hazelnutko
Oqsfk Deleessay

Jsywcks Prestigeanu
X Collagen
Zujmwxgn Almondyshyn
Allunf Buttonappa
Xnemq Saladka
Vunr Name
Sjqfigf Macfootnote
Sgqca Deep
Ghsztk Dastambourkar
Zrsfw Courtchuk
Omqvnc Screameriauskas

H W. Delladaddy
Jf G. Tofuevska
Sptzg N. Migrationtskoy
Esknloil Y. Wormkyzy
Qywxtls S. Özlunchmeat
V F. Ornamentiak
Fltdbismk N. Familiarity
Zuu M. Voicesky
Adxpp E. Toolier
Jwtglt L. Xylophonekus
Cspfzrme Q. Setj
 */