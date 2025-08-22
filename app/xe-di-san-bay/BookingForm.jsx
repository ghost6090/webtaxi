"use client";

import React, { useRef } from "react";

export default function BookingForm() {
  const [tab, setTab] = React.useState('noibai');
  const [pickup, setPickup] = React.useState('');
  const [dropoff, setDropoff] = React.useState('');
  const [twoWay, setTwoWay] = React.useState(false);
  const [invoice, setInvoice] = React.useState(false);
  const [carType, setCarType] = React.useState('4');
  const [time, setTime] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleSwap = () => {
    const temp = pickup;
    setPickup(dropoff);
    setDropoff(temp);
  };

  const validate = () => {
    const errs = {};
    if (!pickup) errs['pickup'] = 'Vui lòng nhập điểm đón';
    if (!dropoff) errs['dropoff'] = 'Vui lòng nhập điểm đến';
    if (!name) errs['name'] = 'Vui lòng nhập tên';
    if (!phone || !/^\d{10,11}$/.test(phone)) errs['phone'] = 'Số điện thoại không hợp lệ';
    if (!time) errs['time'] = 'Chọn thời gian đón';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      // Reset form nếu muốn:
      // setPickup(''); setDropoff('Sân Bay Nội Bài'); setTwoWay(false); setInvoice(false); setCarType('4'); setTime(''); setName(''); setPhone('');
    }
  };

  const carTypes = [
    { value: '4', label: '4 Chỗ', img: '/car4.png' },
    { value: '7', label: '7 Chỗ', img: '/car7.png' },
    { value: '16', label: '16 Chỗ', img: '/car16.png' },
  ];

  // CSS nhấp nháy cho tab và loại xe
  const glowStyle = {
    boxShadow: '0 0 0 3px #FFD60099, 0 0 8px #FFD600',
    transition: 'box-shadow 0.2s',
    outline: '2px solid #FFD600',
    outlineOffset: 0
  };

  return (
  <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px #0a39781a', padding: 0, position: 'relative', maxWidth: 480, margin: '32px auto' }}>
      {showSuccess && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255,255,255,0.95)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
          fontSize: 20,
          color: '#0a3978',
          fontWeight: 600,
          textAlign: 'center',
          padding: 32,
          boxShadow: '0 2px 8px #0a39780a',
          animation: 'fadeIn 0.3s',
        }}>
          <div style={{ fontSize: 38, marginBottom: 16 }}>✅</div>
          Cảm ơn bạn đã đặt xe,<br />chúng tôi sẽ gọi điện xác nhận lịch với bạn ngay đây ạ
        </div>
      )}
      {/* Tabs */}
  <div style={{ display: 'flex', borderRadius: 12, overflow: 'hidden', marginBottom: 18, background: '#f7f7fa' }}>
        <button
          type="button"
          onClick={() => setTab('noibai')}
          style={{
            flex: 1,
            background: tab === 'noibai' ? '#ffe066' : 'transparent',
            color: tab === 'noibai' ? '#0a3978' : '#888',
            fontWeight: 700,
            fontSize: 18,
            border: 'none',
            padding: '14px 0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            borderBottom: tab === 'noibai' ? '3px solid #FFD600' : '3px solid transparent',
            borderRadius: 0,
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          <span style={{ fontSize: 22 }}>✈️</span> Một Chiều
        </button>
        <button
          type="button"
          onClick={() => setTab('duongdai')}
          style={{
            flex: 1,
            background: tab === 'duongdai' ? '#ffe066' : 'transparent',
            color: tab === 'duongdai' ? '#0a3978' : '#888',
            fontWeight: 700,
            fontSize: 18,
            border: 'none',
            padding: '14px 0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            borderBottom: tab === 'duongdai' ? '3px solid #FFD600' : '3px solid transparent',
            borderRadius: 0,
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          <span style={{ fontSize: 22 }}>🛬</span> Khứ Hồi
        </button>
      </div>
  <form onSubmit={handleSubmit} style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: 18, background: 'transparent' }}>
        {/* Điểm đón/điểm đến */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 4 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: '#0a3978', fontWeight: 600, fontSize: 15, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 18, color: '#FFD600' }}>📍</span>Điểm đón
            </label>
            <input 
              value={pickup}
              onChange={e => setPickup(e.target.value)}
              placeholder="Nhập điểm đón"
              style={{
                width: '100%',
                border: '1.5px solid #e0e0e0',
                borderRadius: 10,
                fontSize: 17,
                padding: '12px 14px',
                outline: 'none',
                background: '#fff',
                marginBottom: 2,
                transition: 'border 0.2s',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.border = '1.5px solid #FFD600'}
              onBlur={e => e.target.style.border = '1.5px solid #e0e0e0'}
            />
            {errors['pickup'] && <div style={{ color: '#ff9800', fontSize: 13 }}>{errors['pickup']}</div>}
          </div>
          <button type="button" onClick={handleSwap} style={{ background: 'none', border: 'none', color: '#888', fontSize: 22, marginTop: 32, cursor: 'pointer', padding: 0, alignSelf: 'flex-end' }} title="Đảo chiều">⇅</button>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: '#0a3978', fontWeight: 600, fontSize: 15, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 18, color: '#7B1FA2' }}>�</span>Điểm đến
            </label>
            <input 
              value={dropoff}
              onChange={e => setDropoff(e.target.value)}
              placeholder="Nhập điểm đến"
              style={{
                width: '100%',
                border: '1.5px solid #e0e0e0',
                borderRadius: 10,
                fontSize: 17,
                padding: '12px 14px',
                outline: 'none',
                background: '#fff',
                marginBottom: 2,
                transition: 'border 0.2s',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.border = '1.5px solid #7B1FA2'}
              onBlur={e => e.target.style.border = '1.5px solid #e0e0e0'}
            />
            {errors['dropoff'] && <div style={{ color: '#ff9800', fontSize: 13 }}>{errors['dropoff']}</div>}
          </div>
        </div>
        {/* Switches */}
        <div style={{ display: 'flex', gap: 18, margin: '10px 0 0 0', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600, color: '#7B1FA2', fontSize: 15 }}>
            <input type="checkbox" checked={twoWay} onChange={e => setTwoWay(e.target.checked)} style={{ accentColor: '#FFD600', width: 20, height: 20, marginRight: 4 }} /> Hai Chiều
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600, color: '#7B1FA2', fontSize: 15 }}>
            <input type="checkbox" checked={invoice} onChange={e => setInvoice(e.target.checked)} style={{ accentColor: '#FFD600', width: 20, height: 20, marginRight: 4 }} /> Hoá Đơn
          </label>
        </div>
        {/* Loại xe dạng dropdown */}
        <div style={{ margin: '10px 0 0 0' }}>
          <label style={{ fontWeight: 700, color: '#0a3978', fontSize: 16, marginBottom: 8, display: 'block' }}>Loại Xe</label>
          <select
            value={carType}
            onChange={e => setCarType(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: 8,
              border: '1.5px solid #e0e0e0',
              fontSize: 17,
              background: '#fafbfc',
              color: '#0a3978',
              fontWeight: 600,
              outline: 'none',
              marginBottom: 2,
              transition: 'border 0.2s',
              boxSizing: 'border-box',
            }}
            onFocus={e => e.target.style.border = '1.5px solid #FFD600'}
            onBlur={e => e.target.style.border = '1.5px solid #e0e0e0'}
          >
            {carTypes.map(car => (
              <option key={car.value} value={car.value}>{car.label}</option>
            ))}
          </select>
        </div>
        {/* Thông tin khách */}
        <div style={{ margin: '10px 0 0 0' }}>
          <div style={{ marginBottom: 10 }}>
            <label style={{ fontWeight: 700, color: '#0a3978', fontSize: 16, marginBottom: 8, display: 'block' }}>Thời gian đón</label>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <span style={{ fontSize: 18, color: '#0a3978' }}>📅</span>
              <input
                type="date"
                value={time.split('T')[0] || ''}
                onChange={e => {
                  const date = e.target.value;
                  const current = time.includes('T') ? time.split('T')[1] : '';
                  setTime(date + (current ? 'T' + current : 'T'));
                }}
                style={{ flex: 1, border: '1px solid #e0e0e0', borderRadius: 8, fontSize: 17, padding: '10px 12px', outline: 'none', background: '#fafbfc', transition: 'border 0.2s' }}
                placeholder="Chọn ngày đón"
              />
              <input
                type="time"
                value={time.includes('T') ? time.split('T')[1] : ''}
                onChange={e => {
                  const hour = e.target.value;
                  const current = time.split('T')[0] || '';
                  setTime((current ? current : '') + 'T' + hour);
                }}
                style={{ flex: 1, border: '1px solid #e0e0e0', borderRadius: 8, fontSize: 17, padding: '10px 12px', outline: 'none', background: '#fafbfc', transition: 'border 0.2s' }}
                placeholder="Chọn giờ đón"
              />
            </div>
            {errors['time'] && <div style={{ color: '#ff9800', fontSize: 13 }}>{errors['time']}</div>}
          </div>
          <div style={{ fontWeight: 700, color: '#0a3978', fontSize: 16, margin: '10px 0 8px 0' }}>Thông Tin</div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 18, color: '#0a3978' }}>👤</span>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Tên hành khách..." style={{ flex: 1, border: '1px solid #e0e0e0', borderRadius: 8, fontSize: 17, padding: '10px 12px', outline: 'none', background: '#fafbfc', transition: 'border 0.2s' }} />
            {errors['name'] && <div style={{ color: '#ff9800', fontSize: 13 }}>{errors['name']}</div>}
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ fontSize: 18, color: '#0a3978' }}>📞</span>
            <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Số điện thoại..." type="tel" style={{ flex: 1, border: '1px solid #e0e0e0', borderRadius: 8, fontSize: 17, padding: '10px 12px', outline: 'none', background: '#fafbfc', transition: 'border 0.2s' }} />
            {errors['phone'] && <div style={{ color: '#ff9800', fontSize: 13 }}>{errors['phone']}</div>}
          </div>
        </div>
  <button type="submit" style={{ background: '#FFD600', color: '#0a3978', fontWeight: 700, fontSize: 20, border: 'none', borderRadius: 8, padding: '16px 0', marginTop: 8, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: 1, boxShadow: '0 2px 8px #FFD60055', transition: 'background 0.2s', outline: 'none' }}>Đặt Xe</button>
      </form>
    </div>
  );
}
