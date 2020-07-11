import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { switchMap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal$;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.animal$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const name = params.get('name');
        return this.afs.collection('animals', ref => ref.where('name', '==', name).limit(1))
          .valueChanges()
          .pipe(
            flatMap(animal => animal)
          );
      })
    );
  }
}
