import { Observable } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object
  //page.bindingContext = createViewModel()

  const model = new Observable ()

  model.set("firstName", "")
  model.set("lastName","")
  model.set("username", "")
  model.set("password", "")

  page.bindingContext = model 
}

export function dashboard(args) {
  const button = args.object
  const page = button.page 

  page.frame.navigate('dashboard/dashboard')

}

export function login(args) {
  const button = args.object
  const page = button.page 

  page.frame.navigate('login/login')

}

