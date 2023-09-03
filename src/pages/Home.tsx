import Logo from "../img/nexus-logo-500.png";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen home-page">
      <img src={Logo} alt="logo" />
      <div className="text-xl font-bold mt-4 text-secondary">
        Welcome to Nexus.
      </div>
    </div>
  );
}

export default Home;
