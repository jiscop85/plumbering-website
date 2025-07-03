
# BatisHome - راهنمای توسعه‌دهندگان (Development Guide)

این راهنما برای کسانی است که می‌خواهند پروژه BatisHome را برای توسعه و تست محلی اجرا کنند.

## پیش‌نیازها (Prerequisites)

قبل از شروع، باید موارد زیر را روی سیستم خود نصب کنید:

### 1. نصب Node.js
- به سایت [nodejs.org](https://nodejs.org/) بروید
- نسخه LTS (Long Term Support) را دانلود و نصب کنید
- برای بررسی نصب، در ترمینال/کامند پرامپت تایپ کنید:
```bash
node --version
npm --version
```

### 2. نصب Git
- از سایت [git-scm.com](https://git-scm.com/) Git را دانلود و نصب کنید
- برای بررسی: `git --version`

### 3. نصب یک Code Editor (اختیاری ولی توصیه می‌شود)
- [Visual Studio Code](https://code.visualstudio.com/) (رایگان و محبوب)
- یا هر ادیتور دیگری که ترجیح می‌دهید

## مراحل نصب و اجرا

### گام 1: دانلود پروژه
```bash
# کلون کردن پروژه از GitHub
git clone [آدرس-مخزن-گیت‌هاب-شما]
cd batishome
```

### گام 2: نصب وابستگی‌ها
```bash
# نصب تمام پکیج‌های مورد نیاز
npm install
```
این فرآیند ممکن است چند دقیقه طول بکشد.

### گام 3: اجرای پروژه در حالت توسعه
```bash
# شروع سرور توسعه
npm run dev
```

### گام 4: مشاهده نتیجه
- مرورگر خود را باز کنید
- به آدرس `http://localhost:8080` بروید
- وب‌سایت BatisHome را خواهید دید

## فرمان‌های مفید

```bash
# اجرای پروژه در حالت توسعه
npm run dev

# ساخت نسخه نهایی برای انتشار
npm run build

# پیش‌نمایش نسخه ساخته شده
npm run preview

# بررسی کدها برای خطاهای برنامه‌نویسی
npm run lint
```

## ساختار پروژه

```
batishome/
├── src/                    # فایل‌های اصلی برنامه
│   ├── components/         # کامپوننت‌های قابل استفاده مجدد
│   ├── pages/             # صفحات وب‌سایت
│   ├── hooks/             # هوک‌های سفارشی React
│   ├── lib/               # توابع کمکی
│   ├── App.tsx            # کامپوننت اصلی برنامه
│   └── main.tsx           # نقطه ورود برنامه
├── public/                # فایل‌های استاتیک
├── package.json           # تنظیمات پروژه و وابستگی‌ها
└── vite.config.ts         # تنظیمات Vite
```

## تکنولوژی‌های استفاده شده

- **React 18**: کتابخانه اصلی UI
- **TypeScript**: برای type safety
- **Vite**: ابزار build سریع
- **Tailwind CSS**: فریمورک CSS
- **React Router**: مدیریت routing
- **React Query**: مدیریت state و data fetching

## راهنمای عیب‌یابی

### مشکل: `npm install` کار نمی‌کند
**راه‌حل:**
```bash
# پاک کردن cache npm
npm cache clean --force
# تلاش مجدد
npm install
```

### مشکل: پورت 8080 در حال استفاده است
**راه‌حل:**
```bash
# استفاده از پورت دیگر
npm run dev -- --port 3000
```

### مشکل: خطاهای TypeScript
**راه‌حل:**
```bash
# بررسی تمام فایل‌ها برای خطاهای type
npx tsc --noEmit
```

## مشارکت در پروژه

1. یک branch جدید بسازید: `git checkout -b feature/new-feature`
2. تغییرات خود را commit کنید: `git commit -am 'Add new feature'`
3. branch را push کنید: `git push origin feature/new-feature`
4. یک Pull Request ایجاد کنید

## پشتیبانی

اگر با مشکلی مواجه شدید:
1. ابتدا بخش عیب‌یابی را بررسی کنید
2. در issues مخزن GitHub جستجو کنید
3. در صورت عدم یافتن راه‌حل، issue جدید ایجاد کنید

---

**نکته مهم:** این راهنما برای توسعه محلی است. برای استقرار در production از README-CROSSPLATFORM استفاده کنید.








--------------------------------------------------------------------------------
# BatisHome - Cross Platform App

BatisHome is a comprehensive home services platform built with React, TypeScript, and Capacitor for cross-platform compatibility.

## Features

- 🏠 Home Services Management
- 👥 Professional Network
- 📱 Cross-Platform (Web, iOS, Android)
- 🎨 Modern UI with Tailwind CSS
- 🔐 Admin Panel
- 🌐 Multi-language Support (Persian/English)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- For iOS development: macOS with Xcode
- For Android development: Android Studio

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

### Building for Mobile

#### iOS
```bash
npm run cap:build:ios
```

#### Android
```bash
npm run cap:build:android
```

### Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Sync with Capacitor:
   ```bash
   npm run cap:sync
   ```

## Project Structure

```
batishome/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
└── capacitor.config.ts # Capacitor configuration
```

## Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Capacitor** - Cross-platform deployment
- **Radix UI** - Accessible UI components
- **React Router** - Navigation
- **React Query** - Data fetching

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
