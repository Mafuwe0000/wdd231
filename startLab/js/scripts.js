const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");
//"show the dialog box" when the button is clicked
openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Apple contains 9 calories`
});

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Mango contains 23 calories`
});

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Kiwi contains 28 calories`
});

//"close the dialog box" when the button is clicked
closeButton.addEventListener('click', () => {
    dialogBox.close();
});