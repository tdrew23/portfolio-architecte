# Backend API - Sophie Bluel

Ce repo contient le code backend de l'architecte Sophie Bluel. 

## Lancement du backend

Après avoir récupéré le REPO executez la commande `npm install` pour installer les dépendances du projet

Une fois les dépendances installées lancez le projet avec la commande `npm start`

Compte de test pour Sophie Bluel

```
email: sophie.bluel@test.tld

password: S0phie 
```
Lien pour voir la
[documentation Swagger](http://localhost:5678/api-docs/)

Pour lire la documentation, utiliser Chrome ou Firefox



/* 
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 105%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    transition: opacity 0.3s ease;
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    height: auto;
    max-width: 500px;
    transition: transform 0.3s ease;
	display: flex;
	flex-direction: column;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    margin-left: auto;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}


.project-list {
	width: 60%;
    display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 10px;
    margin-bottom: 2px;
	height: 50%;
}

.project-list img {
    max-width: 100px;
    max-height: 100px;
	margin: 15px;
}

.add-photo {
	color: white;
	background-color: #1D6154;
	margin: 15px;
	border-radius: 25px;
	width: 185px;
	height: 38px;
	border: 2px solid  #1D6154;
	font-size: larger;
	cursor: pointer;
}


#myForm{
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.remove-item{
	cursor: pointer;
	font-size: larger;
}

.add-photo-section{
	background-color: #E8F1F6;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 120px;
	justify-content: flex-end;
	width: 100%;
}

#fileInput {
    display: none;
}

.custom-file-upload {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color:#CBD6DC;
    color: white;
    border-radius: 50px;
    padding: 10px 20px;
    border: 2px solid #CBD6DC;
    font-size: larger;
	width: 50%;
	
}

 */


       
  // const fileInputButton = document.createElement("div");
    // fileInputButton.id = "fileInputButton";
    // fileInputButton.innerHTML+=`<span style="display:block;width:120px; height:30px;" onclick="document.getElementById('fileInput').click()">+ Ajouter photo</span>`



    // Vérification du fichier image
    if (!fileInput.files.length) {
        imageError.textContent = "Veuillez ajouter une image.";
        imageError.style.display = "block";
        isValid = false;
    } else {
        imageError.style.display = "none";
    }

    // Vérification du titre
    if (!titleInput.value.trim()) {
        titleError.textContent = "Veuillez entrer un titre.";
        titleError.style.display = "block";
        isValid = false;
    } else {
        titleError.style.display = "none";
    }

    // Vérification de la catégorie
    if (!categorySelect.value) {
        categoryError.textContent = "Veuillez sélectionner une catégorie.";
        categoryError.style.display = "block";
        isValid = false;
    } else {
        categoryError.style.display = "none";
    }
