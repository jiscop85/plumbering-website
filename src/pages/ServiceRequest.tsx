
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Clock, User, Phone, FileText, CheckCircle } from 'lucide-react';

const ServiceRequest = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    description: '',
    urgency: '',
    date: '',
    time: '',
    address: '',
    name: '',
    phone: '',
    email: ''
  });

  const steps = [
    { number: 1, title: 'انتخاب خدمت', icon: FileText },
    { number: 2, title: 'جزئیات مشکل', icon: FileText },
    { number: 3, title: 'زمان و مکان', icon: MapPin },
    { number: 4, title: 'اطلاعات تماس', icon: User },
    { number: 5, title: 'تأیید نهایی', icon: CheckCircle }
  ];

  const serviceTypes = [
    { value: 'plumbing', label: 'لوله‌کشی' },
    { value: 'electricity', label: 'برق‌کاری' },
    { value: 'heating', label: 'گرمایش و سرمایش' },
    { value: 'maintenance', label: 'نگهداری و تعمیرات' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'عادی (1-3 روز)' },
    { value: 'medium', label: 'متوسط (همان روز)' },
    { value: 'high', label: 'فوری (حداکثر 2 ساعت)' }
  ];

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">نوع خدمت مورد نیاز را انتخاب کنید</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceTypes.map((service) => (
                <Card
                  key={service.value}
                  className={`cursor-pointer transition-all duration-200 ${
                    formData.serviceType === service.value
                      ? 'ring-2 ring-blue-500 bg-blue-50'
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => setFormData({ ...formData, serviceType: service.value })}
                >
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold">{service.label}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">توضیح مشکل خود</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="description">شرح کامل مشکل</Label>
                <Textarea
                  id="description"
                  placeholder="لطفاً مشکل خود را به تفصیل بیان کنید..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={6}
                />
              </div>
              <div>
                <Label htmlFor="urgency">میزان فوریت</Label>
                <Select value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">زمان و مکان</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="date">تاریخ مورد نظر</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="time">ساعت مورد نظر</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="address">آدرس کامل</Label>
              <Textarea
                id="address"
                placeholder="آدرس کامل محل انجام کار را وارد کنید..."
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={3}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">اطلاعات تماس</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">نام و نام خانوادگی</Label>
                <Input
                  id="name"
                  placeholder="نام خود را وارد کنید"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="phone">شماره تماس</Label>
                <Input
                  id="phone"
                  placeholder="09123456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">ایمیل (اختیاری)</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">تأیید نهایی درخواست</h3>
            <Card className="bg-gray-50">
              <CardContent className="p-6 space-y-4">
                <div><strong>نوع خدمت:</strong> {serviceTypes.find(s => s.value === formData.serviceType)?.label}</div>
                <div><strong>فوریت:</strong> {urgencyLevels.find(u => u.value === formData.urgency)?.label}</div>
                <div><strong>تاریخ:</strong> {formData.date}</div>
                <div><strong>ساعت:</strong> {formData.time}</div>
                <div><strong>نام:</strong> {formData.name}</div>
                <div><strong>شماره تماس:</strong> {formData.phone}</div>
                <div><strong>توضیحات:</strong> {formData.description}</div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.number} className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                          currentStep >= step.number
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-sm ${currentStep >= step.number ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 5) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Content */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                {renderStepContent()}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={prevStep}>
                      مرحله قبل
                    </Button>
                  )}
                  
                  <div className="ml-auto">
                    {currentStep < 5 ? (
                      <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                        مرحله بعد
                      </Button>
                    ) : (
                      <Button className="bg-green-600 hover:bg-green-700">
                        ثبت درخواست
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceRequest;
