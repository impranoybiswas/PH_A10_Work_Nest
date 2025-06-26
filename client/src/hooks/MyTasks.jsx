import axios from "axios";
import { useEffect, useState, useCallback, useContext } from "react";
import { AuthContext } from "../providers/Context";

export default function useMyTasks() {
  const [loadMyTasks, setLoadMyTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {user} = useContext(AuthContext);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/my-task/${user.email}`);
      setLoadMyTasks(res.data);
      setError(null);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("Failed to fetch tasks.");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { loadMyTasks, loading, error, fetchTasks };
}
