export const groups = [
    {
        name: "student",
        title: "اطلاعات دانشجو",
        fields: [{
            prefixes: ["آقای", "خانم"],
            name: "name",
            title: "نام و نام خانوادگی",
            tr: true,
            type: "person",
            group: "student"
        },
        {
            name: "field",
            title: "رشته",
            tr: true,
            type: "text",
            group: "student"
        }, {
            name: "orientation",
            title: "گرایش",
            tr: true,
            type: "text",
            group: "student"
        }, {
            name: "student_number",
            title: "شماره دانشجویی",
            tr: false,
            type: "number",
            group: "student"
        }, {
            name: "entrance_year",
            title: "سال ورودی",
            tr: false,
            type: "number"
        }, {
            name: "entrance_part",
            title: "ترم ورودی",
            tr: false,
            type: "number"
        }]
    }, {
        name: "thesis",
        title: "اطلاعات پایان‌نامه",
        fields: [{
            name: "title",
            title: "عنوان پایان نامه",
            tr: true,
            type: "text",
            group: "thesis"
        }, {
            name: "irandoc",
            title: "شماره پیگیری ایران‌داک",
            type: "number",
            group: "thesis"
        }, {
            name: "defdate",
            title: "تاریخ دقاع",
            type: "string"
        }]
    }, {
        name: "supervisor",
        title: "استاد راهنما",
        fields: [{
            name: "supervisor",
            title: "نام استاد راهنما",
            tr: true,
            descript: "‌فقط نام و نام خانوادگی را وارد کنید",
            type: "person",
            group: "supervisor"
        }, {
            name: "supervisor_grade",
            title: "مرتبه استاد راهنما",
            tr: true,
            group: "supervisor"
        }, {
            name: "supervisor_specialty",
            title: "تخصص استاد راهنما",
            tr: true,
            group: "supervisor"
        }, {
            name: "supervisor_work_place",
            title: "محل کار استاد راهنما",
            tr: true,
            group: "supervisor"
        }]
    }, {
        name: "arbiter",
        title: "استاد داور",
        fields: [{
            name: "arbiter",
            title: "نام داور",
            tr: true,
            descript: "‌فقط نام و نام خانوادگی را وارد کنید",
            type: "person",
            group: "arbiter"
        }, {
            name: "arbiter_grade",
            title: "مرتبه داور",
            tr: true,
            group: "arbiter"
        }, {
            name: "arbiter_specialty",
            title: "تخصص داور",
            tr: true,
            group: "arbiter"
        }, {
            name: "arbiter_work_place",
            title: "محل کار استاد داور",
            tr: true,
            group: "arbiter"
        }]
    }, {
        name: "consultant",
        title: "استاد مشاور",
        fields: [{
            name: "consultant",
            title: "نام استاد مشاور",
            tr: true,
            descript: "‌فقط نام و نام خانوادگی را وارد کنید",
            type: "person",
            group: "consultant"
        }, {
            name: "consultant_grade",
            title: "مرتبه مشاور",
            tr: true,
            group: "consultant"
        }, {
            name: "consultant_specialty",
            title: "تخصص مشاور",
            tr: true,
            group: "consultant"
        }, {
            name: "consultant_work_place",
            title: "محل کار استاد مشاور",
            tr: true,
            group: "consultant"
        }]
    }, {
        name: "agent",
        title: "نماینده تحصیلات تکمیلی",
        fields: [{
            name: "agent",
            title: "نام و نام خانوادگی",
            tr: true,
            type: "person"
        }, {
            name: "agent_grade",
            title: "مرتبه دانشگاهی",
            tr: true
        }, {
            name: "agent_group",
            title: "گروه آموزشی/پژوهش",
            tr: true
        }]
    }
]

export const components_props = [
    {
        name: 'Form1',
        title: 'فرم انتخاب استاد راهنمای پایان‌نامه‌های دانشجویان کارشناسی ‌ارشد',
        show: true,
        props: {}
    },
    {
        name: 'Form10',
        title: 'فرم صورتجلسه دفاع از پايان نامه كارشناسي ارشد',
        show: true,
        props: {}
    },
    {
        name: 'Form12',
        title: 'فرم کنترل و تحویل پایان نامه کارشناسی ارشد',
        show: true,
        props: {}
    },
    {
        name: 'DefenseLicense',
        title: 'فرم مجوز دفاع از پایان نامه کارشناسی ارشد',
        show: true,
        props: {}
    },
    {
        name: 'Grade',
        title: "فرم امتیازدهی استاد راهنما",
        show: true,
        props: { dr: "supervisor" }
    },
    {
        name: 'Grade',
        title: "فرم امتیازدهی استاد داور",
        show: true,
        props: { dr: "arbiter" }
    },
    {
        name: 'Grade',
        title: "فرم امتیازدهی استاد مشاور",
        show: true,
        props: { dr: "consultant" }
    },
    {
        name: 'FinishReport',
        title: "گواهی انجام اصلاحات پایان‌نامه",
        show: true,
        props: {}
    }
]