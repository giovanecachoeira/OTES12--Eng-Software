
function init() {


    $.getJSON("./dados.json", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            var resulta = key.name;
            items.push("<li id='" + key + "'>" + val + "</li>");
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });

    var tbody = document.getElementById("tbody");
    let dadosJson = JSON.parse(dados.j);
    var dados = [
        ["Brusque", "Sergio", "Lixo", "10", "Conti"],
        ["Canoinhas", "Hector", "Construcao", "14", "Omar"],
        ["Brusque", "Davi", "Lixo", "14", "Jose"],
        ["Brusque", "Sergio", "Estrume", "22", "Conti"],
        ["Blumenau", "Diego", "Detergentes", "15", "Marcos"],
        ["Canoinhas", "Olivia", "Lixo", "17", "Conti"]
    ];
    console.log(dadosJson);
    var tbody = document.getElementById("tbody");

    for (var i = 0; i < dadosJson.length; i++) {
        var tr = "<tr>" +
            "<td>" + dadosJson[i][0] + "</td>" +
            "<td>" + dadosJson[i][1] + "</td>" +
            "<td>" + dadosJson[i][2] + "</td>" +
            "<td>" + dadosJson[i][3] + "</td>" +
            "<td>" + dadosJson[i][4] + "</td>" +
            "</tr>"

        tbody.innerHTML += tr;

    }

    var tr = tbody.childNodes;

    document.getElementById("txtBusca").addEventListener("keyup", function () {
        var busca = document.getElementById("txtBusca").value.toLowerCase();

        for (var i = 0; i < tbody.childNodes.length; i++) {
            var achou = false;
            var tr = tbody.childNodes[i];
            var td = tr.childNodes;

            for (var j = 0; j < td.length; j++) {
                var value = td[j].childNodes[0].nodeValue.toLowerCase();
                if (value.indexOf(busca) >= 0) {
                    achou = true;
                }
            }
            if (achou) {
                tr.style.display = "table-row";
            } else {
                tr.style.display = "none";
            }
        }
    });

}



init();