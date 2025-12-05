// lib/emailService.ts
export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const sendEmail = async (formData: ContactFormData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send message');
    }

    return await response.json();
  } catch (error: any) {
    console.error('Email service error:', error);
    
    // Handle network errors
    if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
      throw new Error('Network error. Please check your connection.');
    }
    
    throw error;
  }
};