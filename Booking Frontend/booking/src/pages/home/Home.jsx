import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import PropList from "../../components/propList/PropList"



const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropList />
        </div>
    </div>
  )
}

export default Home