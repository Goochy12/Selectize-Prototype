//populate lists
window.onload = function () {
    var categorySelect = document.getElementById("categorySelect");
    for (var i = 0; i < catOps.length; i++) {
        var opt = catOps[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        categorySelect.appendChild(el);
    };

    var categorySelect = document.getElementById("subcategorySelect");
    for (var i = 0; i < subcatOps.length; i++) {
        var opt = subcatOps[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        categorySelect.appendChild(el);
    };
    var categorySelect = document.getElementById("positionSelect");
    for (var i = 0; i < posOps.length; i++) {
        var opt = posOps[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        categorySelect.appendChild(el);
    };
    var categorySelect = document.getElementById("taskSelect");
    for (var i = 0; i < taskOps.length; i++) {
        var opt = taskOps[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        categorySelect.appendChild(el);
    };

    var $catSelect = $('#categorySelect').selectize({
        maxItems: 1,
        placeholder: "Select a Category...",
        onChange: (value) => {
            catSelect = value;
            buildOutputConString();
        }
    });

    var $subCatSelect = $('#subcategorySelect').selectize({
        maxItems: 1,
        placeholder: "Select a Sub Category...",
        onChange: (value) => {
            subCatSelect = value;
            buildOutputConString();
        }
    });

    var $posSelect = $('#positionSelect').selectize({
        placeholder: "Select a Position...",
        maxItems: null,
        onChange: (value) => {
            posSelect = value;
            buildOutputConString();
        }
    });

    var $taskSelect = $('#taskSelect').selectize({
        placeholder: "Select a Task...",
        maxItems: null,
        onChange: (value) => {
            taskSelect = value;
            buildOutputConString();
        }
    });


};

function buildOutputConString() {
    var str = "";

    if (catSelect) {
        str += catSelect
    }

    if (subCatSelect) {
        str += " - " + subCatSelect;
    }

    if (posSelect.length > 0) {
        str += " - ";
        for (let i = 0; i < posSelect.length; i++) {
            str += posSelect[i];
            if (i !== posSelect.length - 1) {
                str += ", ";
            }
        }
    }

    if (taskSelect.length > 0) {
        str += " - ";
        for (let i = 0; i < taskSelect.length; i++) {
            str += taskSelect[i];
            if (i !== taskSelect.length - 1) {
                str += ", ";
            }
        }
    }

    console.log(str)
    var displayString = document.getElementById("outputConString");
    displayString.innerHTML = str;
}

var catSelect = ""
var subCatSelect = ""
var posSelect = []
var taskSelect = []



