// // Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
// function generateUniqueId() {
//   return `_${Math.random().toString(36).slice(2, 9)}`;
// }

// // TODO: buatlah variabel yang menampung data orders
// // Variabel untuk menampung data orders
// let orders;

// // TODO: selesaikan fungsi addOrder
// function addOrder(customerName, items) {
//   const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
//   const newOrder = {
//     id: generateUniqueId(),
//     customerName,
//     items,
//     totalPrice,
//     status: "menunggu",
//   };
//   orders.push(newOrder);
// }

// // TODO: selesaikan fungsi updateOrderStatus
// function updateOrderStatus(orderId, status) {
//   const order = orders.findIndex((order) => order.id === orderId);
//   if (order) {
//     order.status = status;
//   }
// }

// // TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
// function calculateTotalRevenue() {
//   return orders
//     .filter((order) => order.status === "selesai")
//     .reduce((acc, order) => acc + order.totalPrice, 0);
// }

// // TODO: selesaikan fungsi deleteOrder
// function deleteOrder(id) {
//   orders = orders.filter((order) => order.id !== id);
// }

// export {
//   orders,
//   addOrder,
//   updateOrderStatus,
//   calculateTotalRevenue,
//   deleteOrder,
// };

// // Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
// function generateUniqueId() {
//   return `_${Math.random().toString(36).slice(2, 9)}`;
// }

// // Variabel untuk menampung data orders
// let orders = [];

// // Fungsi untuk menambah pesanan
// function addOrder(customerName, items) {
//   const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
//   const newOrder = {
//     id: generateUniqueId(),
//     customerName,
//     items,
//     totalPrice,
//     status: 'Menunggu',
//   };
//   orders.push(newOrder);
// }

// // Fungsi untuk memperbarui status pesanan
// function updateOrderStatus(orderId, status) {
//   const order = orders.find(order => order.id === orderId);
//   if (order) {
//     order.status = status;
//   }
// }

// // Fungsi untuk menghitung total pendapatan dari pesanan yang berstatus Selesai
// function calculateTotalRevenue() {
//   return orders
//     .filter(order => order.status === 'Selesai')
//     .reduce((acc, order) => acc + order.totalPrice, 0);
// }

// // Fungsi untuk menghapus pesanan
// function deleteOrder(id) {
//   orders = orders.filter(order => order.id !== id);
// }

// export {
//   orders,
//   addOrder,
//   updateOrderStatus,
//   calculateTotalRevenue,
//   deleteOrder,
// };

// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Inisialisasi variabel orders sebagai array kosong
let orders = [];

// Fungsi untuk menambahkan pesanan baru
function addOrder(customerName, items) {
  // Menghitung total harga berdasarkan item yang dipesan
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  // Membuat objek pesanan baru
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: "Menunggu", // Status default adalah 'Menunggu'
  };

  // Menambahkan pesanan baru ke array orders
  orders.push(newOrder);
}

// Fungsi untuk memperbarui status pesanan berdasarkan id
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang statusnya "Selesai"
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan berdasarkan id
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

// Ekspor modul
export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
