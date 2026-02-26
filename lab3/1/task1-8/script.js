function Browser(name, version) {
    this.name = name;
    this.version = version;
    

    this.aboutBrowser = function() {
        console.log("Браузер: " + this.name + ", версия: " + this.version);
    };
}

let myBrowser = new Browser("Microsoft Internet Explorer", "9.0");

console.log("Свойства объекта myBrowser:");
console.log("name: " + myBrowser.name);
console.log("version: " + myBrowser.version);

myBrowser.aboutBrowser();