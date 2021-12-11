import "./App.css";
import Nav from "./components/nav";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Doctor from "./components/doctor/doctor";
import UpdateDoctor from "./components/doctor/updatedoctor";
import AddDoctor from "./components/doctor/adddoctors";
import Logout from "./components/logout";
import PageNotFound from "./components/pagenotfound";

import "bootstrap/dist/css/bootstrap.css";
import Admin from "./components/admin/admin";
import PatientHistory from "./components/patientHistory/patientHistory";
import AddPatientHistory from "./components/patientHistory/addPatientHistory";
import UpdatePatientHistory from "./components/patientHistory/updatePatientHistory";
import Treatment from "./components/treatment/treatment";
import UpdateTreatment from "./components/treatment/updateTreatment";
import AddTreatments from "./components/treatment/addTreatment";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/doctors/update/:id" component={UpdateDoctor} />
        <Route path="/doctors/add" component={AddDoctor} />
        <Route path="/doctors" component={Doctor} />
        <Route path="/patientHistories/add" component={AddPatientHistory} />
        <Route path="/patientHistories/update/:id" component={UpdatePatientHistory} />
        <Route path="/patientHistories" component={PatientHistory} />
        <Route path="/treatments/update/:tid" component={UpdateTreatment} />
        <Route path="/treatments/add" component={AddTreatments} />
        <Route path="/treatments" component={Treatment} />       
        <Route path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} />
        <Redirect exact path="/" to="/home" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;