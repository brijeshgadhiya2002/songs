let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    languages.classList.remove('active');
    player.classList.remove('active');
    pauseMusic()

}
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    languages.classList.remove('active');
    player.classList.remove('active');
    pauseMusic()

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    languages.classList.remove('active');
    player.classList.remove('active');
    pauseMusic()

}
let languages = document.querySelector('.lang');

document.querySelector('#language').onclick = () => {
    languages.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    player.classList.remove('active');
    pauseMusic()

}
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('actives');
    } else {
        document.body.classList.remove('actives');
    }
}
var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
// --------------------------------------------------------------
// music player 1 starts here
let player = document.querySelector('.music_container');

document.querySelector('#tip-tip').onclick = () => {
    player.classList.toggle('active');

    player11.classList.remove('active2');
    player12.classList.remove('active2');
    player13.classList.remove('active2');
    player14.classList.remove('active2');
    player15.classList.remove('active2');
    player16.classList.remove('active2');
    player17.classList.remove('active2');
    player18.classList.remove('active2');
    player19.classList.remove('active2');
    player20.classList.remove('active2');

    player21.classList.remove('active3');
    player22.classList.remove('active3');
    player23.classList.remove('active3');
    player24.classList.remove('active3');
    player25.classList.remove('active3');
    player26.classList.remove('active3');
    player27.classList.remove('active3');
    player28.classList.remove('active3');
    player29.classList.remove('active3');
    player30.classList.remove('active3');

    player31.classList.remove('active4');
    player32.classList.remove('active4');
    player33.classList.remove('active4');
    player34.classList.remove('active4');
    player35.classList.remove('active4');
    player36.classList.remove('active4');
    player37.classList.remove('active4');
    player38.classList.remove('active4');
    player39.classList.remove('active4');
    player40.classList.remove('active4');

    player41.classList.remove('active5');
    player42.classList.remove('active5');
    player43.classList.remove('active5');
    player44.classList.remove('active5');
    player45.classList.remove('active5');
    player46.classList.remove('active5');
    player47.classList.remove('active5');
    player48.classList.remove('active5');
    player49.classList.remove('active5');
    player50.classList.remove('active5');

    player51.classList.remove('active6');
    player52.classList.remove('active6');
    player53.classList.remove('active6');
    player54.classList.remove('active6');
    player55.classList.remove('active6');
    player56.classList.remove('active6');
    player57.classList.remove('active6');
    player58.classList.remove('active6');
    player59.classList.remove('active6');
    player60.classList.remove('active6');

    player61.classList.remove('active7');
    player62.classList.remove('active7');
    player63.classList.remove('active7');
    player64.classList.remove('active7');
    player65.classList.remove('active7');
    player66.classList.remove('active7');
    player67.classList.remove('active7');
    player68.classList.remove('active7');
    player69.classList.remove('active7');
    player70.classList.remove('active7');

    player71.classList.remove('active8');
    player72.classList.remove('active8');
    player73.classList.remove('active8');
    player74.classList.remove('active8');
    player75.classList.remove('active8');
    player76.classList.remove('active8');
    player77.classList.remove('active8');
    player78.classList.remove('active8');
    player79.classList.remove('active8');
    player80.classList.remove('active8');

    player81.classList.remove('active9');
    player82.classList.remove('active9');
    player83.classList.remove('active9');
    player84.classList.remove('active9');
    player85.classList.remove('active9');
    player86.classList.remove('active9');
    player87.classList.remove('active9');
    player88.classList.remove('active9');
    player89.classList.remove('active9');
    player90.classList.remove('active9');

    player91.classList.remove('activeten');
    player92.classList.remove('activeten');
    player93.classList.remove('activeten');
    player94.classList.remove('activeten');
    player95.classList.remove('activeten');
    player96.classList.remove('activeten');
    player97.classList.remove('activeten');
    player98.classList.remove('activeten');
    player99.classList.remove('activeten');
    player100.classList.remove('activeten');

    player101.classList.remove('active11');
    player102.classList.remove('active11');
    player103.classList.remove('active11');
    player104.classList.remove('active11');
    player105.classList.remove('active11');
    player106.classList.remove('active11');
    player107.classList.remove('active11');
    player108.classList.remove('active11');
    player109.classList.remove('active11');
    player110.classList.remove('active11');

    pauseMusic2();
    pauseMusic3();
    pauseMusic4();
    pauseMusic5();
    pauseMusic6();
    pauseMusic7();
    pauseMusic8();
    pauseMusic9();
    pauseMusicten();
    pauseMusic11();
    loadSong(songs[0]);
    playMusic();
    languages.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let player2 = document.querySelector('.music_container');

document.querySelector('#kusu-kusu').onclick = () => {
    player2.classList.toggle('active');

    player11.classList.remove('active2');
    player12.classList.remove('active2');
    player13.classList.remove('active2');
    player14.classList.remove('active2');
    player15.classList.remove('active2');
    player16.classList.remove('active2');
    player17.classList.remove('active2');
    player18.classList.remove('active2');
    player19.classList.remove('active2');
    player20.classList.remove('active2');

    player21.classList.remove('active3');
    player22.classList.remove('active3');
    player23.classList.remove('active3');
    player24.classList.remove('active3');
    player25.classList.remove('active3');
    player26.classList.remove('active3');
    player27.classList.remove('active3');
    player28.classList.remove('active3');
    player29.classList.remove('active3');
    player30.classList.remove('active3');

    player31.classList.remove('active4');
    player32.classList.remove('active4');
    player33.classList.remove('active4');
    player34.classList.remove('active4');
    player35.classList.remove('active4');
    player36.classList.remove('active4');
    player37.classList.remove('active4');
    player38.classList.remove('active4');
    player39.classList.remove('active4');
    player40.classList.remove('active4');

    player41.classList.remove('active5');
    player42.classList.remove('active5');
    player43.classList.remove('active5');
    player44.classList.remove('active5');
    player45.classList.remove('active5');
    player46.classList.remove('active5');
    player47.classList.remove('active5');
    player48.classList.remove('active5');
    player49.classList.remove('active5');
    player50.classList.remove('active5');

    player51.classList.remove('active6');
    player52.classList.remove('active6');
    player53.classList.remove('active6');
    player54.classList.remove('active6');
    player55.classList.remove('active6');
    player56.classList.remove('active6');
    player57.classList.remove('active6');
    player58.classList.remove('active6');
    player59.classList.remove('active6');
    player60.classList.remove('active6');

    player61.classList.remove('active7');
    player62.classList.remove('active7');
    player63.classList.remove('active7');
    player64.classList.remove('active7');
    player65.classList.remove('active7');
    player66.classList.remove('active7');
    player67.classList.remove('active7');
    player68.classList.remove('active7');
    player69.classList.remove('active7');
    player70.classList.remove('active7');

    player71.classList.remove('active8');
    player72.classList.remove('active8');
    player73.classList.remove('active8');
    player74.classList.remove('active8');
    player75.classList.remove('active8');
    player76.classList.remove('active8');
    player77.classList.remove('active8');
    player78.classList.remove('active8');
    player79.classList.remove('active8');
    player80.classList.remove('active8');

    player81.classList.remove('active9');
    player82.classList.remove('active9');
    player83.classList.remove('active9');
    player84.classList.remove('active9');
    player85.classList.remove('active9');
    player86.classList.remove('active9');
    player87.classList.remove('active9');
    player88.classList.remove('active9');
    player89.classList.remove('active9');
    player90.classList.remove('active9');

    player91.classList.remove('activeten');
    player92.classList.remove('activeten');
    player93.classList.remove('activeten');
    player94.classList.remove('activeten');
    player95.classList.remove('activeten');
    player96.classList.remove('activeten');
    player97.classList.remove('activeten');
    player98.classList.remove('activeten');
    player99.classList.remove('activeten');
    player100.classList.remove('activeten');

    player101.classList.remove('active11');
    player102.classList.remove('active11');
    player103.classList.remove('active11');
    player104.classList.remove('active11');
    player105.classList.remove('active11');
    player106.classList.remove('active11');
    player107.classList.remove('active11');
    player108.classList.remove('active11');
    player109.classList.remove('active11');
    player110.classList.remove('active11');

    pauseMusic2();
    pauseMusic3();
    pauseMusic4();
    pauseMusic5();
    pauseMusic6();
    pauseMusic7();
    pauseMusic8();
    pauseMusic9();
    pauseMusicten();
    pauseMusic11();
    loadSong(songs[1]);
    playMusic();

    languages.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let player3 = document.querySelector('.music_container');

document.querySelector('#Jugnu').onclick = () => {
    player3.classList.toggle('active');
    
    player11.classList.remove('active2');
    player12.classList.remove('active2');
    player13.classList.remove('active2');
    player14.classList.remove('active2');
    player15.classList.remove('active2');
    player16.classList.remove('active2');
    player17.classList.remove('active2');
    player18.classList.remove('active2');
    player19.classList.remove('active2');
    player20.classList.remove('active2');

    player21.classList.remove('active3');
    player22.classList.remove('active3');
    player23.classList.remove('active3');
    player24.classList.remove('active3');
    player25.classList.remove('active3');
    player26.classList.remove('active3');
    player27.classList.remove('active3');
    player28.classList.remove('active3');
    player29.classList.remove('active3');
    player30.classList.remove('active3');

    player31.classList.remove('active4');
    player32.classList.remove('active4');
    player33.classList.remove('active4');
    player34.classList.remove('active4');
    player35.classList.remove('active4');
    player36.classList.remove('active4');
    player37.classList.remove('active4');
    player38.classList.remove('active4');
    player39.classList.remove('active4');
    player40.classList.remove('active4');

    player41.classList.remove('active5');
    player42.classList.remove('active5');
    player43.classList.remove('active5');
    player44.classList.remove('active5');
    player45.classList.remove('active5');
    player46.classList.remove('active5');
    player47.classList.remove('active5');
    player48.classList.remove('active5');
    player49.classList.remove('active5');
    player50.classList.remove('active5');

    player51.classList.remove('active6');
    player52.classList.remove('active6');
    player53.classList.remove('active6');
    player54.classList.remove('active6');
    player55.classList.remove('active6');
    player56.classList.remove('active6');
    player57.classList.remove('active6');
    player58.classList.remove('active6');
    player59.classList.remove('active6');
    player60.classList.remove('active6');

    player61.classList.remove('active7');
    player62.classList.remove('active7');
    player63.classList.remove('active7');
    player64.classList.remove('active7');
    player65.classList.remove('active7');
    player66.classList.remove('active7');
    player67.classList.remove('active7');
    player68.classList.remove('active7');
    player69.classList.remove('active7');
    player70.classList.remove('active7');

    player71.classList.remove('active8');
    player72.classList.remove('active8');
    player73.classList.remove('active8');
    player74.classList.remove('active8');
    player75.classList.remove('active8');
    player76.classList.remove('active8');
    player77.classList.remove('active8');
    player78.classList.remove('active8');
    player79.classList.remove('active8');
    player80.classList.remove('active8');

    player81.classList.remove('active9');
    player82.classList.remove('active9');
    player83.classList.remove('active9');
    player84.classList.remove('active9');
    player85.classList.remove('active9');
    player86.classList.remove('active9');
    player87.classList.remove('active9');
    player88.classList.remove('active9');
    player89.classList.remove('active9');
    player90.classList.remove('active9');

    player91.classList.remove('activeten');
    player92.classList.remove('activeten');
    player93.classList.remove('activeten');
    player94.classList.remove('activeten');
    player95.classList.remove('activeten');
    player96.classList.remove('activeten');
    player97.classList.remove('activeten');
    player98.classList.remove('activeten');
    player99.classList.remove('activeten');
    player100.classList.remove('activeten');

    player101.classList.remove('active11');
    player102.classList.remove('active11');
    player103.classList.remove('active11');
    player104.classList.remove('active11');
    player105.classList.remove('active11');
    player106.classList.remove('active11');
    player107.classList.remove('active11');
    player108.classList.remove('active11');
    player109.classList.remove('active11');
    player110.classList.remove('active11');

    pauseMusic2();
    pauseMusic3();
    pauseMusic4();
    pauseMusic5();
    pauseMusic6();
    pauseMusic7();
    pauseMusic8();
    pauseMusic9();
    pauseMusicten();
    pauseMusic11();
    loadSong(songs[2]);
    playMusic();

    languages.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let player4 = document.querySelector('.music_container');

document.querySelector('#Koi-Sehri-Babu').onclick = () => {
    player4.classList.toggle('active');
    player11.classList.remove('active2');
    player12.classList.remove('active2');
    player13.classList.remove('active2');
    player14.classList.remove('active2');
    player15.classList.remove('active3');
    player16.classList.remove('active2');
    player17.classList.remove('active2');
    player18.classList.remove('active2');
    player19.classList.remove('active2');
    player20.classList.remove('active2');

    player21.classList.remove('active3');
    player22.classList.remove('active3');
    player23.classList.remove('active3');
    player24.classList.remove('active3');
    player25.classList.remove('active3');
    player26.classList.remove('active3');
    player27.classList.remove('active3');
    player28.classList.remove('active3');
    player29.classList.remove('active3');
    player30.classList.remove('active3');

    player31.classList.remove('active4');
    player32.classList.remove('active4');
    player33.classList.remove('active4');
    player34.classList.remove('active4');
    player35.classList.remove('active4');
    player36.classList.remove('active4');
    player37.classList.remove('active4');
    player38.classList.remove('active4');
    player39.classList.remove('active4');
    player40.classList.remove('active4');

    player41.classList.remove('active5');
    player42.classList.remove('active5');
    player43.classList.remove('active5');
    player44.classList.remove('active5');
    player45.classList.remove('active5');
    player46.classList.remove('active5');
    player47.classList.remove('active5');
    player48.classList.remove('active5');
    player49.classList.remove('active5');
    player50.classList.remove('active5');

    player51.classList.remove('active6');
    player52.classList.remove('active6');
    player53.classList.remove('active6');
    player54.classList.remove('active6');
    player55.classList.remove('active6');
    player56.classList.remove('active6');
    player57.classList.remove('active6');
    player58.classList.remove('active6');
    player59.classList.remove('active6');
    player60.classList.remove('active6');

    player61.classList.remove('active7');
    player62.classList.remove('active7');
    player63.classList.remove('active7');
    player64.classList.remove('active7');
    player65.classList.remove('active7');
    player66.classList.remove('active7');
    player67.classList.remove('active7');
    player68.classList.remove('active7');
    player69.classList.remove('active7');
    player70.classList.remove('active7');

    player71.classList.remove('active8');
    player72.classList.remove('active8');
    player73.classList.remove('active8');
    player74.classList.remove('active8');
    player75.classList.remove('active8');
    player76.classList.remove('active8');
    player77.classList.remove('active8');
    player78.classList.remove('active8');
    player79.classList.remove('active8');
    player80.classList.remove('active8');

    player81.classList.remove('active9');
    player82.classList.remove('active9');
    player83.classList.remove('active9');
    player84.classList.remove('active9');
    player85.classList.remove('active9');
    player86.classList.remove('active9');
    player87.classList.remove('active9');
    player88.classList.remove('active9');
    player89.classList.remove('active9');
    player90.classList.remove('active9');

    player91.classList.remove('activeten');
    player92.classList.remove('activeten');
    player93.classList.remove('activeten');
    player94.classList.remove('activeten');
    player95.classList.remove('activeten');
    player96.classList.remove('activeten');
    player97.classList.remove('activeten');
    player98.classList.remove('activeten');
    player99.classList.remove('activeten');
    player100.classList.remove('activeten');

    player101.classList.remove('active11');
    player102.classList.remove('active11');
    player103.classList.remove('active11');
    player104.classList.remove('active11');
    player105.classList.remove('active11');
    player106.classList.remove('active11');
    player107.classList.remove('active11');
    player108.classList.remove('active11');
    player109.classList.remove('active11');
    player110.classList.remove('active11');

    pauseMusic2();
    pauseMusic3();
    pauseMusic4();
    pauseMusic5();
    pauseMusic6();
    pauseMusic7();
    pauseMusic8();
    pauseMusic9();
    pauseMusicten();
    pauseMusic11();
    loadSong(songs[3]);
    playMusic();

    languages.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let player5 = document.querySelector('.music_container');

document.querySelector('#Duniya-Chhor-Doon').onclick = () => {
    player5.classList.toggle('active');
    player11.classList.remove('active2');
    player12.classList.remove('active2');
    player13.classList.remove('active2');
    player14.classList.remove('active2');
    player15.classList.remove('active2');
    player16.classList.remove('active2');
    player17.classList.remove('active2');
    player18.classList.remove('active2');
    player19.classList.remove('active2');
    player20.classList.remove('active2');

    player21.classList.remove('active3');
    player22.classList.remove('active3');
    player23.classList.remove('active3');
    player24.classList.remove('active3');
    player25.classList.remove('active3');
    player26.classList.remove('active3');
    player27.classList.remove('active3');
    player28.classList.remove('active3');
    player29.classList.remove('active3');
    player30.classList.remove('active3');

    player31.classList.remove('active4');
    player32.classList.remove('active4');
    player33.classList.remove('active4');
    player34.classList.remove('active4');
    player35.classList.remove('active4');
    player36.classList.remove('active4');
    player37.classList.remove('active4');
    player38.classList.remove('active4');
    player39.classList.remove('active4');
    player40.classList.remove('active4');

    player41.classList.remove('active5');
    player42.classList.remove('active5');
    player43.classList.remove('active5');
    player44.classList.remove('active5');
    player45.classList.remove('active5');
    player46.classList.remove('active5');
    player47.classList.remove('active5');
    player48.classList.remove('active5');
    player49.classList.remove('active5');
    player50.classList.remove('active5');

    player51.classList.remove('active6');
    player52.classList.remove('active6');
    player53.classList.remove('active6');
    player54.classList.remove('active6');
    player55.classList.remove('active6');
    player56.classList.remove('active6');
    player57.classList.remove('active6');
    player58.classList.remove('active6');
    player59.classList.remove('active6');
    player60.classList.remove('active6');

    player61.classList.remove('active7');
    player62.classList.remove('active7');
    player63.classList.remove('active7');
    player64.classList.remove('active7');
    player65.classList.remove('active7');
    player66.classList.remove('active7');
    player67.classList.remove('active7');
    player68.classList.remove('active7');
    player69.classList.remove('active7');
    player70.classList.remove('active7');

    player71.classList.remove('active8');
    player72.classList.remove('active8');
    player73.classList.remove('active8');
    player74.classList.remove('active8');
    player75.classList.remove('active8');
    player76.classList.remove('active8');
    player77.classList.remove('active8');
    player78.classList.remove('active8');
    player79.classList.remove('active8');
    player80.classList.remove('active8');

    player81.classList.remove('active9');
    player82.classList.remove('active9');
    player83.classList.remove('active9');
    player84.classList.remove('active9');
    player85.classList.remove('active9');
    player86.classList.remove('active9');
    player87.classList.remove('active9');
    player88.classList.remove('active9');
    player89.classList.remove('active9');
    player90.classList.remove('active9');

    player91.classList.remove('activeten');
    player92.classList.remove('activeten');
    player93.classList.remove('activeten');
    player94.classList.remove('activeten');
    player95.classList.remove('activeten');
    player96.classList.remove('activeten');
    player97.classList.remove('activeten');
    player98.classList.remove('activeten');
    player99.classList.remove('activeten');
    player100.classList.remove('activeten');

    player101.classList.remove('active11');
    player102.classList.remove('active11');
    player103.classList.remove('active11');
    player104.classList.remove('active11');
    player105.classList.remove('active11');
    player106.classList.remove('active11');
    player107.classList.remove('active11');
    player108.classList.remove('active11');
    player109.classList.remove('active11');
    player110.classList.remove('active11');

    pauseMusic2();
    pauseMusic3();
    pauseMusic4();
    pauseMusic5();
    pauseMusic6();
    pauseMusic7();
    pauseMusic8();
    pauseMusic9();
    pauseMusicten();
    pauseMusic11();
    loadSong(songs[4]);
    playMusic();

    languages.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let player6 = document.querySelector('.music_container');

document.querySelector('#Jodaa').onclick = () => {
    player6.classList.toggle('active');
    player11.classList.remove('active2');
    player12.classList.remove('active2');
    player13.classList.remove('active2');
    player14.classList.remove('active2');
    player15.classList.remove('active2');
    player16.classList.remove('active2');
    player17.classList.remove('active2');
    player18.classList.remove('active2');
    player19.classList.remove('active2');
    player20.classList.remove('active2');

    player21.classList.remove('active3');
    player22.classList.remove('active3');
    player23.classList.remove('active3');
    player24.classList.remove('active3');
    player25.classList.remove('active3');
    player26.classList.remove('active3');
    player27.classList.remove('active3');
    player28.classList.remove('active3');
    player29.classList.remove('active3');
    player30.classList.remove('active3');

    player31.classList.remove('active4');
    player32.classList.remove('active4');
    player33.classList.remove('active4');
    player34.classList.remove('active4');
    player35.classList.remove('active4');
    player36.classList.remove('active4');
    player37.classList.remove('active4');
    player38.classList.remove('active4');
    player39.classList.remove('active4');
    player40.classList.remove('active4');

    player41.classList.remove('active5');
    player42.classList.remove('active5');
    player43.classList.remove('active5');
    player44.classList.remove('active5');
    player45.classList.remove('active5');
    player46.classList.remove('active5');
    player47.classList.remove('active5');
    player48.classList.remove('active5');
    player49.classList.remove('active5');
    player50.classList.remove('active5');

    player51.classList.remove('active6');
    player52.classList.remove('active6');
    player53.classList.remove('active6');
    player54.classList.remove('active6');
    player55.classList.remove('active6');
    player56.classList.remove('active6');
    player57.classList.remove('active6');
    player58.classList.remove('active6');
    player59.classList.remove('active6');
    player60.classList.remove('active6');

    player61.classList.remove('active7');
    player62.classList.remove('active7');
    player63.classList.remove('active7');
    player64.classList.remove('active7');
    player65.classList.remove('active7');
    player66.classList.remove('active7');
    player67.classList.remove('active7');
    player68.classList.remove('active7');
    player69.classList.remove('active7');
    player70.classList.remove('active7');

    player71.classList.remove('active8');
    player72.classList.remove('active8');
    player73.classList.remove('active8');
    player74.classList.remove('active8');
    player75.classList.remove('active8');
    player76.classList.remove('active8');
    player77.classList.remove('active8');
    player78.classList.remove('active8');
    player79.classList.remove('active8');
    player80.classList.remove('active8');

    player81.classList.remove('active9');
    player82.classList.remove('active9');
    player83.classList.remove('active9');
    player84.classList.remove('active9');
    player85.classList.remove('active9');
    player86.classList.remove('active9');
    player87.classList.remove('active9');
    player88.classList.remove('active9');
    player89.classList.remove('active9');
    player90.classList.remove('active9');

    player91.classList.remove('activeten');
    player92.classList.remove('activeten');
    player93.classList.remove('activeten');
    player94.classList.remove('activeten');
    player95.classList.remove('activeten');
    player96.classList.remove('activeten');
    player97.classList.remove('activeten');
    player98.classList.remove('activeten');
    player99.classList.remove('activeten');
    player100.classList.remove('activeten');

    player101.classList.remove('active11');
    player102.classList.remove('active11');
    player103.classList.remove('active11');
    player104.classList.remove('active11');
    player105.classList.remove('active11');
    player106.classList.remove('active11');
    player107.classList.remove('active11');
    player108.classList.remove('active11');
    player109.classList.remove('active11');
    player110.classList.remove('active11');

    pauseMusic2();
    pauseMusic3();
    pauseMusic4();
    pauseMusic5();
    pauseMusic6();
    pauseMusic7();
    pauseMusic8();
    pauseMusic9();
    pauseMusicten();
    pauseMusic11();

    loadSong(songs[5]);
    playMusic();

    languages.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let player7 = document.querySelector('.music_container');

document.querySelector('#Dilwale').onclick = () => {
    player7.classList.toggle('active');
    player11.classList.remove('active2');
    player12.classList.remove('active2');
    player13.classList.remove('active2');
    player14.classList.remove('active2');
    player15.classList.remove('active2');
    player16.classList.remove('active2');
    player17.classList.remove('active2');
    player18.classList.remove('active2');
    player19.classList.remove('active2');
    player20.classList.remove('active2');

    player21.classList.remove('active3');
    player22.classList.remove('active3');
    player23.classList.remove('active3');
    player24.classList.remove('active3');
    player25.classList.remove('active3');
    player26.classList.remove('active3');
    player27.classList.remove('active3');
    player28.classList.remove('active3');
    player29.classList.remove('active3');
    player30.classList.remove('active3');

    player31.classList.remove('active4');
    player32.classList.remove('active4');
    player33.classList.remove('active4');
    player34.classList.remove('active4');
    player35.classList.remove('active4');
    player36.classList.remove('active4');
    player37.classList.remove('active4');
    player38.classList.remove('active4');
    player39.classList.remove('active4');
    player40.classList.remove('active4');

    player41.classList.remove('active5');
    player42.classList.remove('active5');
    player43.classList.remove('active5');
    player44.classList.remove('active5');
    player45.classList.remove('active5');
    player46.classList.remove('active5');
    player47.classList.remove('active5');
    player48.classList.remove('active5');
    player49.classList.remove('active5');
    player50.classList.remove('active5');

    player51.classList.remove('active6');
    player52.classList.remove('active6');
    player53.classList.remove('active6');
    player54.classList.remove('active6');
    player55.classList.remove('active6');
    player56.classList.remove('active6');
    player57.classList.remove('active6');
    player58.classList.remove('active6');
    player59.classList.remove('active6');
    player60.classList.remove('active6');

    player61.classList.remove('active7');
    player62.classList.remove('active7');
    player63.classList.remove('active7');
    player64.classList.remove('active7');
    player65.classList.remove('active7');
    player66.classList.remove('active7');
    player67.classList.remove('active7');
    player68.classList.remove('active7');
    player69.classList.remove('active7');
    player70.classList.remove('active7');

    player71.classList.remove('active8');
    player72.classList.remove('active8');
    player73.classList.remove('active8');
    player74.classList.remove('active8');
    player75.classList.remove('active8');
    player76.classList.remove('active8');
    player77.classList.remove('active8');
    player78.classList.remove('active8');
    player79.classList.remove('active8');
    player80.classList.remove('active8');

    player81.classList.remove('active9');
    player82.classList.remove('active9');
    player83.classList.remove('active9');
    player84.classList.remove('active9');
    player85.classList.remove('active9');
    player86.classList.remove('active9');
    player87.classList.remove('active9');
    player88.classList.remove('active9');
    player89.classList.remove('active9');
    player90.classList.remove('active9');

    player91.classList.remove('activeten');
    player92.classList.remove('activeten');
    player93.classList.remove('activeten');
    player94.classList.remove('activeten');
    player95.classList.remove('activeten');
    player96.classList.remove('activeten');
    player97.classList.remove('activeten');
    player98.classList.remove('activeten');
    player99.classList.remove('activeten');
    player100.classList.remove('activeten');

    player101.classList.remove('active11');
    player102.classList.remove('active11');
    player103.classList.remove('active11');
    player104.classList.remove('active11');
    player105.classList.remove('active11');
    player106.classList.remove('active11');
    player107.classList.remove('active11');
    player108.classList.remove('active11');
    player109.classList.remove('active11');
    player110.classList.remove('active11');

    pauseMusic2();
    pauseMusic3();
    pauseMusic4();
    pauseMusic5();
    pauseMusic6();
    pauseMusic7();
    pauseMusic8();
    pauseMusic9();
    pauseMusicten();
    pauseMusic11();
    loadSong(songs[6]);
    playMusic();

    languages.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let player8 = document.querySelector('.music_container');

document.querySelector('#Kabhii-Tumhhe').onclick = () => {
    player8.classList.toggle('active');
    player11.classList.remove('active2');
    player12.classList.remove('active2');
    player13.classList.remove('active2');
    player14.classList.remove('active2');
    player15.classList.remove('active2');
    player16.classList.remove('active2');
    player17.classList.remove('active2');
    player18.classList.remove('active2');
    player19.classList.remove('active2');
    player20.classList.remove('active2');

    player21.classList.remove('active3');
    player22.classList.remove('active3');
    player23.classList.remove('active3');
    player24.classList.remove('active3');
    player25.classList.remove('active3');
    player26.classList.remove('active3');
    player27.classList.remove('active3');
    player28.classList.remove('active3');
    player29.classList.remove('active3');
    player30.classList.remove('active3');

    player31.classList.remove('active4');
    player32.classList.remove('active4');
    player33.classList.remove('active4');
    player34.classList.remove('active4');
    player35.classList.remove('active4');
    player36.classList.remove('active4');
    player37.classList.remove('active4');
    player38.classList.remove('active4');
    player39.classList.remove('active4');
    player40.classList.remove('active4');

    player41.classList.remove('active5');
    player42.classList.remove('active5');
    player43.classList.remove('active5');
    player44.classList.remove('active5');
    player45.classList.remove('active5');
    player46.classList.remove('active5');
    player47.classList.remove('active5');
    player48.classList.remove('active5');
    player49.classList.remove('active5');
    player50.classList.remove('active5');

    player51.classList.remove('active6');
    player52.classList.remove('active6');
    player53.classList.remove('active6');
    player54.classList.remove('active6');
    player55.classList.remove('active6');
    player56.classList.remove('active6');
    player57.classList.remove('active6');
    player58.classList.remove('active6');
    player59.classList.remove('active6');
    player60.classList.remove('active6');

    player61.classList.remove('active7');
    player62.classList.remove('active7');
    player63.classList.remove('active7');
    player64.classList.remove('active7');
    player65.classList.remove('active7');
    player66.classList.remove('active7');
    player67.classList.remove('active7');
    player68.classList.remove('active7');
    player69.classList.remove('active7');
    player70.classList.remove('active7');

    player71.classList.remove('active8');
    player72.classList.remove('active8');
    player73.classList.remove('active8');
    player74.classList.remove('active8');
    player75.classList.remove('active8');
    player76.classList.remove('active8');
    player77.classList.remove('active8');
    player78.classList.remove('active8');
    player79.classList.remove('active8');
    player80.classList.remove('active8');

    player81.classList.remove('active9');
    player82.classList.remove('active9');
    player83.classList.remove('active9');
    player84.classList.remove('active9');
    player85.classList.remove('active9');
    player86.classList.remove('active9');
    player87.classList.remove('active9');
    player88.classList.remove('active9');
    player89.classList.remove('active9');
    player90.classList.remove('active9');

    player91.classList.remove('activeten');
    player92.classList.remove('activeten');
    player93.classList.remove('activeten');
    player94.classList.remove('activeten');
    player95.classList.remove('activeten');
    player96.classList.remove('activeten');
    player97.classList.remove('activeten');
    player98.classList.remove('activeten');
    player99.classList.remove('activeten');
    player100.classList.remove('activeten');

    player101.classList.remove('active11');
    player102.classList.remove('active11');
    player103.classList.remove('active11');
    player104.classList.remove('active11');
    player105.classList.remove('active11');
    player106.classList.remove('active11');
    player107.classList.remove('active11');
    player108.classList.remove('active11');
    player109.classList.remove('active11');
    player110.classList.remove('active11');

    pauseMusic2();
    pauseMusic3();
    pauseMusic4();
    pauseMusic5();
    pauseMusic6();
    pauseMusic7();
    pauseMusic8();
    pauseMusic9();
    pauseMusicten();
    pauseMusic11();
    loadSong(songs[7]);
    playMusic();

    languages.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let player9 = document.querySelector('.music_container');

document.querySelector('#Dil-Galti').onclick = () => {
    player9.classList.toggle('active');
    player11.classList.remove('active2');
    player12.classList.remove('active2');
    player13.classList.remove('active2');
    player14.classList.remove('active2');
    player15.classList.remove('active2');
    player16.classList.remove('active2');
    player17.classList.remove('active2');
    player18.classList.remove('active2');
    player19.classList.remove('active2');
    player20.classList.remove('active2');

    player21.classList.remove('active3');
    player22.classList.remove('active3');
    player23.classList.remove('active3');
    player24.classList.remove('active3');
    player25.classList.remove('active3');
    player26.classList.remove('active3');
    player27.classList.remove('active3');
    player28.classList.remove('active3');
    player29.classList.remove('active3');
    player30.classList.remove('active3');

    player31.classList.remove('active4');
    player32.classList.remove('active4');
    player33.classList.remove('active4');
    player34.classList.remove('active4');
    player35.classList.remove('active4');
    player36.classList.remove('active4');
    player37.classList.remove('active4');
    player38.classList.remove('active4');
    player39.classList.remove('active4');
    player40.classList.remove('active4');

    player41.classList.remove('active5');
    player42.classList.remove('active5');
    player43.classList.remove('active5');
    player44.classList.remove('active5');
    player45.classList.remove('active5');
    player46.classList.remove('active5');
    player47.classList.remove('active5');
    player48.classList.remove('active5');
    player49.classList.remove('active5');
    player50.classList.remove('active5');

    player51.classList.remove('active6');
    player52.classList.remove('active6');
    player53.classList.remove('active6');
    player54.classList.remove('active6');
    player55.classList.remove('active6');
    player56.classList.remove('active6');
    player57.classList.remove('active6');
    player58.classList.remove('active6');
    player59.classList.remove('active6');
    player60.classList.remove('active6');

    player61.classList.remove('active7');
    player62.classList.remove('active7');
    player63.classList.remove('active7');
    player64.classList.remove('active7');
    player65.classList.remove('active7');
    player66.classList.remove('active7');
    player67.classList.remove('active7');
    player68.classList.remove('active7');
    player69.classList.remove('active7');
    player70.classList.remove('active7');

    player71.classList.remove('active8');
    player72.classList.remove('active8');
    player73.classList.remove('active8');
    player74.classList.remove('active8');
    player75.classList.remove('active8');
    player76.classList.remove('active8');
    player77.classList.remove('active8');
    player78.classList.remove('active8');
    player79.classList.remove('active8');
    player80.classList.remove('active8');

    player81.classList.remove('active9');
    player82.classList.remove('active9');
    player83.classList.remove('active9');
    player84.classList.remove('active9');
    player85.classList.remove('active9');
    player86.classList.remove('active9');
    player87.classList.remove('active9');
    player88.classList.remove('active9');
    player89.classList.remove('active9');
    player90.classList.remove('active9');

    player91.classList.remove('activeten');
    player92.classList.remove('activeten');
    player93.classList.remove('activeten');
    player94.classList.remove('activeten');
    player95.classList.remove('activeten');
    player96.classList.remove('activeten');
    player97.classList.remove('activeten');
    player98.classList.remove('activeten');
    player99.classList.remove('activeten');
    player100.classList.remove('activeten');

    player101.classList.remove('active11');
    player102.classList.remove('active11');
    player103.classList.remove('active11');
    player104.classList.remove('active11');
    player105.classList.remove('active11');
    player106.classList.remove('active11');
    player107.classList.remove('active11');
    player108.classList.remove('active11');
    player109.classList.remove('active11');
    player110.classList.remove('active11');

    pauseMusic2();
    pauseMusic3();
    pauseMusic4();
    pauseMusic5();
    pauseMusic6();
    pauseMusic7();
    pauseMusic8();
    pauseMusic9();
    pauseMusicten();
    pauseMusic11();
    loadSong(songs[8]);
    playMusic();

    languages.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let player10 = document.querySelector('.music_container');

document.querySelector('#Pyaar-Karte').onclick = () => {
    player10.classList.toggle('active');
    player11.classList.remove('active2');
    player12.classList.remove('active2');
    player13.classList.remove('active2');
    player14.classList.remove('active2');
    player15.classList.remove('active2');
    player16.classList.remove('active2');
    player17.classList.remove('active2');
    player18.classList.remove('active2');
    player19.classList.remove('active2');
    player20.classList.remove('active2');

    player21.classList.remove('active3');
    player22.classList.remove('active3');
    player23.classList.remove('active3');
    player24.classList.remove('active3');
    player25.classList.remove('active3');
    player26.classList.remove('active3');
    player27.classList.remove('active3');
    player28.classList.remove('active3');
    player29.classList.remove('active3');
    player30.classList.remove('active3');

    player31.classList.remove('active4');
    player32.classList.remove('active4');
    player33.classList.remove('active4');
    player34.classList.remove('active4');
    player35.classList.remove('active4');
    player36.classList.remove('active4');
    player37.classList.remove('active4');
    player38.classList.remove('active4');
    player39.classList.remove('active4');
    player40.classList.remove('active4');

    player41.classList.remove('active5');
    player42.classList.remove('active5');
    player43.classList.remove('active5');
    player44.classList.remove('active5');
    player45.classList.remove('active5');
    player46.classList.remove('active5');
    player47.classList.remove('active5');
    player48.classList.remove('active5');
    player49.classList.remove('active5');
    player50.classList.remove('active5');

    player51.classList.remove('active6');
    player52.classList.remove('active6');
    player53.classList.remove('active6');
    player54.classList.remove('active6');
    player55.classList.remove('active6');
    player56.classList.remove('active6');
    player57.classList.remove('active6');
    player58.classList.remove('active6');
    player59.classList.remove('active6');
    player60.classList.remove('active6');

    player61.classList.remove('active7');
    player62.classList.remove('active7');
    player63.classList.remove('active7');
    player64.classList.remove('active7');
    player65.classList.remove('active7');
    player66.classList.remove('active7');
    player67.classList.remove('active7');
    player68.classList.remove('active7');
    player69.classList.remove('active7');
    player70.classList.remove('active7');

    player71.classList.remove('active8');
    player72.classList.remove('active8');
    player73.classList.remove('active8');
    player74.classList.remove('active8');
    player75.classList.remove('active8');
    player76.classList.remove('active8');
    player77.classList.remove('active8');
    player78.classList.remove('active8');
    player79.classList.remove('active8');
    player80.classList.remove('active8');

    player81.classList.remove('active9');
    player82.classList.remove('active9');
    player83.classList.remove('active9');
    player84.classList.remove('active9');
    player85.classList.remove('active9');
    player86.classList.remove('active9');
    player87.classList.remove('active9');
    player88.classList.remove('active9');
    player89.classList.remove('active9');
    player90.classList.remove('active9');

    player91.classList.remove('activeten');
    player92.classList.remove('activeten');
    player93.classList.remove('activeten');
    player94.classList.remove('activeten');
    player95.classList.remove('activeten');
    player96.classList.remove('activeten');
    player97.classList.remove('activeten');
    player98.classList.remove('activeten');
    player99.classList.remove('activeten');
    player100.classList.remove('activeten');

    player101.classList.remove('active11');
    player102.classList.remove('active11');
    player103.classList.remove('active11');
    player104.classList.remove('active11');
    player105.classList.remove('active11');
    player106.classList.remove('active11');
    player107.classList.remove('active11');
    player108.classList.remove('active11');
    player109.classList.remove('active11');
    player110.classList.remove('active11');

    pauseMusic2();
    pauseMusic3();
    pauseMusic4();
    pauseMusic5();
    pauseMusic6();
    pauseMusic7();
    pauseMusic8();
    pauseMusic9();
    pauseMusicten();
    pauseMusic11();
    loadSong(songs[9]);
    playMusic();

    languages.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let x = document.querySelector('.music_container');

document.querySelector('#cross').onclick = () => {
    x.classList.remove('active');
    pauseMusic();
}

const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");
const songs = [
    {//1
        name: "tip-tip",
        title: "tip-tip",
        artist: "Udit Narayan"
    },
    {//2
        name: "kusu-kusu",
        title: "kusu-Kusu",
        artist: "Zahrah S Khan"
    },
    {//3
        name: "Jugnu",
        title: "Jugnu",
        artist: "Badshah"
    },
    {//4
        name: "Koi-Sehri-Babu",
        title: "Koi Sehri Babu",
        artist: "Shruti Rane "
    },
    {//5
        name: "Duniya-Chhor-Doon",
        title: "Duniya",
        artist: "Darshan Raval"
    },
    {//6
        name: "Jodaa",
        title: "Jodaa",
        artist: "Afsana Khan"
    },
    {//7
        name: "Dilwale",
        title: "Daayre Dilwale",
        artist: "Arijit Singh"
    },
    {//8
        name: "Kabhii-Tumhhe",
        title: "Kabhii Tumhhe",
        artist: "Darshan Raval"
    },
    {//9
        name: "Dil-Galti",
        title: "Dil Galti",
        artist: "Jubin Nautiyal"
    },
    {//10
        name: "Pyaar-Karte",
        title: "Pyaar Karte hona",
        artist: "Shreya Ghoshal"
    },
]
// for play function
let isPlaying = false;
const playMusic = () => {
    isPlaying = true

    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// for pause function
const pauseMusic = () => {
    isPlaying = false

    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();
});

// changing music data
const loadSong = (songs) => {
    title.textContent = songs.title
    artist.textContent = songs.artist
    music.src = "music/" + songs.name + ".mp3"
    img.src = "images/" + songs.name + ".webp"
};
songIndex = 0;
// loadSong(songs[2]);
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

// progress js work
music.addEventListener('timeupdate', (event) => {
    // console.log(event);
    const { currentTime, duration } = event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;

    // music duration update 
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);

    let tot_duration = `${min_duration}:${sec_duration}`;
    if (duration) {
        total_duration.textContent = `${tot_duration}`;
    }

    // current duration update 
    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);
    if (sec_currentTime < 10) {
        sec_currentTime = `0${sec_currentTime}`;
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${tot_currentTime}`;
});

// progress onclick functionality 
progress_div.addEventListener('click', (event) => {
    const { duration } = music;
    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    music.currentTime = move_progress;
});

// if music end next song Function 
music.addEventListener('ended', nextSong);

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
// music player ends here
// --------------------------------------------------------------

