
    /// VARIABLES 

 

   const reponsePortfolio = await fetch("http://localhost:5678/api/works");
   const portfolioElements = await reponsePortfolio.json();
   const valeursPortfolio = JSON.stringify(portfolioElements);


   const reponseFiltres = await fetch('http://localhost:5678/api/categories');
   const filtresElements =await reponseFiltres.json();
   const valeurFiltres = JSON.stringify(filtresElements);



   function genererPortfolio(portfolioElements){
    for (let i=0; i<portfolioElements.length;i++){
        const article = portfolioElements[i];

        const portfolio = document.querySelector(".gallery");

        const figure = document.createElement("figure");
        figure.setAttribute("data-id", article.id);

        const imageElement = document.createElement("img");
        imageElement.src = article.imageUrl;

        const nomElement = document.createElement("figcaption");
        nomElement.innerText = article.title;

        portfolio.appendChild(figure);
        
        figure.appendChild(imageElement);
        figure.appendChild(nomElement)
        
    }
   }

   genererPortfolio(portfolioElements);

   function genererFiltres(filtresElements, portfolioElements){
    const filtres = document.querySelector("#filters");

    const allButton = document.createElement("button");
    allButton.innerText = 'Tous';
    allButton.addEventListener('click', () =>{
        document.querySelector(".gallery").innerHTML = "";
        genererPortfolio(portfolioElements)
    } );    
    

    filtres.appendChild(allButton);


    filtresElements.forEach(filtre => {
        const button = document.createElement("button");
        button.innerText = filtre.name;
        button.addEventListener('click', () => {
            const filteredElements = portfolioElements.filter(article => article.categoryId === filtre.id);
            document.querySelector(".gallery").innerHTML = "";

            genererPortfolio(filteredElements);
        });
        filtres.appendChild(button);
    });

   }
   genererFiltres(filtresElements, portfolioElements);


   const userId = localStorage.getItem('token');
   console.log(`le Token dans le local storage : ${userId}`);

   

   if(userId){
     document.querySelector(".modifier").style.display ="flex";
     document.querySelector(".logout").style.display = "flex";
     document.querySelector(".login").style.display = "none";
   } ;       


   document.querySelector(".logout").addEventListener('click', () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    window.location.href = 'login.html'; 
   })

   document.querySelector(".modifier").addEventListener("click",()=>{
    document.querySelector("#projectModal").style.display = "flex";
    document.querySelector("#projectListSection").style.display="grid";
    document.querySelector("#addPhotoBtn").style.display ="block";
    document.querySelector("#galleryTitle").style.display = "block";
    document.querySelector("#ajoutFormSection").style.display = "none";

   })


    
   
   
   


/// DATAS    



  
   
   
   

