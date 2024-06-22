class Omikuji{
    constructor() {
        this.html = this.getHtml(getRandomNumber(3)); 
    }
    getHtml(number) {
        let html = '';
        if (number < 1) html = 'goodFortune.html';
        else if (number >= 1 && number < 2) html = 'lucky.html';
        else html = 'badLuck.html';
        return html;
      }
}
const omikuji = new Omikuji();

function redirectToNewPage() {
    window.location.href = omikuji.html;
}

// 0~maxまでのランダムなを返す
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}