# CourseMenuItemDelete

Author: Jacky Huang

Description: The purpose of these bookmarklets is to delete specific Bblearn course menu items (i.e. Discord Info for CCI)

Local Setup:
1. Download the javascript files (menupuller.js is OPTIONAL; it is simple script to open/close the sidebar if needed)
2. Save each as bookmarks in your preferred browser
3. For each bookmarklet:
    1. Open up the file and copy its script
    2. In the bookmarks bar, right-click on the bookmarklet > Click Edit
    3. Paste the script in the URL/address field > Click Save
4. Open up the course section in the FULL PAGE VIEW. Scripts do not work with the slider view because the sidebar is iframed in.
    * One way is to open the course in a new tab
5. Make sure the course has sidebar showing and has content areas to be removed (i.e. Discord Info for CCI)
7. Click del_discord script once to focus, then click once more for popup
8. Click del_content_xpath script
9. Click final_del_xpath script
 
* Different content areas can be deleted by changing the 'menuitem' variable inside of the del_discord/del_echo scripts

