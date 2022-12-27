import {
  Landing,
  Error,
  Register,
  Dashboard,
  AddJob,
  AllJobs,
  Stats,
  SharedLayout,
  Profile,
  ProtectedRoute,
} from "./pages";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// const Button = styled.button`
//   background: red;
//   color: white;
//   font-size: 1rem;
// `;
// const Button2 = styled.button`
//   background: blue;
//   color: white;
//   font-size: 1rem;
// `;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
