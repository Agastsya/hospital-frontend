import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientList from "./components/PatientList";
import AddPatient from "./components/AddPatient";
import TicketBooking from "./components/ticketBooking/TicketBooking";
import Header from "./components/header/Header";
import "./App.css";
import LeftNavbar from "./components/leftNavbar/LeftNavbar";
import BedAvailability from "./components/bedAvailibility/BedAvailability";
import DoctorSchedule from "./components/doctorSchedule/DoctorSchedule";
import PatientHealthRecord from "./components/patientHealthRecord/PatientHealthRecord";
import QueueStatus from "./components/queueStatus/QueueStatus";

function App() {
  return (
    <Router>
      <div className="App mainSection">
        <Header />
        <Routes>
          <Route path="/doctorschedule" element={<DoctorSchedule />} />
          <Route path="/" element={<AddPatient />} />
          <Route path="/bedavailibility" element={<BedAvailability />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/ticket-booking" element={<TicketBooking />} />
          <Route
            path="/patienthealthrecord"
            element={<PatientHealthRecord />}
          />
          <Route path="/queue-status" element={<QueueStatus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
