import { BOOKS } from '../constants';

// Browser Speech Recognition Types
interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

const { webkitSpeechRecognition, SpeechRecognition } = window as unknown as IWindow;
const SpeechRecognitionClass = SpeechRecognition || webkitSpeechRecognition;

// TTS Configuration
const VOICE_SETTINGS = {
  lang: 'en-US',
  pitch: 1.05, // Slightly higher for female-leaning
  rate: 0.95,  // Slightly slower for clarity
  volume: 1,
};

export class LexaService {
  recognition: any;
  synthesis: SpeechSynthesis;
  onStateChange: (state: string) => void;
  onTranscriptChange: (text: string) => void;
  onReplyChange: (text: string) => void;
  onNavigate: (path: string) => void;
  onAddToCart: (bookId: string) => void;
  onInstantBuy: (bookId: string) => void;

  constructor(callbacks: {
    onStateChange: (state: string) => void;
    onTranscriptChange: (text: string) => void;
    onReplyChange: (text: string) => void;
    onNavigate: (path: string) => void;
    onAddToCart: (bookId: string) => void;
    onInstantBuy: (bookId: string) => void;
  }) {
    this.synthesis = window.speechSynthesis;
    this.onStateChange = callbacks.onStateChange;
    this.onTranscriptChange = callbacks.onTranscriptChange;
    this.onReplyChange = callbacks.onReplyChange;
    this.onNavigate = callbacks.onNavigate;
    this.onAddToCart = callbacks.onAddToCart;
    this.onInstantBuy = callbacks.onInstantBuy;

    if (SpeechRecognitionClass) {
      this.recognition = new SpeechRecognitionClass();
      this.recognition.continuous = false;
      this.recognition.lang = 'en-US';
      this.recognition.interimResults = true;

      this.recognition.onstart = () => this.onStateChange('LISTENING');
      
      this.recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');
        
        this.onTranscriptChange(transcript);
        
        if (event.results[0].isFinal) {
          this.processCommand(transcript);
        }
      };

      this.recognition.onerror = (event: any) => {
        // Silently handle common non-critical errors
        if (event.error === 'no-speech' || event.error === 'aborted') {
           this.onStateChange('IDLE');
           return;
        }

        console.error('Lexa Recognition Error:', event.error);

        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
           this.speak("I need microphone permission to hear you. Please allow access in your browser settings.");
        } else {
           this.speak("Sorry, I encountered an error. Please try again.");
        }
        this.onStateChange('IDLE');
      };

