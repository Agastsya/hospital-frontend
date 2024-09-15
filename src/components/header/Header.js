import React from "react";
import "./Header.css";
import { jsPDF } from "jspdf"; // Import jsPDF

const Header = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Patient Record", 10, 10);

    // Add patient information
    doc.setFontSize(12);
    doc.text("Patient Information", 10, 30);
    doc.text("Name: John Doe", 10, 40);
    doc.text("Age: 45", 10, 50);
    doc.text("Gender: Male", 10, 60);
    doc.text("Patient ID: 123456789", 10, 70);

    // Add treatment information
    doc.text("Treatment Information", 10, 90);
    doc.text("Admission Date: 12th September 2024", 10, 100);
    doc.text("Discharge Date: 20th September 2024", 10, 110);
    doc.text("Doctor: Dr. Jane Smith", 10, 120);
    doc.text("Treatment: Heart Surgery", 10, 130);

    // Add cost breakdown
    doc.text("Cost Breakdown", 10, 150);
    doc.text("Surgery Cost: $10,000", 10, 160);
    doc.text("Medicines: $2,000", 10, 170);
    doc.text("Hospital Stay (8 days): $4,000", 10, 180);
    doc.text("Total Cost: $16,000", 10, 190);

    // Add a note at the bottom
    doc.setFontSize(10);
    doc.text(
      "Note: All costs are subject to change based on final billing.",
      10,
      210
    );

    // Save the PDF
    doc.save("patient_record.pdf");
  };

  return (
    <header className="headerClass">
      <div className="heading">
        <h1>Hospital Management System</h1>
      </div>
      <div>
        {/* Add the button to download PDF */}
        <button onClick={downloadPDF}>Download Patient Record</button>
      </div>
    </header>
  );
};

export default Header;
