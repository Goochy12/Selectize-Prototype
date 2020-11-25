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

    $('#categorySelect').selectize({
        maxItems: 1,
        placeholder: "Select a Category..."
    });

    $('#subcategorySelect').selectize({
        maxItems: 1,
        placeholder: "Select a Sub Category..."
    });

    $('#positionSelect').selectize({
        placeholder: "Select a Position...",
        maxItems: null
    });

    $('#taskSelect').selectize({
        placeholder: "Select a Task...",
        maxItems: null
    });
};



