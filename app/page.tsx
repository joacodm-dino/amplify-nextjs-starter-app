import { GetServerSideProps, InferGetServerSidePropsType } from 'next';


type ApiResponse = {
  // ajusta el tipo de datos según la respuesta real de tu servidor
  message: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Realizar la solicitud fetch al servidor
    const apiUrl = 'http://3.84.21.18:80/';
    const res = await fetch(apiUrl);
    const data: ApiResponse = await res.json();

    // Retornar los datos como props
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    // Manejar errores y retornar un objeto de props vacío o un objeto de error
    return {
      props: {
        error: 'Error fetching data',
      },
    };
  }
};

function Page({
  data,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Server Response: {data.message}</p>
      )}
    </main>
  );
}

export default Page;