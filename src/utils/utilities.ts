import { AVATAR_COLORS } from "./constants";
import { Patient } from "./types";

/** Capitalize first letter of words - used for patient's name property */
export function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

/** Get patient's initials to use as their avatar if their image URL is not available */
export function getInitials(name: string) {
  const words = name.split(" ");
  return words
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/** Assign different colors from the colors palette to user initialsAvatar backgrounds */
export function getColor(name: string) {
  const index = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

/** Find the max patient id, so that we assign a new unused one for newly created patients */
export function getMaxPatientId(patients: Patient[]): string {
  const maxId = patients.reduce((max, p) => {
    return parseInt(p.id) > parseInt(max) ? p.id : max;
  }, patients[0].id);

  return maxId;
}

/** Sort patients by createdAt property, in descendant order - this allows users to see newly created patients first */
export function sortPatientsByDateDesc(patients: Patient[]): Patient[] {
  return patients.sort((a, b) => {
    const dateA = Date.parse(a.createdAt);
    const dateB = Date.parse(b.createdAt);

    return dateB - dateA;
  });
}
