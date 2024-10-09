/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import universal from "../../assets/images/location.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div
            className="location_card_left"
            data-aos="fade-right"
            data-aos-offset="-200"
          >
            <img src={universal} alt="" className="location_img" />
          </div>
          <div
            className="location_card1"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
              Tumor  majmuasi strategik jihatdan eng qulay joyda, Samarqand shahri markazida joylashgan. Shahar infratuzilmasining barcha asosiy obyektlari, ish joylari, ta’lim va sog‘liqni saqlash muassasalariga yaqinligi hayotingizni yanada osonlashtiradi.</p>
            <p className="location_text">
              Bu yerda kundalik ehtiyojlaringizni qondirish uchun barcha zarur sharoitlar mavjud, shu bilan birga uzoq yo‘llarda vaqt yo‘qotish yoki tirbandliklardan xavotirlanmasligingiz mumkin.</p>
          </div>
          <div
            className="location_card2"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <p className="location_text2">
            Yaqin atrofda joylashgan yashil bog‘lar, sport majmualari va ko‘ngilochar maskanlar Tumor majmuasining aholisiga dam olish va maroqli vaqt o‘tkazish uchun ajoyib imkoniyatlarni taqdim etadi. Bu joylar nafaqat farovonlikni oshiradi, balki turmush tarziga ham rang-baranglik kiritadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
