import { Component } from '@angular/core';
import { LandingPageStructure } from './myLanding.model'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
	public landigpageList: LandingPageStructure[] = [{
		  id: 'art-123',
		  category: 'category 1',
		  title: 'Title 1',
      backgroundImage: 'bgImg.jpg'
    },
    {	
      id: 'art-456',
		  category: 'catetory 2',
		  title: 'Title 2',
    	backgroundImage: 'bgImg1.jpg'
    },
    { 
      id: 'art-456',
      category: 'catetory 3',
      title: 'Title 3',
      backgroundImage: 'bgImg2.jpg'
    },
    { 
      id: 'art-456',
      category: 'catetory 4',
      title: 'Title 4',
      backgroundImage: 'bgImg3.jpg'
    }];
}