// Sample data for artists
const artistsData = [
  {
    id: "1",
    name: "Balthazard DY",
    image:
      "https://yt3.googleusercontent.com/xYDl2ZKcZYnb4Hw2SD-Yiv_M1DrEnJwOIvTrTN2JWF8Tbve19IuYwbnpFznyZwCwMKKfqzDRbw=s900-c-k-c0x00ffffff-no-rj",
    spotifyId: "3WhltmZtcYdg88yeoxeWP1",
  },
  {
    id: "2",
    name: "Amaza",
    image:
      "https://scontent.fyhu2-1.fna.fbcdn.net/v/t39.30808-6/408135717_853534716774823_1289535038645929108_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=SmDBTKmdR5IAX9--JiJ&_nc_ht=scontent.fyhu2-1.fna&oh=00_AfCaBVcuVnYjPAaThcyy24-6aqgOFmMogLprzUnFRh-sRQ&oe=65B14DA4",
    spotifyId: "1loe65hVOIqyyJAKRQRLI7",
  },
  {
    id: "3",
    name: "Ariel Sheney",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGqlCirpc37AZYw9oimmhal5VGlc-Jc0Toi2M3aD65NTBtr_EO",
    spotifyId: "7BrWXBFjUPeU8RNS3KL98b",
  },
  {
    id: "4",
    name: "Azaya",
    image:
      "https://yt3.googleusercontent.com/YEK2jOBH0Z1kTT2mcqkeTeW8g4O5_IcaJr4gQ5auEYPEaFPLFa0PDcE6TU7voWoTasI5ZATsjP4=s900-c-k-c0x00ffffff-no-rj",
    spotifyId: "1L5ONbAnVL6ZC8uzHEy6d3",
  },
  {
    id: "5",
    name: "Bebi Philip",
    image:
      "https://yt3.googleusercontent.com/hEQoJt9N9769zjA5-r1cZbtxq2ADomorJ4FbOLrePAvH8QbWO4K0dMJdvsj4251h-sj1kOkxJA=s900-c-k-c0x00ffffff-no-rj",
    spotifyId: "4DPAkF8h2JInYO0wOLQhRt",
  },
  {
    id: "6",
    name: "Bébé Baya",
    image:
      "https://yt3.googleusercontent.com/ytc/AIf8zZTn_G9kJNiAaab01DobSvyyzbpDyNPOtBUZT1Oz=s900-c-k-c0x00ffffff-no-rj",
    spotifyId: "5zJCChWvZvn93HvWKNPvod",
  },
  {
    id: "7",
    name: "Credo",
    image:
      "https://afreekaplay.com/site/assets/images/cover/large/cover-Credo.jpg",
    spotifyId: "30Gjkjprc2OoADHa9LzBpL",
  },
  {
    id: "8",
    name: "DAARA J",
    image:
      "https://www.at1.tv/uploads/Video/Daaraj%20family%20jamono/Daaraj%20family%20-%20jamono%20copy%201.jpg",
    spotifyId: "16Lv8lRUe8IkFwbw8hxwmj",
  },
  {
    id: "9",
    name: "Dépotoir",
    image:
      "https://yt3.googleusercontent.com/qa4tkQpLtsljIK2M2NQHmE_8xzsjnUB-DIxmRhPF85nXLDkSLDDHRTKL5sVHAvC9d5jff5SEgX8=s900-c-k-c0x00ffffff-no-rj",
    spotifyId: "2S86I2YGXuaWYlFr7NJbvi",
  },
  {
    id: "10",
    name: "Djelykaba Bintou",
    image:
      "https://yt3.googleusercontent.com/7f1QHQIkILHB_1nSLUoku8nztpwIdBSgVmSAKU9PRn-27rlvna5IJep2cAlujUpwani8zkv2GHI=s900-c-k-c0x00ffffff-no-rj",
    spotifyId: "24YDQ10inOvt34cLgOW2LU",
  },
  {
    id: "11",
    name: "Diop Souare",
    image: "https://i.scdn.co/image/ab67616d00001e02086e2c1363ffa5836732edff",
    spotifyId: "1LE0g3GmBeg29HELbU67dj",
  },
  {
    id: "12",
    name: "DJ ARAFAT",
    image:
      "https://ichef.bbci.co.uk/news/640/cpsprodpb/6430/production/_105484652_fat004.jpg",
    spotifyId: "0ipkUaXENFuJxWcCFfXXQ8",
  },
  {
    id: "13",
    name: "Elow'n",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Elown_portrait_chacala.jpg/640px-Elown_portrait_chacala.jpg",
    spotifyId: "0Gzh0CiahP7loDQP9cn8wt",
  },
  {
    id: "14",
    name: "Espoir 2000",
    image:
      "https://cdns-images.dzcdn.net/images/artist/e5dbac28d13eee6d77509f64600ec60a/500x500.jpg",
    spotifyId: "67VD8ftPWN5UqSvZpEYsOt",
  },
  {
    id: "15",
    name: "Maître Hit Man",
    image: "https://i.scdn.co/image/ab6761610000e5eb7b09570cb10023304dfeb5b1",
    spotifyId: "7bpz5JcACECH3mJh0gfSCv",
  },
  {
    id: "16",
    name: "Mc Freshh",
    image:
      "https://actujeune.com/wp-content/uploads/2021/10/FB_IMG_1633187202712.jpg",
    spotifyId: "5hXPXD7LBL7amVkz9JYsFq",
  },
  {
    id: "17",
    name: "Maxim BK",
    image:
      "https://i.ytimg.com/vi/Uze0NWFlT8o/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHOBYAC0AWKAgwIABABGH8gEygUMA8=&rs=AOn4CLBHs0rVVvBjgDBy-N51qo60r04eww",
    spotifyId: "1fxJxqUdVhLCeHM1917Frb",
  },
  {
    id: "18",
    name: "Queen Rima",
    image:
      "https://yt3.googleusercontent.com/wSMnnWak4uBd0KPPPIUnkC9SJi77y7GF7XGPpJNcGdxMgKkFsQ8gL3B6sEK3RkZGntOlHFg7glk=s900-c-k-c0x00ffffff-no-rj",
    spotifyId: "3I22N8GBZvxTXxqJ10qlpo",
  },
  {
    id: "19",
    name: "Sidiki Diabaté",
    image: "https://i.scdn.co/image/ab67616d0000b2734981d2b4a76bb418adbb8906",
    spotifyId: "0ShXtJGjzmboEPVOvIdbQA",
  },
  {
    id: "20",
    name: "Soul Bang's",
    image:
      "https://s.rfi.fr/media/display/67b2fc52-157c-11ea-9e16-005056a99247/soul_bangs_ok_2_0.png",
    spotifyId: "6UehtY17AaBNwAKP3d97m8",
  },
  {
    id: "21",
    name: "Soulby THB",
    image:
      "https://images.genius.com/ce1a505b91c84d42e1b14a1c5c8f3006.1000x1000x1.png",
    spotifyId: "4gVcJDWI7f0P7ABGmJ8o8d",
  },
  {
    id: "22",
    name: "Tati Tati",
    image:
      "https://scontent.fyhu2-1.fna.fbcdn.net/v/t39.30808-6/404978636_893175222167091_4495657787256215651_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hUN2FenUYn8AX9gqs3P&_nc_ht=scontent.fyhu2-1.fna&oh=00_AfDimptMHcZjV9e0Fmz9O8bnw39ITCN6zwDC5fKRPV1yCQ&oe=65B23844",
    spotifyId: "6UbQBXHsnJ5IFA32tnt4r6",
  },
];

artistsData.sort(() => Math.random() - 0.5);

export default artistsData;
