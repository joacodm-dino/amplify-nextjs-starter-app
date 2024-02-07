"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [serverResponse, setServerResponse] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = 'ec2-54-164-180-8.compute-1.amazonaws.com:8080/api';

    fetch(apiUrl)
      .then(response => response.text())
      .then(data => setServerResponse(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <main className={styles.main}>
      {/* ... (resto de tu código) */}

      <div>
        <h2>Respuesta del servidor EC2:</h2>
        {serverResponse && <p>{serverResponse}</p>}
      </div>
    </main>
  );
}
