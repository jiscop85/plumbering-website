
# راهنمای فرمان‌های Docker برای BatisHome

## فرمان‌های اساسی

### 🔨 ساخت و اجرای Development
```bash
# ساخت و اجرای محیط توسعه
docker-compose --profile dev up --build

# اجرا در پس‌زمینه
docker-compose --profile dev up -d --build

# مشاهده لاگ‌ها
docker-compose --profile dev logs -f
```

### 🚀 ساخت و اجرای Production
```bash
# ساخت و اجرای نسخه تولید
docker-compose --profile prod up --build

# اجرا در پس‌زمینه
docker-compose --profile prod up -d --build
```

### 📱 ساخت برای توسعه Cross-Platform
```bash
# برای توسعه موبایل با Capacitor
docker-compose --profile mobile up --build
```

## فرمان‌های مدیریتی

### متوقف کردن سرویس‌ها
```bash
# متوقف کردن تمام سرویس‌ها
docker-compose down

# متوقف کردن با حذف volumes
docker-compose down -v

# متوقف کردن با حذف images
docker-compose down --rmi all
```

### مشاهده وضعیت
```bash
# مشاهده سرویس‌های در حال اجرا
docker-compose ps

# مشاهده لاگ‌ها
docker-compose logs batishome-dev
docker-compose logs batishome-prod
```

### ورود به container
```bash
# ورود به container development
docker exec -it batishome-development sh

# ورود به container production
docker exec -it batishome-production sh
```

## فرمان‌های پاکسازی

### پاکسازی کامل
```bash
# حذف تمام containers متوقف شده
docker container prune

# حذف تمام images استفاده نشده
docker image prune -a

# حذف تمام volumes استفاده نشده
docker volume prune

# پاکسازی کامل سیستم
docker system prune -a --volumes
```

### پاکسازی مخصوص پروژه
```bash
# حذف containers مربوط به این پروژه
docker-compose down --rmi all -v

# rebuild کامل
docker-compose build --no-cache
```

## نکات مهم

### 🔧 Development Mode
- تغییرات در کد به صورت خودکار اعمال می‌شود (Hot Reload)
- دسترسی از طریق: `http://localhost:8080`

### 🚀 Production Mode  
- کد بهینه‌سازی شده و آماده انتشار
- استفاده از Nginx برای سرو فایل‌ها
- دسترسی از طریق: `http://localhost`

### 📱 Mobile Development
- قابلیت اتصال Capacitor برای تست موبایل
- پورت‌های اضافی برای live reload

## متغیرهای محیطی (Environment Variables)

```bash
# تنظیم متغیرها قبل از اجرا
export NODE_ENV=production
export CAPACITOR_SERVER_URL=http://localhost:8080

# یا استفاده از فایل .env
echo "NODE_ENV=development" > .env
```

## عیب‌یابی

### مشکل: پورت در حال استفاده
```bash
# تغییر پورت در docker-compose.yml
ports:
  - "3001:8080"  # به جای 8080:8080
```

### مشکل: Hot Reload کار نمی‌کند
```bash
# اطمینان از mount صحیح volumes
# و تنظیم CHOKIDAR_USEPOLLING=true
```

### مشکل: Build ناموفق
```bash
# پاکسازی cache و rebuild
docker-compose build --no-cache
```
