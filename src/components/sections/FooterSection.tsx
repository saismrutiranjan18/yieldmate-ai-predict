import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary-foreground/10 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-golden" />
              </div>
              <span className="text-2xl font-bold">
                AgriAI
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Revolutionizing agriculture with AI-powered crop yield prediction and optimization. 
              Join thousands of farmers maximizing their harvest with data-driven insights.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-primary-foreground/60 hover:text-golden cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-primary-foreground/60 hover:text-golden cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-primary-foreground/60 hover:text-golden cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-primary-foreground/60 hover:text-golden cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">AI Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">Yield Prediction</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">Weather Analytics</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">Soil Analysis</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">Growth Optimization</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">Smart Automation</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">Risk Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">Our Team</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">Research</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-primary-foreground/80">
                <Mail className="h-4 w-4 mr-3" />
                <span className="text-sm">info@agriai.com</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Phone className="h-4 w-4 mr-3" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start text-primary-foreground/80">
                <MapPin className="h-4 w-4 mr-3 mt-0.5" />
                <span className="text-sm">
                  123 Innovation Drive<br />
                  Agricultural Tech Park<br />
                  Iowa City, IA 52240
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-medium mb-3">Stay Updated</h4>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button 
                  className="ml-2 bg-golden text-accent-foreground hover:opacity-90"
                  size="sm"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60 mt-2">
                Get weekly insights on AI agriculture trends
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © 2024 AgriAI. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="text-sm text-primary-foreground/60">
              Powered by advanced machine learning algorithms
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;