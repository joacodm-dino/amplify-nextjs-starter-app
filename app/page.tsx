// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

// type ApiResponse = {
//   // ajusta el tipo de datos según la respuesta real de tu servidor
//   message: string;
// }

// export const getServerSideProps = (async () => {
//   // Realizar la solicitud fetch al servidor
//   const res = await fetch('http://3.84.21.18:80/')
//   const api: ApiResponse = await res.json()

//   // Retornar los datos como props
//   return { props: { api } }
// })satisfies GetServerSideProps<{ api: ApiResponse }>

// export default function Page({
//   api,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <main>
//       <p>Server Response: {api.message}</p>
//     </main>
//   );
// }


async function getData() {
  const res = await fetch('http://54.174.190.209:80');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  const contentType = res.headers.get('Content-Type');
  
  if (contentType && contentType.includes('application/json')) {
    return res.json();
  } else {
    return res.text(); // or res.blob() if you want to handle binary data
  }
}
 
export default async function Page() {
  try {
    const data = await getData();
    
    // Check if data is JSON or HTML and handle accordingly
    if (typeof data === 'object') {
      // Handle JSON data
    } else {
      // Handle HTML data
      console.log('Received HTML:', data);
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }

  return <main></main>;
}


// async function getData() {
//   const url = 'http://54.174.190.209:80';

//   try {
//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     return res.text();
//   } catch (error) {
//     throw new Error(`Error fetching HTML data from ${url}: ${error.message}`);
//   }
// }

// export default async function Page() {
//   try {
//     const htmlData = await getData();
//     console.log('Received HTML:', htmlData);
//     // Puedes hacer más cosas con el HTML si es necesario
//   } catch (error) {
//     console.error('Error fetching HTML data:', error.message);
//   }

//   return <main></main>;
// }