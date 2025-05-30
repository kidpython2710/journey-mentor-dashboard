
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb } from 'lucide-react';
import WelcomeBanner from '@/components/WelcomeBanner';
import MentorBot from '@/components/MentorBot';
import JourneyProgress from '@/components/JourneyProgress';
import QuickSummary from '@/components/QuickSummary';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Banner */}
        <WelcomeBanner />

        {/* Quick Summary Cards */}
        <QuickSummary />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Journey Progress - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <JourneyProgress />
          </div>

          {/* Primary CTA and Actions */}
          <div className="space-y-6">
            {/* Main CTA */}
            <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-xl text-white shadow-lg">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold">Ready to Begin?</h2>
                <p className="text-white/90">Start your transformation journey with Module 0: Introspection</p>
                <Button 
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  size="lg"
                >
                  Start My Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Tip Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pro Tip</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Complete each module in order for the best results. Each builds on the previous one to create a comprehensive transformation strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* Program Stats */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Program Insights</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Average completion time</span>
                  <span className="font-medium">28 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Success rate</span>
                  <span className="font-medium text-green-600">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Job offers received</span>
                  <span className="font-medium text-primary">3.2 avg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MentorBot - Fixed position */}
        <MentorBot />
      </div>
    </div>
  );
};

export default Index;
