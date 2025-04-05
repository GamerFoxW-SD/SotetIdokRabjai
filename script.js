document.addEventListener("DOMContentLoaded", () => {

const aktakContainer = document.getElementById("aktak-container");
  const modal = document.getElementById("modal");
  const modalTartalom = document.getElementById("modal-tartalom");
  const bezar = document.getElementById("bezar");

  csapatAdatok.forEach(tag => {
    const akta = document.createElement("div");
    akta.className = "akta";
    
    // Kép és szöveg hozzáadása
    akta.innerHTML = `
      <img src="${tag.kep}" alt="${tag.nev}" />
      <h3>${tag.nev}</h3>
      
    `;
    
    akta.addEventListener("click", () => {
      modalTartalom.innerHTML = `
        <span id="bezar" class="close">✖</span>
        <h2>${tag.nev} (${tag.alias})</h2>
        <p><strong>Szerep:</strong> ${tag.szerep}</p>
        <p>${tag.leiras}</p>
        <img src="${tag.kep}" alt="${tag.nev}" />
      `;
      modal.style.display = "flex";
      document.getElementById("bezar").onclick = () => modal.style.display = "none";
    });
    
    aktakContainer.appendChild(akta);
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});