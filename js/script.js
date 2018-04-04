var config = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                18.1,
                18.3,
                10.6,
                7.3,
                5.8,
                40,
            ],
            backgroundColor: [
                window.chartColors.blue,
                window.chartColors.red,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.orange,
                window.chartColors.grey,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Samsung',
            'Apple',
            'Huawei',
            'Oppo',
            'Vivo',
            'Autres'
        ]
    },
    options: {
        responsive: true
    }
};




var config2 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                28,
                16,
                16,
                16,
                8,
                8,
                8,
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 2'
        }],
        labels: [
            'Appel',
            'Texto',
            'Reseau social',
            'Internet',
            'Email',
            'Jeux',
            'Autre'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};

var config3 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                22,
                22,
                16,
                12,
                10,
                8,
                10,
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 3'
        }],
        labels: [
            'Appel',
            'Texto',
            'Reseau social',
            'Internet',
            'Email',
            'Jeux',
            'Autre'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};


window.onload = function() {
    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myPie = new Chart(ctx, config);
    var ctx2 = document.getElementById('chart-area2').getContext('2d');
    window.myDoughnut = new Chart(ctx2, config2);
    var ctx3 = document.getElementById('chart-area3').getContext('2d');
    window.myDoughnut = new Chart(ctx3, config3);
};

AOS.init();

$(document).ready(function () {

    $('.parallax-window').parallax({imageSrc: 'img/banniere.jpg'});

});

