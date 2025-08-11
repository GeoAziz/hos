
'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { MessageCircle, Send, Bot, User, X } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { chatWithBot, ChatMessage } from '@/ai/flows/chat-bot-flow';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = [...messages, userMessage];
      const botResponse = await chatWithBot(history, input);
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
        className="fixed bottom-4 right-4 h-16 w-16 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-80 h-[28rem] z-50 flex flex-col shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className='flex items-center gap-2'>
              <Bot className="h-6 w-6 text-primary" />
              <CardTitle>MediBook Assistant</CardTitle>
            </div>
          </CardHeader>
          <ScrollArea className="flex-grow p-4">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'model' && <Bot className="h-5 w-5 text-primary flex-shrink-0" />}
                  <div className={`rounded-lg p-3 text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                    {msg.content}
                  </div>
                  {msg.role === 'user' && <User className="h-5 w-5 text-muted-foreground flex-shrink-0" />}
                </div>
              ))}
               {isLoading && (
                  <div className="flex items-start gap-2">
                    <Bot className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="rounded-lg p-3 text-sm bg-secondary animate-pulse">
                      Thinking...
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
              <Button onClick={handleSend} disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
