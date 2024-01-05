function start()  {
    const gamearea = document.querySelector('.gamemenu');
    gamearea.innerHTML = "<div class='loading'> Loading...</div>"
    localStorage.setItem('score', 0)
    setTimeout(() => {
        loadgame()
    }, 3000)
}

document.addEventListener('DOMContentLoaded', 

function () {

    document.querySelector('#highscore').innerHTML = localStorage.getItem('highscore') ? "":"High Score: 0"

})

function loadgame() {
    guess = Math.floor(Math.random() * (28 - 1) + 1);
    localStorage.setItem('guess', guess)
    const game = document.querySelector('.wrapper');
    const you = document.querySelector(".you");
    you.innerHTML = `
    <div class="scoreboard">
            <div id="time"></div>
            <div id="name">Next Number</div>
            <div id="score">0</div>
    </div>
    `
    updateguess()
    game.innerHTML = `
    <div class="game">
    <div class="dos">
    <div class="box" onclick="enter(1)">1</div>
    <div class="box" onclick="enter(2)">2</div>
    <div class="box" onclick="enter(3)">3</div>
    <div class="box" onclick="enter(4)">4</div>
    </div>
    <div class="dos">
    <div class="box" onclick="enter(5)">5</div>
    <div class="box" onclick="enter(6)">6</div>
    <div class="box" onclick="enter(7)">7</div>
    <div class="box" onclick="enter(8)">8</div>
    </div>
    <div class="dos">
    <div class="box" onclick="enter(9)">9</div>
    <div class="box" onclick="enter(10)">10</div>
    <div class="box" onclick="enter(11)">11</div>
    <div class="box" onclick="enter(12)">12</div>
    </div>
    <div class="dos">
    <div class="box" onclick="enter(13)">13</div>
    <div class="box" onclick="enter(14)">14</div>
    <div class="box" onclick="enter(15)">15</div>
    <div class="box" onclick="enter(16)">16</div>
    </div>
    <div class="dos">
    <div class="box" onclick="enter(17)">17</div>
    <div class="box" onclick="enter(18)">18</div>
    <div class="box" onclick="enter(19)">19</div>
    <div class="box" onclick="enter(20)">20</div>
    </div>
    <div class="dos">
    <div class="box" onclick="enter(21)">21</div>
    <div class="box" onclick="enter(22)">22</div>
    <div class="box" onclick="enter(23)">23</div>
    <div class="box" onclick="enter(24)">24</div>
    </div>
    <div class="dos">
    <div class="box" onclick="enter(25)">25</div>
    <div class="box" onclick="enter(26)">26</div>
    <div class="box" onclick="enter(27)">27</div>
    <div class="box" onclick="enter(28)">28</div>
    </div>
   </div>
    `
    for(let cd =3;cd>=0;cd=cd-1) {
        document.getElementById("time").innerHTML=3;
        setTimeout(() => {
            document.getElementById("time").innerHTML=2;
        }, 1000);
        setTimeout(() => {
            document.getElementById("time").innerHTML=1;
        }, 2000);
        setTimeout(() => {
            document.getElementById("time").innerHTML=0;
        }, 3000);
        setTimeout(() => {
            document.getElementById("time").innerHTML="Go";
        }, 4000);
        starttimer()
        shuffle()
    }
}
function starttimer() {
    const game = document.querySelector('.wrapper');
    tr = document.getElementById("time")
    setTimeout(() => {
        tr.innerHTML = '1:00'
    }, 1000)
    setTimeout(() => {
        tr.innerHTML = '0:59'
    }, 2000)
    setTimeout(() => {
        tr.innerHTML = '0:58'
    }, 3000)
    setTimeout(() => {
        tr.innerHTML = '0:57'
    }, 4000)
    setTimeout(() => {
        tr.innerHTML = '0:56'
    }, 5000)
    setTimeout(() => {
        tr.innerHTML = '0:55'
    }, 6000)
    setTimeout(() => {
        tr.innerHTML = '0:54'
    }, 7000)
    setTimeout(() => {
        tr.innerHTML = '0:53'
    }, 8000)
    setTimeout(() => {
        tr.innerHTML = '0:52'
    }, 9000)
    setTimeout(() => {
        tr.innerHTML = '0:51'
    }, 10000)
    setTimeout(() => {
        tr.innerHTML = '0:50'
    }, 11000)
    setTimeout(() => {
        tr.innerHTML = '0:49'
    }, 12000)
    setTimeout(() => {
        tr.innerHTML = '0:48'
    }, 13000)
    setTimeout(() => {
        tr.innerHTML = '0:47'
    }, 14000)
    setTimeout(() => {
        tr.innerHTML = '0:46'
    }, 15000)
    setTimeout(() => {
        tr.innerHTML = '0:45'
    }, 16000)
    setTimeout(() => {
        tr.innerHTML = '0:44'
    }, 17000)
    setTimeout(() => {
        tr.innerHTML = '0:43'
    }, 18000)
    setTimeout(() => {
        tr.innerHTML = '0:42'
    }, 19000)
    setTimeout(() => {
        tr.innerHTML = '0:41'
    }, 20000)
    setTimeout(() => {
        tr.innerHTML = '0:40'
    }, 21000)
    setTimeout(() => {
        tr.innerHTML = '0:39'
    }, 22000)
    setTimeout(() => {
        tr.innerHTML = '0:38'
    }, 23000)
    setTimeout(() => {
        tr.innerHTML = '0:37'
    }, 24000)
    setTimeout(() => {
        tr.innerHTML = '0:36'
    }, 25000)
    setTimeout(() => {
        tr.innerHTML = '0:35'
    }, 26000)
    setTimeout(() => {
        tr.innerHTML = '0:34'
    }, 27000)
    setTimeout(() => {
        tr.innerHTML = '0:33'
    }, 28000)
    setTimeout(() => {
        tr.innerHTML = '0:32'
    }, 29000)
    setTimeout(() => {
        tr.innerHTML = '0:31'
    }, 30000)
    setTimeout(() => {
        tr.innerHTML = '0:30'
    }, 31000)
    setTimeout(() => {
        tr.innerHTML = '0:29'
    }, 32000)
    setTimeout(() => {
        tr.innerHTML = '0:28'
    }, 33000)
    setTimeout(() => {
        tr.innerHTML = '0:27'
    }, 34000)
    setTimeout(() => {
        tr.innerHTML = '0:26'
    }, 35000)
    setTimeout(() => {
        tr.innerHTML = '0:25'
    }, 36000)
    setTimeout(() => {
        tr.innerHTML = '0:24'
    }, 37000)
    setTimeout(() => {
        tr.innerHTML = '0:23'
    }, 38000)
    setTimeout(() => {
        tr.innerHTML = '0:22'
    }, 39000)
    setTimeout(() => {
        tr.innerHTML = '0:21'
    }, 40000)
    setTimeout(() => {
        tr.innerHTML = '0:20'
    }, 41000)
    setTimeout(() => {
        tr.innerHTML = '0:19'
    }, 42000)
    setTimeout(() => {
        tr.innerHTML = '0:18'
    }, 43000)
    setTimeout(() => {
        tr.innerHTML = '0:17'
    }, 44000)
    setTimeout(() => {
        tr.innerHTML = '0:16'
    }, 45000)
    setTimeout(() => {
        tr.innerHTML = '0:15'
    }, 46000)
    setTimeout(() => {
        tr.innerHTML = '0:14'
    }, 47000)
    setTimeout(() => {
        tr.innerHTML = '0:13'
    }, 48000)
    setTimeout(() => {
        tr.innerHTML = '0:12'
    }, 49000)
    setTimeout(() => {
        tr.innerHTML = '0:11'
    }, 50000)
    setTimeout(() => {
        tr.innerHTML = '0:10'
    }, 51000)
    setTimeout(() => {
        tr.innerHTML = '0:09'
    }, 52000)
    setTimeout(() => {
        tr.innerHTML = '0:08'
    }, 53000)
    setTimeout(() => {
        tr.innerHTML = '0:07'
    }, 54000)
    setTimeout(() => {
        tr.innerHTML = '0:06'
    }, 55000)
    setTimeout(() => {
        tr.innerHTML = '0:05'
    }, 56000)
    setTimeout(() => {
        tr.innerHTML = '0:04'
    }, 57000)
    setTimeout(() => {
        tr.innerHTML = '0:03'
    }, 58000)
    setTimeout(() => {
        tr.innerHTML = '0:02'
    }, 59000)
    setTimeout(() => {
        tr.innerHTML = '0:01'
    }, 60000)
    setTimeout(() => {
        tr.innerHTML = '0:00'
    }, 61000)
    setTimeout(() => {
        tr.innerHTML = 'Time Up!'
    }, 62000)
    setTimeout(() => {
        if (Number(localStorage.getItem('score'))>Number(localStorage.getItem('highscore'))) {
            localStorage.setItem('highscore', Number(localStorage.getItem('score')))
        }
        const noti = document.querySelector('dialog')
        noti.innerHTML = `
        <h2 style="color: orange;" align="center">Well Played!</h2>
        <h3>Score: ${Number(localStorage.getItem('score'))}</h3>
        <h3>High Score: ${localStorage.getItem('highscore')}</h3>
        <button onclick="loadgame()">Play Again</button>
        <button onclick="backtohomescreen()">Back To Home</button>
        `
        
        noti.showModal()
    }, 63000)
}
function enter(num) {
    const game = document.querySelector('.wrapper');
    guess = localStorage.getItem('guess')
    if (num == guess) {
        updatescore()
        next()
        game.classList.add('correct')
        setTimeout(() => {
            game.classList.remove('correct')
        }, 300);
    }
    else {
        game.classList.add('wrong')
        setTimeout(() => {
            game.classList.remove('wrong')
        }, 400);
    }
}
function updatescore() {
    localStorage.setItem('score',Number(localStorage.getItem('score'))+1)
    document.getElementById('score').innerHTML = Number(localStorage.getItem('score'))
}
function backtohomescreen() {
    window.location.reload()
}
function next() {
    guess = Math.floor(Math.random() * (28 - 1) + 1);
    localStorage.setItem('guess', guess)
    updateguess()
}

function updateguess() {
    guess = localStorage.getItem('guess')
    document.getElementById('name').innerHTML = guess;
}

document.getElementById('highscorei').innerHTML = "High Score: " +localStorage.getItem('highscore')

