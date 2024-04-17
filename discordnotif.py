import win32com.client as comclt
import time

wsh= comclt.Dispatch("WScript.Shell")
wsh.AppActivate("Notepad") # select another application
time.sleep(3)
testString = "ant_;jayj;mudd;tald;quan;mazm;skyt;kish;cube;kjya;sair;grum;lil_;bigd;jrst;step;vkin;" #REPLACE THIS STRING WITH DISCORD NAMES
wsh.SendKeys("^k")
time.sleep(.5)
for element in range(0, len(testString)):
    if(testString[element]!=";"):
        wsh.SendKeys(testString[element])
        time.sleep(.5)
    if(testString[element]==";"):
        wsh.SendKeys("{ENTER}")
        time.sleep(.3)
        wsh.SendKeys("{TAB}")
        time.sleep(.3)
        wsh.SendKeys("^v")
        time.sleep(.3)
        wsh.SendKeys("{ENTER}")
        time.sleep(.3)
        wsh.SendKeys("^k")
        time.sleep(.3)