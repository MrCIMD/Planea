import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <div
      [class]="'shadow ' + type"
      [ngStyle]="{
        width: size + 'rem',
        height: size + 'rem',
        'background-color': color
      }"
    >
      <p class="text" [ngStyle]="{ 'font-size': getFontSize(size) + 'rem' }">
        {{ name | avatar }}
      </p>
    </div>
  `,
  styles: [
    `
      div {
        display: inline-block;
      }
      .square,
      .circle {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .square {
        border-radius: 3px;
      }
      .circle {
        border-radius: 50%;
      }
      .text {
        color: #fff;
        font-weight: bold;
        margin: 0;
      }
    `,
  ],
})
export class AvatarComponent implements OnInit {
  @Input() size: number = 3.5;
  @Input() type: 'circle' | 'square' = 'square';
  @Input() color: string = this.getRandomColor();
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}

  private getRandomColor(): string {
    const letters = [
      '#007bff',
      '#6610f2',
      '#6f42c1',
      '#e83e8c',
      '#dc3545',
      '#fd7e14',
      '#ffc107',
      '#28a745',
      '#20c997',
      '#17a2b8',
      '#6c757d',
      '#343a40',
      '#007bff',
      '#6c757d',
      '#28a745',
      '#17a2b8',
      '#ffc107',
      '#dc3545',
      '#343a40',
    ];
    return letters[Math.floor(Math.random() * letters.length)];
  }

  public getFontSize(size): number {
    return size * 0.4;
  }
}
