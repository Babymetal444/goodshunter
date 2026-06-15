export default function Page() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: 'linear-gradient(135deg, #4c1d95, #312e81, #e11d48)', 
      color: 'white', 
      fontFamily: 'sans-serif' 
    }}>
      {/* 검색창(이전 단계) */}
      <input 
        type="text" 
        placeholder="어떤 보물을 찾고 싶으신가요?" 
        style={{
          width: '300px', padding: '0.8rem 1.5rem', marginBottom: '3rem',
          borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'white', fontSize: '1rem', outline: 'none'
        }}
      />

      {/* 굿즈 카드 디자인 */}
      <div style={{
        width: '280px',
        padding: '1.5rem',
        borderRadius: '24px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease'
      }}>
      {/* 영화 굿즈 카드 디자인 */}
          <div style={{
            width: '320px',
            padding: '2rem',
            borderRadius: '28px',
            backgroundColor: 'rgba(25, 25, 25, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4)',
            fontFamily: 'serif'
          }}>
            <div style={{ 
              height: '180px', 
              backgroundColor: 'rgba(0,0,0,0.3)', 
              borderRadius: '20px', 
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              border: '2px solid rgba(255, 255, 255, 0.1)'
            }}>
              🎬
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.8rem', textAlign: 'center', color: 'white' }}>
              듄: 파트 2 아트북
            </h2>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1.5rem', lineHeight: '1.5', textAlign: 'center' }}>
              아라키스의 장엄한 풍경과 디자인의 정수를 담은 시각적 보물.
            </p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>🔥 검색 트렌드</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#fb923c' }}>상위 1%</span>
              </div>
            </div>
          </div>
    </main>
  );
}
