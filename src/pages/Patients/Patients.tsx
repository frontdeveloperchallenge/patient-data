import "./Patients.scss";
import { usePatients } from "../../hooks/usePatients";
import PatientCard from "../../components/PatientCard/PatientCard";
import { useState } from "react";
import { Patient } from "../../utils/types";
import { ToastContainer, Zoom } from "react-toastify";
import EditPatientModal from "../../components/EditPatientModal/EditPatientModal";
import { PATIENTS_PER_PAGE } from "../../utils/constants";
import { sortPatientsByDateDesc } from "../../utils/utilities";
import Loading from "../../components/Loading/Loading";

const Patients = () => {
  const getPatients = usePatients();
  const { patients, loading } = getPatients;

  // Since this app has no means to persist data, we’re storing the information in local storage for the time being.
  const storedPatientsJSON = localStorage.getItem("patients");
  const storedPatients = storedPatientsJSON && JSON.parse(storedPatientsJSON);
  const updatedPatients = storedPatients
    ? sortPatientsByDateDesc(storedPatients)
    : sortPatientsByDateDesc(patients);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [addPatient, setAddPatient] = useState<boolean>(false);

  const totalPages = Math.ceil(updatedPatients.length / PATIENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PATIENTS_PER_PAGE;

  const patientsPerPage = updatedPatients.slice(
    startIndex,
    startIndex + PATIENTS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleEdit = (patient: Patient) => {
    setSelectedPatient(patient);
    setOpenModal(true);
  };

  const handleSave = (updatedPatient: Patient) => {
    if (!addPatient) {
      setSelectedPatient(updatedPatient);
      const editedPatients = storedPatients.map((p: Patient) => {
        if (p.id?.toString() === updatedPatient.id?.toString()) {
          return updatedPatient;
        } else {
          return p;
        }
      });
      localStorage.setItem("patients", JSON.stringify(editedPatients));
    } else {
      const newPatient = { ...updatedPatient };
      const newPatientsList = [...storedPatients, newPatient];
      localStorage.setItem("patients", JSON.stringify(newPatientsList));
    }
    setSelectedPatient(null);
    setAddPatient(false);
  };

  const handleAdd = () => {
    setOpenModal(true);
    setAddPatient(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedPatient(null);
    setAddPatient(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className="header">
        <h1>Patient Data Management</h1>
      </section>

      {patientsPerPage ? (
        <div>
          <section className="pagination">
            <button onClick={handlePrev} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </button>
          </section>

          <section className="patients-container">
            <div className="add-patient-btn">
              <button onClick={handleAdd}>+</button>
            </div>

            {patientsPerPage.map((p: Patient, i: number) => (
              <PatientCard
                key={`${p.id}-${i}`}
                patient={p}
                onEdit={handleEdit}
              />
            ))}

            {openModal && (
              <EditPatientModal
                patient={selectedPatient!}
                onSave={handleSave}
                onClose={handleClose}
                addPatient={addPatient}
                patients={updatedPatients}
              />
            )}
          </section>
          <ToastContainer hideProgressBar transition={Zoom} />
        </div>
      ) : (
        <div className="no-data">No data to show.</div>
      )}
    </>
  );
};

export default Patients;
