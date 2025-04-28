
interface ImportMeta {
  env: {
    VITE_API_URL: string;
  };
}

export async function getAudiometryData(): Promise<any> {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log("API URL:", apiUrl);
    

    const response = await fetch(`${apiUrl}/audiometries`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error fetching audiometry data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching audiometry data:", error);
    throw error;
  }
}