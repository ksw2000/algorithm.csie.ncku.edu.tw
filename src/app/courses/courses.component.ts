import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CoursesData, dataMap } from './courses.data';
import { CoursesService } from './coruses.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FormsModule],
  providers: [CoursesService],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  // binding with text input
  inputStudentID: string = "";

  // show loading animation
  checkingLogin: boolean = true;
  loginError: string = "";

  // check the login status
  isLogin: boolean = false;

  // params for routing 
  id: string = "";

  // courses data, loading when ngOnInit
  dataList: CoursesData[] = [];

  // loading the data if this.id is not empty when ngOnInit
  data: CoursesData | null = null;

  constructor(private route: ActivatedRoute, private services: CoursesService) { }

  login() {
    this.services.pushLogin({
      student_id: this.inputStudentID
    }).subscribe((res) => {
      this.loginError = res.err
      this.isLogin = (this.loginError === "")
    });
  }

  checkLogin() {
    this.checkingLogin = true;
    this.services.getLoginStatus()
      .subscribe((data) => {
        this.isLogin = data.is;
        this.checkingLogin = false;
        console.log("this.isLogin", this.isLogin);
      });
  }

  keyEnter(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.login();
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? ""

    // check login
    this.checkLogin()

    // load courses data when isLogin
    dataMap.forEach((v, key) => {
      v.key = key;
      this.dataList.push(v);
    });
    this.dataList.sort((a, b) => {
      return b.year - a.year;
    });

    // if id is non-null, load coursesData
    if (this.id !== "" && dataMap.has(this.id)) {
      this.data = dataMap.get(this.id) ?? null;
      if (this.data !== null) {
        this.services.loadLectureFiles(this.id).subscribe(files => this.data!.lectureFiles = files);
        this.services.loadCoursesFiles(this.id).subscribe(files => this.data!.coursesFile = files);
      }
    }
  }
}
