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
		  category: 'relationships',
		  title: '10 Readers Share Their Happy Moments',
      description: 'From impromptu weddings to car picnics.',
      backgroundImage: 'bgImg.jpg'
    },
    {	
      id: 'art-456',
		  category: 'designs',
		  title: 'A Living Room Fakeover',
      description: 'We recently swapped two things in our apartment...',
    	backgroundImage: 'bgImg1.jpg'
    },
    { 
      id: 'art-456',
      category: 'relationships',
      title: 'How to Say Goodbye at a Party',
      description: 'I will die on this hill.',
      backgroundImage: 'bgImg2.jpg'
    },
    { 
      id: 'art-456',
      category: 'relationships',
      title: 'Race matters: Traveling While Black',
      description: 'I can’t take for granted that I’ll be welcomed with open arms. One memory comes to mind...',
      backgroundImage: 'bgImg3.jpg'
    }];
}