import Navbar from "./Navbar";
import Hero from "./Hero";
import PostContainer from "./PostContainer";
import Footer from "./Footer";

const Home = () => {
  return (
  <>
  <div id="home" className=''>
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <PostContainer id="1" title="Últimos Posts" />
      <PostContainer id="2" title="Guías" />
      <PostContainer id="3" title="Consejos" />
      <PostContainer id="4" title="Sección sin contenido" />
      <Footer />
    </main>
  </div>
  </>
)};

export default Home;