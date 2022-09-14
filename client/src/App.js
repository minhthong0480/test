//import pages
import NavBar from "./pages/NavBar";
import AddStudentPage from "./pages/AddStudentPage";
import TeacherPage from "./pages/TeacherPage";
import StudentProfilePage from "./pages/StudentProfilePage";
import Home from "./components/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";

//import dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import StudentList from "./pages/StudentList";
import EditStudent from "./components/EditStudent";
import TeacherAccount from "./components/teacher-manage/TeacherAccount";
import AddStudentScore from "./components/teacher-manage/AddStudentScore";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ToastContainer position="top-center" autoClose={3000} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/add-student" element={<AddStudentPage />} />
          <Route exact path="/edit-student/:studentId" element={<EditStudent />} />
          <Route exact path="/update-score/:studentId" element={<AddStudentScore />} />
          <Route exact path="/teacher-page" element={<TeacherPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/student-profile" element={<StudentProfilePage />} />
          <Route exact path="/student-list" element={<StudentList />} />
          {/* <Route exact path="/teacher-account" element={<TeacherAccount />} /> */}
          <Route exact path="/update-teacher/:teacherId" element={<TeacherAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
