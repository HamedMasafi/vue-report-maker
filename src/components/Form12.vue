<template>
<section class="page">
    <h1>فرم کنترل و تحویل پایان نامه کارشناسی ارشد</h1>

    <h2>دانشجوی گرامی {{ model.full_name('name') }}</h2>

    <p>
        ا تبریک موفقیت شما در دفاع از پایان نامه/ رساله در تاریخ...........................، خواهشمند است به نکات زیر جهت انجام مراحل کنترل پایان نامه/ رسالهتوجه فرمایید:
    </p>
    <ol>
        <li>
            رعایت مقررات تدوین، نگارش و آماده سازی پایان نامه/ رساله مطابق با دستورالعمل موسسه شهریار  الزامی است.
        </li>
        <li>
            مهلت تحویل این فرم به آموزش موسسه برای انجام امور فراغت از تحصیل، حداکثر یک ماه پس از تاریخ دفاع است.مشکلات آموزشی و اداری ناشی از دیرکرد متوجه دانشجو است.
        </li>
        <li>
            تاریخ فارغ التحصیلی تاریخ دفاع است.
        </li>
    </ol>
    <p class="h1">
        مهر و امضای مدیر تحصیلات تکمیلی موسسه
    </p>
    <div class="frame text-center">
        <p class="h2">اصلاحات مورد نظر کمیته داوران در پایان نامه توسط دانشجو اعمال گرديد.</p>
        <table class="sec-2">
            <tr>
                <td>امضای استاد راهنما</td>
                <td>امضای مدیر گروه</td>
            </tr>
        </table>
    </div>
    <p>
        دانشجوی گرامی لطفا صرفاً درصورت درخواست استاد راهنما یک نسخه از پایان‌نامه را جهت تحویل به ایشان مطابق فرمت مصوب موسسه تکثیر و صحافی کنید؛ دو عدد CD حاوی فایل word و PDF متن نهایی کل پایان نامه (به صورت کامل و يکپارچه) آماده نموده و پس از تکمیل بخش های زیر و اخذ تأیید از  موسسه (الصاق هولوگرام به CD های حاوی متن کل پایان نامه)، دو عدد CD را به همراه فرم ثبت و توصیف پایان نامهبه کتابخانه مرکزی تحویل نمایید و این برگه را به تأیید مسؤلان مربوطه برسانید. سپس فرم حاضر را به همراه فرم تأیید ثبت اطلاعات در IRANDOC که به تأیید کتابخانه مرکزی رسیده است، به آموزش موسسه تحویل دهید.
    </p>
    <div class="frame">
        <p>
            نسخه صحافی شده(حسب درخواست استاد محترم راهنما) و CD حاوی متن کل پایان نامه بر اساس مقررات تدوین و نگارش پایان نامه بررسی شد، اشکالی ندارد <span class="sq"></span> اشکال دارد و موارد اشکال به شرح جدول پیوست است<span class="sq"></span>
        </p>
        <p class="h1">
            مدیر تحصیلات تکمیلی موسسه امضاء و تاریخ
        </p>
        <p>
            ممهور کردن پایان نامه(حسب درخواست استاد راهنما) و الصاق هولوگرام بر روی CD پایان نامه بلامانع است <span class="sq"></span>  دروضع فعلی مورد تأیید نیست.لازم است موارد اشکال اصلاح شود<span class="sq"></span>
        </p>
        <p class="h1">
            مدیر تحصیلات تکمیلی موسسه امضاء و تاریخ
        </p>
    </div>
    <div class="frame">
        <p>
            فرم ثبت و توصیف پایان نامه و دو عدد CD حاوی فایل نهایی پایان نامه به کتابخانه مرکزی و مرکز اسناد موسسه تحویل داده شد.
        </p>
        <p class="h1">
            مدیر کتابخانه مرکزی امضا و تاریخ
        </p>
    </div>
    <p>
        * این فرم پس از دفاع دانشجو و دریافت صورتجلسات دفاع توسط نماینده تحصیلات تکمیلی حاضر در جلسه دفاع به دانشجو تحویل داده می شود.
    </p>
</section>
</template>

<script>
export default {
    name: 'Form12',
    props:{
        model: Object
    }  
}
</script>