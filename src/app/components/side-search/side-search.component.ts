import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-side-search',
  templateUrl: './side-search.component.html',
  styleUrls: ['./side-search.component.scss'],
})
export class SideSearchComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  searchForm = this.fb.group({
    keys: ['', [Validators.required]],
  });
  search = faSearch;
  searchByKeys(keys: any) {
    console.log(keys);
  }
  ngOnInit(): void {
    console.log(this.searchForm);
  }
}
