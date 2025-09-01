// Para SSR safety, generamos bounds en runtime dentro del mapa usando esta función
export function createRDBounds(google: typeof window.google) {
  const bounds = new google.maps.LatLngBounds();
  bounds.extend(new google.maps.LatLng(17.36, -72.0));
  bounds.extend(new google.maps.LatLng(20.08, -68.28));
  return bounds;
}
