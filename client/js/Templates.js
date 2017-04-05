$("#createMenu").on("click","a",function(e){ 
    $ele = $(e.target);
   
    var tDate = new Date();
    
      day = tDate.getDate();
      month = tDate.getMonth()+1;
      year = tDate.getFullYear();
    
     tDate =  day+'-'+month+ '-'+year ;
    
    curSelRes.isNew = true;
    curSelRes.resType = $ele.attr('compType') ;
	showCode(true);
	
    if($ele.attr('compType') == 'ApexClass')
    {
        setCodeBody(apexTemplate.replace('<USERNAME_PH>',$("#loggedInUser").text()).replace('<Date_PH>', tDate ));  
    }else if($ele.attr('compType') == 'ApexTrigger')
    {
        setCodeBody(triggerTemplate.replace('<USERNAME_PH>',$("#loggedInUser").text()).replace('<Date_PH>', tDate ));  
    }else if($ele.attr('compType') == 'ApexPage')
    {
        setCodeBody(vfPage.replace('<USERNAME_PH>',$("#loggedInUser").text()).replace('<Date_PH>', tDate ));  
    }else if($ele.attr('compType') == 'ApexComponent')
    {
        setCodeBody(vfComponent.replace('<USERNAME_PH>',$("#loggedInUser").text()).replace('<Date_PH>', tDate ));  
    }
    else
    { 
        curSelRes.isNew = false;
        curSelRes.resType = 'AnonymouseApex' ;
        setCodeBody(anonymouseApexTemplate);
    }
});

var apexTemplate = '/**\n'+
                    '*	@Author      :	<USERNAME_PH>\n'+
                    '*	@Description :	TO DO : This Apex class is Created Using Online Salesforce Editor (OSE)\n'+
                    '*	@Date        :	<Date_PH> \n'+
                    '**/\n'+
                    'public class <ClassNAME>{\n'+
                    '}\n';

var triggerTemplate =   '/**\n'+
                        '*	@Author      :	<USERNAME_PH>\n'+
                        '*	@Description :	TO DO : This Trigger is Created Using Online Salesforce Editor (OSE)\n'+
                        '*	@Date        :	<Date_PH> \n'+
                        '**/\n'+
                        'trigger <TRIGGER_NAME> on <OBJECT_API_NAME> (before insert, before update, after insert, after update, before delete, after delete, after undelete) {\n'+
                        '}\n';
 
var vfPage = '<!--\n'+
                '@Author		: <USERNAME_PH>\n'+
                '@Description	: TO DO : This Page is Created Using Online Salesforce Editor (OSE) \n'+
                '@Date		:  <Date_PH> \n'+
                '-->\n'+
                '<apex:page>\n'+
                  '<!-- Begin Default Content REMOVE THIS -->\n'+
                  '<h1>Congratulations</h1>\n'+
                  'This is your new Page\n'+
                  '<!-- End Default Content REMOVE THIS -->\n'+
            '</apex:page>';

var vfComponent = '<!--\n'+
                '@Author		: <USERNAME_PH>\n'+
                '@Description	: TO DO : This Component is Created Using Online Salesforce Editor (OSE) \n'+
                '@Date		:  <Date_PH> \n'+
                '-->\n'+
                '<apex:component>\n'+
                  '<apex:attribute name="myattribute" type="String" description="TODO: Describe me"/>\n'+
                  '<!-- Begin Default Content REMOVE THIS -->\n'+
                  '<h1>Congratulations</h1>\n'+
                  'This is your new Component: mynewcomponent\n'+
                  '<!-- End Default Content REMOVE THIS -->\n'+
                '</apex:component>';

var anonymouseApexTemplate = 'System.debug(\'Execute Anonymous Code Here\');'; 