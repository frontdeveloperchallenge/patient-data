import "./PatientCard.scss";
import { useState } from "react";
import { Patient } from "../../utils/types";
import { capitalizeWords } from "../../utils/utilities";
import Avatar from "../Avatar/Avatar";
import EditButton from "../EditButton/EditButton";
import Button from "../Button/Button";

interface PatientCardProps {
  patient: Patient;
  onEdit: (patient: Patient) => void;
}

const PatientCard = ({ patient, onEdit }: PatientCardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { avatar, name, description, website, createdAt } = patient;
  const noInformation = "N/A";

  return (
    <>
      <article className="patient-card">
        <EditButton onClick={() => onEdit(patient)} />
        <Avatar name={name ? name : noInformation} avatar={avatar} />

        <div className="patient-info">
          <h2>{name ? capitalizeWords(name).trim() : noInformation}</h2>
          <p className="patient-date">Joined: {createdAt.slice(0, 10)}</p>

          <Button
            text={expanded ? "Show less" : "Show more"}
            onClick={() => setExpanded(!expanded)}
          />

          {expanded && (
            <div className="patient-details">
              <h3>Patient Description</h3>
              <p>{description.trim() ? description : noInformation}</p>
              <a href={website} target="_blank" rel="noopener noreferrer">
                Visit patient website
              </a>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default PatientCard;
