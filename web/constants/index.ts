import { Language, Currency, Country } from '@/types';

// Supported languages
export const SUPPORTED_LANGUAGES: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    rtl: false,
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिंदी',
    flag: '🇮🇳',
    rtl: false,
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    rtl: false,
  },
];

// Supported currencies
export const SUPPORTED_CURRENCIES: Currency[] = [
  {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    decimal: 2,
    rate: 1.0, // Base currency
  },
  {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    decimal: 2,
    rate: 0.85, // Will be updated by API
  },
  {
    code: 'INR',
    name: 'Indian Rupee',
    symbol: '₹',
    decimal: 2,
    rate: 83.0, // Will be updated by API
  },
  {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    decimal: 2,
    rate: 0.78, // Will be updated by API
  },
];

// Country to language/currency mapping
export const COUNTRY_SETTINGS: Record<string, Country> = {
  US: {
    code: 'US',
    name: 'United States',
    defaultLanguage: 'en',
    defaultCurrency: 'USD',
    timezone: 'America/New_York',
  },
  IN: {
    code: 'IN',
    name: 'India',
    defaultLanguage: 'hi',
    defaultCurrency: 'INR',
    timezone: 'Asia/Kolkata',
  },
  ES: {
    code: 'ES',
    name: 'Spain',
    defaultLanguage: 'es',
    defaultCurrency: 'EUR',
    timezone: 'Europe/Madrid',
  },
  GB: {
    code: 'GB',
    name: 'United Kingdom',
    defaultLanguage: 'en',
    defaultCurrency: 'GBP',
    timezone: 'Europe/London',
  },
};

// API Configuration
export const API_CONFIG = {
  EXCHANGE_RATE_BASE_URL: 'https://api.exchangerate-api.com/v4/latest',
  GEOLOCATION_BASE_URL: 'https://ipapi.co/json',
  BASE_CURRENCY: 'USD',
  RATE_UPDATE_INTERVAL: 3600000, // 1 hour in milliseconds
};

// Default settings
export const DEFAULT_SETTINGS = {
  LANGUAGE: 'en',
  CURRENCY: 'USD',
  AUTO_DETECT: true,
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  EXCHANGE_RATES: 'exchange_rates',
  LAST_RATE_UPDATE: 'last_rate_update',
} as const;
