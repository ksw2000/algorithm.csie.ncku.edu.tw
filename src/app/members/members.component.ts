import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { members, Member, MemberType } from './members.data';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  masterGraduated: Member[] = [];
  master: Member[] = [];
  phdGraduated: Member[] = [];
  phd: Member[] = [];
  undergraduate: Member[] = [];

  ngOnInit(): void {
    members.sort((a, b) => {
      return a.year - b.year;
    });

    for (let i = 0; i < members.length; i++) {
      if (members[i].type == MemberType.master) {
        if (members[i].graduated) {
          this.masterGraduated.push(members[i]);
        } else {
          this.master.push(members[i]);
        }
      } else if (members[i].type == MemberType.phd) {
        if (members[i].graduated) {
          this.phdGraduated.push(members[i]);
        } else {
          this.phd.push(members[i]);
        }
      }else if(members[i].type == MemberType.undergraduate){
        this.undergraduate.push(members[i]);
      }
    }
  }
}

