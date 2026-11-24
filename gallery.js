

let Data=[
    {image:"image/watch1.jpg",
     name:"Rolex Luxury",   
     description:"Luxary Watch In Pakistan",
     price:"15000",
     founder:"Muhammad Sadain",
     
    },

    {
    image:"image/watch2.jpg",
     name:"Golden Classic",   
     description:"Classic Watch In Pakistan",
     price:"12000",
     founder:"Ahmed Raza"
    },

    {
    image:"image/watch3.jpg",
     name:"Smart Pro",   
     description:"Smart Watch In Pakistan",
     price:"10000",
     founder:"Muhammad Azan"
    }

]

document.write(`<h1 class="text-center mt-5 bg-warning">MY WATCH GALLERY</h1>`)
document.write(`
    <div class="container">
      <div class="row">

    `)
for(i=0;i<Data.length;i++){
     document.write(`
      <div class=col-md-4 >
      <div class="card mt-5 mb-5 ">
  <img src="${Data[i].image}" class="card-img-top " alt="...">
  <div class="card-body">
    <h5 class="card-title">${Data[i].name}</h5>
    <p class="card-text">${Data[i].description}</p>
    <p class="badge bg-secondary">${Data[i].price}.pkr</p>
    <br>
    <h3>${Data[i].founder}</h3>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      
      </div>  
        
        
        `)
}




    document.write(`
        
      </div>
    </div>

        `)