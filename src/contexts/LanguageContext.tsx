import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'od';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.howItWorks': 'How It Works',
    'nav.predictionTool': 'Prediction Tool',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.aiPowered': 'AI-Powered Agriculture',
    'hero.title1': 'Predict & Optimize',
    'hero.title2': 'Crop Yields',
    'hero.subtitle': 'Harness the power of artificial intelligence to maximize your harvest. Get accurate yield predictions, optimize crop management, and increase profits with data-driven insights.',
    'hero.startPredicting': 'Start Predicting',
    'hero.viewDemo': 'View Demo',
    'hero.predictionAccuracy': 'Prediction Accuracy',
    'hero.yieldIncrease': 'Yield Increase',
    'hero.farmsOptimized': 'Farms Optimized',
    
    // Services Section
    'services.title': 'AI-Powered Agricultural Services',
    'services.subtitle': 'Transform your farming operations with cutting-edge artificial intelligence and machine learning technologies designed specifically for modern agriculture.',
    'services.yieldPrediction': 'Yield Prediction',
    'services.yieldPredictionDesc': 'Advanced AI algorithms analyze weather patterns, soil conditions, and historical data to predict crop yields with 95% accuracy.',
    'services.weatherAnalytics': 'Weather Analytics',
    'services.weatherAnalyticsDesc': 'Real-time weather monitoring and predictive analytics help you make informed decisions about planting and harvesting.',
    'services.soilAnalysis': 'Soil Analysis',
    'services.soilAnalysisDesc': 'Deep learning models analyze soil composition, pH levels, and nutrient content to optimize fertilizer usage.',
    'services.growthOptimization': 'Growth Optimization',
    'services.growthOptimizationDesc': 'Get personalized recommendations for irrigation, fertilization, and pest control to maximize crop growth.',
    'services.smartAutomation': 'Smart Automation',
    'services.smartAutomationDesc': 'Integrate with IoT devices for automated irrigation, fertilization, and monitoring systems.',
    'services.riskManagement': 'Risk Management',
    'services.riskManagementDesc': 'Early warning systems for pest outbreaks, diseases, and extreme weather conditions to protect your crops.',
    'services.exploreAll': 'Explore All AI Solutions',
    
    // How It Works
    'howItWorks.title': 'How Our AI Works',
    'howItWorks.subtitle': 'Our cutting-edge artificial intelligence system combines multiple data sources and advanced algorithms to deliver accurate predictions and actionable insights.',
    'howItWorks.dataCollection': 'Data Collection',
    'howItWorks.dataCollectionDesc': 'We gather comprehensive data from satellites, weather stations, soil sensors, and historical records to create a complete picture of your farm.',
    'howItWorks.aiAnalysis': 'AI Analysis',
    'howItWorks.aiAnalysisDesc': 'Our advanced machine learning algorithms process millions of data points to identify patterns and correlations that affect crop growth.',
    'howItWorks.predictions': 'Predictions & Insights',
    'howItWorks.predictionsDesc': 'Get accurate yield predictions and personalized recommendations for optimal planting, irrigation, and harvest timing.',
    'howItWorks.results': 'Results & Monitoring',
    'howItWorks.resultsDesc': 'Track your progress in real-time and continuously refine predictions based on actual outcomes for even better results.',
    'howItWorks.continuousImprovement': 'Continuous improvement through machine learning',
    
    // Prediction Tool
    'prediction.title': 'AI Crop Yield Predictor',
    'prediction.subtitle': 'Enter your farm details to get accurate yield predictions powered by advanced machine learning algorithms.',
    'prediction.cropType': 'Crop Type',
    'prediction.selectCrop': 'Select crop type',
    'prediction.farmSize': 'Farm Size (acres)',
    'prediction.enterSize': 'Enter farm size',
    'prediction.soilType': 'Soil Type',
    'prediction.selectSoil': 'Select soil type',
    'prediction.region': 'Region',
    'prediction.selectRegion': 'Select region',
    'prediction.predictYield': 'Predict Yield',
    'prediction.analyzing': 'Analyzing...',
    
    // Testimonials
    'testimonials.title': 'What Farmers Say',
    'testimonials.subtitle': 'Join thousands of farmers who have transformed their operations with our AI-powered solutions.',
    
    // Stats
    'stats.title': 'Proven Results',
    'stats.subtitle': 'Our AI technology has delivered measurable improvements for farmers worldwide.',
    'stats.yieldIncrease': 'Average Yield Increase',
    'stats.waterSavings': 'Water Savings',
    'stats.fertilizerReduction': 'Fertilizer Reduction',
    'stats.profitGrowth': 'Profit Growth',
    
    // Footer
    'footer.description': 'Transforming agriculture with AI-powered solutions for better yields, sustainable farming, and increased profitability.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.helpCenter': 'Help Center',
    'footer.documentation': 'Documentation',
    'footer.apiReference': 'API Reference',
    'footer.community': 'Community',
    'footer.contact': 'Contact',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.address': 'Address',
    'footer.rights': 'All rights reserved.',
  },
  od: {
    // Navigation
    'nav.home': 'ମୂଖ୍ୟ ପୃଷ୍ଠା',
    'nav.services': 'ସେବାସମୂହ',
    'nav.howItWorks': 'ଏହା କିପରି କାମ କରେ',
    'nav.predictionTool': 'ପୂର୍ବାନୁମାନ ଉପକରଣ',
    'nav.testimonials': 'ପ୍ରଶଂସାପତ୍ର',
    'nav.contact': 'ଯୋଗାଯୋଗ',
    'nav.getStarted': 'ଆରମ୍ଭ କରନ୍ତୁ',
    
    // Hero Section
    'hero.aiPowered': 'AI-ଚାଳିତ କୃଷି',
    'hero.title1': 'ପୂର୍ବାନୁମାନ ଓ',
    'hero.title2': 'ଫସଲ ଉତ୍ପାଦନ ବୃଦ୍ଧି',
    'hero.subtitle': 'ଆପଣଙ୍କ ଅମଳକୁ ସର୍ବାଧିକ କରିବା ପାଇଁ କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତାର ଶକ୍ତି ବ୍ୟବହାର କରନ୍ତୁ। ସଠିକ ଅମଳ ପୂର୍ବାନୁମାନ ପାଆନ୍ତୁ, ଫସଲ ପରିଚାଳନାକୁ ଅପ୍ଟିମାଇଜ୍ କରନ୍ତୁ ଏବଂ ଡାଟା-ଚାଳିତ ଅନ୍ତର୍ଦୃଷ୍ଟି ସହିତ ଲାଭ ବୃଦ୍ଧି କରନ୍ତୁ।',
    'hero.startPredicting': 'ପୂର୍ବାନୁମାନ ଆରମ୍ଭ କରନ୍ତୁ',
    'hero.viewDemo': 'ଡେମୋ ଦେଖନ୍ତୁ',
    'hero.predictionAccuracy': 'ପୂର୍ବାନୁମାନ ସଠିକତା',
    'hero.yieldIncrease': 'ଅମଳ ବୃଦ୍ଧି',
    'hero.farmsOptimized': 'ଅପ୍ଟିମାଇଜ୍ କୃଷି ଜମି',
    
    // Services Section
    'services.title': 'AI-ଚାଳିତ କୃଷି ସେବାସମୂହ',
    'services.subtitle': 'ଆଧୁନିକ କୃଷି ପାଇଁ ବିଶେଷ ଭାବରେ ଡିଜାଇନ୍ କରାଯାଇଥିବା ଅତ୍ୟାଧୁନିକ କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତା ଏବଂ ମେସିନ୍ ଲର୍ନିଂ ପ୍ରଯୁକ୍ତି ସହିତ ଆପଣଙ୍କ କୃଷି କାର୍ଯ୍ୟକୁ ରୂପାନ୍ତରିତ କରନ୍ତୁ।',
    'services.yieldPrediction': 'ଅମଳ ପୂର୍ବାନୁମାନ',
    'services.yieldPredictionDesc': 'ଉନ୍ନତ AI ଆଲଗୋରିଦମ ପାଣିପାଗ ପ୍ରକାର, ମାଟି ଅବସ୍ଥା ଏବଂ ଐତିହାସିକ ତଥ୍ୟ ବିଶ୍ଳେଷଣ କରି 95% ସଠିକତା ସହିତ ଫସଲ ଅମଳର ପୂର୍ବାନୁମାନ କରେ।',
    'services.weatherAnalytics': 'ପାଣିପାଗ ବିଶ୍ଳେଷଣ',
    'services.weatherAnalyticsDesc': 'ରିଅଲ-ଟାଇମ୍ ପାଣିପାଗ ମନିଟରିଂ ଏବଂ ପୂର୍ବାନୁମାନ ବିଶ୍ଳେଷଣ ଆପଣଙ୍କୁ ବୁଣିବା ଏବଂ ଅମଳ ବିଷୟରେ ସୂଚନାଯୁକ୍ତ ନିଷ୍ପତ୍ତି ନେବାରେ ସାହାଯ୍ୟ କରେ।',
    'services.soilAnalysis': 'ମାଟି ବିଶ୍ଳେଷଣ',
    'services.soilAnalysisDesc': 'ଗଭୀର ଶିକ୍ଷଣ ମଡେଲ ମାଟିର ସଂଗଠନ, pH ସ୍ତର ଏବଂ ପୋଷକ ତତ୍ତ୍ୱ ବିଶ୍ଳେଷଣ କରି ସାର ବ୍ୟବହାରକୁ ଅପ୍ଟିମାଇଜ୍ କରେ।',
    'services.growthOptimization': 'ବୃଦ୍ଧି ଅପ୍ଟିମାଇଜେସନ୍',
    'services.growthOptimizationDesc': 'ଫସଲର ବୃଦ୍ଧିକୁ ସର୍ବାଧିକ କରିବା ପାଇଁ ଜଳସେଚନ, ସାର ଏବଂ କୀଟପତଙ୍ଗ ନିୟନ୍ତ୍ରଣ ପାଇଁ ବ୍ୟକ୍ତିଗତ ସୁପାରିଶ ପାଆନ୍ତୁ।',
    'services.smartAutomation': 'ସ୍ମାର୍ଟ ଅଟୋମେସନ୍',
    'services.smartAutomationDesc': 'ସ୍ୱୟଂଚାଳିତ ଜଳସେଚନ, ସାର ଏବଂ ମନିଟରିଂ ସିଷ୍ଟମ ପାଇଁ IoT ଉପକରଣଗୁଡ଼ିକ ସହିତ ଏକୀଭୂତ କରନ୍ତୁ।',
    'services.riskManagement': 'ବିପଦ ପରିଚାଳନା',
    'services.riskManagementDesc': 'ଆପଣଙ୍କ ଫସଲକୁ ସୁରକ୍ଷିତ ରଖିବା ପାଇଁ କୀଟପତଙ୍ଗ ଆକ୍ରମଣ, ରୋଗ ଏବଂ ଅତ୍ୟଧିକ ପାଣିପାଗ ପରିସ୍ଥିତି ପାଇଁ ପ୍ରାରମ୍ଭିକ ଚେତାବନୀ ସିଷ୍ଟମ।',
    'services.exploreAll': 'ସମସ୍ତ AI ସମାଧାନ ଅନ୍ବେଷଣ କରନ୍ତୁ',
    
    // How It Works
    'howItWorks.title': 'ଆମର AI କିପରି କାମ କରେ',
    'howItWorks.subtitle': 'ଆମର ଅତ୍ୟାଧୁନିକ କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତା ସିଷ୍ଟମ ସଠିକ ପୂର୍ବାନୁମାନ ଏବଂ କାର୍ଯ୍ୟକ୍ଷମ ଅନ୍ତର୍ଦୃଷ୍ଟି ପ୍ରଦାନ କରିବା ପାଇଁ ଏକାଧିକ ତଥ୍ୟ ଉତ୍ସ ଏବଂ ଉନ୍ନତ ଆଲଗୋରିଦମକୁ ଏକତ୍ର କରେ।',
    'howItWorks.dataCollection': 'ତଥ୍ୟ ସଂଗ୍ରହ',
    'howItWorks.dataCollectionDesc': 'ଆପଣଙ୍କ ଚାଷଜମିର ସମ୍ପୂର୍ଣ୍ଣ ଚିତ୍ର ତିଆରି କରିବାକୁ ଆମେ ଉପଗ୍ରହ, ପାଣିପାଗ ଷ୍ଟେସନ, ମାଟି ସେନସର ଏବଂ ଐତିହାসିକ ରେକର୍ଡରୁ ବ୍ୟାପକ ତଥ୍ୟ ସଂଗ୍ରହ କରୁ।',
    'howItWorks.aiAnalysis': 'AI ବିଶ୍ଳେଷଣ',
    'howItWorks.aiAnalysisDesc': 'ଆମର ଉନ୍ନତ ମେସିନ୍ ଲର୍ନିଂ ଆଲଗୋରିଦମ ଫସଲର ବୃଦ୍ଧିକୁ ପ୍ରଭାବିତ କରୁଥିବା ପ୍ୟାଟର୍ନ ଏବଂ ସମ୍ପର୍କ ଚିହ୍ନଟ କରିବା ପାଇଁ ଲକ୍ଷ ଲକ୍ଷ ତଥ୍ୟ ପଏଣ୍ଟ ପ୍ରକ୍ରିୟାକରଣ କରେ।',
    'howItWorks.predictions': 'ପୂର୍ବାନୁମାନ ଓ ଅନ୍ତର୍ଦୃଷ୍ଟି',
    'howItWorks.predictionsDesc': 'ସଠିକ ଅମଳ ପୂର୍ବାନୁମାନ ଏବଂ ଉତ୍କୃଷ୍ଟ ବୁଣିବା, ଜଳସେଚନ ଏବଂ ଅମଳ ସମୟ ପାଇଁ ବ୍ୟକ୍ତିଗତ ସୁପାରିଶ ପାଆନ୍ତୁ।',
    'howItWorks.results': 'ଫଳାଫଳ ଓ ମନିଟରିଂ',
    'howItWorks.resultsDesc': 'ରିଅଲ-ଟାଇମରେ ଆପଣଙ୍କର ପ୍ରଗତି ଟ୍ରାକ୍ କରନ୍ତୁ ଏବଂ ଆହୁରି ଭଲ ଫଳାଫଳ ପାଇଁ ପ୍ରକୃତ ଫଳାଫଳ ଆଧାରରେ କ୍ରମାଗତ ଭାବରେ ପୂର୍ବାନୁମାନକୁ ପରିଶୋଧିତ କରନ୍ତୁ।',
    'howItWorks.continuousImprovement': 'ମେସିନ୍ ଲର୍ନିଂ ମାଧ୍ୟମରେ ନିରନ୍ତର ଉନ୍ନତି',
    
    // Prediction Tool
    'prediction.title': 'AI ଫସଲ ଅମଳ ପୂର୍ବାନୁମାନକାରୀ',
    'prediction.subtitle': 'ଉନ୍ନତ ମେସିନ୍ ଲର୍ନିଂ ଆଲଗୋରିଦମ ଦ୍ୱାରା ଚାଳିତ ସଠିକ ଅମଳ ପୂର୍ବାନୁମାନ ପାଇବା ପାଇଁ ଆପଣଙ୍କର ଚାଷଜମିର ବିବରଣୀ ଲେଖନ୍ତୁ।',
    'prediction.cropType': 'ଫସଲ ପ୍ରକାର',
    'prediction.selectCrop': 'ଫସଲ ପ୍ରକାର ବାଛନ୍ତୁ',
    'prediction.farmSize': 'ଚାଷଜମିର ଆକାର (ଏକର)',
    'prediction.enterSize': 'ଚାଷଜମିର ଆକାର ଲେଖନ୍ତୁ',
    'prediction.soilType': 'ମାଟିର ପ୍ରକାର',
    'prediction.selectSoil': 'ମାଟିର ପ୍ରକାର ବାଛନ୍ତୁ',
    'prediction.region': 'ଅଞ୍ଚଳ',
    'prediction.selectRegion': 'ଅଞ୍ଚଳ ବାଛନ୍ତୁ',
    'prediction.predictYield': 'ଅମଳ ପୂର୍ବାନୁମାନ କରନ୍ତୁ',
    'prediction.analyzing': 'ବିଶ୍ଳେଷଣ କରୁଛି...',
    
    // Testimonials
    'testimonials.title': 'କୃଷକମାନେ କଣ କୁହନ୍ତି',
    'testimonials.subtitle': 'ହଜାରେ କୃଷକଙ୍କ ସହିତ ଯୋଗ ଦିଅନ୍ତୁ ଯେଉଁମାନେ ଆମର AI-ଚାଳିତ ସମାଧାନ ସହିତ ସେମାନଙ୍କର କାର୍ଯ୍ୟକୁ ରୂପାନ୍ତରିତ କରିଛନ୍ତି।',
    
    // Stats
    'stats.title': 'ପ୍ରମାଣିତ ଫଳାଫଳ',
    'stats.subtitle': 'ଆମର AI ପ୍ରଯୁକ୍ତି ବିଶ୍ୱବ୍ୟାପୀ କୃଷକମାନଙ୍କ ପାଇଁ ମାପଯୋଗ୍ୟ ଉନ୍ନତି ପ୍ରଦାନ କରିଛି।',
    'stats.yieldIncrease': 'ହାରାହାରି ଅମଳ ବୃଦ୍ଧି',
    'stats.waterSavings': 'ଜଳ ସଞ୍ଚୟ',
    'stats.fertilizerReduction': 'ସାର ହ୍ରାସ',
    'stats.profitGrowth': 'ଲାଭ ବୃଦ୍ଧି',
    
    // Footer
    'footer.description': 'ଉନ୍ନତ ଅମଳ, ସ୍ଥାୟୀ କୃଷି ଏବଂ ବର୍ଦ୍ଧିତ ଲାଭଦାୟକତା ପାଇଁ AI-ଚାଳିତ ସମାଧାନ ସହିତ କୃଷିକୁ ରୂପାନ୍ତରିତ କରୁଛି।',
    'footer.quickLinks': 'ଦ୍ରୁତ ଲିଙ୍କ',
    'footer.services': 'ସେବାସମୂହ',
    'footer.support': 'ସାହାଯ୍ୟ',
    'footer.helpCenter': 'ସାହାଯ୍ୟ କେନ୍ଦ୍ର',
    'footer.documentation': 'ଡକୁମେଣ୍ଟେସନ୍',
    'footer.apiReference': 'API ସନ୍ଦର୍ଭ',
    'footer.community': 'ସମ୍ପ୍ରଦାୟ',
    'footer.contact': 'ଯୋଗାଯୋଗ',
    'footer.phone': 'ଫୋନ୍',
    'footer.email': 'ଇମେଲ୍',
    'footer.address': 'ଠିକଣା',
    'footer.rights': 'ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};