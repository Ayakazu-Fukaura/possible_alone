$(function () {
    viewStorage("crrent_task");
    var tasks = JSON.parse(storage.getItem("tasks"));
    var crrent_task = JSON.parse(storage.getItem("crrent_task"));

    if (crrent_task == tasks.length) {
        window.location.href = '/5';
    } else {
        $("h1").text(tasks[crrent_task][0]);

        $("#task_image").attr("src", "/static/img/" + tasks[crrent_task][1]);
        console.log(tasks[crrent_task][1]);
    }

})







