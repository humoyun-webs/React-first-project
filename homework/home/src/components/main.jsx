import React, { Component } from 'react';

class main extends Component {
    render() {
        return (
            <div>
                <main class="main">
        <div class="position">
            <div class="main__title">
                <h1>Kenapa Kita <span>Harus</span> Membaca Buku?</h1>
            </div>

            <div class="main__flex">

                <div class="main__flex__box1">

                    <p>“Aku rela dipenjara asalkan <b>bersama buku</b>, karena dengan buku <b>aku bebas</b>”</p>

                    <div class="main__flex__box1__avatar">
                        <img src="./img/main-1.png" alt="main1" />

                        <div class="main__flex__box1__avatar__words">
                            <h1>Mohammad Hatta</h1>
                            <h3>Wakil Presiden Indonesia Pertama</h3>
                        </div>
                    </div>
                </div>

                <div class="main__flex__box1">

                    <p>“Cuma perlu <b>satu buku</b> untuk jatuh cinta pada membaca, Cari Buku itu! <b>Mari jatuh
                            cinta</b>!</p>

                    <div class="main__flex__box1__avatar">
                        <img src="./img/main-2.png" alt="main1" />

                        <div class="main__flex__box1__avatar__words">
                            <h1>Najwa Shihab</h1>
                            <h3>Duta Membaca</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </main>


    <div class="col">
        <div class="col__box">
            <img src="./img/sircle.png" alt="sircle" />
            <div class="col__box__words">
                <h1>500+</h1>
                <p>Judul Buku</p>
            </div>
        </div>

        <div class="col__box">
            <img src="./img/sircle.png" alt="sircle" />
            <div class="col__box__words">
                <h1>$0</h1>
                <p>Gratis Peminjaman</p>
            </div>
        </div>

        <div class="col__box">
            <img src="./img/sircle.png" alt="sircle" />
            <div class="col__box__words">
                <h1>5</h1>
                <p>Kegiatan Rutin</p>
            </div>
        </div>
    </div>

    <section class="section">
        <div class="section__title">
            <ul class="section__title__ul">
                <li>Apa Kata Mereka?</li>
                <li>Mereka yang telah menjadi pengunjung tetap kami</li>
            </ul>
            <ul class="section__title__ul2">
                <li>Selengkapnya</li>
            </ul>
        </div>

        <div class="section__cards">

            <div class="section__cards__box">
            
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <div class="section__cards__box__flex">
                    <ul class="section__cards__box__flex__ul">
                        <li><img src="./img/main-3.png" alt="main-3" /></li>
                    </ul>

                    <ul class="section__cards__box__flex__ul2">
                        <li>Guy Hawkins</li>
                        <li>32 Tahun, Karyawan</li>
                    </ul>

                </div>

            </div>


            <div class="section__cards__box2">
            
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

            <div class="section__cards__box2__flex">
                <ul class="section__cards__box2__flex__ul">
                    <li><img src="./img/main-4.png" alt="main-4" /></li>
                </ul>

                <ul class="section__cards__box2__flex__ul2">
                    <li>Brooklyn Simmons</li>
                    <li>20 Tahun, Mahasiswa</li>
                </ul>

            </div>

        </div>

        </div>

    </section>


    <div class="row">
        <div class="row__title">
            <ul class="row__title__ul">
                <li>Apa Kata Mereka?</li>
                <li>Mereka yang telah menjadi pengunjung tetap kami</li>
            </ul>
            <ul class="row__title__ul2">
                <li>Selengkapnya</li>
            </ul>
        </div>

        <div class="row__cards">
            <img src="./img/card-1.png" alt="card1" />
            <img src="./img/card-2.png" alt="card2" />
            <img src="./img/card-3.png" alt="card3" />
        </div>
    </div>

  

    <div class="information">
        <h2>Ingin <span>Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?</h2>
        <p>Percayakan melalui kegiatan kita</p>
        <button>Donasi dengan Kami</button>
        <h4>Atau</h4>
        <h3>Hubungi Kami <i class="fas fa-phone"></i></h3>
    </div>

            </div>
        );
    }
}

export default main;