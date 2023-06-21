const listaPosts = [
    {
        id: 1,
        titulo: "Gato siames",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus erat sed consequat lobortis. Fusce eget accumsan diam. Nunc congue diam ligula, a viverra est sollicitudin eu. Proin nec eros non tellus dapibus bibendum. Phasellus non accumsan nunc. Proin gravida dui id ligula bibendum tincidunt",
        imgURL: "./img/gatito.jpg",
        button: "Clique aqui"

    },
    {
        id: 2,
        titulo: "Gato onça",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus erat sed consequat lobortis. Fusce eget accumsan diam. Nunc congue diam ligula, a viverra est sollicitudin eu. Proin nec eros non tellus dapibus bibendum. Phasellus non accumsan nunc. Proin gravida dui id ligula bibendum tincidunt",
        imgURL: "./img/images.jpg",
        button: "Clique aqui"
    },
    {
        id: 3,
        titulo: "Gato oncinha",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus erat sed consequat lobortis. Fusce eget accumsan diam. Nunc congue diam ligula, a viverra est sollicitudin eu. Proin nec eros non tellus dapibus bibendum. Phasellus non accumsan nunc. Proin gravida dui id ligula bibendum tincidunt",
        imgURL: "./img/enxoval-para-gato-Copia.jpg",
        button: "Clique aqui"
    }
];
let container = document.querySelector(".container");
const criacaoCards = () => {
    listaAnimais.forEach((animal) => {
        `    
        <div class="card">
        <img class = "card-img"src = ${animal.imgURL} />
        <h2 class="card-titulo">${animal.titulo}</h2>
        <p class= "card-descricao">${animal.descricao}</p>
        <button c= "card-button">${animal.button}</button>
        </div>
    `
        container.innerHTML += card;
    });


    const criacaoPosts = () => {
        listaPosts.forEach((post) => {
            let card =
                `
        <div class="card">
        <img class = "card-img"src =${post.imgURL} />
        <h2 class="card-titulo">${post.titulo}</h2>
        <p class= "card-descricao">${post.descricao}</p>
        <button class= "card-button">${post.button}</button>
        </div>
        `;
            container.innerHTML += card;
        });
    };

    window.onload = () => {
        criacaoPosts();

        let card = document.querySelectorAll(".card");

        card.forEach((card) => {
            card.addEventListener("mousemove", () => {
                card.style.backgroundColor = "greenyellow";

            });
            card.addEventListener("mouseout", () => {
                card.style.backgroundColor = "greenyellow";
            });

            card.addEventListener("mouseout", () => {
                card.style.backgroundColor = "transparent";
            });

            card.lastElementChild.addEventListener("click", (event) => {
                event.preventDefault();
                sessionStorsged.setItem("idAnimal")
            });
            window.location.href = "../adotar.html"
        })
    };
};



