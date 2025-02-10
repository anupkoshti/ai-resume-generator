import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-generator',
  templateUrl: './resume-generator.component.html',
  standalone: false,
  styleUrls: ['./resume-generator.component.css']
})
export class ResumeGeneratorComponent {
  resumeForm: FormGroup;
  resumeContent: string = '';
  coverLetterContent: string = '';

  constructor(private fb: FormBuilder, private resumeService: ResumeService) {
    this.resumeForm = this.fb.group({
      jobDescription: ['', Validators.required]
    });
  }

  generateResume() {
    if (this.resumeForm.valid) {
      this.resumeService.generateResume(this.resumeForm.value).subscribe((res) => {
        this.resumeContent = res.resumeContent;
        this.coverLetterContent = res.coverLetterContent;
      });
    }
  }
}
