import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorFallback from "./ErrorFallback/ErrorFallback";
import Header from "./Header/Header";
// import ContactList from "./ContactList/ContactList";
// import AddContact from "./AddContact/AddContact";
// import Register from "./Register/Register";
// import Login from "./Login/Login";
const ContactList = React.lazy(() => import("./ContactList/ContactList"));
const AddContact = React.lazy(() => import("./AddContact/AddContact"));
const Login = React.lazy(() => import("./Login/Login"));
const Register = React.lazy(() => import('./Register/Register'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {  }}>
          <Suspense fallback={<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}>
            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/addcontact" element={<AddContact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;