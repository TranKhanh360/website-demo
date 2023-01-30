function Out(){
    var comment = {hoten: "", id: "", ph: "", em: "", tyCus: "", hd: "",
        ptext: "",

        add: function(){
            confirm(
                "Họ và tên: " + this.hoten + "\n" +
                "Mã thẻ: " +this.id + "\n" +
                "số điện thoại: " + this.ph + "\n" +
                "email: " + this.em + "\n" +
                "loại khách hàng: " + this.tyCus + "\n" +
                "Mã Hóa Đơn: " + this.hd + "\n" +
                "Nội dung góp ý:  \n" + 
                this.ptext  
            );
        }
    }

    comment.hoten = document.getElementById("name").value;
    comment.id = document.getElementById("cardID").value;
    comment.ph = document.getElementById("phoneNumber").value;
    comment.em = document.getElementById("email").value;
    comment.tyCus = document.getElementById("typeofCustom").value;
    comment.hd = document.getElementById("maHD").value;
    comment.ptext = document.getElementById("textare").value;

    comment.add();
}

document.getElementById("sub").onclick = function(){
    Out();
}