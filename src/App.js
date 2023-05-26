import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './components/Home/Home';
import CreateBlog from './components/Dashbord/CreateBlog/CreateBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalBlog from './components/Home/PersonalBlog/PersonalBlog';
import Navbarr from './components/Home/Common/Navbarr/Navbarr';
import Footer from './components/Home/Common/Footer/Footer';
import Detail from './components/Home/PersonalBlog/Detail/Detail';
import CreateJapaneseBlog from './components/Dashbord/CreateJapaneseBlog/CreateJapaneseBlog';
import JapaneseBlog from './components/Home/JapaneseBlog/JapaneseBlog';
import JapaneseDetail from './components/Home/JapaneseBlog/JapaneseDetail/JapaneseDetail';
import Login from './components/Authentication/Login/Login';
import Registration from './components/Authentication/Registration/Registration';
import Reset from './components/Authentication/Reset/Reset';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import ProtectedRoute from './components/Authentication/ProtectedRoute/ProtectedRoute';
import Dashbord from './components/Dashbord/Dashbord';
import NotFound from './components/Home/NotFound/NotFound';
import DeletePersonalBlog from './components/Dashbord/DeletePersonalBlog/DeletePersonalBlog';
import DeleteJapaneseBlog from './components/Dashbord/DeleteJapaneseBlog/DeleteJapaneseBlog';
import CreateAdmin from './components/Dashbord/CreateAdmin/CreateAdmin';
import Admin from './components/Authentication/Admin/Admin';
import User from './components/Dashbord/User/User';



function App() {
  return (
    <div className="App">
        <AuthProvider>
          <BrowserRouter>
            {/* <Navbarr></Navbarr> */}
              <Routes>
                  <Route path='/' element={<Home></Home>}></Route>
                  
                  <Route path='/blog' element={<PersonalBlog/>}></Route>
                  <Route path='/japaneseblog' element={<JapaneseBlog/>}></Route>
                  <Route path='/blog/:detail' element={<ProtectedRoute><Detail></Detail></ProtectedRoute>}></Route>
                  <Route path='/japaneseblog/:japanesedetail' element={<ProtectedRoute><JapaneseDetail></JapaneseDetail></ProtectedRoute>}></Route>
                  {/* Authintication  */}
                  <Route path='/login' element={<Login></Login>}></Route>
                  <Route path='/registration' element={<Registration></Registration>}></Route>
                  <Route path='/reset' element={<Reset></Reset>}></Route>
                  {/* Dashbord  */}
                    <Route path='/dashbord' element={<Admin><Dashbord></Dashbord></Admin>}>
                        <Route path='/dashbord/createblog' element={<CreateBlog></CreateBlog>}></Route>
                        <Route path='/dashbord/createjapaneseblog' element={<CreateJapaneseBlog></CreateJapaneseBlog>}></Route>
                        <Route path='/dashbord/deletePersonalBlog' element={<DeletePersonalBlog></DeletePersonalBlog>}></Route>
                        <Route path='/dashbord/japaneseBlog' element={<DeleteJapaneseBlog></DeleteJapaneseBlog>}></Route>
                        <Route path='/dashbord/user' element={<User></User>}></Route>
                        <Route path='/dashbord/admin' element={<CreateAdmin></CreateAdmin>}></Route>
                    </Route>
                  {/* page not Found  */}
                  <Route  path="/*" element={<NotFound></NotFound>} /> 
              </Routes>
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
