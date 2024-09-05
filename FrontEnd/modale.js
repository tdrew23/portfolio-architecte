document.addEventListener("DOMContentLoaded", async function () {
    const modal = document.createElement("div");
    modal.id = "projectModal";
    


    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#fff";
    modalContent.style.margin = "5% auto"; 
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "10px"; 
    modalContent.style.width = "50%";
    modalContent.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)"; 



    const closeBtn = document.createElement("span");
    closeBtn.textContent = "x";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.float = "right";
    closeBtn.style.fontSize = "20px";

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        clearImageSelection();
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) { // Vérifie si le clic est sur l'arrière-plan de la modale
            modal.style.display = "none";
            clearImageSelection(); // Appelez votre fonction pour nettoyer la sélection d'image si nécessaire
        }
    });

    const galleryTitle = document.createElement("h2");
    galleryTitle.textContent = "Galerie photo";
    galleryTitle.style.textAlign = "center";
    galleryTitle.style.marginBottom = "20px";
    galleryTitle.style.color = "black";



    const projectListSection = document.createElement("div");
    projectListSection.style.id = "projectListSection";
    projectListSection.style.display = "grid";
    projectListSection.style.gridTemplateColumns = "repeat(auto-fill, minmax(100px, 1fr))";
    projectListSection.style.gap = "15px";
    projectListSection.style.borderBottom = "solid #B3B3B3 1px";
    projectListSection.style.width = "80%";
    projectListSection.style.marginLeft = "55px";
    projectListSection.style.height = "405px";






    
    const addPhotoBtn = document.createElement("button");
    addPhotoBtn.textContent = "Ajouter une photo";
    addPhotoBtn.style.display = "block";
    addPhotoBtn.style.margin = "30px auto 0";
    addPhotoBtn.style.padding = "10px 20px";
    addPhotoBtn.style.border = "none";
    addPhotoBtn.style.backgroundColor = "#1D6154";
    addPhotoBtn.style.color = "#ffff";
    addPhotoBtn.style.borderRadius = "60px";
    addPhotoBtn.style.width = "237px";
    addPhotoBtn.style.fontSize = "14px";
    addPhotoBtn.style.fontFamily = "Syne";
    addPhotoBtn.style.cursor = "pointer";
    

    function clearImageSelection() {
        const imagePreview = document.getElementById("imagePreview");
    
        imagePreview.style.display = "none";
        imagePreview.src = ""; 
    
        const fileInput = document.getElementById("fileInput");
        fileInput.value = ""; 
    
        const fileInputButton = document.getElementById("fileInputButton");
        fileInputButton.style.display = "block"; // Réaffiche le bouton
    
       
            ajoutIcon.style.display = "block";
        
    }
    
    

    const ajoutFormSection = document.createElement("div");
    ajoutFormSection.style.display = "none";


    const backArrow = document.createElement("span");
    backArrow.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'; 
    backArrow.style.cursor = "pointer";
    backArrow.style.fontSize = "24px";
    backArrow.style.position = "absolute";
    backArrow.style.top = "106px";
    backArrow.style.left = "386px";


    backArrow.addEventListener("click", function () {
        ajoutFormSection.style.display = "none";
        projectListSection.style.display = "grid";
        addPhotoBtn.style.display = "block";
        galleryTitle.style.display = "block"; 
    });

    const formTitle = document.createElement("h2");
    formTitle.textContent = "Ajout photo";
    formTitle.style.textAlign = "center";
    formTitle.style.color = "black";


    const form = document.createElement("form");
    form.id = "myForm";

    const imagePreview = document.createElement("img");
    imagePreview.id = "imagePreview";
    imagePreview.style.width = "50%";
    imagePreview.style.maxHeight = "100%";
    imagePreview.style.objectFit = "cover";
    imagePreview.style.borderRadius = "5px";
    imagePreview.style.marginBottom = "15px";
    imagePreview.style.display = "none"; 

    const ajoutImageSection = document.createElement("section");
    ajoutImageSection.id = "ajoutImageSection";

    const ajoutSectionText = document.createElement("p");
    ajoutSectionText.innerText = "jpg, png : 4mo max";

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.id = "fileInput";
    fileInput.name = "fileInput";
    fileInput.accept = "image/*";
    fileInput.style.marginBottom = "20px";
    fileInput.style.display = "none";


    const ajoutIcon = document.createElement("span");
    ajoutIcon.innerHTML+=`<i class="fa-solid fa-image"></i>`;

      const fileInputButton = document.createElement("div");
      fileInputButton.id = "fileInputButton";
      fileInputButton.style.display = "block";
      fileInputButton.style.width = "120px";
      fileInputButton.style.height = "30px";

      const fileInputButtonText = document.createElement("span");
      fileInputButtonText.textContent = "+ Ajouter photo";
      fileInputButtonText.style.display = "block";
      fileInputButtonText.style.textAlign = "center";


    fileInputButton.addEventListener("click", function () {
    document.getElementById("fileInput").click(); 
    });
    fileInputButton.appendChild(fileInputButtonText);


    fileInput.addEventListener("change", (event) => {
        const [file] = event.target.files;
        if (file) {
            imagePreview.src = URL.createObjectURL(file);
            imagePreview.style.display = "block"; 
            fileInputButton.style.display = "none";
            ajoutIcon.style.display ="none";
        }
    });

    //  imagePreview.innerHTML+="";

    ajoutImageSection.appendChild(ajoutIcon);
    ajoutImageSection.appendChild(imagePreview);
    ajoutImageSection.appendChild(fileInputButton);
    ajoutImageSection.appendChild(ajoutSectionText);
    ajoutImageSection.appendChild(fileInput);

    const titleLabel = document.createElement("label");
    titleLabel.htmlFor = "title";
    titleLabel.textContent = "Titre";
    titleLabel.style.display = "block";
    titleLabel.style.marginBottom = "5px";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    titleInput.style.width = "80%";
    titleInput.style.padding = "10px";
    titleInput.style.marginBottom = "15px";
    titleInput.style.borderRadius = "5px";
    titleInput.style.border = "1px solid #ccc";


    const categoryLabel = document.createElement("label");
    categoryLabel.htmlFor = "category";
    categoryLabel.textContent = "Catégorie";
    categoryLabel.style.display = "block";
    categoryLabel.style.marginBottom = "5px";


    const categorySelect = document.createElement("select");
    categorySelect.id = "category";
    categorySelect.name = "category";
    categorySelect.style.color = "#444444";
    // categorySelect.style.width = "80%";
    // categorySelect.style.padding = "10px";
    // categorySelect.style.borderRadius = "5px";
    // categorySelect.style.border = "1px solid #ccc";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Veuillez choisir une catégorie--";
    defaultOption.selected = true;
    defaultOption.disabled = true;

    const option1 = document.createElement("option");
    option1.value = "1";
    option1.textContent = "Objets";

    const option2 = document.createElement("option");
    option2.value = "2";
    option2.textContent = "Appartements";

    const option3 = document.createElement("option");
    option3.value = "3";
    option3.textContent = "Hotels & restaurants";

    categorySelect.appendChild(defaultOption);
    categorySelect.appendChild(option1);
    categorySelect.appendChild(option2);
    categorySelect.appendChild(option3);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Valider";
    // submitBtn.style.width = "30%";
    // submitBtn.style.height = "36px";
    // submitBtn.style.padding = "10px";
    // submitBtn.style.backgroundColor = "#1D6154";
    // submitBtn.style.color = "#fff";
    // submitBtn.style.border = "none";
    // submitBtn.style.borderRadius = "60px";
    // submitBtn.style.fontSize = "14px";
    // submitBtn.style.cursor = "pointer";

    // Création des messages d'erreur pour chaque champ
