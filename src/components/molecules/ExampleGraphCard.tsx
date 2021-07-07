import React from 'react'

const ExampleGraphCard = () => {
    return (
<div className="flex flex-row flex-wrap flex-grow mt-2">

<div className="w-full p-6 md:w-1/2 xl:w-1/3">
    {/* <!--Graph Card--> */}
    <div className="bg-white border-transparent rounded-lg shadow-xl">
        <div className="p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100">
            <h5 className="font-bold text-gray-600 uppercase">Graph</h5>
        </div>
        <div className="p-5">
            <canvas id="chartjs-7" className="chartjs" width="undefined" height="undefined"></canvas>
            <script>
                new Chart(document.getElementById("chartjs-7"), {
                    "type": "bar",
                    "data": {
                        "labels": ["January", "February", "March", "April"],
                        "datasets": [{
                            "label": "Page Impressions",
                            "data": [10, 20, 30, 40],
                            "borderColor": "rgb(255, 99, 132)",
                            "backgroundColor": "rgba(255, 99, 132, 0.2)"
                        }, {
                            "label": "Adsense Clicks",
                            "data": [5, 15, 10, 30],
                            "type": "line",
                            "fill": false,
                            "borderColor": "rgb(54, 162, 235)"
                        }]
                    },
                    "options": {
                        "scales": {
                            "yAxes": [{
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }]
                        }
                    }
                });
            </script>
        </div>
    </div>
    {/* <!--/Graph Card--> */}
</div>

<div className="w-full p-6 md:w-1/2 xl:w-1/3">
    {/* <!--Graph Card--> */}
    <div className="bg-white border-transparent rounded-lg shadow-xl">
        <div className="p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100">
            <h5 className="font-bold text-gray-600 uppercase">Graph</h5>
        </div>
        <div className="p-5">
            <canvas id="chartjs-0" className="chartjs" width="undefined" height="undefined"></canvas>
            <script>
                new Chart(document.getElementById("chartjs-0"), {
                    "type": "line",
                    "data": {
                        "labels": ["January", "February", "March", "April", "May", "June", "July"],
                        "datasets": [{
                            "label": "Views",
                            "data": [65, 59, 80, 81, 56, 55, 40],
                            "fill": false,
                            "borderColor": "rgb(75, 192, 192)",
                            "lineTension": 0.1
                        }]
                    },
                    "options": {}
                });
            </script>
        </div>
    </div>
    {/* <!--/Graph Card--> */}
</div>

<div className="w-full p-6 md:w-1/2 xl:w-1/3">
    {/* <!--Graph Card--> */}
    <div className="bg-white border-transparent rounded-lg shadow-xl">
        <div className="p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100">
            <h5 className="font-bold text-gray-600 uppercase">Graph</h5>
        </div>
        <div className="p-5">
            <canvas id="chartjs-1" className="chartjs" width="undefined" height="undefined"></canvas>
            <script>
                new Chart(document.getElementById("chartjs-1"), {
                    "type": "bar",
                    "data": {
                        "labels": ["January", "February", "March", "April", "May", "June", "July"],
                        "datasets": [{
                            "label": "Likes",
                            "data": [65, 59, 80, 81, 56, 55, 40],
                            "fill": false,
                            "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                            "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                            "borderWidth": 1
                        }]
                    },
                    "options": {
                        "scales": {
                            "yAxes": [{
                                "ticks": {
                                    "beginAtZero": true
                                }
                            }]
                        }
                    }
                });
            </script>
        </div>
    </div>
    {/* <!--/Graph Card--> */}
</div>

<div className="w-full p-6 md:w-1/2 xl:w-1/3">
    {/* <!--Graph Card--> */}
    <div className="bg-white border-transparent rounded-lg shadow-xl">
        <div className="p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100">
            <h5 className="font-bold text-gray-600 uppercase">Graph</h5>
        </div>
        <div className="p-5"><canvas id="chartjs-4" className="chartjs" width="undefined" height="undefined"></canvas>
            <script>
                new Chart(document.getElementById("chartjs-4"), {
                    "type": "doughnut",
                    "data": {
                        "labels": ["P1", "P2", "P3"],
                        "datasets": [{
                            "label": "Issues",
                            "data": [300, 50, 100],
                            "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
                        }]
                    }
                });
            </script>
        </div>
    </div>
    {/* <!--/Graph Card--> */}
</div>

<div className="w-full p-6 md:w-1/2 xl:w-1/3">
    {/* <!--Table Card--> */}
    <div className="bg-white border-transparent rounded-lg shadow-xl">
        <div className="p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100">
            <h5 className="font-bold text-gray-600 uppercase">Graph</h5>
        </div>
        <div className="p-5">
            <table className="w-full p-5 text-gray-700">
                <thead>
                    <tr>
                        <th className="text-left text-blue-900">Name</th>
                        <th className="text-left text-blue-900">Side</th>
                        <th className="text-left text-blue-900">Role</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Obi Wan Kenobi</td>
                        <td>Light</td>
                        <td>Jedi</td>
                    </tr>
                    <tr>
                        <td>Greedo</td>
                        <td>South</td>
                        <td>Scumbag</td>
                    </tr>
                    <tr>
                        <td>Darth Vader</td>
                        <td>Dark</td>
                        <td>Sith</td>
                    </tr>
                </tbody>
            </table>

            <p className="py-2"><a href="#">See More issues...</a></p>

        </div>
    </div>
    {/* <!--/table Card--> */}
</div>

<div className="w-full p-6 md:w-1/2 xl:w-1/3">
    <!--Advert Card-->
    <div className="bg-white border-transparent rounded-lg shadow-xl">
        <div className="p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100">
            <h5 className="font-bold text-gray-600 uppercase">Advert</h5>
        </div>
        <div className="p-5 text-center">


            <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CK7D52JJ&placement=wwwtailwindtoolboxcom" id="_carbonads_js"></script>


        </div>
    </div>
    {/* <!--/Advert Card--> */}
</div>


</div>
    )
}

export default ExampleGraphCard
