import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'
import HomePage from './pages/HomePage/HomePage';
import Header from "./components/Header/Header";
import {QueryClient,QueryClientProvider} from 'react-query'
import CountryPage from "./pages/CountryPage/CountryPage";

const client = new QueryClient();



render(
  <QueryClientProvider client={client} >
    <Header />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path=":name" element={<CountryPage />}/>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);

