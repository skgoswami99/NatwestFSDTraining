import Header1 from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Body from "./Body/Body.js";
import Profile from "./Profile/Profile.js"; 
import MaterialTest from "./MaterialTest/MaterialTest.js"
import BasicExample from "./BasicExample/BasicExample"

function App()
{

  const TestData =
  [
    {
      title: "Movie1",
      desc: "This is movie1 description",
      desc1: "This is movie1 description1"
    },
    {
      title: "Movie2",
      desc: "This is movie2 description",
      desc1: "This is movie1 description2"
    },
    {
      title: "Movie3",
      desc: "This is movie3 description",
      desc1: "This is movie1 description3"
    },
    {
      title: "Movie4",
      desc: "This is movie4 description",
      desc1: "This is movie1 description4"
    }
  ]
  return(

    
  <div>

    <Header1/>

    <MaterialTest/>

    <BasicExample/>


    <Profile/>

    {/* <Dashboard/> */}

    {/* <Body title="movie1" desc="Movie Description"/>
    <Body title="movie2" desc="Movie Description"/>
    <Body title="movie3" desc="Movie Description"/>
    <Body title="movie4" desc="Movie Description"/> */}

    {
      TestData.map(testdataobj => <Body title={testdataobj.title} desc={testdataobj.desc} desc1={testdataobj.desc1}/>)
    }

    
    <Footer/>
    
  </div>

  );
}

export default App;