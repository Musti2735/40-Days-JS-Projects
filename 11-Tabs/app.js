const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id; // tıklanan öğenin id'si id değerine atandı.
  if(id){ // eğer id varsa;
      btns.forEach(function(btn){ //btns içindeki her bir btn elemanını seç.
          btn.classList.remove('active') // classından active stilini kaldır
      });
      e.target.classList.add('active'); // tıklanan öğenin clasına active stilini ekle
      //aynı durumu content için de yap
      articles.forEach(function(article){
          article.classList.remove('active');
      });
      const element = document.getElementById(id); //seçilen id'ye sahip article al.
      element.classList.add("active"); // ve classına active stilini ekle
  }
  });
  