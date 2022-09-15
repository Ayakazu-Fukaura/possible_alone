var toilet_task = JSON.parse(storage.getItem("toilet_task"));
toilet_task = toilet_task + 1
storage.setItem("toilet_task", JSON.stringify(toilet_task));



$(function(){
    viewStorage()
    var tasks = JSON.parse(storage.getItem("tasks"));
    var toilet_task = JSON.parse(storage.getItem("toilet_task"));
        $(".says").text(tasks[toilet_task] + "してくれてありがとう!")
        console.log(toilet_task)
})