import navbar from "../components/navbar.js";
import { getData, append } from "./fetch.js";

document.getElementById("navbar").innerHTML = navbar();

let container = document.getElementById("container");

let query = document.getElementById("query");
query.addEventListener("input", receipe);

let url =  " https://www.themealdb.com/api/json/v1/1/search.php?s=";
 sa(url)


function receipe() {
  container.innerHTML = null;
  query = document.getElementById("query").value;

  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

sa(url)

}



function sa(url){
  getData(url).then((res) => {
    //console.log(res);
    append(res.meals, container);
  });
  
}



// TRADTIONAL METHOD

// search(query);
// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
// .then(function(res){
//  console.log(res)

//    return res.json();
// }).then(function(res){
//   let data = res.meals
//   console.log(data)
//    append(data)

// }).catch(function(err){
//   console.log(err)
// })

//  function append(data){

//  data.forEach(({strMeal,strCategory,strMealThumb,strTags})=>{

//    let div = document.createElement("div")
//    div.setAttribute("id","inner_div")

//    let img = document.createElement("img")
//   img.src = strMealThumb
//    let h2 = document.createElement("h2")
//    h2.innerText=strMeal
//    let h5 = document.createElement("h4")
//    h5.innerText=strCategory
//    let p =  document.createElement("p")
//   p.innerText = strTags;
//   div.append(h2,img,h5,p)
//     container.append(div);
//    })

//  }
