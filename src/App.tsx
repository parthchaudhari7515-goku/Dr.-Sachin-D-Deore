import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Download, QrCode, User, GraduationCap, Award, Stethoscope, Heart, Activity, Shield, Star, Sparkles, ChevronDown } from 'lucide-react';

function App() {
  const [showQRModal, setShowQRModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  
  const landingPageUrl = window.location.href;
  
  const qrCodeSizes = [
    { size: '150x150', label: 'Small (150x150)' },
    { size: '300x300', label: 'Medium (300x300)' },
    { size: '500x500', label: 'Large (500x500)' },
    { size: '800x800', label: 'Extra Large (800x800)' },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const downloadQRCode = async (size, filename) => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(landingPageUrl)}`;
    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `dr-sachin-deore-qr-${filename}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading QR code:', error);
    }
  };

  const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div className={`animate-bounce ${className}`} style={{ animationDelay: `${delay}s`, animationDuration: '3s' }}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Icons */}
      <FloatingElement delay={0} className="absolute top-20 left-10 text-white/20">
        <Heart className="w-8 h-8" />
      </FloatingElement>
      <FloatingElement delay={1} className="absolute top-40 right-20 text-white/20">
        <Activity className="w-6 h-6" />
      </FloatingElement>
      <FloatingElement delay={2} className="absolute bottom-40 left-20 text-white/20">
        <Shield className="w-7 h-7" />
      </FloatingElement>

      {/* Hero Section */}
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 py-8 text-center">

          {/* Doctor's Photo */}
          <div className="relative inline-block mb-6">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <img
                src="/images/dr-sachin.jpg"
                alt="Dr. Sachin D. Deore"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2 animate-spin" style={{ animationDuration: '3s' }}>
              <Star className="w-4 h-4 text-yellow-800" />
            </div>
          </div>

          {/* Doctor's Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Dr. Sachin D. Deore
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <p className="text-xl md:text-2xl text-blue-200 font-semibold">Physician & Surgeon</p>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+911234567890" className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-white rounded-full border border-blue-400 hover:bg-blue-500/40 transition">
              <Phone className="w-5 h-5" /> <span>+91 12345 67890</span>
            </a>
            <a href="mailto:doctor@example.com" className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 text-white rounded-full border border-purple-400 hover:bg-purple-500/40 transition">
              <Mail className="w-5 h-5" /> <span>doctor@example.com</span>
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-pink-500/20 text-white rounded-full border border-pink-400 hover:bg-pink-500/40 transition">
              <MapPin className="w-5 h-5" /> <span>Clinic Location</span>
            </a>
          </div>

          {/* QR Button */}
          <div className="mt-6">
            <button
              onClick={() => setShowQRModal(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition"
            >
              <QrCode className="w-5 h-5" /> <span>Get QR Code</span>
            </button>
          </div>
        </div>
      </div>

      {/* QR Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Download QR Code</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {qrCodeSizes.map(({ size, label }) => (
                <button
                  key={size}
                  onClick={() => downloadQRCode(size, size)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition"
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowQRModal(false)}
              className="mt-4 px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 py-4 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Dr. Sachin D. Deore. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
