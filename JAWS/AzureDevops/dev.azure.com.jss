include "HJConst.jsh"

Script GetAssignedCar ()
	var
	string line = GetLine (),
	string segment,
	int assigmentIndex = StringContains (line, "Assigned to ")
if not assigmentIndex then
		SayMessage (OT_ITEM_STATE, "Unable to find the assigment.")
	else
		segment = stringChopLeft (line, assigmentIndex + StringLength ("Assigned to ") - 1)
		segment = stringChopRight(segment, stringLength(segment) - stringContains(segment, "Card") + 1)
		SayMessage(OT_ITEM_STATE, segment)
	EndIf


EndScript


Script GoToMenu ()
var
int left,
int top,
int right,
int botton
PCCursor ()
if IsVirtualPCCursor () then
VirtualPCCursorToggle()
EndIf

if PerformActionOnElementWithTagAndAttribute (Action_setFocus, "div", "id", "__bolt-create-action", left, top, right, botton) then
else
SayString("Unable to focus in menu.")
EndIf
EndScript

Script GoToBoard ()
var
int left,
int top,
int right,
int botton

if PerformActionOnElementWithTagAndAttribute (Action_setFocus, "div", "roledescription", "card", left, top, right, botton) then
elif PerformActionOnElementWithTagAndAttribute (Action_setFocus, "tr", "id", "__bolt-0", left, top, right, botton) then
else

SayString("Board not found.")
EndIf



EndScript
