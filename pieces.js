const pieces = [
    {nom: "Ampoule LED", prix: "60 €", catégorie: "Optique"},
    {nom: "Plaquettes de frein", prix: "40 €", catégorie: "Freinage"},
    {nom: "Ampoule boite à gants", prix: "5.49 €", catégorie: "Optiques"},
    {nom: "Liquide de frein", prix: "9.60 €", catégorie: "Freinage"},
    {nom: "Balai d'essui-glace", prix: "29.60 €", catégorie: "Pas de catégorie"}
]

for (let i = 0; i < pieces.length; i++) {
    const article = pieces[i];
    const sectionFiches = document.querySelector(".fiches");
    const pieceElement = document.querySelector("article");
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(imageElement);
}