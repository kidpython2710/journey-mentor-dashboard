
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Lock, Play } from 'lucide-react';

const JourneyProgress = () => {
  const modules = [
    {
      id: 0,
      title: "Introspection",
      description: "Discover your strengths and career goals",
      status: "current",
      icon: "🧠"
    },
    {
      id: 1,
      title: "Branding",
      description: "Build your professional brand and online presence",
      status: "locked",
      icon: "✨"
    },
    {
      id: 2,
      title: "Interview Kit",
      description: "Master interview techniques and prepare responses",
      status: "locked",
      icon: "💼"
    },
    {
      id: 3,
      title: "Mock Interviews",
      description: "Practice with AI-powered interview simulations",
      status: "locked",
      icon: "🎯"
    },
    {
      id: 4,
      title: "Application Strategy",
      description: "Create your final job search strategy",
      status: "locked",
      icon: "🚀"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "current":
        return <Play className="w-6 h-6 text-primary" />;
      case "locked":
        return <Lock className="w-6 h-6 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Completed</Badge>;
      case "current":
        return <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Current</Badge>;
      case "locked":
        return <Badge variant="secondary">Locked</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2">Your Journey</h2>
        <p className="text-muted-foreground">Track your progress through the 30-day transformation</p>
      </div>

      <div className="space-y-4">
        {modules.map((module, index) => (
          <div 
            key={module.id}
            className={`relative flex items-center p-4 rounded-lg border-2 transition-all duration-300 ${
              module.status === "current" 
                ? "border-primary bg-primary/5 shadow-md" 
                : module.status === "completed"
                ? "border-green-200 bg-green-50"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            {/* Connection line */}
            {index < modules.length - 1 && (
              <div className="absolute left-8 top-16 w-0.5 h-8 bg-gray-300"></div>
            )}

            <div className="flex items-center gap-4 flex-1">
              <div className={`text-2xl p-3 rounded-full ${
                module.status === "current" ? "bg-primary/10" : "bg-gray-100"
              }`}>
                {module.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className={`font-semibold ${
                    module.status === "locked" ? "text-gray-500" : "text-gray-900"
                  }`}>
                    Module {module.id}: {module.title}
                  </h3>
                  {getStatusBadge(module.status)}
                </div>
                <p className={`text-sm ${
                  module.status === "locked" ? "text-gray-400" : "text-muted-foreground"
                }`}>
                  {module.description}
                </p>
              </div>

              <div className="flex items-center">
                {getStatusIcon(module.status)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-primary">Overall Progress</p>
            <p className="text-xs text-muted-foreground">0 of 5 modules completed</p>
          </div>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JourneyProgress;
