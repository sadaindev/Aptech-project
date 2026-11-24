// assigment opreators  = == ===

// let data1=45;
// let data2=45;
// let data3="45"


// document.write(data1===data3)

// let Registerusermail="ibrahim23@gmail.com"

// let loginmail=prompt('Enter Your Email....')

// if(Registerusermail===loginmail){
// document.write("User Is Login")
// }
// else{
// document.write("Invalid User Name Or Password")
// }

// logical opreator  && || !

// let num1=5
// let num2=6
// let num3=2


// document.write(num1<num2 && num3>num1)

// let regmail='sadain@gmail.com'
// let regpassword='user123'


// let logmail=prompt('Enter Your Mail')
// let logpassword=prompt('Enter Your Password')

// if(regmail===logmail && regpassword===logpassword){
// document.write("User Is Login")
// }
// else{
//     document.write("Invalid User Name Or Password")
// }

// let ans=true;


// document.write(!ans)


// for(i=1;i<=10;i++){
//     document.write(`SaDAin <br>`)
// }


// let p=5

// while(p<=10){
//     document.write(p + "<br>")
//     p++
// }


// let tableno=prompt("Enter Your Table No");

// let a=1;
// do{
//     document.write(`${tableno} x ${a} = ${tableno*a} <br>`)

//     a++
// }
//  while(a<=10)


// let students=["Sadain" ,"Musaab","Kashif","Ahmed","daniyal"]

// for(x = 0; x < students.length; x++){
//   document.write(`${x+1}.${students[x]} <br>`)
// }


// let Name=[
//     [1,`sadain`,15,`@gmail.com`,[]],
//     [2,`musaab`,17,`musaab@gmail.com`],
//     [3,`Kashif`,16,`kashif@gmail.com`]
// ]

// document.write(Name[0]+"<br>")
// document.write(Name[1]+"<br>")
// document.write(Name[2]+"<br>")


// let detail = [
//   ["watch1.jpg.png", "Black Chronograph Watch", "Stylish black stainless steel watch with premium chronograph design.", "Rs. 6,499"],
//   ["watch2.jpg.png", "Silver Blue Dial Watch", "Elegant blue dial with a durable silver stainless steel strap.", "Rs. 5,999"],
//   ["watch3.jpg.png", "Brown Leather Watch", "Classic brown leather strap watch for formal and casual wear.", "Rs. 7,499"],
//   ["watch4.jpg.png", "Golden Luxury Watch", "Premium golden finish watch with an elegant black dial.", "Rs. 8,999"],
//   ["watch5.jpg.png", "Black Smart Watch", "Modern smartwatch with fitness tracking and smart features.", "Rs. 4,999"],
//   ["watch6.jpg.png", "Silver Minimalist Watch", "Simple and elegant silver watch for everyday use.", "Rs. 5,499"]
// ];





// document.write(`<h1 class="text-center mt-4">My New Gallery</h1>`)

// document.write(`
//    <div class='container mt-5'>
//    <div class='row'>
//     `)

// for(i=0;i<6;i++){
// document.write(`
//     <div class='col-md-4'>
//     <section class="card" style="max-width: 320px">
//   <img src="image/${detail[i][0]}" class="card-img-top" alt="${detail[i][1]}">
//   <div class="card-body">
//     <h4 class="card-title">${detail[i][1]}</h4>
//     <p class="card-text">${detail[i][2]}</p>
//     <h5 class="text-primary">${detail[i][3]}</h5>
//     <a href="#" class="btn-solid theme-primary">Go somewhere</a>
//   </div>
// </section>
//     </div> 
//     `)

// }



//     document.write(`
//         </div>
//         </div>
//         `)



// Gallery Number:1

// document.write("<h1 class=text-center >MY BEST GALLERY</h1> ")



// let gallery = [
//     {
//         name: "Smart Watch",
//         image: "image/watch1.jpg",
//         price: 2500
//     },
//     {
//         name: "Golden Watch",
//         image: "image/watch2.jpg",
//         price: 3500
//     },
//     {
//         name: "Classic Watch",
//         image: "image/watch3.jpg",
//         price: 2000
//     },
//     {
//         name: "Luxury Watch",
//         image: "image/watch4.jpg",
//         price: 4500
//     }
// ];

// for (let i = 0; i < gallery.length; i++) {

//     document.write(`
//         <div class="card d-inline-block m-3 p-2 text-center"
//              style="width: 250px; ">

//             <img src="${gallery[i].image}"
//                  class="card-img-top"
//                  width="220"
//                  height="180">

//             <div class="card-body">

//                 <h2 class="card-title">
//                     ${gallery[i].name}
//                 </h2>

//                 <h3 class="card-text">
//                     Price: Rs. ${gallery[i].price}
//                 </h3>

//                 <button class="btn btn-primary"
//                     onclick="alert('You selected ${gallery[i].name}')">
//                     View Details
//                 </button>

//             </div>
//         </div>
//     `);

// }













// Gallery number:2
let watches = [
    {
        name: "Rolex Luxury",
        image: "image/watch1.jpg",
        price: 15000,
        category: "Luxury Watch"
    },
    {
        name: "Golden Classic",
        image: "image/watch2.jpg",
        price: 12000,
        category: "Classic Watch"
    },
    {
        name: "Smart Pro",
        image: "image/watch3.jpg",
        price: 8500,
        category: "Smart Watch"
    },
    {
        name: "Silver Premium",
        image: "image/watch4.jpg",
        price: 10000,
        category: "Premium Watch"
    },
    {
        name: "Black Chronograph",
        image: "image/watch5.jpg",
        price: 9500,
        category: "Sport Watch"
    },
    {
        name: "Royal Edition",
        image: "image/watch6.jpg",
        price: 18000,
        category: "Luxury Watch"
    }
];

document.write(`
<style>
body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
}

.card {
    width: 270px;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 5px 20px #0002;
    transition: 0.3s;
    padding-bottom: 20px;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px #0003;
}

.card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    background: #eee;
}

.category {
    color: #888;
    font-size: 13px;
}

.price {
    color: #b8860b;
    font-size: 22px;
    font-weight: bold;
}

.card button {
    background: #111;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 6px;
    cursor: pointer;
}

.card button:hover {
    background: #b8860b;
}
</style>

<h1 style="text-align:center;">LUXURY WATCH COLLECTION</h1>

<p style="text-align:center;color:#777;">
Discover Your Perfect Timepiece
</p>

<div class="gallery" id="gallery"></div>
`);

let gallery = document.getElementById("gallery");

for (let i = 0; i < watches.length; i++) {

    gallery.innerHTML += `
        <div class="card">

            <img src="${watches[i].image}"
                 alt="${watches[i].name}">

            <h2>${watches[i].name}</h2>

            <p class="category">
                ${watches[i].category}
            </p>

            <p class="price">
                Rs. ${watches[i].price.toLocaleString("en-PK")}
            </p>

            <button onclick="viewDetails(${i})">
                VIEW DETAILS
            </button>

        </div>
    `;
}

function viewDetails(index) {
    alert(
        "Watch: " + watches[index].name +
        "\nCategory: " + watches[index].category +
        "\nPrice: Rs. " + watches[index].price.toLocaleString("en-PK")
    );
}