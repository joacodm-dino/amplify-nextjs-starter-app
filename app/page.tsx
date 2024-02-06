// Importa React y otras dependencias directamente de 'react' en lugar de importarlas de manera dinámica
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

// @ts-ignore
// Indica a Next.js que este componente debe ser tratado como del lado del cliente
export const __NEXTJS_SSG_SUPPORT__ = true;

export default function Home() {
  const [serverResponse, setServerResponse] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = 'http://3.84.21.18:80/';

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
