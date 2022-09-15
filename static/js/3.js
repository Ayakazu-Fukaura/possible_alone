$(function(){
    viewStorage()
    var tasks = storage.getItem("tasks");
        $("h1").text(tasks[0])

        $('.btn').on('click', function () {
            $("h1").getItem("tasks[1]")
          });
})