import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit{

  userName: string = '';
  phoneNumber: string = '';
  email: string = '';
  contactContent: string = 'Liên hệ';

  constructor(
    private toastr: ToastrService
    ) {
  }
  ngOnInit() {
    
  }

  register() {
    if (this.checkValidate()) {
      this.toastr.success("Đã gửi thông tin liên hệ");
    }
  }

  checkValidate() {
    if (this.userName.length == 0) 
    {
      this.toastr.warning("Vui lòng nhập Họ tên!");
      return false;
    }
    else if (!this.phoneNumberCheckValidate(this.phoneNumber)) {
      this.toastr.warning("Số điện thoại của Quý khách không hợp lệ!");
      return false;
    }
    else if (!this.emailValidate(this.email)) {
      this.toastr.warning("Email của Quý khách không hợp lệ!");
      return false;
    }
    else return true;
  }

  phoneNumberCheckValidate(phoneNumber?: string) {
    const PHONE_NUMBER_VALIDATE = /(^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$)|(^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$)|(^\(?([0-9]{3}|[0-9]{4})\)?([0-9]{3}|[0-9]{4})?([0-9]{3}|[0-9]{4})$)/gm;
    return !phoneNumber || (phoneNumber.length > 7 && phoneNumber.length < 13 && PHONE_NUMBER_VALIDATE.test(phoneNumber));
  }

  emailValidate(email: string) {
    const NUMBER_REG = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return NUMBER_REG.test(email);
  }
}

