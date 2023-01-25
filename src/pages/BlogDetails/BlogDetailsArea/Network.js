import React from "react";
import { FaFacebookF, FaTwitter, FaVimeoV } from "react-icons/fa";
import BlogLeftSideBar from "../../Blogs/BlogsArea/BlogLeftSideBar";
import { BiReply } from "react-icons/bi";

const Network = () => {
  return (
    <>
      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="blog__details-wrapper mr-50">
                <div className="blog__text mb-45">
                  <h4>Network Sistemleri</h4>
                </div>
                <div className="blog__quote mb-40 p-relative white-bg fix">
                  <div className="blog__quote-line">
                    <img
                      className="line-1"
                      src="assets/img/icon/blog/line-1.png"
                      alt=""
                    />
                    <img
                      className="line-2"
                      src="assets/img/icon/blog/line-2.png"
                      alt=""
                    />
                  </div>
                  <div className="quote mb-10">
                    <img src="assets/img/icon/blog/quote-1.png" alt="" />
                  </div>
                  <div className="quote-2 p-absolute">
                    <img src="assets/img/icon/blog/quote-2.png" alt="" />
                  </div>
                  <blockquote>
                    <p>
                      WAN, LAN, kablosuz çözümler ve diğer ağ İletişim
                      sistemlerinde uçtan uca zengin ürün portföyü ile
                      beklentilere uygun çözümlerin sağlanması,
                      projelendirilmesi, kurulum ve bakım alanında danışmanlık
                      hizmetleri dahil olmak üzere tek noktadan “teknolojik
                      çözümler” Arttech’in ana hedefi haline gelmiştir.
                    </p>
                  </blockquote>
                </div>
                <div className="blog__text mb-40">
                  <ul>
                    <li>Geniş Alan Ağı (WAN)</li>
                    <li>Yerel Ağ (LAN)</li>
                    <li>Kablosuz Ağlar (Wi-Fi)</li>
                    <li>Mobil İletişim (LTE Router)</li>
                    <li>WAN Optimizasyon Çözümleri</li>
                    <li>SD-WAN Çözümleri</li>
                    <li>Ağ Yönetimi (NMS)</li>
                  </ul>
                </div>
                <div className="blog__details-thumb w-img mb-45">
                  <img src="assets/img/blog/details/kvkk.jpg" alt="" />
                </div>
                <div className="blog__text mb-40">
                  <h3>
                    Endüstriyel ağlar, günümüzde üretim ve otomasyonla uğraşan
                    işletme ve şirketlerin temel altyapılarını oluşturmaktadır.
                  </h3>
                  <p>
                    Bu sebeple geçişlerin çok hızlı olduğu, endüstriyel
                    protokollere uyum sağlayan ve iletişim arayüzlerini
                    destekleyen çözümlerin tercih edilmesi büyük önem
                    kazanmaktadır. Diğer bir önemli konu, sistemlerin uzaktan
                    erişimlerle yönetilebilmesi ve sahadaki sistem bilgilerinin
                    merkeze alınabilmesidir. Özellikle arada iletişim ortamının
                    bulunmadığı yerlerde 4G/LTE temelli erişimler hayati bir rol
                    oynamaktadır.
                  </p>
                  
                  <ul>
                    <li> 4G/LTE router</li>
                    <li>Endüstriyel switch ürünleri</li>
                    <li>Ethernet medya dönüştürücüler</li>
                    <li>Kablosuz erişim çözümleri</li>
                    <li>Protokol dönüştürücüler (gateway)</li>
                    <li>Seri dönüştürücüler (interface converter)</li>
                    <li>USB-seri dönüştürücüler</li>
                    <li>Seri port çoklayıcı sistemler</li>
                    <li>Endüstriyel bilgisayarlar</li>
                    <li>I/O port sağlayıcılar</li>
                  </ul>
                  <hr/>
                  <h3>YAZILIM ÇÖZÜMLERİ</h3>
                  <p>
                  CPM ERP, stok takibinden malzeme ihtiyaç planlamaya, risk yönetiminden kredilere, yasal defterlerden uluslar arası raporlamaya, doküman yönetiminden kurumsal satınalma ve gider yönetime, satış öncesi CRM’den satış sonrası Servis’e, kalite yönetiminden toplam verimlilik yönetimine birçok sistemin bir arada çalıştığı entegre sistemler bütünüdür. Katman mimarisine sahip bir uygulama olarak her türlü ekstra ihtiyacı sistem üzerinde hızlıca karşılar. Kullanıcı ve IT dostu olmanın yanında yönetici dostu olmayı da başaran CPM ERP yazılımları, bu yönüyle de benzerlerinden farklılaşır.
                  </p>
                  <h5>CPM ERP öncülüğünü yaptığı çözümlerle, birçok farklı sektörde deneyim sahibi olan ender yazılım firmasından biridir. Kimya, otomotiv, boya, mühendislik, medikal, montaj ve kuaförlük gibi birçok sektörde de yenilikçi çözümlerin öncülüğünü yapmaktadır.</h5>
                </div>
                <div className="blog__tag mb-30">
                  <span>Tag : </span>
                  <a >Network</a>
                  <a >Yazılım Çözümleri</a>
                  <a >CPM</a>
                  <a >ERP</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Network;
