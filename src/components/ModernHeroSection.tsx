import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowRight, ArrowLeft, Phone, Star, CheckCircle, Wrench, Home, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypewriterText from './TypewriterText';

const ModernHeroSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'fa';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 overflow-hidden flex items-center justify-center">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/5e7093ad-319b-46fa-8fd4-60985adcc4d7.png')`
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/15 rounded-full animate-float delay-300"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-gray-900/10 rounded-full animate-float delay-500"></div>
        <div className="absolute bottom-1/3 left-20 w-20 h-20 bg-white/12 rounded-full animate-float delay-700"></div>
      </div>

      {/* Top Emergency Call Badge */}
      <div className="absolute top-8 left-8 z-20 fade-in-element animate-fade-in-down">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-2xl border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-red-600 font-bold text-sm">Emergency Call</p>
              <p className="text-gray-900 font-bold text-lg">021-12345678</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Rating Badge */}
      <div className="absolute top-8 right-8 z-20 fade-in-element animate-fade-in-down delay-200">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-2xl border border-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-right">
              <p className="text-gray-900 font-bold text-sm">420+</p>
              <p className="text-gray-600 text-xs">Successful Projects</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Main Content */}
          <div className="mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block text-white fade-in-element animate-fade-in-up drop-shadow-2xl">
                Expert Home
              </span>
              <span className="block fade-in-element animate-fade-in-up delay-300">
                <TypewriterText 
                  text="Professionals" 
                  speed={100}
                  className="text-gray-900 font-black drop-shadow-xl"
                  startDelay={800}
                  showCursor={true}
                  cursorChar="█"
                />
              </span>
              <span className="block text-2xl lg:text-3xl font-bold text-gray-900 mt-6 fade-in-element animate-fade-in-up delay-500 drop-shadow-lg">
                We Get it Right.
              </span>
            </h1>
            
            <p className="text-xl text-gray-900 mb-12 leading-relaxed max-w-3xl mx-auto fade-in-element animate-fade-in-up delay-600 font-semibold drop-shadow-md">
              Professional home services with expert technicians available 24/7 for all your plumbing, heating, and maintenance needs. Quality guaranteed with transparent pricing.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-element animate-fade-in-up delay-700">
              <Link to="/service-request">
                <Button 
                  size="lg" 
                  className="group text-xl px-12 py-6 rounded-2xl bg-white text-gray-900 hover:bg-gray-100 shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:-translate-y-2 font-bold border-2 border-gray-900"
                >
                  Hire us now
                  <ArrowIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group text-xl px-12 py-6 rounded-2xl border-4 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-2 font-bold"
              >
                021-12345678
                <Phone className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Professional Team Images - Centered */}
          <div className="flex justify-center items-center gap-12 mb-16 fade-in-element animate-fade-in-scale delay-800">
            
            {/* Left Professional - Senior Engineer */}
            <div className="relative text-center">
              <div className="relative inline-block">
                <div className="w-56 h-56 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-white to-gray-100 p-3 transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/lovable-uploads/ebc583bc-bc48-459a-990f-419e96362a5a.png"
                    alt="Senior Home Engineer - Mohammad Hosseini"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Professional Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <Wrench className="h-8 w-8 text-yellow-400" />
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-gray-900 text-sm font-bold">15+</span>
                </div>
              </div>
              
              <div className="mt-6 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Mohammad Hosseini</h3>
                <p className="text-yellow-600 font-semibold mb-2">Senior Home Engineer</p>
                <p className="text-gray-600 text-sm">Large Project Manager</p>
              </div>
            </div>

            {/* Right Professional - Technical Manager */}
            <div className="relative text-center">
              <div className="relative inline-block">
                <div className="w-56 h-56 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-white to-gray-100 p-3 transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/lovable-uploads/bef4e5b9-1f0f-4ec3-b7a9-a7b0afbac375.png"
                    alt="Technical Manager - Ali Ahmadi"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Professional Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <Home className="h-8 w-8 text-yellow-400" />
                </div>
                {/* Quality Badge */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                  <CheckCircle className="h-8 w-8 text-gray-900" />
                </div>
              </div>
              
              <div className="mt-6 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Ali Ahmadi</h3>
                <p className="text-gray-600 font-semibold mb-2">Technical Manager</p>
                <p className="text-gray-500 text-sm">Equipment & Machinery Specialist</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto fade-in-element animate-fade-in-up delay-[900ms]">
            {[
              { icon: Shield, text: '24/7 Support', color: 'text-gray-900' },
              { icon: CheckCircle, text: 'Quality Guarantee', color: 'text-gray-900' },
              { icon: CheckCircle, text: 'Fair Pricing', color: 'text-gray-900' },
              { icon: CheckCircle, text: 'Expert Professionals', color: 'text-gray-900' }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-3 text-center p-6 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-yellow-400/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
                <span className="font-semibold text-gray-900 text-lg">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-16 bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200 max-w-2xl mx-auto fade-in-element animate-fade-in-up delay-[1000ms]">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-black text-gray-900">B&H</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900">B&H Home Team</h4>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">420+</div>
                <div className="text-gray-600 text-sm">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600 text-sm">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
