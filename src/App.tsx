import React from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { InquiryProvider } from './context/InquiryContext';

const App: React.FC = () => {
  return (
    <InquiryProvider>
      <RouterProvider router={router} />
    </InquiryProvider>
  );
};

export default App;
