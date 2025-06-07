
import { Sprout, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nuts-50 via-background to-nuts-100">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-nuts-100 rounded-full opacity-50 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-nuts-100 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-nuts-100 rounded-full opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center mb-12 animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/bb354df9-d903-48b9-8343-0d4538288a68.png" 
              alt="NutsFactory Logo" 
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 tracking-tight">
            NutsFactory
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Premium Quality Dry Fruits & Nuts
          </p>
        </header>

        {/* Construction Notice */}
        <div className="flex-1 flex items-center justify-center mb-12">
          <Card className="max-w-2xl w-full p-8 md:p-12 shadow-2xl border-2 border-nuts-100 animate-slide-up-delay">
            <div className="text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 animate-pulse-green">
                  <div className="w-8 h-8 border-4 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Coming Soon
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We're carefully crafting something amazing for you! Our premium collection of 
                  cashews, almonds, pistachios, and other finest dry fruits will be available soon.
                </p>
              </div>

              {/* Product Preview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { name: "Cashews", emoji: "🥜" },
                  { name: "Almonds", emoji: "🌰" },
                  { name: "Pistachios", emoji: "🥜" },
                  { name: "Walnuts", emoji: "🌰" }
                ].map((item, index) => (
                  <div 
                    key={item.name}
                    className="bg-nuts-50 p-4 rounded-lg hover:bg-nuts-100 transition-colors duration-300 animate-slide-up-delay"
                    style={{animationDelay: `${0.6 + index * 0.1}s`}}
                  >
                    <div className="text-2xl mb-2">{item.emoji}</div>
                    <div className="text-sm font-medium text-nuts-700">{item.name}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-primary font-semibold text-lg">
                  🌱 100% Natural • 🔒 Premium Quality • 🚚 Fresh Delivery
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-nuts-600 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Notify Me When Ready
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Information */}
        <footer className="mt-auto animate-slide-up-delay-2">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">info@nutsfactory.in</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">+91 9746482342</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Coming Soon</span>
                </div>
              </div>
            </div>
            
            <div className="text-center py-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2024 NutsFactory. All rights reserved. • Bringing you nature's finest since soon.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
