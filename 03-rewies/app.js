const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
// Selected all elements in DOM
let personImg = document.querySelector('#person-img');
let author = document.querySelector('#author');
let job = document.querySelector('#job');
let info = document.querySelector('#info');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let randomBtn = document.querySelector('.random-btn');

// We have 4 obj in list we need id number for change items.
personId = 1

//definition of click events
prevBtn.addEventListener('click',
function (){
  personId--;// we got the id number in order
  if (personId<0){ //If the id number is less than zero, equate the id number with the length of the list
    personId=reviews.length-1 
  }
  changeInfo(personId)
});

nextBtn.addEventListener('click',
function (){
  personId++;// we got the id number in order
  if(personId>=reviews.length){//If the id number is bigger than length of the list, equate the id number with the zero
    personId=0;
  }
  changeInfo(personId)
});
// random ID number
randomBtn.addEventListener('click', randomItem)
function randomItem(){ 
  personId = Math.floor(Math.random() * reviews.length)
  changeInfo(personId)
}
// The id number that comes out of the function is assigned to the items and changes are made on the dom.
function changeInfo(personId){
  author.innerHTML = reviews[personId].name;
  job.innerHTML = reviews[personId].job;
  info.innerHTML = reviews[personId].text;
  personImg.src = reviews[personId].img;
}


