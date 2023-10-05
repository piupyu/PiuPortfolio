import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface WorkExperience {
  title: string;
  timeframe: string;
  description: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() workExperiences: WorkExperience[] = [];
  @Input() isActive: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  selectedWorkIndex: number = 0;
  selectedWork?: WorkExperience;

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  next(): void {
    this.selectedWorkIndex = (this.selectedWorkIndex + 1) % this.workExperiences.length;
    this.updateSelectedWork();
  }

  previous(): void {
    this.selectedWorkIndex = (this.selectedWorkIndex - 1 + this.workExperiences.length) % this.workExperiences.length;
    this.updateSelectedWork();
  }

  private updateSelectedWork(): void {
    this.selectedWork = this.workExperiences[this.selectedWorkIndex];
  }

  @Input() set initialIndex(value: number) {
    this.selectedWorkIndex = value;
    this.updateSelectedWork();
  }
}
