import React, { useState, useEffect } from 'react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [inputValue, setInputValue] = useState('');

  const greetingMessage = "Hola, soy tu asistente de Estación Paris. Esto es con fines demostrativos. ¿En qué puedo ayudarte hoy?";

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([{ text: greetingMessage, isUser: false }]);
      }, 2000);
    }
  }, [isOpen, messages.length]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Resetear mensajes al abrir
      setMessages([]);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simular respuesta del bot
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botResponses = [
          "Gracias por tu mensaje. Este es un chat demostrativo.",
          "¿Te gustaría conocer más sobre nuestros lotes disponibles?",
          "Puedo ayudarte a encontrar el terreno perfecto para ti.",
          "Visita nuestra página de lotes para ver todas las opciones."
        ];
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
      }, 1500);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 flex size-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 z-40"
        style={{ backgroundColor: '#CF2E2E' }}
      >
        <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'chat'}</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header del chat */}
          <div className="flex items-center justify-between p-4 bg-primary text-white" style={{ backgroundColor: '#CF2E2E' }}>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">support_agent</span>
              </div>
              <div>
                <h3 className="font-semibold">Asistente Estación Paris</h3>
                <p className="text-xs opacity-90">Demostrativo</p>
              </div>
            </div>
            <button
              onClick={handleToggle}
              className="text-white/80 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">minimize</span>
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.length === 0 && !isTyping && (
              <div className="text-center text-gray-500 py-8">
                <span className="material-symbols-outlined text-4xl mb-2">chat</span>
                <p className="text-sm">Inicia una conversación con nuestro asistente</p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.isUser
                      ? 'bg-primary text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                  style={{ backgroundColor: message.isUser ? '#CF2E2E' : undefined }}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary transition-colors"
                style={{ focus: { borderColor: '#CF2E2E' } }}
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || inputValue.trim() === ''}
                className="p-2 rounded-full bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                style={{ backgroundColor: '#CF2E2E' }}
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">Este es un chat demostrativo</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;