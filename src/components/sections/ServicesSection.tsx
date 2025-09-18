import React from 'react';
import { Card } from '../ui/card';
import { Brain, CloudRain, Microscope, TrendingUp, Zap, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: 'Yield Prediction',
      description: 'Advanced AI algorithms analyze weather patterns, soil conditions, and historical data to predict crop yields with 95% accuracy.',
      color: 'text-primary'
    },
    {
      icon: CloudRain,
      title: 'Weather Analytics',
      description: 'Real-time weather monitoring and predictive analytics help you make informed decisions about planting and harvesting.',
      color: 'text-blue-600'
    },
    {
      icon: Microscope,
      title: 'Soil Analysis',
      description: 'Deep learning models analyze soil composition, pH levels, and nutrient content to optimize fertilizer usage.',
      color: 'text-amber-600'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Get personalized recommendations for irrigation, fertilization, and pest control to maximize crop growth.',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Integrate with IoT devices for automated irrigation, fertilization, and monitoring systems.',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Early warning systems for pest outbreaks, diseases, and extreme weather conditions to protect your crops.',
      color: 'text-red-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            AI-Powered Agricultural Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transform your farming operations with cutting-edge artificial intelligence 
            and machine learning technologies designed specifically for modern agriculture.
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
            Explore All AI Solutions
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;