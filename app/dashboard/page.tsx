"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const API_BASE = "https://beta.power-hub.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/chargers?includeOffline=true`,
          {
            method: "GET",
            credentials: "include", // 🔥 IMPORTANT
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome to your dashboard!</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
