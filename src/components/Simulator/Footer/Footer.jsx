import React from 'react';
import s from "./Footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerCont}>
        <div className={s.text}>
          <p>Info</p>
          <div>
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras
            redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
            inde.
          </div>
        </div>

        <div className={s.pages}>
          <p>Pages</p>
          <div>Lörem ipsum</div>
          <div>Lörem ipsum</div>
          <div>Lörem ipsum</div>
          <div>Lörem ipsum</div>
        </div>

        <div className={s.service}>
          <p>Service</p>
          <div>Lörem ipsum</div>
          <div>Lörem ipsum</div>
          <div>Lörem ipsum</div>
        </div>

        <div className={s.map}>
          <p>Maps Location</p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.91309709988!2d34.72720582158313!3d32.087912232750796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo%2C%20Israel!5e0!3m2!1sen!2skz!4v1669264766366!5m2!1sen!2skz"
            width="570" height="155" style={{border: "0"}} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;