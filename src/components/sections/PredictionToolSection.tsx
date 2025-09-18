import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Brain, MapPin, Calendar, Thermometer, Droplets, Target } from 'lucide-react';
import { toast } from '../ui/use-toast';
import { useLanguage } from '../../contexts/LanguageContext';

const PredictionToolSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    cropType: '',
    location: '',
    plantingDate: '',
    farmSize: '',
    soilType: '',
    irrigationType: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generatePrediction = () => {
    if (!formData.cropType || !formData.location || !formData.farmSize) {
      toast({
        title: "Missing Information",
        description: "Please fill in the required fields to generate a prediction.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const yieldEstimate = Math.floor(Math.random() * 50) + 80; // 80-130 tons/hectare
      const confidence = Math.floor(Math.random() * 10) + 90; // 90-100%
      const revenue = (parseFloat(formData.farmSize) * yieldEstimate * 300).toLocaleString(); // $300 per ton
      
      setPrediction({
        yield: yieldEstimate,
        confidence,
        revenue,
        recommendations: [
          'Optimal planting window: March 15-30',
          'Increase nitrogen fertilizer by 10%',
          'Monitor soil moisture levels weekly',
          'Consider pest control treatment in June'
        ]
      });
      setIsLoading(false);
      
      toast({
        title: "Prediction Generated!",
        description: "Your AI-powered crop yield prediction is ready.",
      });
    }, 2000);
  };

  return (
    <section id="prediction" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            {t('prediction.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('prediction.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Input Form */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Brain className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold text-card-foreground">Farm Details</h3>
            </div>

            <div className="space-y-6">
              {/* Crop Type */}
              <div>
                <Label htmlFor="cropType" className="text-sm font-medium text-card-foreground mb-2 block">
                  {t('prediction.cropType')} *
                </Label>
                <Select onValueChange={(value) => handleInputChange('cropType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('prediction.selectCrop')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="corn">Corn</SelectItem>
                    <SelectItem value="soybeans">Soybeans</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="barley">Barley</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div>
                <Label htmlFor="location" className="text-sm font-medium text-card-foreground mb-2 block">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  Location *
                </Label>
                <Input
                  id="location"
                  placeholder="Enter your location (e.g., Iowa, USA)"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>

              {/* Farm Size */}
              <div>
                <Label htmlFor="farmSize" className="text-sm font-medium text-card-foreground mb-2 block">
                  {t('prediction.farmSize')}
                </Label>
                <Input
                  id="farmSize"
                  type="number"
                  placeholder={t('prediction.enterSize')}
                  value={formData.farmSize}
                  onChange={(e) => handleInputChange('farmSize', e.target.value)}
                />
              </div>

              {/* Planting Date */}
              <div>
                <Label htmlFor="plantingDate" className="text-sm font-medium text-card-foreground mb-2 block">
                  <Calendar className="h-4 w-4 inline mr-1" />
                  Planting Date
                </Label>
                <Input
                  id="plantingDate"
                  type="date"
                  value={formData.plantingDate}
                  onChange={(e) => handleInputChange('plantingDate', e.target.value)}
                />
              </div>

              {/* Soil Type */}
              <div>
                <Label htmlFor="soilType" className="text-sm font-medium text-card-foreground mb-2 block">
                  {t('prediction.soilType')}
                </Label>
                <Select onValueChange={(value) => handleInputChange('soilType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('prediction.selectSoil')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay</SelectItem>
                    <SelectItem value="loam">Loam</SelectItem>
                    <SelectItem value="sand">Sand</SelectItem>
                    <SelectItem value="silt">Silt</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Generate Button */}
              <Button 
                onClick={generatePrediction}
                disabled={isLoading}
                className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 py-6 text-lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent mr-2"></div>
                    {t('prediction.analyzing')}
                  </>
                ) : (
                  <>
                    <Target className="mr-2 h-5 w-5" />
                    {t('prediction.predictYield')}
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Results */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Target className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold text-card-foreground">AI Prediction Results</h3>
            </div>

            {prediction ? (
              <div className="space-y-6">
                {/* Main Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">{prediction.yield}</div>
                    <div className="text-sm text-muted-foreground">Tons/Hectare</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-3xl font-bold text-golden mb-1">{prediction.confidence}%</div>
                    <div className="text-sm text-muted-foreground">Confidence</div>
                  </div>
                </div>

                {/* Revenue Estimate */}
                <div className="text-center p-6 bg-gradient-primary text-primary-foreground rounded-lg">
                  <div className="text-2xl font-bold mb-1">${prediction.revenue}</div>
                  <div className="text-sm opacity-80">Estimated Revenue</div>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3">AI Recommendations:</h4>
                  <div className="space-y-2">
                    {prediction.recommendations.map((rec, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Brain className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Fill in your farm details and click "Generate AI Prediction" to see your customized results.
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PredictionToolSection;