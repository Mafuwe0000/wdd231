//const getString = window.location.search;
//console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('business'));
console.log(myInfo.get('date'));





document.querySelector('#results').innerHTML = `<p> Welcome dear ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p> Your phone: ${myInfo.get('phone')}</p>
<p> Your email is ${myInfo.get('email')}</p>
`