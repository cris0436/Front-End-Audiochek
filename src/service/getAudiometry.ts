
import { useNavigate } from "react-router-dom";

export function GetAudiometry() {
    const navigate = useNavigate();

    async function getAudiometryData(): Promise<any> {
        const apiUrl = import.meta.env.VITE_API_URL;
        const token = localStorage.getItem("token");

        try {
            if (!token) {
                console.error("No se encontró el token. Redirigiendo...");
                navigate("/");
                return null;
            }

            const response = await fetch(`${apiUrl}/audiometries/`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token.replace(/"/g, '')}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Error fetching audiometry data");
            }

            const rawData = await response.json();

            console.log(rawData);
            return rawData;
        } catch (error) {
            console.error("Error fetching audiometry data:", error);
            throw error;
        }
    }

    return { getAudiometryData };
}
