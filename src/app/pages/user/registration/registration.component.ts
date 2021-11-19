import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
// import {UiService} from '../../../services/ui.service';
import {NgxSpinnerService} from 'ngx-spinner';
// import {UtilsService} from '../../../services/utils.service';
// import {BulkSmsService} from 'src/app/services/bulk-sms.service';
// import {PhoneVerificationDialogComponent} from '../../../shared/lazy-component/phone-verification-dialog/phone-verification-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Select} from '../../../interfaces/select';
import {GENDERS} from '../../../core/utils/app-data';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  public dataForm: FormGroup;
  isLoading = false;

  isHiddenPass = true;
  isHiddenConPass = true;

  // OTP
  generatedOtpCode: string;

  // Static Data
  genders: Select[] = GENDERS;

  constructor(
    public userService: UserService,
    // private uiService: UiService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    // public utilsService: UtilsService,
    // private bulkSmsService: BulkSmsService,
    // public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.spinner.hide();
    this.dataForm = this.fb.group({
      phoneNo: [null, Validators.required],
      email: [null, [Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      fullName: [null, Validators.required],
      gender: [null, Validators.required],
      agree: [true, Validators.required],
    });
  }


  onSubmitForm() {
    console.log("button clicked");
    // if (this.dataForm.invalid) {
    //   this.dataForm.markAllAsTouched();
    //   // this.uiService.warn('Please complete all the required field');
    //   return;
    // }
    //
    // if (this.dataForm.value.password !== this.dataForm.value.confirmPassword) {
    //   // this.uiService.warn('Password and confirm password not matched');
    //   return;
    // }

    // if (!this.utilsService.checkValidPhone(this.dataForm.value.phoneNo) || this.dataForm.value.phoneNo.length !== 11) {
    //   this.dataForm.get('phoneNo').setErrors({invalid: true});
    //   this.uiService.warn('Please enter a valid 11 digit phone no');
    //   return;
    // }
    //
    // if (this.dataForm.value.password.length < 6) {
    //   this.uiService.warn('Password must be at lest 6 characters!');
    //   return;
    // }

    this.isLoading = true;
    this.spinner.show();

    // console.log(this.dataForm);

    const registrationData = {
      fullName: this.dataForm.value.fullName,
      phoneNo: this.dataForm.value.phoneNo,
      email: this.dataForm.value.email,
      password: this.dataForm.value.password,
      gender: this.dataForm.value.gender,
      isPhoneVerified: true,
      registrationType: 'phone',
      isEmailVerified: false,
      hasAccess: true,
      username: this.dataForm.value.phoneNo,
    };
    console.log(registrationData);
    this.userService.userRegistration(registrationData);

  }


  /**
   * HTTP REQ HANDLE
   */

  /**
   * BULK SMS
   */
  // private sentSingleBulkSms(phoneNo: string, message: string) {
  //   this.bulkSmsService.sentSingleBulkSms(phoneNo, message)
  //     .subscribe(res => {
  //       this.isLoading = false;
  //       this.spinner.hide();
  //       if (res.success) {
  //         this.openComponentDialog();
  //       } else {
  //         this.isLoading = false;
  //         this.spinner.hide();
  //         this.uiService.wrong('Something went wrong! Please try again.');
  //       }
  //     }, error => {
  //       this.isLoading = false;
  //       this.uiService.wrong('Something went wrong! Please try again.');
  //       console.log(error);
  //       this.spinner.hide();
  //     });
  // }
  //
  // private checkAndGetUserByPhone(phoneNo: string) {
  //   this.userService.checkAndGetUserByPhone(phoneNo)
  //     .subscribe(res => {
  //       const status = res.data;
  //       if (!status) {
  //         // Create Message Data
  //         const finalPhoneNo = '88' + this.dataForm.value.phoneNo;
  //         this.generatedOtpCode = this.utilsService.getRandomOtpCode6();
  //         const message = this.generatedOtpCode + ' is your OTP (One-Time Password) for E-medilife. OTP will expire in 5 minutes.';
  //         // Sent Message
  //         this.sentSingleBulkSms(finalPhoneNo, message);
  //       } else {
  //         this.isLoading = false;
  //         this.spinner.hide();
  //         this.uiService.warn('This phone no is already registered');
  //         this.dataForm.get('phoneNo').setErrors({invalid: true});
  //         this.dataForm.get('phoneNo').markAsTouched({onlySelf: true});
  //       }
  //     }, error => {
  //       this.isLoading = false;
  //       this.spinner.hide();
  //       console.log(error);
  //     });
  // }
  //
  //
  // /**
  //  *  COMPONENT DIALOG
  //  */
  // public openComponentDialog() {
  //   const mData = {
  //     otpCode: this.generatedOtpCode,
  //     phoneNo: this.dataForm.value.phoneNo
  //   };
  //   const dialogRef = this.dialog.open(PhoneVerificationDialogComponent, {
  //     data: mData,
  //     panelClass: ['theme-dialog', 'dialog-no-radius', 'small-padding-sm'],
  //     width: '95%',
  //     maxWidth: '400px',
  //     autoFocus: false,
  //     disableClose: true,
  //   });
  //
  //   dialogRef.afterClosed().subscribe(dialogResult => {
  //     if (dialogResult.otpMatched) {
  //       this.spinner.show();
  //       const registrationData = {
  //         fullName: this.dataForm.value.fullName,
  //         phoneNo: this.dataForm.value.phoneNo,
  //         email: this.dataForm.value.email,
  //         password: this.dataForm.value.password,
  //         gender: this.dataForm.value.gender,
  //         isPhoneVerified: true,
  //         registrationType: 'phone',
  //         isEmailVerified: false,
  //         hasAccess: true,
  //         username: this.dataForm.value.phoneNo,
  //       };
  //       this.userService.userRegistration(registrationData);
  //     }
  //   });
  // }


  ngOnDestroy() {

  }


}
