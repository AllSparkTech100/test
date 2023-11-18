const fadeOut = () => {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.classList.add("fade");
};
window.addEventListener("load", fadeOut);
