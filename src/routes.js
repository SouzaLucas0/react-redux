import ParginaPadrao from 'components/PaginaPadrao';
import Home from 'Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ParginaPadrao />}>
              <Route index element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}