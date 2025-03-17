import { useState, useEffect } from "react";
import { fetchPatients } from "../services/usersService";
import { Patient } from "../utils/types";
import axios from "axios";

export const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.message);
          throw new Error(
            error.response?.data?.message || "API request failed"
          );
        } else if (error instanceof Error) {
          console.error("General error:", error.message);
          throw new Error(error.message);
        } else {
          console.error("Unknown error:", error);
          throw new Error("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  return { patients, loading };
};
