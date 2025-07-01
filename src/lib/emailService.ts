import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key from environment variables
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (formData: EmailData): Promise<void> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'vihaax23@gmail.com', // Your email where you want to receive messages
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      console.log('Email sent successfully!');
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
