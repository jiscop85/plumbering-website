
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.16cbf20656b04017abe83bf8e45dadc1',
  appName: 'B&H Home Services',
  webDir: 'batishome/dist',
  server: {
    url: "https://16cbf206-56b0-4017-abe8-3bf8e45dadc1.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#f59e0b",
      showSpinner: false
    },
    StatusBar: {
      style: "dark",
      backgroundColor: "#f59e0b"
    }
  }
};

export default config;
