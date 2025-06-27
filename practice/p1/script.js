async function fetchData() {
  try {
    let response = await fetch(" https://fakestoreapi.com/products");
    let data = await response.json();
    console.log(data);

    let container = document.getElementById("container");
    data.forEach((item) => {
      let div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
          <h2>${item.title}</h2>
          <img src="${item.image}" alt="">
          <p>${item.price}</p>
          <p>${item.description}</p>
          
        `;
      container.appendChild(div);
    });
  } catch (error) {
    console.log(error);
    alert("failed to fetch data");
  }
}
fetchData();
