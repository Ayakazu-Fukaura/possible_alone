var crrent_task = JSON.parse(storage.getItem("crrent_task"));
crrent_task = crrent_task + 1
storage.setItem("crrent_task", JSON.stringify(crrent_task));
console.log(crrent_task)