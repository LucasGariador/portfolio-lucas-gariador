import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || 'Lucas Gariador';
    const role = searchParams.get('role') || 'GAME PROGRAMMER';

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
            backgroundColor: '#050505',
            position: 'relative',
            fontFamily: 'monospace',
          }}
        >
          {/* Fondo de Cuadrícula (Grid) Estilo Desarrollo */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          {/* Glow Central */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              width: '600px',
              height: '600px',
              backgroundColor: 'rgba(59, 130, 246, 0.15)',
              filter: 'blur(100px)',
              borderRadius: '100%',
            }}
          />

          {/* Contenedor Principal (HUD) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '60px 100px',
              border: '2px solid rgba(59, 130, 246, 0.5)',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderRadius: '4px',
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)',
              zIndex: 20,
            }}
          >
            <h1
              style={{
                display: 'flex',
                fontSize: '85px',
                fontWeight: '900',
                color: '#fff',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '-2px',
              }}
            >
              {name}
            </h1>
            
            <div style={{ display: 'flex', width: '120%', height: '2px', backgroundColor: '#3b82f6', margin: '20px 0', opacity: 0.5 }} />
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ display: 'flex', color: '#4ade80', fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px' }}>
                {'>'} {role}
              </span>
              <div style={{ display: 'flex', width: '12px', height: '24px', backgroundColor: '#4ade80', marginLeft: '10px', opacity: 0.8 }} />
            </div>
          </div>

          {/* Esquina: HP Bar / Level */}
          <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '50px', left: '60px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px', marginBottom: '8px' }}>
              <span style={{ display: 'flex', color: '#3b82f6', fontSize: '18px', fontWeight: 'bold' }}>HP</span>
              <span style={{ display: 'flex', color: '#3b82f6', fontSize: '18px' }}>100 / 100</span>
            </div>
            <div style={{ display: 'flex', width: '250px', height: '12px', backgroundColor: '#1e293b', border: '1px solid #3b82f6' }}>
              <div style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#3b82f6' }} />
            </div>
          </div>

          {/* Esquina: Status */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', position: 'absolute', top: '50px', right: '60px' }}>
            <span style={{ display: 'flex', color: '#4ade80', fontSize: '20px', fontWeight: 'bold' }}>SYSTEM: ONLINE</span>
            <span style={{ display: 'flex', color: '#64748b', fontSize: '14px' }}>ENGINE: Unity3D</span>
          </div>

          {/* Footer Decorativo */}
          <div style={{ display: 'flex', position: 'absolute', bottom: '50px', width: '100%', padding: '0 60px', justifyContent: 'space-between', opacity: 0.6 }}>
            <span style={{ display: 'flex', color: '#94a3b8', fontSize: '16px' }}>CORE_INIT: SUCCESSFUL</span>
            <span style={{ display: 'flex', color: '#3b82f6', fontSize: '16px', fontWeight: 'bold' }}>PRESS START TO EXPLORE</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Error al generar imagen`, { status: 500 });
  }
}