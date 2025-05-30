
import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, Target, TrendingUp } from 'lucide-react';

const QuickSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-primary">Progress</h3>
            <p className="text-2xl font-bold text-gray-900">0/5</p>
            <p className="text-sm text-muted-foreground">Modules Completed</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-accent/10 rounded-full">
            <Calendar className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-accent">Next Activity</h3>
            <p className="text-lg font-bold text-gray-900">Start Module 0</p>
            <p className="text-sm text-muted-foreground">Introspection Phase</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-orange-100 rounded-full">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-orange-600">Timeline</h3>
            <p className="text-lg font-bold text-gray-900">30 Days</p>
            <p className="text-sm text-muted-foreground">Total Program</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuickSummary;
