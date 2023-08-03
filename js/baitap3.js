// Phát triển ứng dụng nhỏ mô phỏng câu chuyện Adam và Eva
class Apple {
    weight = 10
}
class Humann {
    constructor(name, gender, weight) {
        this.name = name
        this.gender = gender
        this.weight = weight
        this.Noi = () => {
            console.log(`hello word`);
        }
        this.An = (tao) => {
            if (tao.weight > 0) {
                tao.weight--
                this.weight++
                console.log(`da an tao`);
            }
        }
        this.khoiLuongTao = (tao) => {
            console.log(tao.weight);
        }
        this.DoiTuongKhac = (value) => {
            console.log(value.name, value.gender, value.weight);
        }
    }
}
let quatao = new Apple()
let nguoi = new Humann(`ADAM`, `Nam`, 20)
let nguoi1 = new Humann(`EVA`, `Nu`, 30)
nguoi.Noi()
nguoi1.An(quatao)
nguoi1.khoiLuongTao(quatao)
nguoi1.An(quatao)
nguoi1.khoiLuongTao(quatao)
nguoi.DoiTuongKhac(nguoi1)