document.addEventListener("DOMContentLoaded", function () {
    var chartParams = new URLSearchParams(window.location.search);

    const host = "https://quickchart.io/chart/"
    document.getElementById("chart").src = host + "?" + chartParams.toString();
});