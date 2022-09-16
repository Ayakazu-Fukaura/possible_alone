var crrent_task = JSON.parse(storage.getItem("crrent_task"));
crrent_task = crrent_task + 1
storage.setItem("crrent_task", JSON.stringify(crrent_task));





$(function(){
    var toilet_task = JSON.parse(storage.getItem("toilet_task"));
    toilet_task = toilet_task + 1

    
storage.setItem("toilet_task", JSON.stringify(toilet_task));
    viewStorage()
    var tasks = JSON.parse(storage.getItem("tasks"));
    var toilet_task = JSON.parse(storage.getItem("toilet_task"));
        $(".says").text(tasks[toilet_task] + "してくれてありがとう!")
        console.log(toilet_task)
})