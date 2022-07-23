import Header from "./components/Header/Header";
import  {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: monospace;
  }`;

function App() {
    return(
        <>
            <GlobalStyle />
            <Header/>
        </>
  );
}

export default App;
