'Login

SystemUtil.Run "iexplore.exe","C:\Users\srikanthvejendla\Documents\Repos\understandxpath.html"
Browser("title:=.*").Page("title:=.*").WebEdit("xpath:=//input[@type='text']").Set "training1"
Browser("title:=.*").Page("title:=.*").WebEdit("xpath:=//input[@type='password']").Set "abcd1234"
Browser("title:=.*").Page("title:=.*").WebButton("xpath:=//input[@type='submit']").Click
