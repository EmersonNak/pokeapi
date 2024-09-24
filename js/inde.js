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
                    divNome.innerHTML = `<p>${data.name}</p>`;             
                    visor.appendChild(divNome);

                    const divImg = document.createElement("div");
                    divImg.classList.add("container.imagem");
                    divImg.innerHTML = `<img src="${data.sprites.other.showdown.front_default}">`;
                    visor.appendChild(divImg);

                    const divAltura = document.createElement("div");
                    divAltura.classList.add("container.altura");
                    const alt = data.height * 10;
                    divAltura.innerHTML = `<p>Altura = ${alt} CM</p>`;
                    visor.appendChild(divAltura);

                    const divPeso = document.createElement("div");
                    divPeso.classList.add("container.peso");
                    const pes = data.weight * 100;
                    divPeso.innerHTML = `<p>Peso = ${pes} G</p>`;
                    visor.appendChild(divPeso);

                    for(let contador = 0; contador <= 6; contador++) {
                       const divStatus = document.createElement("div");
                       divStatus.classList.add("container.status");
                       const sta = data.stats[contador];
                       const base = data.base_stat;
                       const nome = data.stat.name;
                       divStatus.innerHTML = `<p>${sta}</p>`;
                       divStatus2.innerHTML = `<p>${base}</p>`;
                       divStatus3.innerHTML = `<p>${nome}</p>`;
                       visor.appendChild(divStatus); 
                       visor.appendChild(divStatus2);
                       visor.appendChild(divStatus3);

                    }

                })

                .catch(error => { 
                   console.log("Erro ao utilizar API: ",error);
            })
        }); 

        
        
    });