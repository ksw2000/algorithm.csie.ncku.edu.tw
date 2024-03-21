import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

// 注意 typescript 中 Date(年, 月從0開始, 日)
export class HomeComponent {
  data: {
    date: Date,
    contents: string[]
  }[] = [{
    date: new Date(2017, 1, 2),
    contents: [
      "賀！葉泰麟學長 榮獲博士學位。",
      "Congratulation to Tai-Ling Ye! He received the PhD degree in Computer Science and Information Engineering from National Cheng Kung University, Tainan, Taiwan."
    ]
  }, {
    date: new Date(2017, 1, 2),
    contents: [
      "賀！魏嘉成學長 榮獲博士學位。",
      "Congratulation to Chia-Chen Wei! He received the PhD degree in Computer Science and Information Engineering from National Cheng Kung University, Tainan, Taiwan."
    ]
  }, {
    date: new Date(2016, 6, 20),
    contents: [
      "賀！洪婉馨學姐 榮獲博士學位。",
      "Congratulation to Won-Sin Hong! She received the PhD degree in Computer Science and Information Engineering from National Cheng Kung University, Tainan, Taiwan."
    ]
  }, {
    date: new Date(2015, 4, 26),
    contents: [
      "賀！鄭嘉文學長 榮獲博士學位。",
      "Congratulation to Chia-Wen Cheng! He received the PhD degree in Computer Science and Information Engineering from National Cheng Kung University, Tainan, Taiwan."
    ]
  }, {
    date: new Date(2014, 4, 6),
    contents: [
      "賀！陳俊安學長 榮獲博士學位。",
      "Congratulation to Chun-An Chen! He received the PhD degree in Computer Science and Information Engineering from National Cheng Kung University, Tainan, Taiwan."
    ]
  }, {
    date: new Date(2010, 6, 22),
    contents: [
      "賀！黃昭文學長 榮獲博士學位。",
      "Congratulation to Chao-Wen Huang! He received the PhD degree in Computer Science and Information Engineering from National Cheng Kung University, Tainan, Taiwan."
    ]
  }, {
    date: new Date(2010, 5, 4),
    contents: [
      "賀！張乃文學長 榮獲博士學位。",
      "Congratulation to Nai-Wen Chang! He received the PhD degree in Computer Science and Information Engineering from National Cheng Kung University, Tainan, Taiwan."
    ]
  }, {
    date: new Date(2009, 10, 30),
    contents: [
      "賀！李佳衛學長 榮獲博士學位。",
      "Congratulation to Chia-Wei Lee! He received the PhD degree in Computer Science and Information Engineering from National Cheng Kung University, Tainan, Taiwan."
    ]
  }, {
    date: new Date(2009, 6, 28),
    contents: [
      "賀！郭哲男學長 榮獲博士學位。",
      "Congratulation to Che-Nan Kuo! He received the PhD degree in Computer Science and Information Engineering from National Cheng Kung University, Tainan, Taiwan."
    ]
  },{
    date: new Date(2009, 4, 18),
    contents: [
      "賀！林聰結學長 榮獲博士學位。",
      "Congratulation to Tsong-Jie Lin! He received the PhD degree in Computer Science and Information Engineering from National Cheng Kung University, Tainan, Taiwan."
    ]
  }]
}
