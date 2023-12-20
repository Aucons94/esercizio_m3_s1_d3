import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import NewWelcome from "./components/NewWelcome";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <Container>
        <MyNav />
        <NewWelcome />
      </Container>
      <BookList />
      <MyFooter />
    </>
  );
}

export default App;
