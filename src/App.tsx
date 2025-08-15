import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Download, QrCode, User, GraduationCap, Award, Stethoscope, Heart, Activity, Shield, Star, Sparkles, ChevronDown } from 'lucide-react';

function App() {
  const [showQRModal, setShowQRModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  
  // The current URL (in production, this would be the actual domain)
  const landingPageUrl = window.location.href;
  
  // QR Code API URLs for different sizes
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

  const downloadQRCode = async (size: string, filename: string) => {
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Medical Icons */}
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
        <div className="container mx-auto px-4 py-8">
          
          {/* Header with Animated Profile */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-16 h-16 text-white animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2 animate-spin" style={{ animationDuration: '3s' }}>
                <Star className="w-4 h-4 text-yellow-800" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Dr. Sachin D. Deore
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <p className="text-xl md:text-2xl text-blue-200 font-semibold">Physician & Surgeon</p>
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
            
            {/* <div className="flex justify-center">
              <button
                onClick={() => setShowQRModal(true)}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <QrCode className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg font-semibold">Get QR Code</span>
              </button>
            </div> */}
          </div>

          {/* Animated Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Qualifications Card */}
            <div className={`transform transition-all duration-700 hover:scale-105 ${activeCard === 0 ? 'scale-105 shadow-2xl' : ''}`}>
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-3 rounded-full">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Qualifications</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-2xl border border-blue-300/30">
                    <h3 className="font-bold text-blue-200 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                      Primary Degree
                    </h3>
                    <p className="text-white text-lg">B.A.M.S. (Bangalore)</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-2xl border border-purple-300/30">
                    <h3 className="font-bold text-purple-200 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                      Specializations
                    </h3>
                    <div className="text-white space-y-1">
                      <p className="flex items-center"><span className="w-1 h-1 bg-white rounded-full mr-2"></span>C.V.D.</p>
                      <p className="flex items-center"><span className="w-1 h-1 bg-white rounded-full mr-2"></span>C.G.O.</p>
                      <p className="flex items-center"><span className="w-1 h-1 bg-white rounded-full mr-2"></span>P.G. D.E.M.S. (Pune)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Card */}
            <div className={`transform transition-all duration-700 hover:scale-105 ${activeCard === 1 ? 'scale-105 shadow-2xl' : ''}`}>
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-3 rounded-full">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Registration</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-2xl border border-green-300/30">
                    <h3 className="font-bold text-green-200 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Authority
                    </h3>
                    <p className="text-white">Maharashtra Council of Indian Medicine, Mumbai</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-2xl border border-yellow-300/30">
                    <h3 className="font-bold text-yellow-200 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                      Registration No.
                    </h3>
                    <p className="text-white font-mono text-lg bg-black/20 px-3 py-2 rounded-lg border border-white/10">I-99145-A-1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className={`transform transition-all duration-700 hover:scale-105 ${activeCard === 2 ? 'scale-105 shadow-2xl' : ''}`}>
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-3 rounded-full">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contact</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 p-4 rounded-2xl border border-pink-300/30">
                    <h3 className="font-bold text-pink-200 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></div>
                      Email Address
                    </h3>
                    <a 
                      href="mailto:morayahospital@2025gmail.com" 
                      className="text-white hover:text-pink-200 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="break-all">morayahospital@2025gmail.com</span>
                    </a>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 p-4 rounded-2xl border border-indigo-300/30">
                    <h3 className="font-bold text-indigo-200 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></div>
                      Quick Actions
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="mailto:morayahospital@2025gmail.com"
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send Email</span>
                      </a>
                      <button
                        onClick={() => setShowQRModal(true)}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
                      >
                        <QrCode className="w-4 h-4" />
                        <span>Get QR Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-3 rounded-full">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Professional Profile</h2>
                </div>
                
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-300/30">
                    <div className="text-3xl font-bold text-blue-200 mb-2">15+</div>
                    <div className="text-white">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-300/30">
                    <div className="text-3xl font-bold text-green-200 mb-2">1000+</div>
                    <div className="text-white">Patients Treated</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-300/30">
                    <div className="text-3xl font-bold text-purple-200 mb-2">100%</div>
                    <div className="text-white">Satisfaction Rate</div>
                  </div>
                </div> */}
                
                <p className="text-xl text-blue-100 leading-relaxed">
                  Dedicated Ayurvedic physician and surgeon with extensive training in traditional Indian medicine, 
                  specializing in cardiovascular diseases and gynecological care. Committed to providing holistic 
                  healthcare solutions with a patient-centered approach.
                </p>
              </div>
            </div>
          </div>
          
          {/* QR Code Display - Moved to Bottom */}
          <div className="flex justify-center mt-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-xl">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center space-x-2">
                  <QrCode className="w-5 h-5 text-blue-400" />
                  <span>Scan to Visit</span>
                </h3>
                <p className="text-blue-200 text-sm">Share this page instantly</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-xl inline-block">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(landingPageUrl)}`}
                  alt="QR Code to visit Dr. Sachin D. Deore's profile"
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>
              {/* <div className="mt-4 text-center">
                <button
                  onClick={() => setShowQRModal(true)}
                  className="text-blue-300 hover:text-white text-sm underline transition-colors duration-300"
                >
                  Download in different sizes
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                  <QrCode className="w-6 h-6 text-blue-400" />
                  <span>QR Code Downloads</span>
                </h3>
                <button
                  onClick={() => setShowQRModal(false)}
                  className="text-white/60 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center mb-8">
                <div className="bg-white p-4 rounded-2xl shadow-xl inline-block mb-4">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(landingPageUrl)}`}
                    alt="QR Code"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-blue-200">Scan to visit this page</p>
              </div>

              {/* <div className="space-y-3">
                <h4 className="font-bold text-white mb-4 flex items-center">
                  <Download className="w-5 h-5 mr-2 text-green-400" />
                  Download Different Sizes:
                </h4>
                {qrCodeSizes.map((qrSize, index) => (
                  <button
                    key={qrSize.size}
                    onClick={() => downloadQRCode(qrSize.size, qrSize.size)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Download className="w-5 h-5" />
                    <span className="font-semibold">{qrSize.label}</span>
                  </button>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;