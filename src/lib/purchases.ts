import Purchases, { PurchasesPackage } from 'react-native-purchases';
import { Platform } from 'react-native';

const API_KEY = Platform.select({
  ios: 'my_ios_api_key',
  android: 'my_android_api_key',
}) || '';

export const initPurchases = () => {
  if (API_KEY) {
    // Purchases.configure({ apiKey: API_KEY });
  }
};

export const getOfferings = async () => {
  // Mock data for development
  return {
    current: {
      availablePackages: [
        {
          identifier: 'weekly',
          packageType: 'WEEKLY',
          product: { title: 'Weekly', priceString: '$4.99/week' }
        },
        {
          identifier: 'yearly',
          packageType: 'ANNUAL',
          product: { title: 'Yearly', priceString: '$129.99/year' }
        }
      ]
    }
  };
  // return await Purchases.getOfferings();
};

export const makePurchase = async (pkg: any) => {
  // return await Purchases.purchasePackage(pkg);
  return { customerInfo: { entitlements: { active: { premium: true } } } };
};
