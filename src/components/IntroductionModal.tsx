
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface IntroductionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntroductionModal = ({ isOpen, onClose }: IntroductionModalProps) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    "Hi Sarah! I'm Maya, your personal transformation guide! 👋",
    "I'm so excited to be part of your 30-day job transformation journey!",
    "I'll be with you every step of the way - from introspection to landing your dream job.",
    "Together, we'll unlock your potential, build your brand, and master the interview process.",
    "Ready to transform your career? Let's begin this amazing journey together!"
  ];

  useEffect(() => {
    if (isOpen && messageIndex < messages.length) {
      setIsTyping(true);
      setCurrentMessage('');
      
      let index = 0;
      const message = messages[messageIndex];
      
      const timer = setInterval(() => {
        if (index < message.length) {
          setCurrentMessage(message.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(timer);
          
          // Auto advance to next message after a pause
          if (messageIndex < messages.length - 1) {
            setTimeout(() => {
              setMessageIndex(prev => prev + 1);
            }, 2000);
          }
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isOpen, messageIndex]);

  const handleSkip = () => {
    setMessageIndex(messages.length - 1);
    setCurrentMessage(messages[messages.length - 1]);
    setIsTyping(false);
  };

  const handleContinue = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(prev => prev + 1);
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 border-0 shadow-2xl animate-scale-in">
        <div className="p-8 text-center space-y-6">
          {/* Avatar */}
          <div className="relative mx-auto w-32 h-32">
            <div className="w-32 h-32 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center shadow-lg animate-float">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Introduction Text */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Meet Maya
            </h1>
            <p className="text-sm text-muted-foreground">
              Your AI Career Transformation Guide
            </p>
          </div>

          {/* Message Bubble */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/10 min-h-[120px] flex items-center justify-center">
            <p className="text-lg leading-relaxed text-gray-700">
              {currentMessage}
              {isTyping && <span className="animate-pulse ml-1">|</span>}
            </p>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2">
            {messages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= messageIndex 
                    ? 'bg-primary' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center pt-4">
            {messageIndex < messages.length - 1 ? (
              <>
                <Button
                  onClick={handleSkip}
                  variant="outline"
                  className="border-primary/20 text-primary hover:bg-primary/10"
                >
                  Skip Introduction
                </Button>
                <Button
                  onClick={handleContinue}
                  className="bg-primary hover:bg-primary/90"
                  disabled={isTyping}
                >
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </>
            ) : (
              <Button
                onClick={onClose}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Let's Begin My Journey!
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IntroductionModal;
