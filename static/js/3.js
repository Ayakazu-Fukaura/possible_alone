$(function () {
    viewStorage()
    var tasks = JSON.parse(storage.getItem("tasks"));
    var crrent_task = JSON.parse(storage.getItem("crrent_task"));
    $("h1").text(tasks[crrent_task][0])

    if (crrent_task == tasks.length) {
        window.location.href = '/5';
    }
})







