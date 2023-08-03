// LUYỆN TẬP VỚI OBJECT(Tổng hợp)
// bai 1:
// bai 1:
// Cho mảng như sau:
// let products = [
//     { id: 1, name: "Milk", count: 100 },
//     { id: 2, name: "Yakult", count: 100 },
//     { id: 3, name: "Butter", count: 100 },
// ];

// // Thêm đối tượng có các thuộc tính tương tự các đối tượng có trong mảng “products”
// let add = { id: 4, name: "cup", count: 100 };
// products.push(add);
// console.log(products);

// // Xóa đối tượng có id là 2
// products.splice(1, 1);
// console.log(products);

// // Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
// products[1].count = 0;
// console.log(products);
// // Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không ?
// // Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”
// // let n = prompt("nhap tu khoa can tim");
// let flag = true;
// for (let i = 0; i < products.length; i++) {
//     if (products[i].name == n) {
//         console.log(products[i]);
//         flag = false;
//     }
// }
// if (flag) {
//     console.log("khong tim thay");
// }



// bai 2:
// bai 2:
// Tạo một class Dog có những thuộc tính:
// Tên và tốc độ di chuyển
// Có khả năng thực hiện sủa
// Có khả năng bắt được mèo nếu tốc độ của chó lớn hơn
// Tạo class Cat có những thuộc tính sau:
// Tên và tốc dộ di chuyển
// class dog {
//     constructor(name, speed1) {
//         this.name = name;
//         this.speed1 = speed1;
//     }
//     move = () => {
//         console.log("gâu");
//     }
//     batMeo = (value) => {
//         if (this.speed1 > value.speed2) {
//             console.log("co kha nang bat duoc meo");
//         } else {
//             console.log("khong bat duoc");
//         }
//     }
// }
// class cat {
//     constructor(name, speed2) {
//         this.name = name;
//         this.speed2 = speed2;
//     }
//     move = () => {
//         console.log("meo");
//     }

// }
// let meo = new cat("meo", 40)
// let cho = new dog("cho", 60)
// cho.batMeo(meo)



// Bài 3:
// Tạo một đối tượng User chứa thông tin người dùng bao gồm: tên, email, địa chỉ, điện thoại.
// Tạo class Admin kế thừa từ class User.
// Thêm thuộc tính “role” vào 2 đối tượng Admin(value = 1) và User(value = 0)
// Tạo danh sách người dùng(dạng mảng) và thêm vào 3 user, 1 admin
// Xóa người dùng thông qua tên của họ(không xóa được admin)
// Sửa thông tin người dùng thông qua id(không sửa được thông tin admin)
// Thêm 1 nick admin vào mảng danh sách người dùng.
// Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
// class User {
//     constructor(id, name, email, Address, phone) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.Address = Address;
//         this.phone = phone;
//         this.role = 0;
//     }
// }
// class Admin extends User {
//     constructor(id, name, email, Address, phone) {
//         super(id, name, email, Address, phone)
//         this.role = 1;
//     }
// }
// //Tạo danh sách người dùng (dạng mảng) và thêm vào 3 user, 1 admin
// let danhSach = [];
// let User1 = new User(1, "A", "leA@gmail.com", "hanoi", 111);
// let User2 = new User(2, "B", "leB@gmail.com", "hcm", 222);
// let User3 = new User(3, "C", "leC@gmail.com", "danang", 333);
// let Admin1 = new Admin(4, "D", "leD@gmail.com", "cantho", 444);
// let Admin2 = new Admin(5, "E", "leE@gmail.com", "hue", 555);
// danhSach.push(User1, User2, User3, Admin1, Admin2);
// console.log(danhSach);

// //Xóa người dùng thông qua tên của họ (không xóa được admin)
// let tencanxoa = prompt("nhap ten can xoa");
// let flag = false;
// for (i = 0; i < danhSach.length; i++) {
//     if (danhSach[i].name == tencanxoa && danhSach[i].role != 1) {
//         flag = true;
//         danhSach.splice(i, 1)
//     }
// }
// if (!flag) {
//     console.log("khong xoa duoc");
// }
// console.log(danhSach);

// // Sửa thông tin người dùng thông qua id (không sửa được thông tin admin)
// let n = +prompt("nhap id can sua: ")
// for (i = 0; i < danhSach.length; i++) {
//     if (danhSach[i].id == n && danhSach[i].role !== 1) {
//         danhSach[i].name = prompt("nhap ten moi");
//         danhSach[i].email = prompt("nhap email moi");
//         danhSach[i].Address = prompt("nhap Address moi");
//         danhSach[i].phone = prompt("nhap phone moi");
//     }
// }

// //Thêm 1 nick admin vào mảng danh sách người dùng. Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
// for (let i = 0; i < danhSach.length; i++) {
//     if (danhSach[i].role == 1) {
//         console.log(danhSach[i]);
//     }
// }



