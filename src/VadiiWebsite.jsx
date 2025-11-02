import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, MapPin, ShoppingCart, Users, Package, Award, Activity, Heart, Shield, Zap } from 'lucide-react';

export default function VadiiWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { name: "Insulin Syringes", icon: Activity },
    { name: "Hypodermic Needles", icon: Activity },
    { name: "Pen Needles", icon: Activity },
    { name: "Luer Lock, UniSlip & SheathLock Barrels", icon: Shield },
    { name: "Enteral Feeding", icon: Heart },
    { name: "Alcohol Prep Pads", icon: Shield },
    { name: "Wound Care", icon: Heart },
    { name: "Nutritional Supplements", icon: Zap }
  ];

  const brands = ["BD", "Cardinal Health", "McKesson", "Exel"];

  const features = [
    { icon: Award, title: "Since 2017", description: "Years of trusted service in medical supply", color: "from-blue-500 to-cyan-500" },
    { icon: Package, title: "Quality Products", description: "Reliable medical and wellness solutions", color: "from-purple-500 to-pink-500" },
    { icon: Users, title: "Professional Service", description: "Dedicated support for healthcare facilities", color: "from-orange-500 to-red-500" },
    { icon: ShoppingCart, title: "Nationwide Access", description: "Serving USA and Canada", color: "from-green-500 to-teal-500" }
  ];

  const handleLogin = () => {
    alert('Could not find account. Contact info@vadii.us for wholesale account access.');
  };

  const FloatingShape = ({ delay, duration, size, top, left, color }) => (
    <div 
      className={`absolute rounded-full ${color} opacity-10 blur-3xl animate-pulse`}
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
        animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`
      }}
    />
  );

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(30px, 30px) rotate(10deg); }
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        .animate-slide-in { animation: slideIn 0.6s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .medical-cross {
          position: relative;
          width: 60px;
          height: 60px;
        }
        .medical-cross::before,
        .medical-cross::after {
          content: '';
          position: absolute;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }
        .medical-cross::before {
          width: 20px;
          height: 60px;
          left: 20px;
          top: 0;
        }
        .medical-cross::after {
          width: 60px;
          height: 20px;
          left: 0;
          top: 20px;
        }
      `}</style>

      {/* Header/Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <img
                    src="/logo.png"
                    alt="Vadii logo"
                    className="w-14 h-14 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div>
                    <h1
                      className="text-3xl font-bold bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(to right, #12869c, #51d6e2)" }}
                    >
                      Vadii
                    </h1>
                    <p className="text-xs text-gray-600">Medical Supply Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition relative group">
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#brands" className="text-gray-700 hover:text-blue-600 transition relative group">
                Brands
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <button 
                onClick={() => setShowLoginModal(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Wholesale Login
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="transform hover:scale-110 transition-transform">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t animate-slide-in">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <a href="#about" className="block text-gray-700 hover:text-blue-600 py-2 hover:pl-2 transition-all">About</a>
              <a href="#products" className="block text-gray-700 hover:text-blue-600 py-2 hover:pl-2 transition-all">Products</a>
              <a href="#brands" className="block text-gray-700 hover:text-blue-600 py-2 hover:pl-2 transition-all">Brands</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 py-2 hover:pl-2 transition-all">Contact</a>
              <button 
                onClick={() => setShowLoginModal(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
              >
                Wholesale Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <FloatingShape delay={0} duration={8} size="400px" top="10%" left="5%" color="bg-blue-500" />
        <FloatingShape delay={1} duration={10} size="300px" top="60%" left="70%" color="bg-cyan-500" />
        <FloatingShape delay={2} duration={9} size="350px" top="30%" left="80%" color="bg-purple-500" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 bg-blue-600 px-6 py-2 rounded-full shadow-lg">
                <Heart className="w-5 h-5 text-white animate-pulse" />
                <span className="text-white font-semibold">Trusted Healthcare Partner</span>
              </div>
            </div>
            <h2 className="text-6xl font-bold text-gray-900 mb-6">
              Trusted Medical Supply
              <span className="block text-blue-600 mt-2">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Supplying reliable and high-quality medical and wellness products to healthcare professionals across the United States and Canada since 2017
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group font-semibold">
                View Products 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#contact" className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 font-semibold">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Animated Medical Icons */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-20 left-10 animate-pulse" style={{ animationDelay: '0s' }}>
            <Activity size={40} className="text-blue-600" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
            <Heart size={50} className="text-red-600" />
          </div>
          <div className="absolute bottom-40 left-1/4 animate-pulse" style={{ animationDelay: '2s' }}>
            <Shield size={45} className="text-green-600" />
          </div>
          <div className="absolute top-1/2 right-1/4 animate-pulse" style={{ animationDelay: '1.5s' }}>
            <Zap size={35} className="text-yellow-600" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card-hover text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <FloatingShape delay={0} duration={12} size="500px" top="20%" left="-10%" color="bg-blue-400" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">About <span className="gradient-text">Vadii</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-2xl card-hover border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-10 rounded-tr-full"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 relative z-10">
                Vadii has been supplying reliable and high-quality medical and wellness products since 2017. We proudly serve medical professionals, wellness centers, beauty clinics, and laboratories across the United States and Canada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 relative z-10">
                Our mission is to provide safe, efficient, and innovative solutions that enhance patient care and professional workflow. We partner with trusted wholesale distributors to ensure nationwide accessibility and consistent product availability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                With strong industry expertise and dedication to service, Vadii continues to be a dependable supplier for healthcare facilities of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Product <span className="text-blue-600">Portfolio</span></h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="card-hover bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
                <div className="flex items-start relative z-10">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <FloatingShape delay={1} duration={11} size="450px" top="10%" left="60%" color="bg-purple-400" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Top Patient Care <span className="text-blue-600">Brands</span></h2>
            <p className="text-gray-600 text-lg">Partnering with industry-leading manufacturers</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="card-hover bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl flex items-center justify-center border border-gray-100 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <span className="text-xl font-bold text-gray-800 relative z-10 group-hover:scale-110 transition-transform duration-300 inline-block">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <FloatingShape delay={2} duration={10} size="400px" top="30%" left="10%" color="bg-green-400" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Contact <span className="text-blue-600">Us</span></h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-blue-600 p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 opacity-20 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-700 opacity-20 rounded-full -ml-20 -mb-20"></div>
              
              <p className="text-lg mb-8 text-center relative z-10">
                For all inquiries or additional information, please contact us:
              </p>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-center group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <a href="mailto:info@vadii.us" className="text-xl hover:underline">info@vadii.us</a>
                </div>
                <div className="flex items-center justify-center group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <span className="text-lg">Serving USA & Canada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating shapes in footer */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-700 opacity-20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.png"
                  alt="Vadii logo"
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-2xl font-bold">Vadii</h3>
              </div>
              <p className="text-blue-100">Medical Supply Solutions since 2017</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-blue-50 hover:text-white hover:pl-2 transition-all">About</a>
                <a href="#products" className="block text-blue-50 hover:text-white hover:pl-2 transition-all">Products</a>
                <a href="#brands" className="block text-blue-50 hover:text-white hover:pl-2 transition-all">Brands</a>
                <a href="#contact" className="block text-blue-50 hover:text-white hover:pl-2 transition-all">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <a href="mailto:info@vadii.us" className="block text-blue-50 hover:text-white transition">info@vadii.us</a>
            </div>
          </div>
          <div className="border-t border-blue-400 pt-8 text-center text-blue-50">
            <p>&copy; {new Date().getFullYear()} Vadii. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-up">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform scale-100 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-10 rounded-bl-full"></div>
            
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900">Wholesale Login</h3>
              <button 
                onClick={() => setShowLoginModal(false)} 
                className="text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-300"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4 relative z-10">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
              </div>
              <button 
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all font-semibold"
              >
                Sign In
              </button>
              <p className="text-sm text-gray-600 text-center">
                Don't have an account? <a href="mailto:info@vadii.us" className="text-blue-600 hover:underline font-semibold">Contact us</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}