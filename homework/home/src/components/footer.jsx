import React, { Component } from 'react';

class footer extends Component {
    render() {
        return (
            <div>
                 <footer class="footer">
        <div class="footer__flex">
            <ul class="footer__flex__ul">
                <li><img src="./img/logo.png" alt="logo" /> Pojok Baca Probolinggo</li>
                <li><i class="fab fa-instagram"></i><i class="fab fa-facebook"></i><i class="fab fa-youtube"></i></li>
            </ul>

            <ul class="footer__flex__ul2">
                <p>Kontak</p>
                <li>Email</li>
                <li>Alamat</li>
                <li>No. Rekening</li>
            </ul>

            <ul class="footer__flex__ul3">
                <p>Tentang Kami</p>
                <li>Umum</li>
            </ul>

            <ul class="footer__flex__ul4">
                <p>Galery</p>
                <li>Kegiatan 2018</li>
                <li>Kegiatan 2019</li>
                <li>Kegiatan 2020</li>
                <li>Kegiatan 2021</li>
            </ul>
        </div>
    </footer>

<div class="footer-bottom">
    <div class="footer-bottom__position">
        <p>copy Pojok Baca Probolinggo 2022</p>
    </div>
            </div>
            /</div>
        );
    }
}

export default footer;