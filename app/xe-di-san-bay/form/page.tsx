import React from "react";
import BookingForm from "../BookingForm";

export default function BookingFormPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f4f8fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 600, width: '100%', margin: '0 auto', padding: 24 }}>
        <h1 style={{ color: '#0a3978', fontSize: 32, fontWeight: 800, textAlign: 'center', marginBottom: 32, fontFamily: 'Playfair Display, serif', letterSpacing: 1 }}>ĐẶT XE SÂN BAY</h1>
        <BookingForm />
      </div>
    </main>
  );
}
