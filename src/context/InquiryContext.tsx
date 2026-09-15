import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InquiryContextType {
  isOpen: boolean;
  mode: 'build' | 'hire';
  openInquiry: (mode?: 'build' | 'hire') => void;
  closeInquiry: () => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export const InquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'build' | 'hire'>('build');

  const openInquiry = (initialMode: 'build' | 'hire' = 'build') => {
    setMode(initialMode);
    setIsOpen(true);
  };

  const closeInquiry = () => {
    setIsOpen(false);
  };

  return (
    <InquiryContext.Provider value={{ isOpen, mode, openInquiry, closeInquiry }}>
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = (): InquiryContextType => {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
};
