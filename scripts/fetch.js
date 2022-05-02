let getData = async (url) => {
  let res = await fetch(url);
   //console.log(res)
  let data = await res.json();

  return data;
};

let append = (data, container) => {
  data.forEach(
    ({
      strMeal,
      strCategory,
      strMealThumb,
      strYoutube,
      strTags,
      strInstructions,
    }) => {
      let div = document.createElement("div");
      div.setAttribute("id", "inner_div");

      let img = document.createElement("img");
      img.setAttribute("id", "main_img");
      img.src = strMealThumb;

      let h2 = document.createElement("h2");
      h2.innerText = strMeal;
      let h5 = document.createElement("h4");
      h5.innerText = strCategory;
      let p = document.createElement("p");
      p.innerText = strTags;
      let data1 = {
        strMeal,
        strTags,
        strMealThumb,
        strCategory,
        strYoutube,
        strInstructions,
      };

      div.onclick = () => {
        showvideos(data1);
      };

      div.append(h2, img, h5, p);
      container.append(div);
    }
  );
};
function showvideos(data1) {
  window.location.href = "./recipepage.html";
  localStorage.setItem("receipe", JSON.stringify(data1));
}

export { getData, append };