// Bài 4:
// Tạo dữ liệu để có thể in ra nội dung dưới đây:
// 1. HTML Complete: false
// 2. CSS Complete: false
// 3. Basic Complete: false
// 4. Node Complete: false
// 5. Git Complete: false
// Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
// C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành. Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên
// R – In ra toàn bộ các khóa học theo mẫu trên
// U – Hỏi người dùng vị trí update khóa học.Nếu tồn tại cho người dùng nhập vào tên muốn update và trạng thái mới.Update xong in lại như trên
// D – Hỏi người dùng vị trị của khóa học muốn xóa.Tiến hành xóa và in ra như trên
// E – Biến chương trình thành vòng lặp vĩnh cửu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”


// idtutang- bắt đầu là 1, mk let new cái khóa học thứ nhất,
// chuyển cái html vào thì ngay lập tức thằng khóa học được gọi đi thực hiện,
// thì thằng id của nó lấy bằng 1, thì cái thằng idtutang ++ lên bằng 2.
// let idtutang = 1  //biến toàn cục giúp tự tăng id
// class khoahoc {
//     id = idtutang++; // gắn id bang gia tri bien toan cuc va tang gia tri toan cuc len 1, để gán cho khóa học sinh sau
//     hoanthanh = false;  //mac dinh luc moi tao khao hoc, thi trang thai chua hoan thanh (false)
//     constructor(ten) {  // truyen vao ten cua khoa hoc
//         this.ten = ten
//     }
// }
// let kh1 = new khoahoc("html")  //{id: 1, ten: "html", hoanthanh: false} và idtutang: 2
// let kh2 = new khoahoc("css")   //{id: 2, ten: "css", hoanthanh: false} và idtutang: 3
// let kh3 = new khoahoc("basic")
// let kh4 = new khoahoc("node")
// let kh5 = new khoahoc("git")
// let mangkhoahoc = [kh1, kh2, kh3, kh4, kh5]  // mảng lưu các khóa học để làm việc

// let giatrinhap;
// //Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành
// while (true) {   // thấy chữ "Biến chương trình thành vòng lặp vĩnh cứu" , thì nên sử dụng vòng lặp while(true).
//     giatrinhap = prompt("hay nhap C/R/U/D/E")  // Cho người dùng nhập vào 5 chữ cái C / R / U / D / E.
//     if (giatrinhap == "C") {
//         let tenkhoahocmoi = prompt("nhap ten khoa hoc moi") // nhập tên khóa học mới để sinh ra khóa học mới vì id đã tự tăng, con "hoanthanh" lúc đầu đã mặc định là false.
//         let khoahocmoi = new khoahoc(tenkhoahocmoi)
//         // Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên
//         mangkhoahoc.push(khoahocmoi)
//         console.log(mangkhoahoc);
//     } else if (giatrinhap == "R") { // R – In ra toàn bộ các khóa học theo mẫu trên
//         console.log(mangkhoahoc);
//     } else if (giatrinhap = "U") {
//         let vitrisuakhoahoc = Number(prompt("nhap vi tri khoa hoc muon sua"))    // U – Hỏi người dùng vị trí muốn update khóa học.
//         if (vitrisuakhoahoc < 0 || vitrisuakhoahoc > mangkhoahoc.length - 1) {   // Nếu tồn tại thì
//             console.log("khong co vi tri day trong mảng khóa học");
//         } else {  //thì cho người dùng nhập vào tên muốn update và trạng thái mới.
//             let tenmoi = prompt("nhap ten moi cho khoa hoc")
//             let trangthaihoanthanhmoi;
//             mangkhoahoc[vitrisuakhoahoc].ten = tenmoi  //update
//             do {
//                 trangthaihoanthanhmoi = prompt("nhap trang thai moi cho khoa hoc tu 0-1")
//             } while (trangthaihoanthanhmoi != 0 && trangthaihoanthanhmoi != 1)
//             if (trangthaihoanthanhmoi) {
//                 mangkhoahoc[vitrisuakhoahoc].hoanthanh = true
//             } else {
//                 mangkhoahoc[vitrisuakhoahoc].hoanthanh = false
//             }
//             console.log(mangkhoahoc); // in ra mangkhoahoc
//         }
//     } else if (giatrinhap == "D") {  // D – Hỏi người dùng vị trị của khóa học muốn xóa.Tiến hành xóa và in ra như trên
//         let vitrimuonxoa = prompt("nhap vi tri khoa hoc muon xoa")
//         if (vitrimuonxoa < 0 || vitrimuonxoa > mangkhoahoc.length - 1) {
//             console.log("vi tri nay khong hop le");
//         } else {
//             mangkhoahoc.splice(vitrimuonxoa, 1)
//             console.log(mangkhoahoc);
//         }
//     } else if (giatrinhap == "E" || giatrinhap == undefined) {
//         console.log("thank you!");
//         break;  // tránh trường hợp hộp thoại aleart làm phiền, nên break để exit, hoặc undefined để exit.
//     }
// }



// Bài 5:
// Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
// C – Cho người dùng nhập vào tên sản phẩm muốn mua.Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
// R – In ra toàn bộ các sản phẩm trong stores và carts
// U – Hỏi người dùng vị trí update trong carts.Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo.Update xong in lại stores và carts
// D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts.Tiến hành xóa và in ra lại
// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
// Cho mảng như sau:
// let stores =
//     [{ id: 1, name: "Milk", count: 100 },
//     { id: 2, name: "Yakult", count: 100 },
//     { id: 3, name: "Butter", count: 100, }];
// let carts = [];

