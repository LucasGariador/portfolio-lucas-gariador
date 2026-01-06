import { ImageResponse } from 'next/og';

export const runtime = 'edge'; // Crucial para que sea rápido

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get('title') || 'Mi Portfolio de Programador';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a', // Fondo oscuro tipo VS Code
          color: 'white',
          padding: '40px',
        }}
      >
        <div tw="flex flex-col items-center">
          <h1 tw="text-6xl font-bold mb-4">{title}</h1>
          <p tw="text-2xl text-blue-400">Fullstack Developer | React & Next.js</p>
        </div>
        <div tw="absolute bottom-10 right-10 flex items-center">
          <span tw="text-xl opacity-50">tuweb.com</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}