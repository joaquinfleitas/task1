let homejs = document.getElementById("image-card")
const search = document.getElementById('search1')
const check = document.getElementById("checkbox3")

let globalHome;

let upcoming 

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(data => data.json())
.then(data=>{ 
    globalHome = data
    upcoming = globalHome.events.filter( upcom => upcom.date >= globalHome.currentDate)
    renderTemplate (craftCards(upcoming), homejs)
    check.innerHTML = generarCheckbox(globalHome.events)
    check.addEventListener('change', filtroCruzado)
    search.addEventListener( 'input', filtroCruzado)
})
.catch(error => console.log(error))


function craftCards(lista){
    let imagenes = ""
    for (let walk of lista){
            let template =  
                `
                <div class="card" style="width: 16rem;">
                <img src="${walk.image}" class="card-img-top" alt="${walk.name}">
                    <div class="card-body">
                    <h5 class="card-title">${walk.name}</h5>
                    <p class="card-text">${walk.date}</p>
                    <a href="./details.html?idUrl=${walk._id}" class="btn btn-primary">View More</a>
                </div>
                </div> `
    imagenes =  imagenes + template
        }
    return imagenes
}
 //es la funcion de ubicacion

//Funcion para filtrar categorias

//Creacion de los botones checkbox
    function generarCheckbox (infoData){
        const categorias = new Set(infoData.map(eventInfo => eventInfo.category))
        let template = ""
        categorias.forEach(categoria =>{
            template += `<div class="form-check d-flex">   
            <label class="form-check-label">${categoria}
            <input class="form-check-input" type="checkbox" value="${categoria}">
            </label>
            </div>`
        })
        return template
    }
    //check.innerHTML = generarCheckbox(sinRepetir)
    //inner para pasar checks a pantaia
    //funcion para el filtro de los check
    function checkFilter (touchs, categoriesList){
        let values = [];
        for (let touch of touchs){
            if (touch.checked)
            values.push(touch.value.toLowerCase())
        }

        let filters = categoriesList.filter(eventoValue => values.includes(eventoValue.category.toLowerCase())) //includes comprueba si cumple su categoria(value filtrado)
        if (values.length === 0){  //compara el value de los checkbox con la categoria de las cards
            return categoriesList
        }
        else{
            return filters
        }
    }    
//funcion para el filtro del search

function searchBar(inputFind, categoriesList){
    const filterFood = categoriesList.filter(eventFilter => {
        return eventFilter.name.toLowerCase().startsWith(inputFind.value.toLowerCase()) //compara la primer letra(startswith) del input (buscador) con la primer letra de todos los name y si coinciden (true) la filtra(true)
    });
    return filterFood // return devuelve todos los true
}
// funcion del filtro cruzado
function filtroCruzado(evento){
    let checkbuttons = document.querySelectorAll(".form-check-input")
    const filterPerFind = searchBar (search, upcoming)
    const filterPerCheck = checkFilter (checkbuttons, filterPerFind)
    if(filterPerCheck.length === 0) {       //length nos devuelve un numero
        let alert = `<h3 class="alert">THERES NO COICIDENCES WITH YOUR SEARCH</h3>`
        renderTemplate(alert, homejs)
    }
    else {
        renderTemplate(craftCards(filterPerCheck), homejs)
    }
}
//funcion del rendertemplate
function renderTemplate(template, ubicacion){
    ubicacion.innerHTML = template
}