// while (true) {
//     // Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
//     let giaTriNhap = prompt("Nhap C/R/U/D/E")

//     // C – Cho người dùng nhập vào tên sản phẩm muốn mua.
//     if (giaTriNhap == "C") {
//         let tenSanPhamMuonMua = prompt("Nhap ten san pham muon mua")

//         // tìm trước hai vị trí của sản phẩm muốn mua ở trong hai mảng để lát nữa tăng giảm số lượng còn biết tăng giảm vào đâu
//         let viTriTrongCart = carts.findIndex(value => value.name == tenSanPhamMuonMua)
//         let viTriTrongStore = stores.findIndex(value => value.name == tenSanPhamMuonMua)

//         // Nếu tìm thấy sản phẩm đã được mua ở trong cart rồi thì bây giờ tăng số lượng của sản phẩm đó trong cart lên 1 và đương nhiêm là
//         // phải giảm sản phẩm đó trong cửa hàng(store) đi 1
//         if (viTriTrongCart >= 0) {
//             carts[viTriTrongCart].count++
//             stores[viTriTrongStore].count--
//         } else { // ngược lại nếu sản phẩm muốn mua chưa từng được mua(ko tìm thấy trong cart) thì thêm sản phẩm đó vào cart
//             // thông tin cần thêm là {id, name, count: 1} count phải là 1 vì đây là mới mua lần đầu
//             // không được carts.push({stores[viTriTrongStore]) vì như vậy sẽ là mua hết sạch sản phẩm đó trong cửa hàng
//             if (viTriTrongStore >= 0) {
//                 carts.push({ id: stores[viTriTrongStore].id, name: stores[viTriTrongStore].name, count: 1 })
//                 stores[viTriTrongStore].count--
//                 console.log("Store sau mua: ", stores);
//                 console.log("Cart sau mua: ", carts);
//             } else {
//                 console.log("Khong co san pham nay trong cua hang");
//             }
//         }

//     } else if (giaTriNhap == "R") {
//         console.log("Stores: ", stores);
//         console.log("Carts: ", carts);
//     } else if (giaTriNhap == "U") {
//         let viTriUpdateTrongCart;
//         // dùng do while để bắt người dùng nhập đúng vị trí hợp lệ
//         do {
//             viTriUpdateTrongCart = prompt("Nhap vi tri muon sua trong carts")
//         } while (viTriUpdateTrongCart < 0 || viTriUpdateTrongCart > carts.length - 1)

//         // sau khi nhập được vị trí rồi thì cho nhập số lượng muốn thay đổi
//         let soLuongMuonThayDoi = Number(prompt("Nhap so luong muon thay doi"))

//         // tìm vị trí của sản phẩm trong cửa hàng(store), tên sản phẩm muốn update sẽ bằng  carts[viTriUpdateTrongCart].name
//         // dùng findIndex để tìm coi sai phẩm đó nằm đâu trong cửa hàng
//         let viTriCuaSanPhamTrongStore = stores.findIndex(value => value.name == carts[viTriUpdateTrongCart].name)

//         //  sau khi tìm thấy sản phẩm nằm ở đâu rồi thì chỉnh số lượng trong cửa hàng và trong giỏ hàng, sẽ xảy ra hai trường hợp
//         // nếu số lượng muốn đổi lớn hơn số lượng muốn mua lúc đầu thì phải giảm bớt trong kho
//         if (soLuongMuonThayDoi > carts[viTriUpdateTrongCart].count) {
//             stores[viTriCuaSanPhamTrongStore].count -= (soLuongMuonThayDoi - carts[viTriUpdateTrongCart].count)
//             carts[viTriUpdateTrongCart].count = soLuongMuonThayDoi
//         } else { // ngược lại số lượng muốn đổi mà ít hơn thì phải trả lại số lượng thừa cho kho
//             stores[viTriCuaSanPhamTrongStore].count += (carts[viTriUpdateTrongCart].count - soLuongMuonThayDoi)
//             carts[viTriUpdateTrongCart].count = soLuongMuonThayDoi
//         }
//         console.log("Store sau update: ", stores);
//         console.log("Cart sau update: ", carts);
//     } else if (giaTriNhap == "D") {
//         let viTriXoaTrongCart;
//         // dùng do-while để tìm đúng vị trí cần xóa
//         do {
//             viTriXoaTrongCart = prompt("Nhap vi tri muon sua trong carts")
//         } while (viTriXoaTrongCart < 0 || viTriXoaTrongCart > carts.length - 1)

//         // dùng hàm splice để xóa, tham số đầu tiên là vị trí cần xóa, tham số thứ 2 là mình muốn xóa mấy phần tử tính từ vị trí bắt đầu
//         carts.splice(viTriXoaTrongCart, 1)
//         console.log("Cart sau xoa: ", carts);
//     } else if (giaTriNhap == "E" || giaTriNhap == undefined) {
//         break
//     }
// }