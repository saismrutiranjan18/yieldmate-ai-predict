import React from 'react';
import { Card } from '../ui/card';
import { Brain, CloudRain, Microscope, TrendingUp, Zap, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Brain,
      title: t('services.yieldPrediction'),
      description: t('services.yieldPredictionDesc'),
      color: 'text-primary'
    },
    {
      icon: CloudRain,
      title: t('services.weatherAnalytics'),
      description: t('services.weatherAnalyticsDesc'),
      color: 'text-blue-600'
    },
    {
      icon: Microscope,
      title: t('services.soilAnalysis'),
      description: t('services.soilAnalysisDesc'),
      color: 'text-amber-600'
    },
    {
      icon: TrendingUp,
      title: t('services.growthOptimization'),
      description: t('services.growthOptimizationDesc'),
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: t('services.smartAutomation'),
      description: t('services.smartAutomationDesc'),
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: t('services.riskManagement'),
      description: t('services.riskManagementDesc'),
      color: 'text-red-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 h-full bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center h-full">
                {/* Icon */}
                <div className="mb-6 p-4 bg-secondary/50 rounded-full">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity cursor-pointer">
            <Brain className="mr-2 h-5 w-5" />
            {t('services.exploreAll')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;