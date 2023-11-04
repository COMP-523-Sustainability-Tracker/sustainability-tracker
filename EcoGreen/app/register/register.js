import { Observable } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object
  //page.bindingContext = createViewModel()

  const model = new Observable ()

  model.set("firstName", "")
  model.set("lastName","")
  model.set("username", "")
  model.set("password", "")

  console.log(model.get("password") + "hi")

  page.bindingContext = model 
}


export function login(args) {
  const button = args.object
  const page = button.page 

  page.frame.navigate('login/login')

}

export function dashboard(args) {
  const button = args.object
  const page = button.page 

  page.frame.navigate('dashboard/dashboard')

}

