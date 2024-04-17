function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var vConnectRoster = "Vikes Connect Fill in: ";
  var paperworkDumbasses = "People who have not submitted some kind of paperwork: ";
  var discordShortcutString = "Discord usernames for python script: ";
  for(var i=2; i<50; i++){
    var name = ss.getRange(i, 2).getValue();
    var studentID = ss.getRange(i, 3).getValue();
    var paperWork = ss.getRange(i, 4, 1, 4).getValues();
    var discordShortcut = ss.getRange(i, 14).getValue();
    vConnectRoster += name;
    vConnectRoster += " ";
    vConnectRoster += studentID;
    vConnectRoster += "; ";

    discordShortcutString += discordShortcut;
    discordShortcutString += ";";
    for(row in paperWork){
      for(col in paperWork[row]){
        if(ss.getRange(i, 5).isChecked()==false || ss.getRange(i, 6).isChecked()==false ||ss.getRange(i, 7).isChecked()==false || ss.getRange(i, 8).isChecked()==false){
          paperworkDumbasses += name;
          paperworkDumbasses += ", ";
          break;
        }
      }
    }

  }
  Logger.log(paperworkDumbasses);
  Logger.log(vConnectRoster);
  Logger.log(discordShortcutString);
}