let texte = document.querySelector("h2");
let contenu = texte.innerHTML;
texte.innerHTML = "";

let index = 0;
let efface = false;

function ecrireEffacer() {
  if (!efface) {
    // Écriture
    texte.innerHTML = contenu.substring(0, index);
    index++;
    if (index > contenu.length) {
      efface = true;
      setTimeout(ecrireEffacer, 1000); // Pause avant effacement
      return;
    }
  } else {
    // Effacement
    texte.innerHTML = contenu.substring(0, index);
    index--;
    if (index < 0) {
      efface = false;
      setTimeout(ecrireEffacer, 500); // Pause avant de réécrire
      return;
    }
  }
  setTimeout(ecrireEffacer, 150); // Vitesse d’écriture/effacement
}

ecrireEffacer();
