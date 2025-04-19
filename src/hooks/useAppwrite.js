import { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";

/**
 * Custom hook to fetch documents from Appwrite
 * @param {string} collectionId - Appwrite collection ID
 * @returns {Object} { data, error, loading }
 */
const useAppwrite = (collectionId) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!collectionId) return;

    const client = new Client()
      .setEndpoint(import.meta.env.VITE_BASE_URL)
      .setProject(import.meta.env.VITE_PROJECT_ID);

    const database = new Databases(client);

    const fetchData = async () => {
      try {
        const response = await database.listDocuments(
          import.meta.env.VITE_DATABASE_ID,
          collectionId
        );
        setData(response.documents);
      } catch (err) {
        console.error("Appwrite fetch error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionId]);

  return { data, error, loading };
};

export default useAppwrite;
