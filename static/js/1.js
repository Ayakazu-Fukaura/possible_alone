$(function () {
    setlocalStorage();
var crrent_task = 0
storage.setItem("crrent_task", JSON.stringify(crrent_task));

var toilet_task = -1
storage.setItem("toilet_task", JSON.stringify(toilet_task));
console.log(toilet_task)
});



