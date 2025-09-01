/* Custom cluster renderer to avoid broken image icons on multi-digit counts.
   Uses AdvancedMarkerElement when available, else a URL-encoded SVG icon. */

export const ClusterRenderer = {
  render({ count, position }: any, _stats: any, map: google.maps.Map) {
    const zIndex = Number(google.maps.Marker.MAX_ZINDEX) + count;

    // Prefer Advanced Markers if available (no need for marker library if false)
    const advanced = !!(
      (google.maps as any).marker &&
      typeof (map as any).getMapCapabilities === "function" &&
      (map as any).getMapCapabilities().isAdvancedMarkersAvailable === true
    );
    if (advanced) {
      const div = document.createElement("div");
      const size = count >= 100 ? 52 : count >= 10 ? 48 : 44;
      Object.assign(div.style, {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "#2563eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: count >= 100 ? "16px" : count >= 10 ? "15px" : "14px",
        fontWeight: "600",
      } as CSSStyleDeclaration);
      div.textContent = String(count);

      // @ts-ignore available when marker library present
      return new google.maps.marker.AdvancedMarkerElement({
        map,
        position,
        zIndex,
        title: `Cluster de ${count}`,
        content: div,
      });
    }

    // Fallback: standard Marker with inline SVG (URL encoded to avoid base64 issues)
    const radius = count >= 100 ? 26 : count >= 10 ? 24 : 22;
    const fontSize = count >= 100 ? 16 : count >= 10 ? 15 : 14;
    const svg = `<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${radius * 2}" height="${radius * 2}" viewBox="0 0 ${radius * 2} ${radius * 2}">
  <circle cx="${radius}" cy="${radius}" r="${radius}" fill="#2563eb" fill-opacity="0.9" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" fill="#ffffff">${count}</text>
</svg>`;
    const url = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    return new google.maps.Marker({
      position,
      zIndex,
      icon: {
        url,
        scaledSize: new google.maps.Size(radius * 2, radius * 2),
      },
      title: `Cluster de ${count}`,
    });
  },
};

