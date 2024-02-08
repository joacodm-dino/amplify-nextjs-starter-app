import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type ApiResponse = {
  // ajusta el tipo de datos según la respuesta real de tu servidor
  message: string;
}

export const getServerSideProps = (async () => {
  // Realizar la solicitud fetch al servidor
  const res = await fetch('http://3.84.21.18:80/')
  const api: ApiResponse = await res.json()

  // Retornar los datos como props
  return { props: { api } }
})satisfies GetServerSideProps<{ api: ApiResponse }>

export default function Page({
  api,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <p>Server Response: {api.message}</p>
    </main>
  );
}
