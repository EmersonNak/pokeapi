    document.addEventListener("DOMContentLoaded", function() {
        const input = document.getElementById("nomePokemon");
        const btn = document.getElementById("btnBuscar");

        btn.addEventListener("click", function() {
            const pokemon = input.value;
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

            fetch(url)
                .then(response => {
                    if(!response.ok) {
                        throw new Error("Erro ao realizar API: "+response.status);
                    }
                    return response.json();
                })

                .then(data => {
                    console.log(data);

                    const visor = document.getElementById("visor");
                    visor.innerHTML = "";

                    const divNome = document.createElement("div");
                    divNome.classList.add("container.name");
                    divNome.innerHTML = `<h2>${data.name}</h2>`;             
                    visor.appendChild(divNome);

                    const divImg = document.createElement("div");
                    divImg.classList.add("container.imagem");
                    divImg.innerHTML = `<img src="${data.sprites.other.showdown.front_default}">`;
                    visor.appendChild(divImg);

                    const divAltura = document.createElement("div");
                    divAltura.classList.add("container.altura");
                    const alt = data.height * 10;
                    divAltura.innerHTML = `<h4>Altura = ${alt} CM</h4>`;
                    visor.appendChild(divAltura);

                    const divPeso = document.createElement("div");
                    divPeso.classList.add("container.peso");
                    const pes = data.weight * 100;
                    divPeso.innerHTML = `<h4>Peso = ${pes} G</h4>`;
                    visor.appendChild(divPeso);

                    const sideVisor = document.getElementById("sideVisor");
                    sideVisor.innerHTML = ""; 

                   data.stats.forEach(statusAtual => {
                   const divBase_stat = document.createElement("div");
                   divBase_stat.classList.add("container-base_stat");

                   
                   const progressContainer = document.createElement("div");
                   progressContainer.classList.add("progress-container");

                   const progressBar = document.createElement("div");
                   progressBar.classList.add("progress-bar");
                   progressBar.style.width = `${statusAtual.base_stat}%`;

                   divBase_stat.innerHTML = `<h4>${statusAtual.stat.name}: ${statusAtual.base_stat}</h4>`;
                   progressContainer.appendChild(progressBar); 
                   divBase_stat.appendChild(progressContainer); 

                   sideVisor.appendChild(divBase_stat);
                    });
                })

                .catch(error => { 
                   console.log("Erro ao utilizar API: ",error);
            })
        }); 

        
        
    });