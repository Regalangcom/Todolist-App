// const dataGet = () => {
//   return [
//     {
//       id: 1,
//       title: "penjelasan apa itu OOP",
//       body: "object oriented programming atau OOP adalah sebuah konsep programming yang berorientasi pada data atau objek untuk mengatur desain program. Program yang sudah ada merupakan gabungan dari objek-objek yang saling berhubungan dan disusun menjadi satu class. Dengan begitu, OOP akan membantu developer menyelesaikan sejumlah masalah program yang cukup rumit.",
//       archive: false,
//       createdArt: "2022-04-14T04:27:34.572Z",
//     },
//     {
//       id: 2,
//       title: "Apa sih destrukturisasi itu",
//       body: "Destrukturisasi developer.mozilla.org , adalah membongkar isi object / array, sehingga menjadi sebuah variabel yang menentukan hasil dari object tersebut. atau kata lain adalah kebalikan dari strukturisasi / Destrukturisasi yang berarti memecah struktur menjadi beberapa elemen.",
//       archive: false,
//       createdArt: "2022-04-14T04:27:34.572Z",
//     },
//     {
//       id: 3,
//       title: "kegunaan dari destrukturisasi",
//       body: "Memperbaiki error eslint yang bikin merah-merah code editor kita,2.Lebih rapih dan lebih dapat dipakai untuk setiap data yg di butuhkan secara spesifik daripada menggunakan data.name namun itu semua tergantung pemakaian.3.Error Handling menggunakan default value dari variabel 4.Lebih jelas tipe data tersebut memiliki propeties apa saja.",
//       archive: false,
//       createdArt: "2022-04-14T04:27:34.572Z",
//     },
//   ];
// };

// const showFormattedDates = (date) => {
//   const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric"
//   }
//   return new Date(date).toLocaleDateString("id-ID", options)
// }

// export { dataGet, showFormattedDates };

const dataGet = () => {
  return [
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 2,
      title: "Functional Component",
      body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 3,
      title: "Modularization",
      body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 4,
      title: "Lifecycle",
      body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 5,
      title: "ESM",
      body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 6,
      title: "Module Bundler",
      body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
  ];
};

const showFormattedDates = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { dataGet, showFormattedDates };
