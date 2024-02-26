let id = document.getElementById("advice-id"),
adviceTxt = document.getElementById("advice-text");
async function getAdvice () {
    adviceTxt.innerHTML = "Loading..."
        try {
          await fetch("https://api.adviceslip.com/advice")
            .then((result) => {
              let data = result.json();
              return data;
            })
            .then((data) => {
              id.innerHTML = data.slip.id;
              adviceTxt.innerHTML = data.slip.advice;
            });
        } catch (err) {
          console.log("Error fething advice");
          adviceTxt.innerHTML = "Error loading advice";
        }
}

getAdvice();
