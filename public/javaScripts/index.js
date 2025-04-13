if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(reg => console.log("Service Worker Registered"))
      .catch(err => console.error("Service Worker registration failed:", err));
  }
  