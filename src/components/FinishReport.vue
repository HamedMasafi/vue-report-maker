<template>
<section class="page">
            <h1>فرم گواهی انجام اصلاحات پایان‌نامه</h1>

    <br /><br />
    <p class="large-text m-2">
        بدین وسیله گواهی می‌شود اصلاحات خواسته شده از آقای 
        {{ model.myname() }}
        دانشجوی مقطع ارشد رشته
        {{ model.field }}
        گرایش
        {{ model.orientation }}
        با عنوان
        {{ model.title }}
        که در تاریخ 
        {{ model.defdate }}
        در جلسه دفاع ایشان شرکت نموده‌ام مطابق نمونه‌ی داوری شده توسط اینجانب انجام گردید.
    </p>
    <br /><br />
    <table class="text-center large-text sec-2 m-2">
        <tr>
            <td>
                نام و نام خانوادگی استاد داور ۱
                <br />
                {{ model.drname('arbiter') }}
            </td>
            <td>
                نام و نام خانوادگی معاون پژوهشی
                <br />
                دکتر بیژن ظهیری ناو
            </td>
        </tr>
    </table>
    <br /><br />
    <table class="text-center large-text sec-2 m-2">
        <tr>
            <td>
                نام و نام خانوادگی استاد مشاور
                <br />
                {{ model.drname('consultant') }}
            </td>
            <td>
                نام و نام خانوادگی مدیر تحصیلات تکمیلی
                <br />
                {{ model.full_name("agent") }}
            </td>
        </tr>
    </table>
</section>
</template>

<script>
export default {
    name: "FinishReport",
    props: {
        model: Object
    }
}
</script>