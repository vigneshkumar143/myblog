export interface NavigationMenuStructure
{
	type: string;
  	name: string;
  	iconName: string;
  	children?: NavigationMenuStructure[];
}