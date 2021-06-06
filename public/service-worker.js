console.log("Hello service worker")
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
  console.log(`'beforeinstallprompt' event was fired.`);
});