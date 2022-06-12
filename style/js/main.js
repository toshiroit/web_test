const onShowVideoTrailer = () => {
  document.getElementById("videoTrailer").style.display = "flex";
};
const onCloseVideoTrailer = () => {
  document.getElementById("videoTrailer").style.display = "none";
};
const showMenuMobile = () => {
  document.getElementById("menuMobile").classList.toggle("showMenuMobile");
};
const closeMenuMobile = () => {
  document.getElementById("menuMobile").classList.remove("showMenuMobile");
  document.getElementById("menuMobile").classList.toggle("hide");
};
