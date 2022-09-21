var crrent_task = JSON.parse(storage.getItem("crrent_task"));
crrent_task = crrent_task + 1
storage.setItem("crrent_task", JSON.stringify(crrent_task));





$(function () {
    var tasks = JSON.parse(storage.getItem("tasks"));

    viewStorage();
    $(".says").text(tasks[crrent_task - 1][0] + "してくれてありがとう!")



})