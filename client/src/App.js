import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PaginaInicial from "./components/paginaInicial";
import Detalles from "./components/Detalles";
import CrearReceta from "./components/CrearReceta";
import RecetaRegistrada from "./components/RecetaRegistrada";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={PaginaInicial} />
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/detalle/:id"} component={Detalles} />
        <Route exact path={"/crearReceta"} component={CrearReceta} />
        <Route exact path={"/recetaRegistrada"} component={RecetaRegistrada} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
