import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import Product from "./pages/product/Product";
import Pricing from "./pages/pricing/Pricing";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import AppLayout from "./pages/applayout/AppLayout";
import Login from "./pages/login/Login";
import CityList from "./components/cityList/CityList";
import CountryList from "./components/countrylist/CountryList";
import City from "./components/city/City";
import Form from "./components/form/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to={"cities"} />} />
              <Route path="cities" element={<CityList />} />

              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
