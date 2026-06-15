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
      <p style={{ 
        padding: '0.5rem 1.5rem', 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        backdropFilter: 'blur(4px)', 
        borderRadius: '9999px' 
      }}>
        당신의 보물을 찾을 준비가 되셨나요?
      </p>
    </main>
  );
}
