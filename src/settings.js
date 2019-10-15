export var model = {
    university: 'موسسه غیر انتفاعی آموزش عالی شهریار آستارا',
    full_name_p(name, dr, pf, lang){
      var ret = "";
        var sex = this[name + "_sex"];
        if (sex === "female")
          ret = (pf ? "سرکار " : "") + "خانم ";
        else if (sex === "male")
          ret = (pf ? "جناب " : "") + "آقای ";
        
        if (dr)
          ret += "دکتر "

        if (lang == 'en')
            ret += this[name + '_en'];
        else
            ret += this[name];
        return ret;
    },
    myname(){return this.full_name_p('name', false, false, '')},
    myname_en(){return this.full_name_p('name', false, false, 'en')},
    drname(name){return this.full_name_p(name, true, true, '')}
};
export function Settings() {
    this.input = document.createElement("input");
    this.input.type = 'file';
    
    var __reload = function(o){
        for (var k in o) {
            model[k] = o[k];
        }
    }
    this.__reload = __reload;
    this.input.addEventListener("change", function(){
        var reader = new FileReader();
        reader.onload = function (e) {
            var contents = e.target.result;
            var obj = JSON.parse(contents);
            __reload(obj)
        };
        reader.readAsText(this.files[0]);
    });
}
Settings.prototype.from_file = function() {
    this.input.click();
}
Settings.prototype.to_file = function() {
    var filename = "settings.json";
    var content = JSON.stringify(model);
    var file = new Blob([content], {type: "text"});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
Settings.prototype.save = function(){
    localStorage.data = JSON.stringify(model)
    console.log("saved", JSON.stringify(model))
}
Settings.prototype.load = function() {
    var data = JSON.parse(localStorage.data || "[]");
    this.__reload(data)
    console.log("loaded", JSON.stringify(model))
}