      this.recognition.onend = () => {
        // State management handled by processCommand usually, 
        // but if no command processed, reset to IDLE
      };
    } else {
      console.warn("Speech Recognition not supported in this browser.");
    }
  }

  startListening() {
    if (this.recognition) {
      this.onReplyChange('');
      this.onTranscriptChange('');
      try {
        this.recognition.start();
      } catch (e) {
        // Already started
      }
    } else {
      alert("Voice features are not supported in this browser. Try Chrome or Edge.");
    }
  }

  stopListening() {
    if (this.recognition) {
      this.recognition.stop();
      this.onStateChange('IDLE');
    }
  }

  speak(text: string) {
    if (this.synthesis.speaking) {
      this.synthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = VOICE_SETTINGS.lang;
    utterance.pitch = VOICE_SETTINGS.pitch;
    utterance.rate = VOICE_SETTINGS.rate;
    utterance.volume = VOICE_SETTINGS.volume;

    // Try to find a female voice
    const voices = this.synthesis.getVoices();
    const femaleVoice = voices.find(v => 
      v.name.includes('Google US English') || 
      v.name.includes('Samantha') || 
      v.name.includes('Female')
    );
    if (femaleVoice) utterance.voice = femaleVoice;

    utterance.onstart = () => {
      this.onStateChange('SPEAKING');
      this.onReplyChange(text);
    };

    utterance.onend = () => {
      this.onStateChange('IDLE');
    };

    this.synthesis.speak(utterance);
  }

  async processCommand(transcript: string) {
    this.onStateChange('PROCESSING');
    const lowerText = transcript.toLowerCase();

    // --- INTENT: GREETING ---
    if (lowerText.match(/hello|hi|hey lexa|greetings/)) {
      this.speak("Hello! I'm Lexa, your learning assistant. You can ask me to find books, read summaries, or help you checkout.");
      return;
    }

    // --- INTENT: NAVIGATION ---
    if (lowerText.includes('home')) {
      this.onNavigate('/');
      this.speak("Going to the homepage.");
      return;
    }
    if (lowerText.includes('catalog') || lowerText.includes('books') || lowerText.includes('list')) {
      this.onNavigate('/catalog');
      this.speak("Opening the books catalog.");
      return;
    }
    if (lowerText.includes('cart')) {
      this.onNavigate('/cart');
      this.speak("Opening your shopping cart.");
      return;
    }
    if (lowerText.includes('contact') || lowerText.includes('support')) {
      this.onNavigate('/contact');
      this.speak("Taking you to the contact page.");
      return;
    }
     if (lowerText.includes('classes') || lowerText.includes('class')) {
      this.onNavigate('/classes-3-8');
      this.speak("Showing you the Classes 3 to 8 section.");
      return;
    }

    // --- INTENT: PRODUCT SEARCH / SHOW ---
    const bookMatch = BOOKS.find(b => lowerText.includes(b.title.toLowerCase()) || lowerText.includes(b.language.toLowerCase()));
    
    if (lowerText.includes('show') || lowerText.includes('open') || lowerText.includes('details')) {
      if (bookMatch) {
        this.onNavigate(`/book/${bookMatch.id}`);
        this.speak(`Opening details for ${bookMatch.title}.`);
      } else {
        this.speak("I couldn't find that specific book. Try saying the language name, like Python or Java.");
      }
      return;
    }

    // --- INTENT: READ SUMMARY ---
    if (lowerText.includes('summary') || lowerText.includes('read') || lowerText.includes('describe')) {
      // Check if we are on a detail page or if a book is named
      if (bookMatch) {
         // If book is named
         const summary = bookMatch.description.split('.')[0] + '.'; // First sentence
         this.speak(`Here is a summary for ${bookMatch.title}: ${summary}. Would you like to buy it?`);
      } else {
         // Fallback: check URL logic in component or generic fail
         this.speak("Please name the book you want a summary for, or go to a book details page.");
      }
      return;
    }

    // --- INTENT: ADD TO CART ---
    if (lowerText.includes('add to cart') || lowerText.includes('add this')) {
       if (bookMatch) {
         this.onAddToCart(bookMatch.id);
         this.speak(`Okay, I've added ${bookMatch.title} to your cart.`);
       } else {
         this.speak("Which book would you like to add? Please say the name.");
       }
       return;
    }

    // --- INTENT: INSTANT BUY / CHECKOUT ---
    if (lowerText.includes('buy') || lowerText.includes('purchase') || lowerText.includes('checkout')) {
      if (bookMatch) {
        this.speak(`You are about to buy ${bookMatch.title} for ${bookMatch.price} rupees. Say Confirm to proceed.`);
        // In a real app, we'd set a 'confirmation' state here. 
        // For this demo, we'll assume next command confirms or trigger directly for demo speed.
        this.onInstantBuy(bookMatch.id); 
      } else {
         // If no book specified, maybe they mean 'checkout cart'
         if (lowerText.includes('cart') || lowerText.includes('now')) {
            this.onNavigate('/cart');
            this.speak("Opening checkout.");
         } else {
            this.speak("Which book do you want to buy? Say the title.");
         }
      }
      return;
    }

    // --- FALLBACK ---
    this.speak("I didn't quite catch that. You can say 'Go to catalog', 'Read Python summary', or 'Buy Java book'.");
    this.onStateChange('IDLE');
  }
}