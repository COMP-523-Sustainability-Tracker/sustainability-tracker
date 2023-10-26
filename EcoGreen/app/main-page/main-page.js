import { Observable } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object
  //page.bindingContext = createViewModel()
 
}

export function login(args) {
  const button = args.object
  const page = button.page 

  page.frame.navigate('login/login')

}

export function register(args) {
  const button = args.object
  const page = button.page 

  page.frame.navigate('register/register')

}

export function dashboard(args) {
  const button = args.object
  const page = button.page 

  page.frame.navigate('dashboard/dashboard')

}

