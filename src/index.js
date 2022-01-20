import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css'
import HomePage from './pages/HomePage/HomePage';

import {QueryClient,QueryClientProvider} from 'react-query'

const client = new QueryClient();



render(
  <QueryClientProvider client={client} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);

