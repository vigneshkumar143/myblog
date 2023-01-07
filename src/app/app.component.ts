import { Component } from '@angular/core';
import { NavigationMenuStructure } from './myApp.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  	title = 'myblog';
	public menuList: NavigationMenuStructure[] = [{
		type: 'menu',
    	name: 'style',
    	iconName: 'close',
    	children: [{
    		type: 'menu',
    		name: 'style_1',
    		iconName: 'close',
    	},
    	{
    		type: 'menu',
    		name: 'style_2',
    		iconName: 'close',
    	}]
    },
    {
    	type: 'menu',
    	name: 'design',
    	iconName: 'close',
    },
    {
    	type: 'logo',
    	name: 'header-logo',
    	iconName: 'logo'
    },
    {
    	type: 'menu',
    	name: 'food',
    	iconName: 'close',
    	children: [{
    		type: 'menu',
    		name: 'style_1',
    		iconName: 'close',
    	}]
    },
    {
    	type: 'menu',
    	name: 'relationship',
    	iconName: 'close',
    }];
}

