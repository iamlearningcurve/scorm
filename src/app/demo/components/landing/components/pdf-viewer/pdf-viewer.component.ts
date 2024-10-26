import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pdf-viewer',
  standalone: false,
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.scss'
})
export class PdfViewerComponent {
  videoLink = '';

  tocDesc = `It is a navigational tool in Word, having a tabular list of
  session titles along with the topics, sub-topics, and learning
  objectives in each session. It serves as a road map, helping
  the learners to navigate and locate specific parts quickly
  within the course.`;
  sgDesc = `It is a Word document containing a detailed explanation of
  topics listed in the TOC.`;
  tgDesc = `It is a guide for the trainers made by converting PPTs into
  PDFs for explaining the topics of the SG / LG.`;
  qbDesc = `It is an Excel repository of assessments having different
  types of questions and options to choose from, derived from
  the SG / LG content, for the whole course.`;
  pqDesc = `It is a set of additional questions in HTML for students to
  attempt at the end of each session.`;
  assessDesc = `It is a Word document having a case study/scenario-based
  problem per session, which students should solve at the end
  of each session.`
  blogDesc = `It is a Word document similar to an article but having a more
  casual tone and may include personalized opinions or
  experiences concerning a topic or concept relevant to the
  course.`;
  faqDesc = `It is a Word document having industry-level questions,
  which are asked in the interviews but whose answers do not
  exist directly in the SG / LG.`;
  glossaryDesc = `It is a Word document having alphabetically listed important
  terms in the course along with a brief explanation of what that term is.`;
  articleDesc = `It is a Word document of 1-2 pages having informational,
  interesting writeup about important topics relevant to the
  course (including figures or codes/commands wherever
  applicable).`;
  ibpDesc = `It is a Word document revealing the best practices
  implemented currently in the corresponding industry.`;
  ttDesc = `It is a Word document revealing the tips and tricks pertaining
  to a tool or technology taught in the course.`;

  showDesc = `It is an MP4 file demonstrating the recorded steps and
  captions to teach a step-by step process to fulfill the
  specified learning objective of the course.`;
  tryDesc = `It is an interactive deliverable wherein the learners
  perform the steps as per the general instructions to fulfill
  the specified learning objective of the course.`;
  mgDesc = `It is an MP4 file demonstrating the recorded steps with
  audio (optional) to teach how to apply motion to any
  suitable graphic based on the learning objective.`;

  sbDesc = `It acts as a visual tool outlining the structure in a logical
  flow and organizing the content of a course in an
  engaging way. It illustrates how the different multimedia
  elements of the course, such as text, images,
  animations, audio, video, and quiz, will flow.`;
  vosDesc = `It is a Word document acting as a collection of audio text
  to be recorded per screen designed in the SB.`;
  level1Desc = `It is an MP4 file acting as the final output of Level 1 e-
  learning course to be uploaded on an LMS.`;
  level2SampleDesc = `It is an interactive Storyline file acting as the final output
  of Level 2 e-learning course to be uploaded on an LMS.`;

