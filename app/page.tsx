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
      <h1 style={{ fontSize: '3.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        🎯 Goods Hunter
      </h1>
      <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
        당신의 보물을 찾을 준비가 되셨나요?
      </p>
      
      {/* 여기에 검색창을 추가했습니다 */}
      <input 
        type="text" 
        placeholder="어떤 보물을 찾고 싶으신가요?" 
        style={{
          width: '300px',
          padding: '0.8rem 1.5rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'white',
          fontSize: '1rem',
          outline: 'none',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      />
    </main>
  );
}
