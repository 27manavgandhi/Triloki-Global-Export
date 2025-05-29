import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface AIChatProps {
  onClose: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hello! I\'m your AI assistant at Triloki Global. How can I help you with our premium agricultural exports today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      sender: 'user',
      text: input,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response - in production, this would call an actual API
    setTimeout(() => {
      // Simple responses for demo purposes - in production, integrate with an actual AI chatbot service
      let botResponse = "";
      const lowercaseInput = input.toLowerCase();
      
      if (lowercaseInput.includes('price') || lowercaseInput.includes('cost')) {
        botResponse = "Our prices vary based on product, quantity, and grade. Would you like a specific quote? I can connect you with our sales team who can provide detailed pricing information.";
      } else if (lowercaseInput.includes('shipping') || lowercaseInput.includes('delivery')) {
        botResponse = "We ship worldwide and handle all export documentation. Typically, shipping takes 2-4 weeks after order confirmation, depending on your location. We offer FOB, CIF, and CFR shipping terms.";
      } else if (lowercaseInput.includes('quality') || lowercaseInput.includes('certification')) {
        botResponse = "All our products meet international quality standards and are certified by FSSAI, APEDA, and in many cases organic certification authorities. We can provide documentation and test reports as needed.";
      } else if (lowercaseInput.includes('minimum') || lowercaseInput.includes('order')) {
        botResponse = "Our minimum order quantities vary by product. For most spices, we start at 500kg, while for grains and seeds, we typically require at least 1 metric ton. Special arrangements can be made for sample orders.";
      } else if (lowercaseInput.includes('sample')) {
        botResponse = "Yes, we provide samples before bulk orders. A nominal fee applies for shipping and handling, which is credited toward your first order. Would you like to request samples?";
      } else {
        botResponse = "Thank you for your message. To best assist you, could you provide more details about your specific requirements? Our team is ready to help with any questions about our products, pricing, or export process.";
      }

      const botMessage: Message = {
        sender: 'bot',
        text: botResponse,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-container">
      {/* Chat Header */}
      <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3e9448" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot">
              <path d="M12 8V4H8"/>
              <rect width="16" height="12" x="4" y="8" rx="2"/>
              <path d="M2 14h2"/>
              <path d="M20 14h2"/>
              <path d="M15 13v2"/>
              <path d="M9 13v2"/>
            </svg>
          </div>
          <div>
            <h3 className="font-medium">Triloki AI Assistant</h3>
            <p className="text-xs opacity-80">Online | 24/7 Support</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white hover:text-neutral-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 p-4 overflow-y-auto bg-neutral-50">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.sender === 'user' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-neutral-800 shadow-sm'
              }`}
            >
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-100' : 'text-neutral-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white text-neutral-800 rounded-lg px-4 py-2 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Input Area */}
      <div className="p-4 border-t border-neutral-200 bg-white">
        <div className="flex items-center">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 border border-neutral-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none max-h-32"
            rows={1}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`bg-primary-600 text-white p-2 rounded-r-md h-full ${
              !input.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-700'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-neutral-500 mt-2">Our AI assistant is here to help 24/7. For urgent matters, please contact us directly.</p>
      </div>
    </div>
  );
};

export default AIChat;