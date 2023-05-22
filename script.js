
let text = document.getElementById("fname");

let mybtn = document.getElementById("submit");
let error = document.getElementById("usererror");
let detail = document.getElementById("detail");
mybtn.addEventListener("click",(e)=>{
  e.preventDefault();
  // let text = document.getElementById("fname").value ;
  // console.log(text);
  validation();
});

let validation = ()=> {
  if(document.getElementById("fname").value == ""){
      // console.log("failure");
       error.innerHTML= "*user name is empty";
    }
    else{
      // console.log("clean")
    error.innerHTML = "";
    storeData();
    }
  
}

let post = {};
let storeData = () =>{
  post.text= text.value;
console.log(post);
details();
}

let details = () =>{
  detail.innerHTML += 
  ` <div>
  <p>${post.text}</p>
  <p class="option">
      <i onclick = "editText(this)"class="fas fa-edit"></i>
      <i onclick = "deleteText(this)" class="fas fa-trash-alt"></i>
    </p>
  
</div>
  `;
  text.value="";
}

let deleteText = (e) => {
e.parentElement.parentElement.remove();
};

let editText = (e) =>{
  text.value =e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}


