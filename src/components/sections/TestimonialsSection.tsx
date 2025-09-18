import React from 'react';
import { Card } from '../ui/card';
import { Star, Quote } from 'lucide-react';
import farmerPortrait from '../../assets/farmer-portrait.jpg';
import { useLanguage } from '../../contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Sustainable Farms Co.',
      location: 'Iowa, USA',
      image: farmerPortrait,
      rating: 5,
      text: 'AgriAI has revolutionized our farming operations. The yield predictions are incredibly accurate, and we\'ve seen a 45% increase in productivity since implementation. The ROI was evident within the first season.',
      highlight: '45% increase in productivity'
    },
    {
      name: 'Miguel Rodriguez',
      role: 'Organic Valley Farms',
      location: 'California, USA',
      image: farmerPortrait,
      rating: 5,
      text: 'The soil analysis and weather predictions have saved us thousands in fertilizer costs. The AI recommendations are spot-on and have helped us optimize our irrigation schedule perfectly.',
      highlight: 'Thousands saved in costs'
    },
    {
      name: 'Emily Chen',
      role: 'Green Horizon Agriculture',
      location: 'Nebraska, USA',
      image: farmerPortrait,
      rating: 5,
      text: 'As a precision agriculture consultant, I recommend AgriAI to all my clients. The accuracy of their machine learning models is unmatched in the industry.',
      highlight: 'Unmatched accuracy'
    },
    {
      name: 'David Thompson',
      role: 'Heritage Farms',
      location: 'Kansas, USA',
      image: farmerPortrait,
      rating: 5,
      text: 'The early warning system for pests and diseases has been a game-changer. We caught a potential corn borer outbreak early and saved our entire crop.',
      highlight: 'Saved entire crop'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-medium transition-all duration-300 relative">
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-golden fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-card-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Highlight */}
              <div className="inline-block px-3 py-1 bg-gradient-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
                {testimonial.highlight}
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} from ${testimonial.role}`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 p-6 bg-secondary/30 rounded-full">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Happy Farmers</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;