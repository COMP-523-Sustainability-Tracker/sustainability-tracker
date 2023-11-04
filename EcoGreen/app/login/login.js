import { Observable } from '@nativescript/core';


export function onNavigatingTo(args) {
  const page = args.object
  //page.bindingContext = createViewModel()

  const model = new Observable ()

  model.set("username", "")
  model.set("password", "")

  page.bindingContext = model 
}



export function register(args) {
  const button = args.object
  const page = button.page 

  page.frame.navigate('register/register')

}

