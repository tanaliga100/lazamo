import Contact from "../components/views/Contact";
import Featured from "../components/views/Featured";
import MainView from "../components/views/Main";
import Services from "../components/views/Services";

const HomePage = () => {
  return (
    <>
      <MainView />
      <Featured />
      <Services />
      <Contact />
    </>
  );
};
export default HomePage;
