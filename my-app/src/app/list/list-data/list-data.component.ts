import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-data',
  template: `
    <div class="list__container">
      <div class="list_data">
        <p *ngFor="let item of postsData">
          {{ item.id }} - {{ item.title }} - {{ item.description }}
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent {
  @Input() postsData: any = [];
}
