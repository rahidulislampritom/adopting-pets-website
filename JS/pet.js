// fetch data from api
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

const loadCategoriesPost = async(category_name) => {
    const response = await fetch (`https://openapi.programming-hero.com/api/peddy/category/${category_name}`);
    const data = await response.json();
    removeAndAddClass()
    const activeButton = document.getElementById(`btn-${category_name}`);
    activeButton.classList.add("button")
    activeButton.classList.remove("border")
    activeButton.classList.remove("rounded-2xl")

    
    displayAllPost(data.data);
}

// a function for remove and add button class 
const removeAndAddClass = () =>{
    const buttons = document.getElementsByClassName("category-btn");
      for(const button of buttons){
          button.classList.remove("button");
          button.classList.add("border");
          button.classList.add("rounded-2xl"); 
  
      }
     
  }

// display the fetching data
const displayCategoriesButton = (arrays) => {
    const displayButton = document.getElementById("display-categories-button");
    arrays.forEach((array) => {
        const buttonDiv = document.createElement("div");
        buttonDiv.classList = "md:w-[312px] md:h-[104px]";
        buttonDiv.innerHTML = `
        <button id = "btn-${array.category}" onclick = "loadCategoriesPost('${array.category}')" class="category-btn text-2xl text-hColor font-bold w-full h-full p-6 border border-[#0E7A811A] rounded-2xl">  
        
       
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
    postContainer.innerHTML = "";
    if(arrays.length===0){
        postContainer.classList.remove("lg:grid");
        postContainer.classList.remove("md:grid");
        postContainer.innerHTML = `
        <div class="flex flex-col justify-center  items-center text-center md:w-[985px] md:h-[491px] space-y-2 md:space-y-4">
            <img src="./images/error.webp" alt="">
             <h2 class="text-2xl md:text-3xl text-hColor font-bold">No Information Available</h2>
            <p class="text-base text-pColor font-normal md:w-[760px]" text-center>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
        `
    }else{
        postContainer.classList.add("lg:grid");
        postContainer.classList.add("md:grid");

    }
    arrays.forEach(array => {
        const allPostDiv = document.createElement("div");
        allPostDiv.classList = "card card-compact  bg-base-100  shadow-xl  p-4 border";
        allPostDiv.innerHTML = `
          <figure class = "rounded-xl ">
    <img class = "w-full h-full"
      src="${array.image}"
      alt="Shoes" />
  </figure>
    <div>
        <div class= "mt-5 ">
            <h2 class="text-xl text-hColor font-bold">${array.pet_name}</h2>
            <p><i class="fa-solid fa-diamond pr-1"></i> Breed: ${array.breed ? array.breed : "N/A"}</p>
            <p><i class="fa-regular fa-calendar-days pr-1"></i> Birth: ${array.date_of_birth ? array.date_of_birth : "N/A"}</p>
            <p><i class="fa-solid fa-venus pr-1"></i> Gender: ${array.gender ? array.gender : "N/A"}</p>
            <p><i class="fa-solid fa-bangladeshi-taka-sign pr-1"></i> Price: ${array.price ? array.price : "N/A"}</p>
            
        </div>

        <div class = "border-b my-3"></div>

        <div class="flex items-center justify-between">
            <button
             class = "border border-[#0E7A8126] rounded-lg px-4 py-2 ">
             👍</button>

            <button
             class = "border border-[#0E7A8126] rounded-lg px-4 py-2 text-lg font-bold text-buColor">
             Adopt</button>

            <button 
            class = "border border-[#0E7A8126] rounded-lg px-4 py-2 text-lg font-bold text-buColor">
            Details</button>
        </div>

  </div>`;
        postContainer.append(allPostDiv);
    })

}




loadCategoriesButton()
loadAllPost()
