dataSetVersion = "2022-04-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
// dataSetVersion = "2024-10-04"
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  /*
  {
    
    name: "Filter by Group",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
		{ name: "=LOVE", tooltip: "=LOVE members", key: "ikorabu" },
		{ name: "≠ME", tooltip: "≠ME members", key: "noimi" },
		{ name: "≒JOY", tooltip: "≒JOY members", key: "niajoy" }
    ]
  },
  {
    name: "Filter Activity Status",
    key: "activity_status",
    tooltip: "Check this to restrict members by activity status.",
    checked: true,
    sub: [
		{ name: "Active Member", tooltip: "Member who currently active as member", key: "active", tooltip: "Only currently active members", checked: true },
		{ name: "Graduated", tooltip: "Member who already graduated", key: "graduated", tooltip: "Graduated member(s)", checked: false }
    ]
  }*/
  {
    name: "Filter by Style",
    key: "style",
    tooltip: "Check this to restrict Miruten's style to your liking.",
    checked: false,
    sub: [
		{ name: "Photoshoot", tooltip: "Miruten's photoshoot", key: "photoshoot" },
		{ name: "Random cuteness", tooltip: "Random photo of Miruten's cuteness", key: "random" }
    ]
  }
  
];

dataSet[dataSetVersion].characterData = [
  
  // Photoshoot

  {
    name: "2019 Miruten",
    img: "Honda_miyuki.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Kimi no Oto Dattanda Miruten",
    img: "Honda_miyuki_kimi_oto.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Kimi to Boku no Uta Miruten",
    img: "Honda_miyuki_kimi_boku_uta.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "P.I.C Miruten",
    img: "Honda_miyuki_pic.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Chou Tokkyuu ≠ME Iki Miruten",
    img: "Honda_miyuki_iki.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Kimi wa Kono Natsu, Koi wo Suru Miruten",
    img: "Honda_miyuki_kononatsu.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Mahoroba Asterisk Miruten",
    img: "Honda_miyuki_mahoroba.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Chocolate Melancholy Miruten",
    img: "Honda_miyuki_choco.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Su, Suki Janai! Miruten",
    img: "Honda_miyuki_sukijanai.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Hanikami Short Miruten",
    img: "Honda_Miyuki_Hanikami_Short.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Tenshi wa Doko e Miruten",
    img: "Honda_Miyuki_tendoko.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Omowase Burikko Miruten",
    img: "Honda_Miyuki_omowase.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Anti Confiture Miruten",
    img: "Honda_Miyuki_Anti_Confiture.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Springtime In You Miruten",
    img: "Honda_Miyuki_Springtime.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Natsu ga Kita Kara Miruten",
    img: "Honda_Miyuki_Natsu_ga.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "Mob no Cinderella / Kamisama no Iu Toori! Miruten",
    img: "Honda_miyuki.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  {
    name: "2019 Miruten",
    img: "Honda_Miyuki_Mob.jpg",
    opts: {
      style: ["photoshoot"]
    }
  },
  
  /*
  {
    name: "Otani Emiri",
    img: "otani-emiri.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Oba Hana",
    img: "oba-hana.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Otoshima Risa",
    img: "otoshima-risa.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Saito Kiara",
    img: "saito-kiara.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Saito Nagisa",
    img: "saito-nagisa.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Sasaki Maika",
    img: "sasaki-maika.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Satake Nonno",
    img: "satake-nonno.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Takamatsu Hitomi",
    img: "takamatsu-hitomi.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Takiwaki Shoko",
    img: "takiwaki-shoko.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Noguchi Iori",
    img: "noguchi-iori.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Morohashi Sana",
    img: "morohashi-sana.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamamoto Anna",
    img: "yamamoto-anna.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },


  // ≠ME members

  {
    name: "Ogi Hana",
    img: "ogi-hana-thumb.jpg",
    opts: {
      groups: [ "noimi" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Ochiai Kirari",
    img: "ochiai-kirari-thumb.jpg",
    opts: {
      groups: [ "noimi" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kanisawa Moeko",
    img: "kanisawa-moeko-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kawaguchi Natsune",
    img: "kawaguchi-natsune-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Kawanago Natsumi",
    img: "kawanago-natsumi-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Sakurai Momo",
    img: "sakurai-momo-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Suganami Mirei",
    img: "suganami-mirei-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Suzuki Hitomi",
    img: "suzuki-hitomi-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Tanizaki Saya",
    img: "tanizaki-saya-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Tomita Nanaka",
    img: "tomita-nanaka-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Nagata Shiori",
    img: "nagata-shiori-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Honda Miyuki",
    img: "honda-miyuki-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },

  
  
  // ≒JOY members
  
  {
    name: "Aida Jurii",
    img: "aida-jurii.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  }, 
  {
    name: "Amano Konoa",
    img: "amano-konoa.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Ichihara Ayumi",
    img: "ichihara-ayumi.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Esumi Renon",
    img: "esumi-renon.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Oshida Mitsuki",
    img: "oshida-mitsuki.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Onishi Aoi",
    img: "onishi-aoi.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Takahashi Mai",
    img: "takahashi-mai.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Fukuyama Moeka",
    img: "fukuyama-moeka.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Fujisawa Riko",
    img: "fujisawa-riko.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Murayama Yuuka",
    img: "murayama-yuuka.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamada Momoka",
    img: "yamada-momoka.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamano Arisu",
    img: "yamano-arisu.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
	name: "Ozawa Aimi",
	img: "ozawa-aimi.jpg",
	opts: {
	  groups: ["niajoy"],
	  sub_unit: [""], activity_status: ["active"]
	}
  }*/


];