<template>
        <section class="page">
        <table class="lines">
            <tr>
                <td rowspan="3" width="22">
                    <img src="logo.jpg" />
                </td>
                <td>
                        بسمه تعالی
                </td>
                <td>فرم شماره ۱</td>
            </tr>
            <tr>
                <td>
                    <h1>فرم انتخاب استاد راهنمای پایان‌نامه‌های دانشجویان کارشناسی ‌ارشد</h1>
                </td>
                <td>
                    تاریخ: 
                </td>
            </tr>
            <tr>
                <td>
                    {{model.university}}
                    گروه آموزشی
                    {{model.field}}
                </td>
                <td>
                    شماره:
                </td>
            </tr>
        </table>
        <table class="lines">
            <tr>
                <td>
<h2>استاد ارجمند 
    <span data-i="r" /> </h2>
                        با سلام، احتراماً اینجانب 
                        {{model.myname()}}
                         دانشجوی مقطع کارشناسی‌ ارشد رشته‌ی {{model.orientation}} 
                        گروه آموزشی 
                        {{model.field}} 
                        {{model.university}}
                        ورودی نیم‌سال 
                        {{ model.fa_number( "entrance_part") }}
                         سال‌تحصیلی 
                        {{  model.fa_number("entrance_year") }}
                         به شماره دانشجویی 
                        {{ model.fa_number("student_number") }}
                         تمایل دارم  پایان‌نامه‌ی کارشناسی‌ ارشد خود را تحت نظارت و راهنمایی جنابعالی به انجام برسانم. در ضمن اعلام می‌دارم که چنین فرمی را به امضای اساتید دیگری نرسانده‌ام. خواهشمند است در صورت موافقت، مراتب را به مدیر محترم گروه اعلام فرمایید.
                </td>
            </tr>
        </table>
    </section>

</template>


<script>
export default {
    name: "Form1",
    props: {
        model: Object
    }
}
</script>