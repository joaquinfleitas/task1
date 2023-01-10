let cadenaParametroUrl = location.search //trae el url como string
let parametros = new URLSearchParams(cadenaParametroUrl) //agarra el string y lo convierte a objeto
let idCard = parametros.get("idUrl") //id que se usa para filtrar cada carta

let globalData;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(data => data.json())
.then(data=>{ 
globalData = data
pintarCard(globalData.events.find(globalData => globalData._id == idCard), contenedor)
})
.catch(error => console.log(error))


let contenedor = document.getElementById("details-image")



function pintarCard(walk, contenedor){
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
