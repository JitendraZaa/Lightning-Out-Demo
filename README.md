# Lightning-Out-Demo
Complete source code to showcase using Lightning component in node.js (External websites) by using Lightning Out. It shows how to enable CORS and SSL in Node.js with Video and complete source code.

![Jitendra Zaa Blog](http://www.jitendrazaa.com/blog/wp-content/uploads/2017/04/Show-Lightning-Component-in-Node.js-using-Lightning-Out-1024x561.png) 

**[Click here for Youtube Video demo](https://www.youtube.com/watch?v=q9g7rP3OWRA)**

**[Blog post explaining code](http://www.jitendrazaa.com/blog/salesforce/use-lightning-components-on-external-websites-lightning-out/)**

# Steps to run
### Step 1
Create below Lightning application in your Salesforce instance and name it as **LightningOutDemo**

`<aura:application access="Global" extends="ltng:outApp">`

`<aura:dependency resource="forceChatter:feed" type="COMPONENT" />`

`</aura:application>`

### Step 2
Create Connected App in your Salesforce instance with callback URL - `https://localhost:8081/`
Copy consumer secret created in connected app and update clientId variable defined in [OAuth.js](https://github.com/JitendraZaa/Lightning-Out-Demo/blob/master/client/js/OAuth.js) file.

### Step 3
Run npm install command in the directory where this code is downloaded. It will download all the required node modules
then run npm start, it will start the server

### Step 4
Navigate to `https://localhost:8081/` in your browser and you would see **Lightning Out** in Action
