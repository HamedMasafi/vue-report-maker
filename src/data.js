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
        },{
            name: "entrance_year",
            title: "سال ورودی",
            tr: false,
            type: "number"
        },{
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
    }
]
export const props = [

]

export const forms = [
    {
        name: "form10",
        placeholders: [
            { from: "", to: "" }
        ]
    },
    {
        name: "grade",
        placeholders: [
            { from: "", to: "" }
        ]
    },
    {
        name: "defenselicense"
    },
    {
        name: "proceedings"
    }
]



