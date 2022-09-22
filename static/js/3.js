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

    var height = 0, body_height = 0;
    body_height = document.getElementById("body").offsetHeight;
    height = document.getElementById("task_text").offsetHeight;
    var check = document.getElementById("task_text").style.fontSize;
    console.log("bodyの高さ:" + body_height);
    console.log("調整前高さ：" + height);
    console.log("check:" + check)

    for (let size = 70; height > body_height - 170 && size > 1; size--) {
        document.getElementById("task_text").style.fontSize = size + "px";
        height = document.getElementById("task_text").offsetHeight;

    }
    height = document.getElementById("task_text").offsetHeight;

    console.log("調整後：" + height);

})







