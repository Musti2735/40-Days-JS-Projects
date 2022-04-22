// ****** select items **********
const submitBtn = document.querySelector('.submit-btn');
const grocery = document.querySelector('#grocery');
const groceryList =document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
const container = document.querySelector(".grocery-container");
const alert = document.querySelector(".alert");
const list = document.querySelector(".grocery-list");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** event listeners **********
// submit form
submitBtn.addEventListener('click', addItem);

// clear list
clearBtn.addEventListener('click', clearItem);

// display items onload

// ****** functions **********
// add item
function addItem(e){
    e.preventDefault(); 
    let value = grocery.value // inputa girilen değeri aldık
    const id= new Date().getTime().toString(); // oluşacak her bir list elemanı için uniq bir id numarası oluşturmak için date modülünü kullandık.
    let trimInfo = value.trim()
    if( trimInfo.length==0 || value==''){
      displayAlert('Empty', "danger");
      setBackToDefault();
    }
    else if(editFlag==false){
    const item = document.createElement('article') // article etiketli bir element oluşturduk item değişkenine atadık

    let attr = document.createAttribute('data-id'); // oluşacak list elemanının her birinin içinde data-id özelliği tanımladık
    attr.value=id //data-id değerini uniq id ye eşitledik
    item.setAttributeNode(attr); // attr set ettik
    console.log(item)
    console.log(attr)

    item.classList.add('grocery-item') //item elemanına class tanımladık
    item.innerHTML=`<p class="title">${value}</p>
    <div class="btn-container">
      <!-- edit btn -->
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`; //item elemanına inner tanımladık
    groceryList.appendChild(item) //item elemanını bir üst html elamanının altına ekledik
    displayAlert("İtem added", "success")    // uyarıyı gösterdik
    container.classList.add('show-container')    // oluşan öğeye visible classı ekledik ve cotainer içeriği ekrana geldi.

    // add event listeners to both buttons;
    const editBtn = document.querySelector('.edit-btn');
    const deleteBtn = document.querySelector('.delete-btn');  
    editBtn.addEventListener('click', editItem);
    deleteBtn.addEventListener('click', deleteItem)

    addToLocalStorage(id, value)// set local storage

    setBackToDefault();// set back to default
    // edit  local storage
  }
  else if(editFlag==true){
    editItem()
  }


}


// display alert
function displayAlert(text, action){ //iki parametre verdik. biri metin içeriği, diğeri alart'ın türü 
    alert.textContent=text;  //alert metinini parametre olarak verilen text olarak atadık
    alert.classList.add(`alert-${action}`); //alertin classını parametre olarak verilen class olarak atadık
    setTimeout(function(){ //çıkan alerti 1 sn sonra kapattık
      alert.textContent=''
      alert.classList.remove(`alert-${action}`);
    }, 1000);
    }

function clearItem(){
    // her bir grocery öğesini kaldır
    let items = document.querySelectorAll('.grocery-item');
    items.forEach(item => {
      list.remove(item)
    });
    //containerın classını kaldır
    container.classList.remove('show-container'); 
    //display göster
    displayAlert('All items removed', "danger")
    //default et
    setBackToDefault();
    //localden kaldır
    localStorage.removeItem('list')

    }

// delete item
function deleteItem(e) {
  const element = this.parentElemen;
  const id = element.dataset.id;
console.log(element,"KALDIRILDI")

  list.removeChild(element);


  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");

  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}
  
function editItem(){ // edit item
    // set edit item
    // set form value
    console.log('edited item')
}


// set backt to defaults
function setBackToDefault(){
  grocery.value=''
    console.log('default edildi')
}

// ****** local storage **********

// add to local storage
function addToLocalStorage(id, value){
  const grocery ={id, value};
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items))
}
function getLocalStorage() {
  return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}
// SETUP LOCALSTORAGE.REMOVEITEM('LIST');
function setToLocalStorage(){

}

// ****** setup items **********

// add event listeners to both buttons;
// append childfunction setupItems() {
  