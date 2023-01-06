let cadenaParametroUrl = location.search
let parametros = new URLSearchParams(cadenaParametroUrl)
let idCard = parametros.get("idUrl")

let contenedor = document.getElementById("details-image")

let walk = data.events

let cardEncontrada = walk.find(walk => walk._id == idCard)

function pintarCard(walk){
    contenedor.innerHTML = ""
    let template = `
    <div class="row g-0">
            <div class="col-md-4">
            <img src="${walk.image}" class="img-fluid rounded-start" alt="${walk.name}">
            </div>
            <div class="col-md-8 card-text col-12">
            <div class="card-body card-foot">
                <h5 class="card-title"> ${walk.name}</h5>
                <p class="card-text">Date: ${walk.date}</p>
                <p class="card-text">Description: ${walk.description}</p>
                <p class="card-text">Category: ${walk.category}</p>
                <p class="card-text">Place: ${walk.place}</p>
                <p class="card-text">Capacity: ${walk.capacity}</p>
                <p class="card-text">Estimate: ${walk.estimate}</p>
                <p class="card-text">Price: ${walk.price}</p>
            </div>
    </div> `

    contenedor.innerHTML = template
}

pintarCard(cardEncontrada)