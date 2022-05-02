import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import { getData,append } from"./fetch.js"

let url = "https://www.themealdb.com/api/json/v1/1/random.php";

getData (url).then((res)=>{
 console.log(res)
 
  random(res.meals[0])

 })

function random( data){
 console.log(data)
 let div = document.createElement("div")
   div.setAttribute("id","random_div")
   let div2 = document.createElement("div")
   let img = document.createElement("img")
   img.src = data.strMealThumb
   let h2 = document.createElement("h2")
   h2.innerText=data.strMeal
   let h5 = document.createElement("h4")
   h5.innerText=`Category - ${data.strCategory} ` ;
   let you = document.createElement("h3")
   you.innerText = data.strYoutube
   let p =  document.createElement("p")
  p.innerText = `Instructions - ${data.strInstructions}` ;
  div2.append(h2,h5,you,p)
  div.append( div2,img)
    document.getElementById("part").append(div);
}