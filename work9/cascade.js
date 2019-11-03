function createOption(obj,date) {
    for (var i in date) {
        var op = new Option(data[i],i);
        obj.Options.add(op);
  }
}
var colleges = document.getElementById('colleges');
createOption(colleges,collegesArr);

var majors = document.getElementById('majors');
 colleges.onchange = function() {
   majors.options.length = 0;
   createOption(majors,majorsArr[colleges.value]); 
 };

 var classes = document.getElementById('classes');
 majors.onchange = function() {
   classes.options.length = 0;
   createOption(classes,classesArr[colleges.value][classes.value]); 
 };





