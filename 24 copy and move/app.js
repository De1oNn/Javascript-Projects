const copyText = document.querySelector('textarea[name=copyTxt');
const finalText = document.querySelector('textarea[name=finalTxt');
const moveBtn = document.querySelector('.moveBtn');
const copyBtn = document.querySelector('.copyBtn');
const output = document.querySelector('.output');

copyBtn.addEventListener('click', () => {
    let temp = copyText.value;
    copyToClipBOARD(temp);
})

moveBtn.addEventListener('click', () => {
    let temp = copyText.value;
    finalText.value = temp;
})

copyText.addEventListener('click', () => this.select());
finalText.addEventListener('click', () => this.select());


function copyToClipBOARD(str) {
    const outputContainer = document.querySelector('.output-container');
    const textarea = document.querySelector('textarea');
    textarea.value = str;
    outputContainer.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    outputContainer.removeChild(textarea);
    output.innerHTML = `<h3>Content Copied </h3>`;
    output.classList.add('added');
    setTimeout(() => {
        output.classList.toggle('added');
        output.textContent = "";
    }, 2000);
}