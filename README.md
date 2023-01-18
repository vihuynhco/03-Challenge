# 03 JavaScript: Password Generator


## Description:
### To create an interactive application that will allow a user to customized an alphanumeric string that may be used as a password, based on user's parameters.  

**Specific areas targeted:**
>- The ability to chose a length between 8-128 characters
>- The ability to select anywhere from one to all options of lowercase letters, UPPERcase letters, numeric values and/or $pec!ial characters.

Based on user's criteria,  a random string will be generated and presented to the user.


**Approach to building application in JavaScript:**
> Compartmentalize user's input of length of characters.  
> - Since I allowed for a free text field, I wanted to make sure that the user's input was a numeric value and that it was a value between 8-128.  If the text entered did not meet the paramters, the function would cycle the user back to the initial function until an accepted value was provided. 
> - Workload in JavaScriopt is minimized to this first fuction. 

> Used the string concat method 
> - When user selected "OK"  in the options, the array was added to my string and  would be used to generated my password; using the for Loop, Math.random Method and Math.floor method to ensure my numeric values were whole numbers. 


Link to github repository:
>https://github.com/vihuynhco/03-Challenge.git

Link to deployed location:
>https://vihuynhco.github.io/03-Challenge/


Screenshot of Password Generator:

![screenshot of Password Generator](./Assets/Screenshot%20of%20Password%20Generator.png)
