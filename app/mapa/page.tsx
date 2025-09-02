export default function MapaPage() {
  // Server Component that renders a Client Component wrapper
  const HomeClient = require("@/components/home/HomeClient").default;
  return <HomeClient />;
}

