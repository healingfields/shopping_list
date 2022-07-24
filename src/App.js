import Header from "./components/Header/Header";
import  {createGlobalStyle} from "styled-components";
import Lists from "./pages/Lists";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListDetail from "./pages/ListDetail";
import ListForm from "./pages/ListForm";
import {ListsContextProvider} from "./context/ListsContext";

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
            <BrowserRouter>
                <Header/>
                <ListsContextProvider>
                    <Routes>
                        <Route path='/' element={ <Lists/>}/>
                        <Route path='/list/:listId/new' element={<ListForm/>}/>
                        <Route path='/list/:listId' element={<ListDetail/>}/>
                    </Routes>
                </ListsContextProvider>
            </BrowserRouter>
        </>
  );
}

export default App;
