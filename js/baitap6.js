// LUYỆN TẬP VỚI OBJECT(Cơ bản)
// LUYỆN TẬP VỚI OBJECT(Cơ bản)
// LUYỆN TẬP VỚI OBJECT(Cơ bản)

//Bài 1:
// Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi, địa chỉ và số điện thoại.
// Sau đó truy xuất các thuộc tính của đối tượng trên
// let fullFile = {
//     name: "le van a",
//     age: "20",
//     Address: "ha noi",
//     phoeNumber: "123456789",
// };
// console.log(fullFile.name);
// console.log(fullFile.age);
// console.log(fullFile.Address);
// console.log(fullFile.phoeNumber);



// Bài 2:
// Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây,
// sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự(value tự điền).
// Sau đó tạo mảng “students” để chứa chúng.Cuối cùng truy xuất
// các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”
// class student {
//     constructor(ID, name, gender, age, mark) {
//         this.ID = ID;
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//         this.mark = mark;
//     }
// }
// let students = [];
// let student1 = new student("2", "nguyen B", "nu", 100, 8);
// let student2 = new student("3", "nguyen C", "nam", 200, 9);
// students.push(student1, student2)
// console.log(students);



// Bài 3-4:
// Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm trung bình cao hơn
// và in ra toàn bộ thông tin của học sinh đó

// cách 1:
// class student {
//     ID = 1;
//     name = "nguyen van a";
//     gender = "nam";
//     age = 20;
//     mark = 7;
//     constructor(ID, name, gender, age, mark) {
//         this.ID = ID;
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//         this.mark = mark;
//     }
// }
// let students = [];
// let student1 = new student(2, "nguyen B", "nu", 19, 6);
// let student2 = new student(3, "nguyen thi C", "nu", 18, 5);
// let student3 = new student(4, "nguyen van D", "nam", 22, 10);
// let student4 = new student(5, "nguyen van D", "nam", 22, 8);
// students.push(student1, student2, student3, student4);
// console.log(students);

// let sum = 0;
// for (const key in students) {
//     sum += students[key].mark
// }
// if (sum / students.length - 1 > 7.5) {
//     console.log("xep loai KHA");
// } else if (sum / students.length - 1 > 5) {
//     console.log("xep loai TB");
// } else {
//     console.log("xep loai YEU");
// }
// console.log(`DTB cua ca lop la ${sum / students.length - 1}`);



// cach 2:
// class student {
//     ID = 1;
//     name = "nguyen van a";
//     gender = "nam";
//     age = 20;
//     mark = 7;
//     constructor(ID, name, gender, age, mark) {
//         this.ID = ID;
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//         this.mark = mark;
//         this.toString = function () {
//             return `ID: ${ID}, name: '${name}', gender: '${gender}', age: ${age}, mark: ${mark}`
//         }
//     }
// }
// let students = [];
// let student1 = new student(2, "nguyen B", "nu", 19, 6);
// let student2 = new student(3, "nguyen thi C", "nu", 18, 5);
// let student3 = new student(4, "nguyen van D", "nam", 22, 10);
// let student4 = new student(5, "nguyen van D", "nam", 22, 8);
// students.push(student1, student2, student3, student4);
// console.log(students);

// // tìm ra học sinh có điểm trung bình cao nhat
// let index = 0;
// let max = students[0].mark;
// for (i = 0; i < students.length; i++) {
//     if (students[i].mark > max) {
//         max = students[i].mark;
//         index = i;
//     }
// }
// console.log("hoc sinh co dtb cao nhat la: " + students[index]);