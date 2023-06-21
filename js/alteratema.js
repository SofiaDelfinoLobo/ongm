let botaoTema = document.querySelector("#botaoTema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
    let body = document.querySelector("body");

    if (botaoTema.checked) {
        body.classList.add("body-dark");

    } else {
        body.classList.remove("body-dark");
    }
});
