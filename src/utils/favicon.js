export default function addFavicon(faviconUrl) {
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = faviconUrl;
  link.type = "image/x-icon"; // Change to 'image/png' or 'image/svg+xml' if necessary

  // Remove any existing favicon
  const existingFavicon = document.querySelector('link[rel="icon"]');
  if (existingFavicon) {
    document.head.removeChild(existingFavicon);
  }

  // Add the new favicon
  document.head.appendChild(link);
}
