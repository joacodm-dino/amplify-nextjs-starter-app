"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [serverResponse, setServerResponse] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = 'https://3.84.21.18/80';;

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
