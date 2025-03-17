import { useEffect, useState } from "react";
import { checkImageUrl } from "../../services/images";
import { getColor, getInitials } from "../../utils/utilities";
import "./Avatar.scss";

const Avatar = ({ name, avatar }: { name: string; avatar: string | null }) => {
  const initialsAvatar = getInitials(name);
  const backgroundColor = getColor(name);
  const [patientAvatar, setPatientAvatar] = useState<string | null>(null);

  useEffect(() => {
    // Check if image url is valid. If not, we show a default avatar with patient's initials
    checkImageUrl(avatar).then((loaded) => {
      if (loaded) {
        setPatientAvatar(avatar);
      } else {
        setPatientAvatar(initialsAvatar);
      }
    });
  }, [initialsAvatar, avatar]);

  return (
    <>
      {patientAvatar !== initialsAvatar ? (
        <img src={patientAvatar!} alt={name} className="patient-avatar" />
      ) : (
        <div
          className="patient-avatar initials"
          style={{ backgroundColor: backgroundColor }}
        >
          <h3>{initialsAvatar}</h3>
        </div>
      )}
    </>
  );
};

export default Avatar;
