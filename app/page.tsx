import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [serverResponse, setServerResponse] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = 'http://3.84.21.18:80/'; // Deja la URL como está si no tienes una ruta específica

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
