import "./EditPatientModal.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Patient } from "../../utils/types";
import { useEffect } from "react";
import { getMaxPatientId } from "../../utils/utilities";

interface EditModalProps {
  patient: Patient;
  patients: Patient [];
  onClose: () => void;
  onSave: (updatedPatient: Patient) => void;
  addPatient: boolean;
}

const patientSchema = z.object({
  id: z.string(),
  avatar: z.string().url("Invalid image URL"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  createdAt: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  website: z.string().url("Invalid website URL"),
});

const EditPatientModal = ({
  patient,
  patients,
  onClose,
  onSave,
  addPatient,
}: EditModalProps) => {

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Patient>({
    defaultValues: patient,
    resolver: zodResolver(patientSchema),
  });

  useEffect(() => {
    if (patient) {
      setValue("createdAt", patient.createdAt.slice(0, 10));
    }
  }, [patient, setValue]);

  const onSubmit = (data: Patient) => {
    try {
      onSave(data);
      toast.success(
        `Patient ${addPatient ? "added" : "updated"} successfully!`
      );
      onClose();
    } catch (error) {
      console.error("error", error);
      toast.error(`Error ${addPatient ? "adding" : "updating"} patient.`);
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h2>{addPatient ? "Add a" : "Edit"} Patient</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="hidden"
            {...register("id")}
            value={
              patient
                ? patient.id
                : (Number(getMaxPatientId(patients)) + 1).toString() // When adding a new patient, we assign them a new Id: maxId + 1
            }
          />

          <label>
            Avatar URL:
            <input type="text" {...register("avatar")} />
            {errors.avatar && <span>{errors.avatar.message}</span>}
          </label>

          <label>
            Name:
            <input type="text" {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}
          </label>

          <label>
            Join Date:
            <input {...register("createdAt")} type="date" />
            {errors.createdAt && <span>{errors.createdAt.message}</span>}
          </label>

          <label>
            Description:
            <textarea {...register("description")} />
            {errors.description && <span>{errors.description.message}</span>}
          </label>

          <label>
            Website:
            <input type="text" {...register("website")} />
            {errors.website && <span>{errors.website.message}</span>}
          </label>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPatientModal;
