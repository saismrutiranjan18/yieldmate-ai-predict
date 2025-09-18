import React, { useState } from 'react';
import { Button } from './button';
import { Menu, X, Brain, Languages } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.howItWorks'), href: '#how-it-works' },
    { name: t('nav.predictionTool'), href: '#prediction' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'od' : 'en');
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">
              KrushiAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Language Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-foreground hover:text-primary"
            >
              <Languages className="h-4 w-4 mr-2" />
              {language === 'en' ? 'ଓଡ଼ିଆ' : 'English'}
            </Button>
            <Button variant="default" className="bg-gradient-accent text-accent-foreground hover:opacity-90">
              {t('nav.getStarted')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2 space-y-2">
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="w-full text-foreground hover:text-primary justify-start"
                >
                  <Languages className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'ଓଡ଼ିଆ' : 'English'}
                </Button>
                <Button className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90">
                  {t('nav.getStarted')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
