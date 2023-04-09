import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SignIn from '../pages/Usuarios/SignIn';
import SignUp from '../pages/Usuarios/SignUp';
import Home from '../pages/Home';
import Confirmacao from '../pages/Usuarios/components/Confirmacao';
import ListCurso from "../pages/Cursos/list-cursos";
import AddCurso from "../pages/Cursos/add-curso";
import DeleteCurso from "../pages/Cursos/delete-curso";
import UpdateCurso from "../pages/Cursos/update-curso";
import PublicCurso from "../pages/Home/public-cursos";
import ListUsuarios from "../pages/Usuarios/list-usuarios";
import DeleteUsuario from "../pages/Usuarios/delete-usuario";
import UpdateUsuario from "../pages/Usuarios/update-usuario";
import Profile from "../pages/Usuarios/profile";
import ListAula from "../pages/Aulas/list-aula";
import AddAula from "../pages/Aulas/add-aula";
import DeleteAula from "../pages/Aulas/delete-aula";
import UpdateAula from "../pages/Aulas/update-aula";


//
export const Router = ()=>{
return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />}/>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/confirmacao" element={<Confirmacao />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/usuarios" element={<ListUsuarios />} />
      <Route path="/usuarios/delete/:id" element={<DeleteUsuario />} />
      <Route path="/usuarios/update/:id" element={<UpdateUsuario />} />
      
      <Route path="/cursos" element={<ListCurso />} />
      <Route path="/cursos/add" element={<AddCurso />} />
      <Route path="/cursos/delete/:id" element={<DeleteCurso />} />
      <Route path="/cursos/update/:id" element={<UpdateCurso />} />
      <Route path="/cursos/public" element={<PublicCurso />} />
      
      <Route path="/aulas/curso/:cursoId" element={<ListAula />} />
      <Route path="/aulas/add/curso/:cursoId" element={<AddAula />} />
      <Route path="/aulas/delete/:id" element={<DeleteAula />} />
      <Route path="/aulas/update/:id/curso/:cursoId" element={<UpdateAula />} />
    </Routes>
  </BrowserRouter>
)
}

export default Router