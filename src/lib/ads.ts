import mobileAds from 'react-native-google-mobile-ads';

export const initAds = () => {
  mobileAds()
    .initialize()
    .then(adapterStatuses => {
      // Initialization complete!
    });
};
