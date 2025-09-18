import React from 'react';
import { Button } from '../ui/button';
import { TrendingUp, Brain, Leaf, BarChart3 } from 'lucide-react';
import heroImage from '../../assets/hero-agriculture-ai.jpg';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI-powered agriculture technology in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Brain className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">{t('hero.aiPowered')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t('hero.title1')}
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 text-lg px-8 py-4"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              {t('hero.startPredicting')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              {t('hero.viewDemo')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-golden mb-2">95%</div>
              <div className="text-white/80 font-medium">{t('hero.predictionAccuracy')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-golden mb-2">40%</div>
              <div className="text-white/80 font-medium">{t('hero.yieldIncrease')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-golden mb-2">10K+</div>
              <div className="text-white/80 font-medium">{t('hero.farmsOptimized')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;