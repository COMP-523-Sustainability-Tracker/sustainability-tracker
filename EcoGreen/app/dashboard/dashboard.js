import { Observable } from '@nativescript/core';

// Define the ItemsComponent class
class ItemsComponent {
  constructor() {
    this.columns = null;
  }

  ngOnInit() {
    let percent = 20;
    // const intervalId = setInterval(() => {
    //   this.setProgressbarWidth(percent);
    //   percent++;
    //   if (percent > 100) {
    //     clearInterval(intervalId);
    //   }
    // }, 50);
  }

  setProgressbarWidth(percent) {
    const newColumns = percent + "*," + (100 - percent) + "*";
    this.columns = newColumns;
    console.log("New columns:", newColumns);
  }
}

// Create an instance of ItemsComponent
const itemsComponent = new ItemsComponent();

export function onNavigatingTo(args) {
  const page = args.object;
  itemsComponent.ngOnInit();

  const model = new Observable({
    columns: itemsComponent.columns // Initialize 'columns' property
  });

  page.bindingContext = model;
   // Call the ngOnInit method of the ItemsComponent

}

export function login(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('login/login');
}

export function register(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('register/register');
  
  // You can also access the columns property after calling ngOnInit if needed
  // const columns = itemsComponent.columns;
}

export function progressBar(){
  itemsComponent.setProgressbarWidth(35);
  console.log("is this working?")
}
