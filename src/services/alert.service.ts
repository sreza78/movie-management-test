import { Injectable } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private notificationService: NotificationService){ }

  public showDefault(msg : string): void {
    this.notificationService.show({
      content: msg,
      hideAfter: 2000,
      position: { horizontal: "center", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "none", icon: false },
      cssClass: "alert"
    });
  }
  public showSuccess(msg : string): void {
    this.notificationService.show({
      content: msg,
      hideAfter: 2000,
      position: { horizontal: "center", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "success", icon: true },
      cssClass: "alert"
    });
  }
  public showWarning(msg : string): void {
    this.notificationService.show({
      content: msg,
      hideAfter: 2000,
      position: { horizontal: "center", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "warning", icon: true },
      cssClass: "alert"
    });
  }
  public showInfo(msg : string): void {
    this.notificationService.show({
      content: msg,
      hideAfter: 2000,
      position: { horizontal: "center", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "info", icon: true },
      cssClass: "alert"
    });
  }
  public showError(msg : string): void {
    this.notificationService.show({
      content: msg,
      hideAfter: 2000,
      position: { horizontal: "center", vertical: "bottom" },
      animation: { type: "fade", duration: 400 },
      type: { style: "error", icon: true },
      cssClass: "alert"
    });
  }
}
