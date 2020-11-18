arr = [];
checked = [];
function display() {
    var out = "";
    for (var i = 0; i < arr.length; i++) {
        out += '<li class="row font-weight-bolder"><div><input class="ml-5" type="checkbox" onclick="check_true(' + i + ')" data-check=' + i + '>' + arr[i] + '</div><div><input type="text" id="input' + i + '" ><a href="javascript:void(0)" onclick="addtask_edit(' + i + ')" class="edit btn btn-success">Edit</a><a style="display:none;" href="javascript:void(0)" onclick="addtask_update(' + i + ')" class="update btn btn-success px-3 mx-2 mt-1">Edit</a><a href="javascript:void(0)" onclick="addtask_delete(' + i + ')" class="delete btn px-3 mt-1 btn-danger">Delete</a></div></li>';
    }
    document.getElementById("task-added").innerHTML = out;

}
function check_display() {
    var out = "";
    for (var i = 0; i < checked.length; i++) {
        out += '<li class="row font-weight-bolder"><div><input class="ml-5 p-3" checked type="checkbox" onclick="check_false(' + i + ')" data-check=' + i + '>' + checked[i] + '</div><div><input  type="text" id="input_checked' + i + '" ><a href="javascript:void(0)" onclick="uncheck_task_edit(' + i + ')" class="edit_checked btn btn-success">Edit</a><a style="display:none;" href="javascript:void(0)" onclick="uncheck_task_update(' + i + ')" class="update_checked btn btn-success">Edit</a><a href="javascript:void(0)" onclick="uncheck_task_delete(' + i + ')" class="delete_checked btn px-3 mt-1 btn-danger">Delete</a></div></li>';
    }
    document.getElementById("task-completed").innerHTML = out;
}
function addtask() {
    if (document.getElementById("task_name").value == "") {
        alert("Please Insert Task Name");
    } else {
        arr.push(document.getElementById("task_name").value);
        document.getElementById("task_name").value = "";
        display();
    }
}
function addtask_delete(id) {
    for (var i = 0; i < arr.length; i++) {
        if (id == i) {
            arr.splice(i, 1);
            break;
        }
    }
    display();
}
function addtask_edit(id) {
    for (var i = 0; i < arr.length; i++) {
        if (id == i) {
            document.getElementById('input' + id + '').value = arr[i];
            document.getElementsByClassName('edit')[i].style.display = 'none';
            document.getElementsByClassName('update')[i].style.display = 'inline-block';
            break;
        }
    }
}
function addtask_update(id) {
    for (var i = 0; i < arr.length; i++) {
        if (id == i) {
            arr[i] = document.getElementById('input' + id + '').value;
            document.getElementsByClassName('edit')[i].style.display = 'inline-block';
            document.getElementsByClassName('update')[i].style.display = 'none';
            break;
        }
    }
    display();
}
function check_true(id) {
    checked.push(arr[id]);
    arr.splice(id, 1);
    display();
    check_display();
}
function uncheck_task_edit(id) {
    for (var i = 0; i < checked.length; i++) {
        if (id == i) {
            document.getElementById('input_checked' + id + '').value = checked[i];
            document.getElementsByClassName('edit_checked')[i].style.display = 'none';
            document.getElementsByClassName('update_checked')[i].style.display = 'inline-block';
            break;
        }
    }
}
function uncheck_task_delete(id) {
    for (var i = 0; i < checked.length; i++) {
        if (id == i) {
            checked.splice(i, 1);
            break;
        }
    }
    check_display();
}
function uncheck_task_update(id) {
    for (var i = 0; i < checked.length; i++) {
        if (id == i) {
            checked[i] = document.getElementById('input_checked' + id + '').value;
            document.getElementsByClassName('edit_checked')[i].style.display = 'inline-block';
            document.getElementsByClassName('update_checked')[i].style.display = 'none';
            break;
        }
    }
    check_display();
}
function check_false(id) {
    arr.push(checked[id]);
    checked.splice(id, 1);
    display();
    check_display();
}