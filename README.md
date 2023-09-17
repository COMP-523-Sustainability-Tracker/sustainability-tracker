# Welcome to the Sustainability Tracker

ABOUT:

The Sustainability Tracker is a mobile-app that is for those 
who are interested in monitoring their environmental practices 
and contribution to sustainability. The app will monitor daily 
sustainability practices and make estimates such as personal 
trash output, food waste, and carbon footprint - based on 
input data. It will combine input data with daily monitoring 
and weekly questions, in order to generate daily recommendations 
via Azure AI, meant to increase personal sustainability scores. 
This will help address the problem of climate change and food 
shortages, and more - applicable to SDG goals. 

TECHNICAL:
Azure AI generates recommended outputs based on inputed data 
from prompts and api information. The input data and recommended 
output data is stored in a database so that an api can access 
the data then create read-only or read-write access files. 
Using node express, rest apis generate data points for external 
applications to use via json, XML. 

Potential API inputs: 

  -- Carbon Calculator: 
     https://developer.mastercard.com/carbon-calculator/documentation 

  -- Plaid: https://plaid.com/products/transactions/ 

  -- Mileage tracker: 
     https://www.microsoft.com/en-us/maps/bing-maps/distance-matrix 
