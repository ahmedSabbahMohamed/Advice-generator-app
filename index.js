let id = document.getElementById("advice-id"),
adviceTxt = document.getElementById("advice"),
btn = document.querySelector("button");

async function getAdvice () {
    await fetch("https://api.adviceslip.com/advice").then(result => {
        let data = result.json();
        return data;
    }).then(data => {
        id.innerHTML = data.slip.id;
        adviceTxt.innerHTML = data.slip.advice;
    });
}

getAdvice();

btn.addEventListener("click", _ => {
    getAdvice();
});