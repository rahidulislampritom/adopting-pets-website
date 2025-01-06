const loadCategoriesButton = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await response.json();
    displayCategoriesButton(data.categories);
}

const loadAllPost = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
    const data = await response.json();
    displayAllPost(data.pets);
}

const displayCategoriesButton = (arrays) => {
    // console.log(array);
    const displayButton = document.getElementById("display-categories-button");
    arrays.forEach((array) => {
        // console.log(array)
        const buttonDiv = document.createElement("div");
        buttonDiv.classList = "md:w-[312px] md:h-[104px] border border-[#0E7A811A] rounded-2xl";
        buttonDiv.innerHTML = `
        <button class="text-2xl text-hColor font-bold w-full h-full p-6  ">  
        
        <div class = "flex justify-center items-center gap-4">
            <img src="${array.category_icon}" alt="">
            <span>${array.category}</span>   
        </div>   

        </button>
    `;
        displayButton.append(buttonDiv);
    });


}

// a demo Object

// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }

const displayAllPost = (arrays) => {
    const postContainer = document.getElementById("display-all-post");
    arrays.forEach(array => {
        const allPostDiv = document.createElement("div");
        allPostDiv.classList = "card card-compact";
        allPostDiv.innerHTML = `
          <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`;
        postContainer.append(allPostDiv);
    })

}


loadCategoriesButton()
loadAllPost()