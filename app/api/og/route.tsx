import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || 'Lucas Gariador';
    const role = searchParams.get('role') || 'Game Programmer';

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
            backgroundColor: '#0a0a0a',
            color: 'white',
            fontFamily: 'monospace',
            position: 'relative',
          }}
        >
          {/* Fondo con efecto de profundidad */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0a0a0a 100%)',
            }}
          />

          {/* Marco tipo HUD - El contenedor principal del texto */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '4px solid #3b82f6',
              padding: '60px',
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: '20px',
              zIndex: 10,
            }}
          >
            <h1
              style={{
                display: 'flex',
                fontSize: '80px',
                fontWeight: '900',
                margin: 0,
                color: '#fff',
                textShadow: '0 0 20px #3b82f6',
              }}
            >
              {name}
            </h1>
            
            <div style={{ display: 'flex', width: '100%', height: '4px', backgroundColor: '#3b82f6', margin: '20px 0' }} />
            
            <p
              style={{
                display: 'flex',
                fontSize: '32px',
                color: '#4ade80',
                fontWeight: 'bold',
                margin: 0,
                letterSpacing: '4px',
              }}
            >
              {'>'} {role.toUpperCase()} _
            </p>
          </div>

          {/* Stats Esquina Superior Izquierda */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: '40px',
              left: '40px',
            }}
          >
            <span style={{ display: 'flex', color: '#3b82f6', fontSize: '20px', fontWeight: 'bold' }}>LVL: 99</span>
            <div style={{ display: 'flex', width: '120px', height: '8px', backgroundColor: '#1f2937', marginTop: '8px' }}>
              <div style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#3b82f6' }} />
            </div>
          </div>

          {/* Stats Esquina Superior Derecha */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              position: 'absolute',
              top: '40px',
              right: '40px',
            }}
          >
            <span style={{ display: 'flex', color: '#4ade80', fontSize: '20px', fontWeight: 'bold' }}>STATUS: READY</span>
            <span style={{ display: 'flex', color: '#6b7280', fontSize: '16px' }}>Ping: 1ms</span>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: '40px',
              width: '100%',
              padding: '0 60px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', width: '12px', height: '12px', backgroundColor: '#ef4444', borderRadius: '50%', marginRight: '10px' }} />
              <span style={{ display: 'flex', color: '#9ca3af', fontSize: '18px' }}>LIVE PORTFOLIO</span>
            </div>
            <span style={{ display: 'flex', color: '#3b82f6', fontSize: '18px', fontWeight: 'bold' }}>lucasgariador.dev</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Error: ${e.message}`, { status: 500 });
  }
}