
import React from 'react';
import { Card } from '@/components/ui/card';

const WelcomeBanner = () => {
  return (
    <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border-0 p-8 mb-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Welcome, Sarah! 👋
        </h1>
        <p className="text-xl text-muted-foreground font-medium">
          Let's begin your job transformation journey!
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>
      </div>
    </Card>
  );
};

export default WelcomeBanner;
