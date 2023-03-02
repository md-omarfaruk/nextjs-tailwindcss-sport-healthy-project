import Head from "next/head";
import Banner from "./components/banner";
import HeaderNavbar from "./components/headerNavbar";
import Main from "./components/main";

const Home = () => {
  return <div className="font-poppins lg:py-[51px] lg:bg-[url('../public/images/bg.png')]">
    <HeaderNavbar></HeaderNavbar>
    <Banner></Banner>
    <Main></Main>
  </div>;
};
export default Home;