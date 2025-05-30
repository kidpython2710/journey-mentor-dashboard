
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, MessageCircle, Minimize2, Maximize2 } from 'lucide-react';

const MentorBot = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const fullMessage = "Hi! I'm MentorBot, your guide for this 30-day transformation. I'll help you through every step—starting with a quick intro and your first module!";

  useEffect(() => {
    if (isVisible && !isMinimized) {
      setIsTyping(true);
      let index = 0;
      const timer = setInterval(() => {
        if (index < fullMessage.length) {
          setCurrentMessage(fullMessage.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isVisible, isMinimized]);

  if (!isVisible) {
    return (
      <Button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg animate-bounce-slow"
        size="icon"
      >
        <MessageCircle size={24} />
      </Button>
    );
  }

  if (isMinimized) {
    return (
      <Card className="fixed bottom-6 right-6 p-4 shadow-lg border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-float">
            <span className="text-white font-bold text-lg">MB</span>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setIsMinimized(false)}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <Maximize2 size={16} />
            </Button>
            <Button
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <X size={16} />
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 max-w-sm p-6 shadow-xl border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-float">
            <span className="text-white font-bold text-lg">MB</span>
          </div>
          <div>
            <h3 className="font-semibold text-primary">MentorBot</h3>
            <p className="text-xs text-muted-foreground">Your AI Guide</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button
            onClick={() => setIsMinimized(true)}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <Minimize2 size={16} />
          </Button>
          <Button
            onClick={() => setIsVisible(false)}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <X size={16} />
          </Button>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 mb-4 border border-primary/10">
        <p className="text-sm leading-relaxed text-gray-700">
          {currentMessage}
          {isTyping && <span className="animate-pulse">|</span>}
        </p>
      </div>

      <div className="flex gap-2">
        <Button 
          onClick={() => setIsVisible(false)}
          className="flex-1 bg-primary hover:bg-primary/90"
          size="sm"
        >
          Got it!
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 border-primary text-primary hover:bg-primary/10"
          size="sm"
        >
          Tell me more
        </Button>
      </div>
    </Card>
  );
};

export default MentorBot;
