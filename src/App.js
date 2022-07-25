import Header from "./components/Header/Header";
import  {createGlobalStyle} from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppContext from "./context/AppContext";
import {lazy, Suspense} from "react";

const Lists = lazy(()=> import(/* webpackChunkName:"Lists"*/'./pages/Lists'));
const ListDetail = lazy(()=> import(/* webpackChunkName:"ListDetail"*/'./pages/ListDetail'));
const ListForm = lazy(()=> import(/* webpackChunkName:"ListForm"*/'./pages/ListForm'))

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
                <Suspense fallback={<div>Loading ...</div>}>
                    <AppContext>
                        <Routes>
                            <Route path='/' element={ <Lists/>}/>
                            <Route path='/list/:listId/new' element={<ListForm/>}/>
                            <Route path='/list/:listId' element={<ListDetail/>}/>
                        </Routes>
                    </AppContext>
                </Suspense>
            </BrowserRouter>
        </>
  );
}

export default App;
