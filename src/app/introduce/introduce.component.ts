import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from '../_service/email.service';

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
  formData!: FormGroup;

  constructor(
    private toastr: ToastrService,
    private builder: FormBuilder,
    private _sendEmailService: EmailService
    ) {
  }
  ngOnInit() {
    document.title = "Giới thiệu - BĐS toàn cầu";
  }

  onSubmit() {
    this._sendEmailService.sendEmail(this.userName, this.email, this.contactContent).subscribe(
      response => {
        console.log('Email sent successfully!');
      },
      error => {
        console.log('Error sending email:', error);
      }
    );
  }

  register() {
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

