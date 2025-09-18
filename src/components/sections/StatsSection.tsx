import React from 'react';
import { TrendingUp, Users, Target, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();
  const achievements = [
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Prediction Accuracy',
      description: 'Average accuracy across all crop types'
    },
    {
      icon: Users,
      number: '10,000+',
      label: 'Active Farmers',
      description: 'Farmers worldwide trust our AI'
    },
    {
      icon: Target,
      number: '40%',
      label: 'Yield Increase',
      description: 'Average crop yield improvement'
    },
    {
      icon: Award,
      number: '2.5M',
      label: 'Acres Optimized',
      description: 'Total farmland under AI management'
    }
  ];

  return (
    <section className="py-24 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('stats.title')}
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-6">
                <achievement.icon className="h-8 w-8 text-golden" />
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold text-golden mb-2">
                {achievement.number}
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold mb-2">
                {achievement.label}
              </h3>

              {/* Description */}
              <p className="text-primary-foreground/70 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-lg text-primary-foreground/80 italic">
            "AgriAI has revolutionized our farming operations. The yield predictions are incredibly accurate, 
            and we've seen a 45% increase in productivity since implementation."
          </p>
          <div className="mt-4 text-golden font-medium">
            - Sarah Johnson, Sustainable Farms Co.
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;