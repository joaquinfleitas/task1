let homejs = document.getElementById("image-card")

function craftCards(lista, descriptionCards){
    let imagenes = ""
    for (let walk of lista.events){
        if(walk.date <= data.currentDate){
            let template =  
                `
                <div class="card" style="width: 16rem;">
                <img src="${walk.image}" class="card-img-top" alt="${walk.name}">
                    <div class="card-body">
                    <h5 class="card-title">${walk.name}</h5>
                    <p class="card-text">${walk.date}</p>
                    <p class="card-text">${walk.category}</p>
                    <p class="card-text">${walk.place}</p>
                    <p class="card-text">${walk.price}</p>
                    <a href="./details.html" class="btn btn-primary">View More</a>
                </div>
                </div> `
    imagenes =  imagenes + template
        }
    }
    descriptionCards.innerHTML = imagenes
}
craftCards(data, homejs)
