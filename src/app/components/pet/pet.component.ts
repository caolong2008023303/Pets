import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Owner } from '../../models/owner.model';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  processedData: any;
  catsOfMaleOwner: any = [];
  catsOfFemaleOwner: any = [];

  // add this custom comparator for keyvalue pipe
  keepOriginalOrder = (a, b) => a.key;

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petService.getPets().subscribe(res => {
      const owners = res as Owner[];
      owners.forEach((owner) => {
        if (owner.gender == 'Male') {
          if (owner.pets != null) {
            owner.pets.forEach((pet) => {
              if (pet.type == 'Cat') {
                this.catsOfMaleOwner.push(pet.name);
              }
            });
          }
        }
        else {
          if (owner.pets != null) {
            owner.pets.forEach((pet) => {
              if (pet.type == 'Cat') {
                this.catsOfFemaleOwner.push(pet.name);
              }
            });
          }
        }
      });

      this.processedData = Object.assign(
        {},
        { 'Male': this.catsOfMaleOwner.sort() },
        { 'Female': this.catsOfFemaleOwner.sort() }
      );
    });
  }

}
