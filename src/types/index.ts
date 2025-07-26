// Language related types
export interface Language {
    code: string;           // 'en', 'hi', 'es'
    name: string;          // 'English', 'हिंदी', 'Español'
    nativeName: string;    // How language is written in itself
    flag: string;          // Flag emoji
    rtl: boolean;          // Right-to-left writing direction
  }
  
  // Currency related types
  export interface Currency {
    code: string;          // 'USD', 'INR', 'EUR'
    name: string;          // 'US Dollar', 'Indian Rupee'
    symbol: string;        // '$', '₹', '€'
    decimal: number;       // Decimal places (2 for most currencies)
    rate: number;          // Exchange rate relative to base currency
  }
  
  // Location/Country types
  export interface Country {
    code: string;          // 'US', 'IN', 'ES'
    name: string;          // 'United States', 'India'
    defaultLanguage: string; // 'en', 'hi', 'es'
    defaultCurrency: string; // 'USD', 'INR', 'EUR'
    timezone: string;      // 'America/New_York'
  }
  
  // User preferences
  export interface UserPreferences {
    language: string;      // User's selected language
    currency: string;      // User's selected currency
    autoDetect: boolean;   // Whether to auto-detect settings
    location?: Country;    // Detected or manual location
  }
  
  // API Response types
  export interface ExchangeRateResponse {
    success: boolean;
    timestamp: number;
    base: string;          // Base currency (usually USD)
    date: string;          // Rate date
    rates: Record<string, number>; // Currency code to rate mapping
  }
  
  export interface GeolocationResponse {
    country_code: string;  // 'US', 'IN'
    country_name: string;  // 'United States'
    currency: string;      // 'USD'
    languages: string;     // 'en-US,es-US'
    timezone: string;      // 'America/New_York'
  }
  
  // Component prop types
  export interface LanguageSwitcherProps {
    currentLanguage: Language;
    availableLanguages: Language[];
    onLanguageChange: (language: Language) => void;
    className?: string;
  }
  
  export interface CurrencySwitcherProps {
    currentCurrency: Currency;
    availableCurrencies: Currency[];
    onCurrencyChange: (currency: Currency) => void;
    className?: string;
  }
  
  export interface PriceDisplayProps {
    amount: number;        // Price in base currency
    baseCurrency: string;  // Base currency code
    displayCurrency: Currency; // Currency to display in
    showOriginal?: boolean; // Show original price too
  }
  
  // Error types
  export interface ApiError {
    code: string;
    message: string;
    details?: any;
  }
  