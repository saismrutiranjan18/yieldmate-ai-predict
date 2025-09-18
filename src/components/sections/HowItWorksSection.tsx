import React from 'react';
import { Card } from '../ui/card';
import { Database, Brain, Target, TrendingUp } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: Database,
      title: 'Data Collection',
      description: 'We gather comprehensive data from satellites, weather stations, soil sensors, and historical records to create a complete picture of your farm.',
      features: ['Satellite imagery', 'Weather data', 'Soil analysis', 'Historical yields']
    },
    {
      step: 2,
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our advanced machine learning algorithms process millions of data points to identify patterns and correlations that affect crop growth.',
      features: ['Pattern recognition', 'Predictive modeling', 'Risk assessment', 'Trend analysis']
    },
    {
      step: 3,
      icon: Target,
      title: 'Predictions & Insights',
      description: 'Get accurate yield predictions and personalized recommendations for optimal planting, irrigation, and harvest timing.',
      features: ['Yield forecasts', 'Optimization tips', 'Risk alerts', 'Best practices']
    },
    {
      step: 4,
      icon: TrendingUp,
      title: 'Results & Monitoring',
      description: 'Track your progress in real-time and continuously refine predictions based on actual outcomes for even better results.',
      features: ['Performance tracking', 'Continuous learning', 'ROI monitoring', 'Success metrics']
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            How Our AI Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our cutting-edge artificial intelligence system combines multiple data sources 
            and advanced algorithms to deliver accurate predictions and actionable insights.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-medium transition-all duration-300">
              <div className="flex items-start space-x-6">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-secondary/50 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 p-4 bg-secondary/30 rounded-full">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-12 h-0.5 bg-primary/30"></div>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-12 h-0.5 bg-primary/30"></div>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-12 h-0.5 bg-primary/30"></div>
            <div className="w-3 h-3 bg-golden rounded-full"></div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Continuous improvement through machine learning
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;