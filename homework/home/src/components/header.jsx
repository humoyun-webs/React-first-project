import React, { Component } from 'react';

class header extends Component {
    render() {
        return (
            <div>
                 <header class="header">
        <div class="color">
            <nav class="nav">
                <div class="nav__logo"><img src={logo} alt="logo" /></div>

                <ul class="nav__ul">
                    <li class="nav__ul__li"><a href="#" class="nav__ul__li__a">Beranda</a></li>
                    <li class="nav__ul__li"><a href="#" class="nav__ul__li__a">Koleksi</a></li>
                    <li class="nav__ul__li"><a href="#" class="nav__ul__li__a">Syarat dan Ketentuan</a></li>
                    <li class="nav__ul__li"><a href="#" class="nav__ul__li__a">Kontak</a></li>
                    <li class="nav__ul__li"><a href="#" class="nav__ul__li__a  btn">Masuk</a></li>
                </ul>
            </nav>
        </div>

        <div class="header__title">
            <h3><span>Pojok Baca</span> Probolinggo</h3>

            <h2>Pinjam Buku Secara <span>Gratis</span> untuk Masyarakat</h2>

            <div class="buttons">
                <button class="btn1">Cari Judul Buku <i class="fas fa-search"></i></button>
                <button class="btn2">Donasi dengan Kami</button>
            </div>
        </div>



        <div class="header__cards">
            <div class="header__cards__box1">
                <h3>Sedang Tuhan pun Cemburu</h3>
                <p><span>Emha Ainun Nadjib</span></p>
                <img src={header1} alt="header-1" />
            </div>

            <div class="header__cards__box2">
                <h3>Hati-Hati dengan Sampah</h3>
                <p><span>Ukjae Lee</span></p>
                <img src={header2} alt="header-2" />
            </div>

            <div class="header__cards__box3">
                <h3>Laut Bercerita</h3>
                <p><span>Leila S. Chudori</span></p>
                <img src={header3} alt="header-3" />
            </div>
            <div class="header__cards__box4">
                <h3>Toto-chan : The Little Girl At The Window</h3>
                <p><span>Testuko Kuroyanagi</span></p>
                <img src={header4} alt="header-4" />
            </div>

            <div class="header__cards__box5">
                <h3>Anatomi Rasa</h3>
                <p><span>Anatomi Rasa</span></p>
                <img src={header5} alt="header-5" />
            </div>

            <div class="header__cards__box6">
                <h3>Perempuan di Titik Nol</h3>
                <p><span>Nawal eEl Saadawi</span></p>
                <img src={header6} alt="header-6" />
            </div>

            <div class="header__cards__box7">
                <h3>Berjalan di Atas Cahaya</h3>
                <p><span>Hanum Salsabiela Rais</span></p>
                <img src={header7} alt="header-7" />
            </div>
        </div>

    </header>
            </div>
        );
    }
}

export default header;