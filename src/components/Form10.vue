<template>
    <div>
            <section class="page">
        <h1>باسمه تعالی</h1>
        <h1>فرم صورتجلسه دفاع از پايان نامه كارشناسي ارشد</h1>

        <p>
            دفاع از پايان‌نامه كارشناسی ارشد
            {{ model.myname() }} 
            در رشتة
            {{ model.field }}
            گرايش
            {{ model.orientation }}
            با عنوان
            {{ model.title }}
            به ارزش
            {{ model.units }}
            واحد، در ساعت
            {{ model.time }}
            روز
            {{ model.day }}
            مورخ
            {{ model.date }}
            در محل
            {{ model.place }}
            موسسه آموزش عالی شهریار آستارا تشكيل شد. هيأت داوران پس از بررسی، نتيجه را به شرح زير اعلام مي‌دارند:
        </p>

        <ul>
            <li><span class="sq" />
                پايان‌نامه با نمره ......................... و با امتياز عالي<span class="sq" />، خیلی خوب<span
                    class="sq" />، خوب<span class="sq" />، متوسط<span class="sq" /> مورد تأييد قرار گرفت.
            </li>
            <li>
                <span class="sq" /> پايان‌نامه در وضع فعلي با اصلاحات جزيي و نمرة ............. و امتياز عالي<span
                    class="sq" />، خیلی خوب<span class="sq" />، خوب<span class="sq" />، متوسط<span class="sq" /> پذیرفته
                شد.
            </li>
            <li>
                <span class="sq" /> پايان‌نامه به شكل فعلي، مورد تأييد قرار نگرفت و پيشنهاد شد
                .................................................................................................................

            </li>
        </ul>

        <table class="lines">
            <tr class="header-row">
                <td>اعضای هيأت داوران</td>
                <td>نام و نام خانوادگی</td>
                <td>مرتبه دانشگاهی</td>
                <td>تخصص</td>
                <td>محل کار</td>
                <td style="width: 4cm">امضا</td>
            </tr>
            <tr>
                <td style="height: 4cm">استاد راهنما</td>
                <td>{{ model.drname('supervisor') }}</td>
                <td>{{ model.supervisor_grade }}</td>
                <td>{{ model.supervisor_specialty }}</td>
                <td>{{ model.supervisor_work_place }}</td>
                <td></td>
            </tr>
            <tr>
                <td style="height: 4cm">استاد داور</td>
                <td>{{ model.drname('arbiter') }}</td>
                <td>{{ model.arbiter_grade }}</td>
                <td>{{ model.arbiter_specialty }}</td>
                <td>{{ model.arbiter_work_place }}</td>
                <td></td>
            </tr>
            <tr>
                <td style="height: 4cm">استاد مشاور</td>
                <td>{{ model.drname('consultant') }}</td>
                <td>{{ model.consultant_grade }}</td>
                <td>{{ model.consultant_specialty }}</td>
                <td>{{ model.consultant_work_place }}</td>
                <td></td>
            </tr>
        </table>
        <br />
        <table class="lines sec-4">
            <tr class="header-row">
                <td>نمایندة تحصیلات تکمیلی</td>
                <td>مرتبه دانشگاهی</td>
                <td>گروه آموزشی/پژوهشی</td>
                <td>امضا</td>
            </tr>
            <tr>
                <td style="height: 4cm"></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </section>
    <section class="page" style="direction: ltr; text-align: left">
        <div class="h1">In The Name of God</div>
        <h1>Proceeding for Master of Science Thesis</h1>
        <p>
            Defense session for granting M. Sc. degree on award to {{ model.myname_en() }} majoring in {{ model.field_en }}
             minor in {{ model.orientation_en }}, title of thesis {{ model.title_en }}
                    with 6 hours credit, held on Sept., 20, 2015 at 10:00, in Shahriar Institute of Higher Education.
                    The juries announced the following decision:
        </p>

        <ul>
            <li>
                <div class="sq"></div> The thesis is accepted with score …...…. of 20 ranged as Excellent <div
                    class="sq"></div>, Very good <div class="sq"></div>, Good <div class="sq"></div>, Acceptable <div
                    class="sq"></div>.
            </li>
            <li>
                <div class="sq"></div> The thesis is acceptable with minor corrections with score ………... of 20 ranged as
                Excellent <div class="sq"></div>, Very good <div class="sq"></div>, Good <div class="sq"></div>,
                Acceptable <div class="sq"></div>.
            </li>
            <li>
                <div class="sq"></div> The thesis with present status is not accepted and it is suggested that
                ………………………………………………………………………………………
            </li>
        </ul>

        <table class="lines">
            <tr class="header-row">
                <td>Juries’ members</td>
                <td>Name</td>
                <td>Rank</td>
                <td>Specialization</td>
                <td>Affiliation</td>
                <td style="width: 4cm">Signature</td>
            </tr>
            <tr>
                <td style="height: 4cm">Supervisor</td>
                <td>{{ model.drname_en('supervisor') }}</td>
                <td>{{ model.supervisor_grade }}</td>
                <td>{{ model.supervisor_specialty }}</td>
                <td>{{ model.supervisor_work_place }}</td>
                <td></td>
            </tr>
            <tr>
                <td style="height: 4cm">Arbiter</td>
                <td>{{ model.drname_en('arbiter') }}</td>
                <td>{{ model.arbiter_grade }}</td>
                <td>{{ model.arbiter_specialty }}</td>
                <td>{{ model.arbiter_work_place }}</td>
                <td></td>
            </tr>
            <tr>
                <td style="height: 4cm">Consultant</td>
                <td>{{ model.drname_en('consultant') }}</td>
                <td>{{ model.consultant_grade }}</td>
                <td>{{ model.consultant_specialty }}</td>
                <td>{{ model.consultant_work_place }}</td>
                <td></td>
            </tr>
        </table>
        <br />
        <table class="lines sec-4">
            <tr class="header-row">
                <td>Representative of Graduate Office</td>
                <td>Rank</td>
                <td>Affiliation</td>
                <td>Signature</td>
            </tr>
            <tr>
                <td style="height: 4cm"></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </section>
    </div>
</template>

<script>

export default {
    name: "Form10",
    props: {
        model: Object
    }
}
</script>