const imageError = document.createElement("div");
imageError.style.color = "red";
imageError.style.fontSize = "14px";
imageError.style.display = "none"; 

const titleError = document.createElement("div");
titleError.style.color = "red";
titleError.style.fontSize = "14px";
titleError.style.display = "none";

const categoryError = document.createElement("div");
categoryError.style.color = "red";
categoryError.style.fontSize = "14px";
categoryError.style.display = "none";

// Ajout des messages d'erreur au formulaire
ajoutImageSection.appendChild(imageError);
form.appendChild(titleError);
form.appendChild(categoryError);

    

    form.appendChild(backArrow);
    form.appendChild(ajoutImageSection);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(categoryLabel);
    form.appendChild(categorySelect);
    form.appendChild(submitBtn);

    ajoutFormSection.appendChild(formTitle);
    ajoutFormSection.appendChild(form);

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(galleryTitle);
    modalContent.appendChild(projectListSection);
    modalContent.appendChild(addPhotoBtn);
    modalContent.appendChild(ajoutFormSection);

    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    addPhotoBtn.addEventListener("click", function () {
        projectListSection.style.display = "none";
        ajoutFormSection.style.display = "block";
        addPhotoBtn.style.display = "none"; 
        galleryTitle.style.display= "none";
    });

    // Fonction pour générer la liste des projets dans la modale
    async function genererPortfolioModale(portfolioElements) {

        for (let i = 0; i < portfolioElements.length; i++) {
            const article = portfolioElements[i];

            const imageContainer = document.createElement("div");
            imageContainer.style.position = "relative";

            const imageElement = document.createElement("img");
            imageElement.src = article.imageUrl;
            imageElement.style.width = "100%";
            imageElement.style.objectFit = "cover";

            const deleteIcon = document.createElement("span");
            deleteIcon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            deleteIcon.style.position = "absolute";
            deleteIcon.style.top = "5px";
            deleteIcon.style.right = "5px";
            deleteIcon.style.cursor = "pointer";
            deleteIcon.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
            deleteIcon.style.padding = "5px";
            deleteIcon.style.color = "white";
            deleteIcon.style.backgroundColor = "black";



          

            deleteIcon.addEventListener("click", async function () {
                const response = await fetch(`http://localhost:5678/api/works/${article.id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (response.ok) {
                    imageContainer.remove(); 
                } else {
                    console.error("Erreur lors de la suppression du projet :", response.statusText);
                    titleError.style.display="flex";
                }
            });

            imageContainer.appendChild(imageElement);
            imageContainer.appendChild(deleteIcon);
            projectListSection.appendChild(imageContainer);
        }

          form.addEventListener("submit", async function(event) {
            event.preventDefault();

           
            const formData = new FormData();
            const fileInput = document.getElementById('fileInput');
            const titleInput = document.getElementById('title');
            const categoryId = document.querySelector("#category").value; 
    
            formData.append('image', fileInput.files[0]); 
            formData.append('title', titleInput.value); 
            formData.append('category', categoryId); 
           
        
    
            try {
                  //Verifier l'image
            if ( fileInput.files.length< 1) {
                throw new Error('Veuillez ajouter une image.')
            } else {
                imageError.style.display = "none";
            }
        
            // Vérification du titre
            if (!titleInput.value.trim()) {
                throw new Error('Veuillez ajouter un titre.')

            } else {
                titleError.style.display = "none";
            }
        
            // Vérification de la catégorie
            if (!categorySelect.value) {
                throw new Error('Veuillez ajouter une categorie.')
            } else {
                categoryError.style.display = "none";
            }
                const response = await fetch('http://localhost:5678/api/works', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: formData
                });
    
                if (response.ok) {
                    const data = await response.json();
                    console.log('Projet ajouté avec succès:', data);
                    clearImageSelection();
                    
                    // Revenir à la liste des projets
                    // ajoutFormSection.style.display = "none";
                    // projectListSection.style.display = "grid";
                    // modal.style.display = "none";
                } else {
                    console.error('Erreur lors de l\'ajout du projet:', response.statusText);
                   

                }
            } catch (error) {
                console.error('Une erreur est survenue:', error);
                categoryError.textContent = error;
                categoryError.style.display = "block";
            }
        });
    }

    try {
        const response = await fetch("http://localhost:5678/api/works");
        const portfolioElements = await response.json();
        genererPortfolioModale(portfolioElements);
    } catch (error) {
        console.error("Erreur lors du chargement du portfolio :", error);
    }
});
