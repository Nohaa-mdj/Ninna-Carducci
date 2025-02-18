$(document).ready(function () {
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
  });
  $(".nav-pills .nav-link").click(function () {
    $(".nav-pills .nav-link").removeClass("active"); // Supprime l'effet actif sur tous les boutons
    $(this).addClass("active"); // Ajoute l'effet actif sur le bouton sélectionné
  });
});
