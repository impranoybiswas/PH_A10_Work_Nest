import axios from "axios";
import { useEffect, useState, useCallback } from "react";

export default function useTasks() {
  const [loadedTasks, setLoadedTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/tasks`);
      setLoadedTasks(res.data);
      setError(null);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("Failed to fetch tasks.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { loadedTasks, loading, error, fetchTasks };
}
