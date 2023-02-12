import Header1 from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Body from "./Body/Body.js"

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
      desc2: "This is movie1 description2"
    },
    {
      title: "Movie3",
      desc: "This is movie3 description"
    },
    {
      title: "Movie4",
      desc: "This is movie4 description"
    }
  ]


  return(

  <div>

    <Header1/>

    
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