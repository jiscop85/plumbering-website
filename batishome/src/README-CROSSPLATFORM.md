
# BatisHome - راهنمای Cross-Platform (موبایل و وب)

این راهنما برای ساخت و اجرای BatisHome به صورت Cross-Platform (وب، iOS، اندروید) طراحی شده است.

## پیش‌نیازها (Prerequisites)

### نیازمندی‌های عمومی:
- **Node.js** (نسخه 18 یا بالاتر): [nodejs.org](https://nodejs.org/)
- **Git**: [git-scm.com](https://git-scm.com/)
- **npm** (همراه با Node.js نصب می‌شود)

### برای توسعه iOS:
- **macOS** (اجباری)
- **Xcode** (از Mac App Store)
- **Xcode Command Line Tools**:
```bash
xcode-select --install
```

### برای توسعه Android:
- **Android Studio**: [developer.android.com](https://developer.android.com/studio)
- **Java Development Kit (JDK) 11**: [adoptopenjdk.net](https://adoptopenjdk.net/)

## مراحل نصب اولیه

### گام 1: آماده‌سازی پروژه
```bash
# کلون پروژه
git clone [آدرس-مخزن-گیت‌هاب]
cd batishome

# نصب وابستگی‌ها
npm install
```

### گام 2: ساخت پروژه وب
```bash
# ساخت نسخه production
npm run build
```

### گام 3: آماده‌سازی Capacitor
```bash
# همگام‌سازی با پلتفرم‌های موبایل
npm run cap:sync
```

## اجرا روی پلتفرم‌های مختلف

### 🌐 اجرای وب (Web)
```bash
# حالت توسعه
npm run dev

# سپس به http://localhost:8080 بروید
```

### 📱 اجرای iOS

#### روش 1: شبیه‌ساز iOS
```bash
# اضافه کردن پلتفرم iOS
npx cap add ios

# ساخت و اجرا
npm run cap:build:ios
```

#### روش 2: دستگاه واقعی iOS
```bash
# ساخت پروژه
npm run build
npx cap sync ios

# باز کردن در Xcode
npx cap open ios
```
سپس در Xcode:
1. دستگاه خود را انتخاب کنید
2. روی دکمه "Run" کلیک کنید

### 🤖 اجرای Android

#### روش 1: شبیه‌ساز Android
```bash
# اضافه کردن پلتفرم Android
npx cap add android

# ساخت و اجرا
npm run cap:build:android
```

#### روش 2: دستگاه واقعی Android
```bash
# فعال کردن Developer Options و USB Debugging روی دستگاه
# ساخت پروژه
npm run build
npx cap sync android

# باز کردن در Android Studio
npx cap open android
```

## فرمان‌های Capacitor

```bash
# همگام‌سازی پروژه با پلتفرم‌ها
npx cap sync

# اضافه کردن پلتفرم
npx cap add ios
npx cap add android

# اجرای مستقیم
npx cap run ios
npx cap run android

# باز کردن در IDE مربوطه
npx cap open ios
npx cap open android

# به‌روزرسانی Capacitor
npx cap update
```

## تنظیمات Capacitor (capacitor.config.ts)

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.16cbf20656b04017abe83bf8e45dadc1',
  appName: 'B&H Home Services',
  webDir: 'dist',
  server: {
    // برای hot-reload در طول توسعه
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
```

## ویژگی‌های Cross-Platform

### 🔧 ویژگی‌های پیاده‌سازی شده:
- ✅ رابط کاربری واکنش‌گرا (Responsive)
- ✅ پشتیبانی از RTL (فارسی)
- ✅ چند زبانه (انگلیسی، فارسی، فرانسه)
- ✅ Splash Screen سفارشی
- ✅ Status Bar تنظیم شده
- ✅ Navigation مناسب برای موبایل

### 🚀 ویژگی‌های قابل اضافه:
- 📷 دوربین (Camera API)
- 📍 موقعیت جغرافیایی (Geolocation)
- 🔔 Push Notifications
- 💾 ذخیره‌سازی محلی (Storage)
- 📞 تماس و SMS

## عیب‌یابی مشکلات رایج

### مشکل: iOS build ناموفق
```bash
# پاک کردن derived data
rm -rf ~/Library/Developer/Xcode/DerivedData

# به‌روزرسانی CocoaPods
cd ios/App && pod install && cd ../..
```

### مشکل: Android build ناموفق
```bash
# پاک کردن build cache
cd android && ./gradlew clean && cd ..

# بررسی متغیرهای محیطی
echo $ANDROID_HOME
echo $JAVA_HOME
```

### مشکل: Capacitor sync
```bash
# پاک کردن و نصب مجدد
rm -rf node_modules package-lock.json
npm install
npx cap sync
```

## استقرار (Deployment)

### 🌐 استقرار وب:
```bash
npm run build
# فایل‌های dist/ را روی سرور وب آپلود کنید
```

### 📱 انتشار iOS (App Store):
1. در Xcode certificate و provisioning profile تنظیم کنید
2. Archive ایجاد کنید
3. به App Store Connect آپلود کنید

### 🤖 انتشار Android (Google Play):
1. کلید امضای APK تولید کنید
2. در Android Studio signed APK بسازید
3. به Google Play Console آپلود کنید

## منابع اضافی

- [مستندات Capacitor](https://capacitorjs.com/docs)
- [راهنمای iOS Development](https://developer.apple.com/ios/)
- [راهنمای Android Development](https://developer.android.com/)
- [مقاله‌ای درباره اجرا روی دستگاه واقعی](https://lovable.dev/blogs/TODO)

---

**نکته:** برای توسعه روزانه از README-DEVELOPMENT.md استفاده کنید.
