"use client";


import React, { useCallback } from "react";
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  // State cho chatbot floating
  const [chatOpen, setChatOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { from: 'bot', text: 'Xin chào, tôi có thể giúp bạn điều gì?' }
  ]);
  const [input, setInput] = React.useState('');
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(msgs => [...msgs, { from: 'user', text: input }]);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.' }]);
    }, 700);
    setInput('');
  };

  // ...existing code...
  // Scroll to booking form
  const scrollToBookingForm = useCallback(() => {
    const el = document.getElementById('booking-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <main style={{ background: '#fdf8e3', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '48px 0 24px 0', background: 'none' }}>
        <h1 style={{ color: '#0a3978', fontWeight: 800, fontSize: 32, marginBottom: 12, fontFamily: 'Segoe UI, Roboto, Arial, sans-serif', letterSpacing: 0.2, textTransform: 'uppercase' }}>
          DỊCH VỤ XE ĐƯA ĐÓN SÂN BAY NỘI BÀI CHUYÊN NGHIỆP
        </h1>
        <div style={{ color: '#35507c', fontSize: 22, marginBottom: 28, fontWeight: 500 }}>
          An tâm mọi hành trình – Giá tốt, uy tín, phục vụ 24/7
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18 }}>
          <span style={{ fontWeight: 700, fontSize: 28, color: '#222' }}>Hotline:</span>
          <a href="tel:0865910922" style={{ fontWeight: 800, fontSize: 32, color: 'orange', letterSpacing: 1, textDecoration: 'none', transition: 'color 0.2s' }} title="Gọi ngay">
            0865910922
          </a>
          <a href="https://zalo.me/0865910922" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', background: '#0a97f5', color: '#fff', fontWeight: 700, fontSize: 18, borderRadius: 24, padding: '8px 22px', textDecoration: 'none', marginLeft: 8, boxShadow: '0 2px 8px #0a97f522', transition: 'background 0.2s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="none" style={{ marginRight: 8 }}>
              <circle cx="16" cy="16" r="16" fill="#fff"/>
              <path d="M16 6C10.477 6 6 10.029 6 15.2c0 2.29 1.01 4.36 2.68 5.97-.12.44-.44 1.62-.51 1.89-.08.28.1.27.21.25.09-.02 1.41-.2 2.77-.38C13.13 23.95 14.54 24.2 16 24.2c5.523 0 10-4.03 10-9.2S21.523 6 16 6Z" fill="#0a97f5"/>
            </svg>
            Zalo
          </a>
        </div>
      </section>

      {/* ƯU ĐÃI ĐẶC BIỆT */}
      <section style={{ maxWidth: 1100, margin: '48px auto 0', padding: '0 16px' }}>
          <style>{`
            @keyframes blink {
              0%, 90%, 100% { color: #0a3978; text-shadow: 0 2px 8px #fff, 0 0 0 #ff9800; }
              45% { color: #ff9800; text-shadow: 0 2px 8px #ff9800, 0 0 8px #fff; }
            }
          `}</style>
          <h2 style={{
            color: '#0a3978',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 36,
            fontFamily: 'Playfair Display, serif',
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}>KHUYẾN MÃI ĐẶC BIỆT</h2>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Ưu đãi 1: Chào mừng */}
          <div style={{ background: '#e3f2fd', borderRadius: 16, boxShadow: '0 2px 8px #90caf933', padding: 32, minWidth: 260, maxWidth: 340, flex: '1 1 260px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'inherit', position: 'relative' }}>
            <span style={{ position: 'absolute', top: 18, left: 18 }}>
              {/* Icon: 🎉 */}
              <span style={{ fontSize: 32 }}>🎉</span>
            </span>
            <div style={{ fontWeight: 900, color: '#0a3978', fontSize: 18, marginBottom: 10, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 0.2, fontFamily: 'Playfair Display, serif' }}>Ưu đãi Chào mừng</div>
            <div style={{ fontWeight: 700, color: '#0a3978', fontSize: 18, marginBottom: 10, textAlign: 'center' }}>Giảm ngay 10% cho chuyến đi đầu tiên của bạn!</div>
            <div style={{ color: '#35507c', fontSize: 16, marginBottom: 18, textAlign: 'justify', fontWeight: 400, lineHeight: 1.7 }}>
             Là thành viên mới, bạn sẽ được nhận ưu đãi đặc biệt này. Tiết kiệm chi phí cho chuyến đi đầu tiên, bắt đầu trải nghiệm dịch vụ chuyên nghiệp của chúng tôi ngay hôm nay.
            </div>
            <button onClick={() => router.push('/xe-di-san-bay/form')} style={{
              background: '#0a3978',
              color: '#fff',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              fontSize: 20,
              border: 'none',
              borderRadius: 8,
              padding: '16px 0',
              width: '100%',
              cursor: 'pointer',
              marginTop: 'auto',
              boxShadow: '0 2px 8px #0a397822',
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              transition: 'background 0.2s',
            }}>ĐẶT XE NGAY</button>
          </div>
          {/* Ưu đãi 2: Khứ hồi */}
          <div style={{ background: '#fffde7', borderRadius: 16, boxShadow: '0 2px 8px #ffe08233', padding: 32, minWidth: 260, maxWidth: 340, flex: '1 1 260px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'inherit', position: 'relative' }}>
            <span style={{ position: 'absolute', top: 18, left: 18 }}>
              {/* Icon: 🧳 */}
              <span style={{ fontSize: 32 }}>🧳</span>
            </span>
            <div style={{ fontWeight: 900, color: '#0a3978', fontSize: 20, marginBottom: 10, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 0.2, fontFamily: 'Playfair Display, serif' }}>Ưu đãi Khứ hồi</div>
            <div style={{ fontWeight: 700, color: '#0a3978', fontSize: 18, marginBottom: 10, textAlign: 'center' }}>Bạn sẽ tiết kiệm ngay 50K khi đặt xe khứ hồi </div>
            <div style={{ color: '#35507c', fontSize: 16, marginBottom: 18, textAlign: 'justify', fontWeight: 400, lineHeight: 1.7 }}>
              Đặt xe khứ hồi tuyến Hà Nội - Nội Bài ngay hôm nay để nhận ưu đãi giảm giá trực tiếp 50.000 VNĐ. Tiết kiệm hơn cho cả hai chiều đi và về, giúp bạn có một hành trình trọn vẹn và kinh tế.
            </div>
            <button onClick={() => router.push('/xe-di-san-bay/form')} style={{
              background: '#ff9800',
              color: '#fff',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              fontSize: 20,
              border: 'none',
              borderRadius: 8,
              padding: '16px 0',
              width: '100%',
              cursor: 'pointer',
              marginTop: 'auto',
              boxShadow: '0 2px 8px #ff980022',
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              transition: 'background 0.2s',
            }}>ĐẶT XE KHỨ HỒI NGAY</button>
          </div>
          {/* Ưu đãi 3: Giờ vàng sáng */}
          <div style={{ background: '#e8f5e9', borderRadius: 16, boxShadow: '0 2px 8px #a5d6a733', padding: 32, minWidth: 260, maxWidth: 340, flex: '1 1 260px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'inherit', position: 'relative' }}>
            <span style={{ position: 'absolute', top: 18, left: 18 }}>
              {/* Icon: 🌅 */}
              <span style={{ fontSize: 32 }}>🌅</span>
            </span>
            <div style={{ fontWeight: 900, color: '#0a3978', fontSize: 18, marginBottom: 10, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 0.2, fontFamily: 'Playfair Display, serif' }}>Giờ vàng buổi sáng</div>
            <div style={{ fontWeight: 700, color: '#0a3978', fontSize: 18, marginBottom: 10, textAlign: 'center' }}>Đón sân bay về Hà Nội sáng sớm, chỉ từ 150K!</div>
            <div style={{ color: '#35507c', fontSize: 16, marginBottom: 18, textAlign: 'justify', fontWeight: 400, lineHeight: 1.7 }}>
              Bạn đáp chuyến bay sớm tại sân bay Nội Bài? Đặt xe từ 6h sáng đến 9h sáng, chỉ từ 150K để di chuyển về nội thành Hà Nội. Mức giá đặc biệt này giúp bạn tiết kiệm chi phí, khởi đầu ngày mới một cách thoải mái nhất.
            </div>
            <button onClick={() => router.push('/xe-di-san-bay/form')} style={{
              background: '#0a3978',
              color: '#fff',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              fontSize: 20,
              border: 'none',
              borderRadius: 8,
              padding: '16px 0',
              width: '100%',
              cursor: 'pointer',
              marginTop: 'auto',
              boxShadow: '0 2px 8px #0a397822',
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              transition: 'background 0.2s',
            }}>ĐẶT XE NGAY</button>
          </div>
        </div>
      </section>
  {/* Tại sao chọn chúng tôi */}
        <section style={{ maxWidth: 1200, margin: '48px auto 0', padding: '0 16px', background: 'none', borderRadius: 12 }}>
          <h2 style={{ color: '#0a3978', fontSize: 24, fontWeight: 800, textAlign: 'center', marginBottom: 32, fontFamily: 'Segoe UI, Roboto, Arial, sans-serif' }}>
           VÌ SAO KHÁCH HÀNG TIN TƯỞNG LỰA CHỌN CHÚNG TÔI?
          </h2>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'nowrap', justifyContent: 'center' }}>
            <div style={{ borderRadius: 16, boxShadow: '0 4px 24px #0a39780a', border: 'none', padding: '28px 24px', minWidth: 210, maxWidth: 260, flex: '0 1 23%', background: '#fff', textAlign: 'center', fontFamily: 'Segoe UI, Roboto, Arial, sans-serif' }}>
              <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 14, color: '#183b5c' }}>GIÁ NIÊM YẾT</div>
              <div style={{ color: '#35507c', fontSize: 16, lineHeight: 1.7, fontWeight: 400, textAlign: 'justify' }}>
                Giá cước công khai, minh bạch. Cam kết không phát sinh phụ phí, không tăng giá vào giờ cao điểm.
              </div>
            </div>
            <div style={{ borderRadius: 16, boxShadow: '0 4px 24px #0a39780a', border: 'none', padding: '28px 24px', minWidth: 210, maxWidth: 260, flex: '0 1 23%', background: '#fff', textAlign: 'center', fontFamily: 'Segoe UI, Roboto, Arial, sans-serif' }}>
              <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 14, color: '#183b5c' }}>LUÔN ĐÚNG HẸN</div>
              <div style={{ color: '#35507c', fontSize: 16, lineHeight: 1.7, fontWeight: 400, textAlign: 'justify' }}>
                Cam kết có mặt đúng hẹn. Luôn chủ động theo dõi lịch trình bay, đảm bảo đón khách kịp thời ngay cả khi chuyến bay bị hoãn.
              </div>
            </div>
            <div style={{ borderRadius: 16, boxShadow: '0 4px 24px #0a39780a', border: 'none', padding: '28px 24px', minWidth: 210, maxWidth: 260, flex: '0 1 23%', background: '#fff', textAlign: 'center', fontFamily: 'Segoe UI, Roboto, Arial, sans-serif' }}>
              <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 14, color: '#183b5c' }}>CHUYÊN NGHIỆP</div>
              <div style={{ color: '#35507c', fontSize: 16, lineHeight: 1.7, fontWeight: 400, textAlign: 'justify' }}>
                Đội ngũ tài xế được tuyển chọn kỹ lưỡng, luôn lịch sự, nhiệt tình, thông thạo mọi cung đường, lái xe an toàn tuyệt đối.
              </div>
            </div>
            <div style={{ borderRadius: 16, boxShadow: '0 4px 24px #0a39780a', border: 'none', padding: '28px 24px', minWidth: 210, maxWidth: 260, flex: '0 1 23%', background: '#fff', textAlign: 'center', fontFamily: 'Segoe UI, Roboto, Arial, sans-serif' }}>
              <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 14, color: '#183b5c' }}>PHỤC VỤ 24/7</div>
              <div style={{ color: '#35507c', fontSize: 16, lineHeight: 1.7, fontWeight: 400, textAlign: 'justify' }}>
                Sẵn sàng tư vấn, hỗ trợ đặt xe và giải đáp mọi thắc mắc của bạn qua hotline, Zalo và website mọi lúc mọi nơi.
              </div>
            </div>
          </div>
        </section>

      {/* Biểu mẫu đặt xe */}


  {/* ...existing code... */}

      {/* Bảng giá nhanh */}
      <section style={{ maxWidth: 900, margin: '48px auto 0', padding: '0 16px', background: '#fffbe6', borderRadius: 12 }}>
        <h2 style={{ color: '#0a3978', fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 28 }}>BẢNG GIÁ THAM KHẢO</h2>
        <table style={{ width: '100%', background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #0a39780a', borderCollapse: 'collapse', overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: '#eaf1fb', color: '#0a3978', fontWeight: 600 }}>
              <th style={{ padding: '12px 8px 12px 0', textAlign: 'left' }}>Tuyến</th>
              <th style={{ padding: '12px 4px', textAlign: 'center', minWidth: 60 }}>4 chỗ</th>
              <th style={{ padding: '12px 4px', textAlign: 'center', minWidth: 60 }}>7 chỗ</th>
              <th style={{ padding: '12px 4px', textAlign: 'center', minWidth: 60 }}>16 chỗ</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#f4f6fa' }}>
              <td style={{ padding: '12px 8px 12px 0', textAlign: 'left' }}>Hà Nội - Nội Bài</td>
              <td style={{ padding: '12px 4px', textAlign: 'center' }}>200.000đ</td>
              <td style={{ padding: '12px 4px', textAlign: 'center' }}>250.000đ</td>
              <td style={{ padding: '12px 4px', textAlign: 'center' }}>500.000đ</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px 12px 0', textAlign: 'left' }}>Nội Bài - Hà Nội</td>
              <td style={{ padding: '12px 4px', textAlign: 'center' }}>250.000đ</td>
              <td style={{ padding: '12px 4px', textAlign: 'center' }}>300.000đ</td>
              <td style={{ padding: '12px 4px', textAlign: 'center' }}>500.000đ</td>
            </tr>
            <tr style={{ background: '#f4f6fa' }}>
              <td style={{ padding: '12px 8px 12px 0', textAlign: 'left' }}>Khứ hồi (2 chiều)</td>
              <td style={{ padding: '12px 4px', textAlign: 'center' }}>450.000đ</td>
              <td style={{ padding: '12px 4px', textAlign: 'center' }}>550.000đ</td>
              <td style={{ padding: '12px 4px', textAlign: 'center' }}>900.000đ</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Đánh giá khách hàng */}
      <section style={{ maxWidth: 1100, margin: '48px auto 0', padding: '0 16px', background: '#fffbe6', borderRadius: 12 }}>
        <h2 style={{ color: '#0a3978', fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 28 }}>KHÁCH HÀNG HÀI LÒNG VỀ DỊCH VỤ CỦA CHÚNG TÔI</h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #0a39780a', padding: 24, minWidth: 220, flex: 1, maxWidth: 320 }}>
            <div style={{ fontWeight: 600, color: '#0a3978', marginBottom: 6 }}>Anh Tuấn - Khách hàng thường xuyên</div>
            <div style={{ fontStyle: 'italic', color: '#444' }}>
              <div style={{ fontStyle: 'italic', color: '#444', textAlign: 'justify' }}>
                “Dịch vụ tuyệt vời! Tôi thường xuyên đi công tác và luôn tin tưởng lựa chọn dịch vụ xe của các bạn. Xe luôn sạch sẽ, tài xế thân thiện và đặc biệt là cực kỳ đúng giờ. Tôi rất hài lòng!”
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #0a39780a', padding: 24, minWidth: 220, flex: 1, maxWidth: 320 }}>
            <div style={{ fontWeight: 600, color: '#0a3978', marginBottom: 6 }}>Chị Hà - Khách hàng gia đình</div>
            <div style={{ fontStyle: 'italic', color: '#444' }}>
              <div style={{ fontStyle: 'italic', color: '#444', textAlign: 'justify' }}>
                “Giá cả rất hợp lý, lại còn trọn gói nên cả nhà không phải lo lắng về phụ phí. Bác tài rất nhiệt tình, lái xe an toàn, giúp gia đình tôi có một chuyến đi thật thoải mái.”
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #0a39780a', padding: 24, minWidth: 220, flex: 1, maxWidth: 320 }}>
            <div style={{ fontWeight: 600, color: '#0a3978', marginBottom: 6 }}>Anh Minh - Khách hàng quốc tế</div>
            <div style={{ fontStyle: 'italic', color: '#444', marginBottom: 6 }}>
              <div style={{ fontStyle: 'italic', color: '#444', marginBottom: 6, textAlign: 'justify' }}>
                “I was very impressed with the service. The driver was professional, spoke basic English and was right on time. The car was clean and comfortable. Highly recommended!”
              </div>
            </div>
            <div style={{ color: '#888', fontSize: 14, fontStyle: 'italic' }}>
              <div style={{ color: '#888', fontSize: 14, fontStyle: 'italic', textAlign: 'justify' }}>
                (Dịch: "Tôi rất ấn tượng với dịch vụ. Lái xe chuyên nghiệp, nói được tiếng Anh cơ bản và rất đúng giờ. Xe sạch sẽ và thoải mái. Rất đáng giới thiệu!")
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #0a39780a', padding: 24, minWidth: 220, flex: 1, maxWidth: 320 }}>
            <div style={{ fontWeight: 600, color: '#0a3978', marginBottom: 6 }}>Chị Hương - Khách hàng đặt xe khẩn cấp</div>
            <div style={{ fontStyle: 'italic', color: '#444' }}>
              <div style={{ fontStyle: 'italic', color: '#444', textAlign: 'justify' }}>
                “Tôi cần đặt xe ra sân bay gấp vào lúc nửa đêm, rất may là tổng đài 24/7 của các bạn đã hỗ trợ rất nhanh chóng. Tài xế đến đúng hẹn, giúp tôi không bị lỡ chuyến bay. Dịch vụ quá tốt!”
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #0a39780a', padding: 24, minWidth: 220, flex: 1, maxWidth: 320 }}>
            <div style={{ fontWeight: 600, color: '#0a3978', marginBottom: 6 }}>Anh Long - Khách hàng mới</div>
            <div style={{ fontStyle: 'italic', color: '#444' }}>
              <div style={{ fontStyle: 'italic', color: '#444', textAlign: 'justify' }}>
                “Ban đầu tôi còn phân vân, nhưng sau khi trải nghiệm, tôi thấy rất hài lòng. Quy trình đặt xe đơn giản, nhân viên tư vấn nhiệt tình. Giá cũng rất rõ ràng, không có gì phải phàn nàn.”
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #0a39780a', padding: 24, minWidth: 220, flex: 1, maxWidth: 320 }}>
            <div style={{ fontWeight: 600, color: '#0a3978', marginBottom: 6 }}>Chú Bằng - Khách hàng lớn tuổi</div>
            <div style={{ fontStyle: 'italic', color: '#444' }}>
              <div style={{ fontStyle: 'italic', color: '#444', textAlign: 'justify' }}>
                “Chú đi lại nhiều nhưng ít khi thấy dịch vụ nào chu đáo như vậy. Lái xe giúp chú mang vác hành lý rất cẩn thận, thái độ luôn lễ phép. Cảm ơn các cháu rất nhiều.”
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #0a39780a', padding: 24, minWidth: 220, flex: 1, maxWidth: 320 }}>
            <div style={{ fontWeight: 600, color: '#0a3978', marginBottom: 6 }}>Anh Long - Khách hàng công ty</div>
            <div style={{ fontStyle: 'italic', color: '#444' }}>
              <div style={{ fontStyle: 'italic', color: '#444', textAlign: 'justify' }}>
                “Công ty tôi thường xuyên đặt xe của các bạn để đưa đón đối tác. Dịch vụ rất chuyên nghiệp, xe luôn mới và tài xế rất lịch sự. Đối tác của chúng tôi rất hài lòng, giúp công việc thuận lợi hơn.”
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #0a39780a', padding: 24, minWidth: 220, flex: 1, maxWidth: 320 }}>
            <div style={{ fontWeight: 600, color: '#0a3978', marginBottom: 6 }}>Chị Mai - Khách hàng đặt xe khứ hồi</div>
            <div style={{ fontStyle: 'italic', color: '#444' }}>
              <div style={{ fontStyle: 'italic', color: '#444', textAlign: 'justify' }}>
                “Tôi rất ưng gói xe khứ hồi của bên mình. Vừa tiết kiệm được chi phí, lại không phải loay hoay tìm xe về sau chuyến đi. Lái xe đưa đón đúng giờ cả hai chiều.”
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Chatbot floating */}
      <div style={{ position: 'fixed', zIndex: 9999, right: 24, bottom: 24, fontFamily: 'Segoe UI, Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
        {/* Nút gọi điện */}
        <a href="tel:0865910922" target="_blank" rel="noopener" style={{ background: '#43b244', color: '#fff', border: 'none', borderRadius: '50%', width: 52, height: 52, fontSize: 26, boxShadow: '0 2px 8px #0a397855', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }} title="Gọi ngay">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="#fff"/></svg>
        </a>
        {/* Nút Zalo */}
        <a href="https://zalo.me/0865910922" target="_blank" rel="noopener" style={{ background: '#0a97f5', color: '#fff', border: 'none', borderRadius: '50%', width: 52, height: 52, fontSize: 26, boxShadow: '0 2px 8px #0a397855', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }} title="Chat Zalo">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M16 6C10.477 6 6 10.029 6 15.2c0 2.29 1.01 4.36 2.68 5.97-.12.44-.44 1.62-.51 1.89-.08.28.1.27.21.25.09-.02 1.41-.2 2.77-.38C13.13 23.95 14.54 24.2 16 24.2c5.523 0 10-4.03 10-9.2S21.523 6 16 6Z" fill="#0a97f5"/></svg>
        </a>
        {/* Nút Chatbot */}
        {chatOpen ? (
          <div style={{ width: 340, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px #0a397855', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: '#0a3978', color: '#fff', padding: '14px 18px', fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Chat trực tuyến</span>
              <button onClick={() => setChatOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer', marginLeft: 8 }} title="Đóng">×</button>
            </div>
            <div style={{ flex: 1, padding: 16, background: '#f4f8fd', maxHeight: 320, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start', background: msg.from === 'user' ? '#0a3978' : '#e3f2fd', color: msg.from === 'user' ? '#fff' : '#222', borderRadius: 12, padding: '8px 14px', maxWidth: '80%', fontSize: 15, marginBottom: 2 }}>
                  {msg.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid #eee', background: '#fff' }}>
              <input value={input} onChange={e => setInput(e.target.value)} placeholder="Nhập tin nhắn..." style={{ flex: 1, border: 'none', outline: 'none', padding: 12, fontSize: 15, borderRadius: 0 }} />
              <button type="submit" style={{ background: '#0a3978', color: '#fff', border: 'none', padding: '0 18px', fontWeight: 700, fontSize: 16, cursor: 'pointer', borderRadius: 0 }}>Gửi</button>
            </form>
          </div>
        ) : (
          <button onClick={() => setChatOpen(true)} style={{ background: '#0a3978', color: '#fff', border: 'none', borderRadius: '50%', width: 60, height: 60, fontSize: 28, boxShadow: '0 2px 8px #0a397855', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Chat với chúng tôi">
            💬
          </button>
        )}
      </div>
    </main>
  );
}
