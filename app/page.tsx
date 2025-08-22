export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: '#0a3978', fontWeight: 800, fontSize: 32 }}>Chào mừng đến với dịch vụ xe sân bay!</h1>
      <p style={{ color: '#35507c', fontSize: 20, marginTop: 16 }}>Vui lòng chọn chức năng ở menu hoặc truy cập <a href="/xe-di-san-bay" style={{ color: 'orange', fontWeight: 700 }}>Trang đặt xe sân bay</a>.</p>
    </main>
  );
}
