const accessKey = "-xVtnFLmdV0IloZHcY6-kkii8_pfbG9u3EIfGpGogW0";

const searchform = document.getElementById("search_form");
const searchBox = document.getElementById("search_box")
const searchresult = document.getElementById("search_result");
const ShowMoreBtn = document.getElementById("Show-more-btn")


let keyword = "";
let page = 1;


async function FindImage(){
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;


  const response = await fetch(url);
  const data = await response.json();
   
  if(page === 1){
    searchresult.innerHTML = "";
  }
  
  const results = data.results
  results.map((results) => {
    const image = document.createElement("img");
    image.src = results.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = results.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image)
    searchresult.appendChild(imageLink);

  })

  ShowMoreBtn.style.display = "block"
  
}
searchform.addEventListener("submit", (e) =>{
   e.preventDefault();
   page = 1;
   FindImage();
})

ShowMoreBtn.addEventListener("click", () => {
  page++;
  FindImage()
})



