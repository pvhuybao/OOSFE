import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StringDecoder } from 'string_decoder';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { BreadcrumbService } from 'ng5-breadcrumb';
import { FeedbackService } from '../../services/feedback.service';
import { FeedbackModel} from '../../models/Feedback';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.css']
})
export class FeedbackDetailComponent implements OnInit {

  constructor(private feedbackService: FeedbackService, private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService,
    private breadcrumbService:BreadcrumbService) { }

    public feed = new FeedbackModel();
    public id: string;

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.id = params.id;
    this.getById(this.id);
    //this.breadcrumbService.addFriendlyNameForRouteRegex('/admin/manager/customerfeedback/[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}', this.displayNameForFeedback());
  }

  getById(id) {
    this.spinnerService.startLoadingSpinner();
    this.feedbackService.getById(id).subscribe(feedback => {
      this.feed = feedback;
      this.feed.status = true;
      this.feedbackService.putProduct(this.feed); 
      this.spinnerService.turnOffSpinner();
    });
  }

  // displayNameForFeedback():string{
  //   var feed = this.feedbackService.setFeed();
  //   return feed.id;
  // }
}

