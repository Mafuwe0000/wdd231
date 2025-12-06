//const getString = window.location.search;
//console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('email'));






document.querySelector('#results').innerHTML = `<p> Thank You ${myInfo.get('first')} ${myInfo.get('last')}, your message has been received.</p>
<p> Your email is ${myInfo.get('email')}</p>
`