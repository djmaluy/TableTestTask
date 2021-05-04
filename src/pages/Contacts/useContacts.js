import { useEffect, useState } from "react";

export const useContacts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=8");
        const { results } = await response.json();
        setData(results);
        setError(false);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getContacts();
  }, []);
  return { data, isLoading, error };
};
