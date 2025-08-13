
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { MessageCircle, Send, Bot, User, X } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { chatWithBot, ChatMessage } from '@/ai/flows/chat-bot-flow';

const starterQuestions = [
    "What services do you offer?",
    "Where are your branches located?",
    "How can I book an appointment?",
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: ChatMessage = {
        role: 'model',
        content: "Welcome to MediBook! I'm here to help. You can ask me a question or choose one of the options below.",
      };
      setMessages([initialMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollAreaRef.current) {
        // A bit of a hack to scroll to the bottom.
        // The underlying DOM element is the first child of the ref.
        const scrollableView = scrollAreaRef.current.firstElementChild;
        if(scrollableView) {
           scrollableView.scrollTo({ top: scrollableView.scrollHeight, behavior: 'smooth' });
        }
    }
  }, [messages, isLoading]);

  const handleSend = async (query?: string) => {
    const userQuery = query || input;
    if (!userQuery.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: userQuery };
    setMessages((prev) => [...prev, userMessage]);
    if (!query) {
      setInput('');
    }
    setIsLoading(true);

    try {
      // Pass only the relevant history, not the initial welcome message if it's the first query
      const history = messages.length === 1 && messages[0].content.startsWith("Welcome") 
        ? []
        : [...messages, userMessage];

      const botResponse = await chatWithBot(history, userQuery);
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        role: 'model',
        content: "I'm sorry, but I'm having trouble connecting right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        className="fixed bottom-4 right-4 h-16 w-16 rounded-full shadow-lg z-50 animate-pulse"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-96 h-[32rem] z-50 flex flex-col shadow-2xl rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between border-b">
            <div className='flex items-center gap-3'>
              <Bot className="h-7 w-7 text-primary" />
              <CardTitle className="text-lg">MediBook Assistant</CardTitle>
            </div>
          </CardHeader>
          <ScrollArea ref={scrollAreaRef} className="flex-grow p-4">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'model' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                  <div className={`rounded-lg p-3 text-sm max-w-[80%] ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                    {msg.content}
                  </div>
                  {msg.role === 'user' && <User className="h-6 w-6 text-muted-foreground flex-shrink-0" />}
                </div>
              ))}
              {messages.length === 1 && !isLoading && (
                  <div className="space-y-2 pt-2">
                    {starterQuestions.map(q => (
                        <Button key={q} variant="outline" size="sm" className="w-full text-left justify-start" onClick={() => handleSend(q)}>
                           {q}
                        </Button>
                    ))}
                  </div>
              )}
               {isLoading && (
                  <div className="flex items-start gap-2.5">
                    <Bot className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="rounded-lg p-3 text-sm bg-secondary animate-pulse">
                        <div className="flex items-center space-x-1">
                          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></span>
                        </div>
                    </div>
                  </div>
                )}
            </div>
          </ScrollArea>
          <CardFooter className="p-4 border-t">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder="Ask a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={isLoading}
              />
              <Button onClick={() => handleSend()} disabled={isLoading} aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