  utvDesc = `These are instructional videos created to teach specific skills
  and concepts to the learners for enhancing learning and
  ensuring better retention.`;
  uqbDesc = `These are a collection of assessment questions of various
  categories like MCQs, Fill In the Blanks, True/False,
  Descriptive, and Higher Order Thinking Skills (HOTS) with
  different difficulty levels to test the learners’ knowledge.`;
  uwlDesc = `These documents contain hyperlinks to subject-relevant
  online content or external web pages. They are additional
  resources for the learners.`;
  ucsDesc = `These documents provide a detailed analysis of real-world
  scenarios, problems, or situations. They outline the
  challenges faced by individuals, organizations, or systems,
  and the implemented solutions for the same.`;
  uaDesc = `These documents provide additional information or analysis
  of a particular topic. They aim to inform the learners by
  presenting facts, opinions, or research findings.`;
  uslmDesc = `These are educational resources designed for independent
  study, enabling students to acquire knowledge at their own
  pace. It provides detailed information about the subject and
  is divided into sections like introduction, main sections, sub
  sections, summary, keywords, assessment, and references.`;
  utocDesc = `It is a structured list containing the main topics and sub topics
  for every subject. It serves as a road map, helping the
  learners to navigate and locate specific parts quickly within
  the document.`;

dataArr = [
  // Technical
  {id: 0, name: 'Table Of Contents (TOC)', description: this.tocDesc, type: 'pdf', catagory: 'technical', tabIndex:1, path: 'assets/docs/ilt/technical/1.TOC_SOT.pdf', showC1: true, showC2: true},   
  {id: 1, name: 'Student Guide (SG) / Learner Guide (LG)', description: this.sgDesc, type: 'pdf', catagory: 'technical', tabIndex:1, path: 'assets/docs/ilt/technical/2.Student_Guide_SOT.pdf', showC1: true, showC2: true},    
  {id: 2, name: `Trainer's Guide`, description: this.tgDesc, type: 'pdf', catagory: 'technical', tabIndex:1, path: 'assets/docs/ilt/technical/3.Trainer_Guide_SOT.pdf', showC1: true, showC2: true},
  {id: 3, name: 'Question Bank (Assignments)', description: this.qbDesc, type: 'pdf', catagory: 'technical', tabIndex:1, path: 'assets/docs/ilt/technical/4.Assignments_SOT.pdf', showC1: true, showC2: true},    
  {id: 4, name: 'Assignments', description: this.assessDesc, type: 'pdf', catagory: 'technical', tabIndex:1, path: 'assets/docs/ilt/technical/5.Question_Bank_SOT.pdf', showC1: true, showC2: true},
  {id: 5, name: 'Glossary', description: this.glossaryDesc, type: 'pdf', catagory: 'technical', tabIndex:1, path: 'assets/docs/ilt/technical/6.Glossary_SOT.pdf', showC1: true, showC2: true},    
  {id: 6, name: 'Frequently Asked Questions (FAQs)', description: this.faqDesc, type: 'pdf', catagory: 'technical', tabIndex:1, path: 'assets/docs/ilt/technical/7.FAQs_SOT.pdf', showC1: true, showC2: true},
  {id: 7, name: 'Blog - The Future of SEO', description: this.blogDesc, type: 'pdf', catagory: 'technical', tabIndex:1, path: 'assets/docs/ilt/technical/8.Blog_SOT_The Future_of_SEO.pdf', showC1: true, showC2: true},
  //non-technical
  {id: 8, name: 'Table Of Contents (TOC)', description: this.tocDesc, type: 'pdf', catagory: 'non-technical', tabIndex:1, path: 'assets/docs/ilt/non-technical/1.TOC_Housekeeping.pdf', showC1: true, showC2: true},
  {id: 9, name: 'Student Guide (SG) / Learner Guide (LG)', description: this.sgDesc, type: 'pdf', catagory: 'non-technical', tabIndex:1, path: 'assets/docs/ilt/non-technical/2.Student_Guide_Housekeeping.pdf', showC1: true, showC2: true},
  {id: 10, name: `Trainer's Guide`, description: this.tgDesc, type: 'pdf', catagory: 'non-technical', tabIndex:1, path: 'assets/docs/ilt/non-technical/3.Trainer_Guide_Housekeeping.pdf', showC1: true, showC2: true},
  {id: 11, name: 'Question Bank (Assignments)', description: this.qbDesc, type: 'pdf', catagory: 'non-technical', tabIndex:1, path: 'assets/docs/ilt/non-technical/4.Question_Bank_Housekeeping.pdf', showC1: true, showC2: true},
  {id: 12, name: 'Frequently Asked Questions (FAQs)', description: this.faqDesc, type: 'pdf', catagory: 'non-technical', tabIndex:1, path: 'assets/docs/ilt/non-technical/5.FAQs_Housekeeping.pdf', showC1: true, showC2: true},
  {id: 13, name: 'Glossary', description: this.glossaryDesc, type: 'pdf', catagory: 'non-technical', tabIndex:1, path: 'assets/docs/ilt/non-technical/6.Glossary_Housekeeping.pdf', showC1: true, showC2: true},
  {id: 14, name: 'Blog', description: this.blogDesc, type: 'pdf', catagory: 'non-technical', tabIndex:1, path: 'assets/docs/ilt/non-technical/7.Blog_Housekeeping.pdf', showC1: true, showC2: true},
  {id: 15, name: 'Article', description: this.articleDesc, type: 'pdf', catagory: 'non-technical', tabIndex:1, path: 'assets/docs/ilt/non-technical/8.Article_Housekeeping.pdf', showC1: true, showC2: true},
  //gaming
  {id: 16, name: 'Table Of Contents (TOC)', description: this.tocDesc, type: 'pdf', catagory: 'gaming', tabIndex:1, path: 'assets/docs/ilt/gaming/1.TOC_AR_VR_Futuristic Gaming.pdf', showC1: true, showC2: true},
  {id: 17, name: 'Student Guide (SG) / Learner Guide (LG)', description: this.sgDesc, type: 'pdf', catagory: 'gaming', tabIndex:1, path: 'assets/docs/ilt/gaming/2.Student_Guide__AR_VR_Futuristic Gaming.pdf', showC1: true, showC2: true},
  {id: 18, name: `Trainer's Guide`, description: this.tgDesc, type: 'pdf', catagory: 'gaming', tabIndex:1, path: 'assets/docs/ilt/gaming/3.Trainer_Guide_AR_VR_Futuristic Gaming.pdf', showC1: true, showC2: true},
  {id: 19, name: 'Question Bank (Assignments)', description: this.qbDesc, type: 'pdf', catagory: 'gaming', tabIndex:1, path: 'assets/docs/ilt/gaming/4.Question_Bank_AR_VR_Futuristic Gaming.pdf', showC1: true, showC2: true},
  {id: 20, name: 'Mock Assessments', description: this.pqDesc, type: 'pdf', catagory: 'gaming', tabIndex:1, path: 'assets/docs/ilt/gaming/5.Mock_Assessments_AR_VR_Futuristic Gaming.pdf', showC1: true, showC2: true},
  {id: 21, name: 'Tips and Tricks', description: this.ttDesc, type: 'pdf', catagory: 'gaming', tabIndex:1, path: 'assets/docs/ilt/gaming/6.Tips_Tricks_AR_VR_Futuristic Gaming.pdf', showC1: true, showC2: true},
  {id: 22, name: 'Industry Best Practices', description: this.ibpDesc, type: 'pdf', catagory: 'gaming', tabIndex:1, path: 'assets/docs/ilt/gaming/7.Industry_Best_Practices_AR_VR_Futuristic Gaming.pdf', showC1: true, showC2: true},
  {id: 23, name: 'Article', description: this.articleDesc, type: 'pdf', catagory: 'gaming', tabIndex:1, path: 'assets/docs/ilt/gaming/8.Article_AR_VR_Futuristic Gaming.pdf', showC1: true, showC2: true},
  //show-me
 {id: 24, name: 'Show Me', description: this.showDesc, type: 'video', catagory: 'show-me', tabIndex:3, path: 'https://www.youtube.com/embed/r89LYm0cJ9E?si=7Yg7GX6ZDJuZ2E24', showC1: true, showC2: true},
 //try-me
 {id: 25, name: 'Try Me', description: this.tryDesc, type: 'sample', catagory: 'try-me', tabIndex:3, path: '', showC1: true, showC2: true},
 //motion-graphics
 {id: 26, name: 'Motion Graphics', description: this.mgDesc, type: 'video', catagory: 'motion-graphics', tabIndex:3, path: '', showC1: true, showC2: true},
 //level-1
 {id: 36, name: 'Story Board', description: this.mgDesc, type: 'pdf', catagory: 'level-1', tabIndex:0, path: 'assets/docs/e-learning/level_1/1.Storyboard_Adobe_Illustrator_Applications.pdf', showC1: true, showC2: true},
 {id: 37, name: 'Voice Over Script', description: this.vosDesc, type: 'pdf', catagory: 'level-1', tabIndex:0, path: 'assets/docs/e-learning/level_1/2.Voice Over_Adobe_Illustrator_Applications.pdf', showC1: true, showC2: true},
 {id: 38, name: 'Level 1 Video', description: this.level1Desc, type: 'video', catagory: 'level-1', tabIndex:0, path: 'https://www.youtube.com/embed/3gRYUJnDhd0?si=9FFMAtTjhpNhTIg9', showC1: true, showC2: true},
 //level-2
 {id: 39, name: 'Motion Graphics', description: this.level2SampleDesc, type: 'sample', catagory: 'level-2', tabIndex:0, path: 'assets/docs/e-learning/level_2/story.html', showC1: true, showC2: true},
 //university
 {id: 27, name: 'Table Of Contents (TOC)', description: this.utocDesc, type: 'pdf', catagory: '', tabIndex:2, path: 'assets/docs/university/1.Table_of Contents_Sample.pdf', showC1: true, showC2: true},   
 {id: 28, name: 'Self Learning Material', description: this.uslmDesc, type: 'pdf', catagory: '', tabIndex:2, path: 'assets/docs/university/2.Self_Learning Material_Sample.pdf', showC1: true, showC2: true},    
 {id: 29, name: `Article`, description: this.uaDesc, type: 'pdf', catagory: '', tabIndex:2, path: 'assets/docs/university/3.Article_Sample.pdf', showC1: true, showC2: true},
 {id: 30, name: 'Case Study', description: this.ucsDesc, type: 'pdf', catagory: '', tabIndex:2, path: 'src/assets/docs/university/4.Case_Study_Sample.pdf', showC1: true, showC2: true},    
 {id: 31, name: 'Web Link', description: this.uwlDesc, type: 'pdf', catagory: '', tabIndex:2, path: 'src/assets/docs/university/5.Web_Links_sample.pdf', showC1: true, showC2: true},
 {id: 32, name: 'Question Bank', description: this.uqbDesc, type: 'pdf', catagory: '', tabIndex:2, path: 'src/assets/docs/university/6.Question_Bank_Sample.pdf', showC1: true, showC2: true},    
 {id: 33, name: 'Training Video', description: this.utvDesc, type: 'pdf', catagory: '', tabIndex:2, path: '', showC1: true, showC2: true},
 {id: 34, name: 'Language Test (PTE)', description: '', type: 'pdf', catagory: '', tabIndex:2, path: '', showC1: true, showC2: true},
 {id: 35, name: 'Deliverables of University of Academic Project', description: '', type: 'pdf', catagory: '', tabIndex:2, path: '', showC1: true, showC2: true},
];
subscriptions: Subscription = new Subscription();
constructor(private router: Router,
  private route: ActivatedRoute,) {
  this.subscriptions.add(this.route.queryParams.subscribe((params: any) => {
    this.dataArr.forEach((e) => {
      if (e.name === params.name && e.catagory === params.catagory) {
        this.videoLink = e.path;

      }
    })
    
    
  }));
}
}
