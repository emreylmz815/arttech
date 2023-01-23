import React from 'react';
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle }) => {
    return (
        <>
      
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle} || ARTTECH GÜVENLİK</title>
                <meta name="robots" content="index,follow" />
                <meta name="author" content="ARTTECH GÜVENLİK" />
                <meta name="description" content="ARTTECH GÜVENLİK, Akıllı Ev Sistemleri, Profesyonel Kamera Güvenlik Sistemleri, Personel Takip Sistemleri, Yangın Algılama ve Hırsız Alarm Sistemleri, Network Çözümleri" />
                <meta name="keywords" content="Akıllı Ev, Güvenlik Kamera Sistemleri, Personel Takip Sistemleri, Yangın Algılama ve Hırsız Alarm Sistemleri, Düzce Akıllı Ev, Bolu Akıllı Ev, Zonguldak Akıllı Ev, plaka tanıma sistemleri"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Helmet>
        </>
  

    );
};

export default PageHelmet;