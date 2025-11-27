import {Component, OnInit} from '@angular/core';
import {Property} from '../../../core/services/property';
import {Router} from '@angular/router';

@Component({
  selector: 'app-property-list',
  imports: [],
  templateUrl: './property-list.html',
  styleUrl: './property-list.scss',
  standalone: true
})
export class PropertyList implements OnInit {
  properties: any[] = [];
  loading = true;

  constructor(private service: Property, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.service.getProperties().subscribe({
      next: (res: any) => {
        this.properties = res.data || res;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  goAdd() {
    this.router.navigate(['/properties/add']);
  }
}
