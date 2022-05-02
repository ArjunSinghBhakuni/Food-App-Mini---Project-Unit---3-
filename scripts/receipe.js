import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();



let url = " https://www.themealdb.com/api/json/v1/1/categories.php";


import { getData,append } from"./fetch.js"

getData (url).then((res)=>{
 console.log(res)
  let data = res.categories
 data.forEach(
  ({
    strCategory,
    
    strCategoryThumb,
    
    strCategoryDescription,
  }) => {
    let div = document.createElement("div");
    div.setAttribute("id", "inner_div");

    let img = document.createElement("img");
    img.setAttribute("id", "main_img");
    img.src = strCategoryThumb;

    let h2 = document.createElement("h2");
    h2.innerText = strCategory;

    div.onclick = () => {
      window.location.href = "./index.html"
    };

    div.append(h2, img);
    container.append(div);
  }
 );
});
