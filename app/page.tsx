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
          {/* ...rest of the file from app/xe-di-san-bay/page.tsx... */}
        </div>
      </section>
    </main>
  );
}
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
          {/* ...rest of the file from app/xe-di-san-bay/page.tsx... */}
        </div>
      </section>
    </main>
  );
}
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
          {/* ...rest of the file from app/xe-di-san-bay/page.tsx... */}
        </div>
      </section>
    </main>
  );
}
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
          {/* ...rest of the file from app/xe-di-san-bay/page.tsx... */}
        </div>
      </section>
    </main>
  );
}
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
          {/* ...rest of the file from app/xe-di-san-bay/page.tsx... */}
        </div>
      </section>
    </main>
  );
}
import Image from "next/image";

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
       {/* ...existing code... */}
     </main>
   );
 }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
