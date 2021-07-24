const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist');
const art = document.querySelector('.art');

const seekSlider = document.querySelector('.music-slider');
const startTime = document.querySelector('.start-time');
const endTime = document.querySelector('.end-time');

const prevBtn = document.querySelector('.prev-track');
const playBtn = document.querySelector('.play-track');
const nextBtn = document.querySelector('.next-track');
// Creating audio
let music = document.createElement('audio');

let index = 0;
let isPlaying = false;
let timer;
// Adding songs
let songs = [
    {
        name: 'A Light of mine',
        artist: 'Kudasaibeats',
        image: './image/kudasai.jpg',
        path: './audio/Alightofmine.mp3'
    },
    {
        name: 'Japanese Spring',
        artist: 'Vindu',
        image: './image/vindu.jpg',
        path: './audio/spring.mp3'
    },
    {
        name: 'already dead',
        artist: 'lofi.samurai',
        image: './image/samurai.jpg',
        path: './audio/alreadydead.mp3'
    },
    {
        name: 'Spiral',
        artist: 'Nujabes',
        image: './image/nujabes.jpg',
        path: './audio/spiral.mp3'
    },
    {
        name: 'Sparkler',
        artist: 'Towerz, farewell',
        image: './image/sparkler.jpg',
        path: './audio/towerz.mp3'
    },
];
// Get index of playing song, change info according to song
// Update time of song
// Get random background
function loadTrack(index) {

    clearInterval(timer);
    resetValues();
    randomBg();

    music.src = songs[index].path;
    music.load();
    timer = setInterval(updateDuration, 1000);

    art.src = songs[index].image;
    songName.textContent = songs[index].name;
    artistName.textContent = songs[index].artist;


    music.addEventListener('ended', nextTrack);

}

function resetValues() {
    seekSlider.value = 0;
    startTime.textContent = '00:00';
    endTime.textContent = '00:00';
}

function randomBg() {

    let r = Math.floor(Math.random() * 180) + 70;
    let g = Math.floor(Math.random() * 180) + 70;
    let b = Math.floor(Math.random() * 200) + 70;

    document.querySelector('.section-container').style.backgroundImage = "linear-gradient(rgb(" + r + ", " + g + ", " + b + "),#312b27)";

}
// Control functions
function playpauseTrack() {
    if (!isPlaying) {
        playTrack();
    }
    else {
        pauseTrack();
    }
}

function playTrack() {
    music.play();
    isPlaying = true;

    playBtn.innerHTML = '<i class="fas fa-pause-circle fa-4x"></i>';

}

function pauseTrack() {
    music.pause();
    isPlaying = false;

    playBtn.innerHTML = '<i class="fas fa-play-circle fa-4x"></i>';

}

function nextTrack() {
    if (index < songs.length - 1) {
        index++;
    }
    else {
        index = 0;
    }

    loadTrack(index);
    playTrack();
}

function prevTrack() {
    if (index > 0) {
        index--;
    } else if (index === 0) {
        index = songs.length - 1;
    }
    else {
        index = songs.length;
    }
    loadTrack(index);
    playTrack();

}
// Slider controls
function seekTo() {
    let seek = music.duration * (seekSlider.value / 100);
    // console.log(seek);
    music.currentTime = seek;
}

function updateDuration() {
    let position = 0;

    if (!isNaN(music.duration)) {
        position = music.currentTime * (100 / music.duration);
        seekSlider.value = position;

        // Calc time
        let startMinutes = Math.floor(music.currentTime / 60);
        let startSeconds = Math.floor(music.currentTime - startMinutes * 60);
        let endMinutes = Math.floor(music.duration / 60);
        let endSeconds = Math.floor(music.duration - endMinutes * 60);

        // Add zero
        if (startSeconds < 10) { startSeconds = '0' + startSeconds; }
        if (endSeconds < 10) { endSeconds = '0' + endSeconds; }
        if (startMinutes < 10) { startMinutes = '0' + startMinutes; }
        if (endMinutes < 10) { endMinutes = '0' + endMinutes; }

        // Display
        startTime.textContent = startMinutes + ':' + startSeconds;
        endTime.textContent = endMinutes + ':' + endSeconds;
    }
}

// In order to start
loadTrack(index);