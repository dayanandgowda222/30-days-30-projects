const searchForm = document.getElementById("input-form")
const searchBox = document.getElementById("input-box")
const resultBox = document.getElementById("result")
const searchMore = document.getElementById("see-more")


const apiKey = "pPXhJyJlYa0xan5PbqBfr-YPN4jnKKaCeTwYdcnJBjM" ;

let keyword = "";
let page = 1;



async function searchImages(){
    keyword = searchBox.value;
    console.log(keyword);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;
    console.log(url);
    const response = await fetch (url);
    const data = await response.json();

    if(page ===1 ){
        resultBox.innerHTML = "";
    }
    
    const imgresult = data.results;
    imgresult.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imgLingk = document.createElement('a');
        imgLingk.href = result.links.html;
        imgLingk.target = "_blank";

        imgLingk.appendChild(image);

        resultBox.appendChild(imgLingk);
    })
    searchMore.style.display = 'block';
}

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

searchMore.addEventListener('click', ()=>{
    page++;
    searchImages();
})
