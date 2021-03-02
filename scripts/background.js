// function hello () { f = window.location.host.split('.')[0]; newhost = f.endsWith('-sb1') ? f.substring(0,f.length-4):f + '-sb1'; window.open(window.location.href.replace(f,newhost),'_self');}

! function (e) {
    var r = {};
    // NLInvokeButton(jQuery('[Value*=Save]').filter(":visible")[0])    
    if (!localStorage.shortkeys) {

        localStorage.shortkeys =

            "{\"keys\":["

            + "{\"key\": \"h o m\",\"label\": \"homepage\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/center/card.nl?sc=-29&whence='; window.open(f,'_self');})()\"},"

            + "{\"key\": \"e e\",\"label\": \"function:edit mode\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {NLInvokeButton(jQuery('[Value*=Edit]').filter(':visible')[0]);})()\"},"
            + "{\"key\": \"n x\",\"label\": \"function:next\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {document.getElementById('next').click();})()\"},"
            + "{\"key\": \"s a v\",\"label\": \"function:save\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {NLInvokeButton(jQuery('[Value*=Save]').filter(':visible')[0]);})()\"},"
            + "{\"key\": \"x l s\",\"label\": \"function:export xls\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {jQuery('.uir-list-export-xls')[0].click()})()\"},"
            + "{\"key\": \"s e r\",\"label\": \"function:edit mode\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function () {globalSearch(window.getSelection().toString())})()\"},"
            + "{\"key\": \"s b b\",\"label\": \"function:sandbox\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function hello () { f = window.location.host.split('.')[0]; newhost = f.endsWith('-sb1') ? f.substring(0,f.length-4):f + '-sb1'; window.open(window.location.href.replace(f,newhost),'_self');})()\"},"

            + "{\"key\": \"c j s\",\"label\": \"csv job status\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/upload/csv/csvstatus.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c s i\",\"label\": \"csv saved imports\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/assistants/nsimport/savedimports.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"b m l\",\"label\": \"bom list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/manufacturing/bomlist.nl?whence='; window.open(f,'_self');})()\"},"
            + "{\"key\": \"n b m l\",\"label\": \"new bom list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/manufacturing/bomlist.nl?whence='; window.open(f,'_blank');})()\"},"
            + "{\"key\": \"c u s\",\"label\": \"customer\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/custjoblist.nl?Customer_STAGE=CUSTOMER&whence='; window.open(f,'_self');})()\"},"
            + "{\"key\": \"a s t\",\"label\": \"asset list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/custom/custrecordentrylist.nl?rectype=512&whence='; window.open(f,'_self');})()\"},"

            + "{\"key\": \"s o l\",\"label\": \"sales order list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=SalesOrd'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"s o n\",\"label\": \"sales order - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/salesord.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"p o l\",\"label\": \"purchase order list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=PurchOrd'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"p o n\",\"label\": \"purchase order - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/purchord.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"i n l\",\"label\": \"invoice list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=CustInvc'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"i n n\",\"label\": \"invoice - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/custinvc.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"v b l\",\"label\": \"vendor bill list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"v b n\",\"label\": \"vendor bill - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/vendbill.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c u l\",\"label\": \"customer list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/custjoblist.nl?Customer_STAGE=CUSTOMER'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c u n\",\"label\": \"customer - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/custjob.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"v e l\",\"label\": \"vendor list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/vendorlist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"v e n\",\"label\": \"vendor - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/vendor.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"i f l\",\"label\": \"item fulfilment list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=ItemShip'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"i t l\",\"label\": \"item list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/item/itemlist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"i t n\",\"label\": \"item - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/item/item.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"i r l\",\"label\": \"item receipt list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=ItemRcpt'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"w o l\",\"label\": \"work order list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=WorkOrd'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"w o n\",\"label\": \"work order - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/workord.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"b o l\",\"label\": \"bom list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/manufacturing/bomlist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"j e l\",\"label\": \"journal entry list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=Journal'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"j e n\",\"label\": \"journal entry - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/journal.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"t i m\",\"label\": \"timesheets\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/time/weeklytimebill.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"e m l\",\"label\": \"employee list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/employeelist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"e m n\",\"label\": \"employee - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/employee.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"u s l\",\"label\": \"user list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/listusers.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"r o l\",\"label\": \"roles\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/rolelist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"s u b\",\"label\": \"subsidiaries\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/otherlists/subsidiarylist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"d e p\",\"label\": \"departments\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/otherlists/departmentlist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"l o c\",\"label\": \"locations\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/otherlists/locationlist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c l a\",\"label\": \"classes\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/otherlists/classlist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"s s l\",\"label\": \"saved search list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/search/savedsearchlist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"s s n\",\"label\": \"saved search - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/search/search.nl?cu=T&e=F'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"f i l\",\"label\": \"file cabinet\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/media/mediaitemfolders.nl?sc=-63'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"s a n\",\"label\": \"sandbox management\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/sandboxaccounts.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"b i l\",\"label\": \"billing information\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/billing/billingevents.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"p p r\",\"label\": \"personal preferences\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/center/userprefs.nl?sc=-29'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"s p r\",\"label\": \"system preferences\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/general.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"e p r\",\"label\": \"email preferences\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/emailpreferences.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"a p r\",\"label\": \"accounting preferences\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/acctsetup.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c o a\",\"label\": \"chart of accounts\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/account/accounts.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"m a p\",\"label\": \"manage accounting periods\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/period/fiscalperiods.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"m t p\",\"label\": \"manage tax periods\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/period/taxperiods.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c u r\",\"label\": \"currencies\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/multicurrency/currencylist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c e r\",\"label\": \"currency exchange rates\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/multicurrency/currencyratelist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c m l\",\"label\": \"credit memo list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=CustCred'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c m n\",\"label\": \"credit memo - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/custcred.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c d l\",\"label\": \"customer deposit list\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=CustDep'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c d n\",\"label\": \"customer deposit - new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/custdep.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"c o m\",\"label\": \"company information\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/otherlists/company.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"i c s\",\"label\": \"import CSV\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/assistants/nsimport/importassistant.nl?new=T'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"s c s\",\"label\": \"saved CSV imports\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/assistants/nsimport/savedimports.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"p d f\",\"label\": \"advanced HTML/PDF tmp\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/custom/pdftemplates.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"s c r\",\"label\": \"scripts\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/scripting/scriptlist.nl?'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"w o r\",\"label\": \"workflows\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/workflow/setup/workflowlist.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"r e c\",\"label\": \"record types\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/custom/custrecords.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"b i n\",\"label\": \"bundles installed\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/bundler/bundlelist.nl?type=I'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"b c r\",\"label\": \"bundles created\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/bundler/bundlelist.nl?type=S'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"e n a\",\"label\": \"enable features\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/features.nl'; window.open(f,'_self');})()\"},"
            + "{\"key\": \"s r e\",\"label\": \"scripted records\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/scripting/scriptedrecords.nl'; window.open(f,'_self');})()\"},"

            + "{\"key\": \"n e w\",\"label\": \"function:transaction-new\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript:NLInvokeButton(getButton('new'))\"},"
            + "{\"key\": \"c o p y\",\"label\": \"function:transaction-copy\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript:NLInvokeButton(getButton('makecopy'))\"},"
            + "{\"key\": \"d e l e t e\",\"label\": \"function:transaction-delete\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript:NLInvokeButton(getButton('delete'))\"},"
            + "{\"key\": \"m e m o\",\"label\": \"function:transaction-memorize\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript:NLInvokeButton(getButton('memorize'))\"},"
            + "{\"key\": \"e m a i l\",\"label\": \"function:transaction-email\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript:NLInvokeButton(getButton('email'))\"},"
            + "{\"key\": \"ctrl+shift+1\",\"label\": \"function:open-shortcuts\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: /*--do not remove this comment--*/ (function() {f = 'https://www.travizer.com/netsuite-keyboard-shortcuts-list.html';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"ctrl+shift+2\",\"label\": \"function:mark-madatory-fields\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"var spans= document.getElementsByTagName('span'); for (var i = 0, len = spans.length; i < len; ++i) {  if(spans[i].innerHTML.indexOf('uir-required-icon') !== -1 && spans[i].id.indexOf('_label') == -1 ) {     spans[i].style.backgroundColor = 'yellow'; } }\"},"

            + "{\"key\": \"n h o m\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/center/card.nl?sc=-29&whence=';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n s o l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=SalesOrd';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n s o n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/salesord.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n p o l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=PurchOrd';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n p o n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/purchord.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n i n l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=CustInvc';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n i n n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/custinvc.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n v b l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n v b n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/vendbill.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n c u l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/custjoblist.nl?Customer_STAGE=CUSTOMER';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n c u n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/custjob.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n v e l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/vendorlist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n v e n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/vendor.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n i f l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=ItemShip';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n i t l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/item/itemlist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n i t n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/item/item.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n i r l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=ItemRcpt';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n w o l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=WorkOrd';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n w o n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/workord.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n b o l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/manufacturing/bomlist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n j e l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=Journal';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n j e n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/journal.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n t i m\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/time/weeklytimebill.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n e m l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/employeelist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n e m n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/entity/employee.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n u s l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/listusers.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n r o l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/rolelist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n s u b\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/otherlists/subsidiarylist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n d e p\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/otherlists/departmentlist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n l o c\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/otherlists/locationlist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n c l a\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/otherlists/classlist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n s s l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/search/savedsearchlist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n s s n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/search/search.nl?cu=T&e=F';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n f i l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/media/mediaitemfolders.nl?sc=-63';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n s a n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/sandboxaccounts.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n b i l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/billing/billingevents.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n p p r\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/center/userprefs.nl?sc=-29';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n s p r\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/general.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n e p r\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/emailpreferences.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n a p r\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/acctsetup.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n c o a\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/account/accounts.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n m a p\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/period/fiscalperiods.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n m t p\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/period/taxperiods.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n c u r\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/multicurrency/currencylist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n c e r\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/multicurrency/currencyratelist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n c m l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=CustCred';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n c m n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/custcred.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n c d l\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/transactionlist.nl?Transaction_TYPE=CustDep';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n c d n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/accounting/transactions/custdep.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n c o m\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/otherlists/company.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n i c s\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/assistants/nsimport/importassistant.nl?new=T';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n s c s\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/assistants/nsimport/savedimports.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n p d f\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/custom/pdftemplates.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n s c r\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/scripting/scriptlist.nl?';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n w o r\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/workflow/setup/workflowlist.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n r e c\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/custom/custrecords.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n b i n\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/bundler/bundlelist.nl?type=I';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n b c r\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/bundler/bundlelist.nl?type=S';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n e n a\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/setup/features.nl';if (!window.open(f)) location.href = f;})()\"},"
            + "{\"key\": \"n s r e\",\"label\": \"newtab\",\"action\": \"javascript\",\"sites\": \"\",\"sitesArray\": [\"\"],\"activeInInputs\": true,\"blacklist\": false,\"code\": \"javascript: (function() {f = window.location.href.split('app/')[0] + 'app/common/scripting/scriptedrecords.nl';if (!window.open(f)) location.href = f;})()\"}"



            + "]}"

    }

    chrome.commands.onCommand.addListener(function (command) {
        console.log('Command:', command);
        window.open('options/options.html', '_blank');
    });

    function t(s) {
        if (r[s]) return r[s].exports;
        var n = r[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(n.exports, n, n.exports, t), n.l = !0, n.exports
    }
    t.m = e, t.c = r, t.d = function (e, r, s) {
        t.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: s
        })
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function (e, r) {
        if (1 & r && (e = t(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (t.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }), 2 & r && "string" != typeof e)
            for (var n in e) t.d(s, n, function (r) {
                return e[r]
            }.bind(null, n));
        return s
    }, t.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, t.p = "", t(t.s = 3)
}([function (e, r, t) {
    (function (t) {
        var s, n, o;
        n = [e], void 0 === (o = "function" == typeof (s = function (e) {
            "use strict";
            if (void 0 === window.browser || Object.getPrototypeOf(window.browser) !== Object.prototype || Object.getPrototypeOf(t) !== Object.prototype) {
                const r = "The message port closed before a response was received.",
                    t = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                    s = () => {
                        const e = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getBrowserInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (0 === Object.keys(e).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class s extends WeakMap {
                            constructor(e, r) {
                                super(r), this.createItem = e
                            }
                            get(e) {
                                return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                            }
                        }
                        const n = (e, r) => (...t) => {
                            chrome.runtime.lastError ? e.reject(chrome.runtime.lastError) : r.singleCallbackArg || t.length <= 1 ? e.resolve(t[0]) : e.resolve(t)
                        },
                            o = e => 1 == e ? "argument" : "arguments",
                            a = (e, r, t) => new Proxy(r, {
                                apply: (r, s, n) => t.call(s, e, ...n)
                            });
                        let i = Function.call.bind(Object.prototype.hasOwnProperty);
                        const l = (e, r = {}, t = {}) => {
                            let s = Object.create(null),
                                g = {
                                    has: (r, t) => t in e || t in s,
                                    get(g, m, c) {
                                        if (m in s) return s[m];
                                        if (!(m in e)) return;
                                        let A = e[m];
                                        if ("function" == typeof A)
                                            if ("function" == typeof r[m]) A = a(e, e[m], r[m]);
                                            else if (i(t, m)) {
                                                let r = ((e, r) => (function (t, ...s) {
                                                    if (s.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${s.length}`);
                                                    if (s.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${s.length}`);
                                                    return new Promise((o, a) => {
                                                        if (r.fallbackToNoCallback) try {
                                                            t[e](...s, n({
                                                                resolve: o,
                                                                reject: a
                                                            }, r))
                                                        } catch (n) {
                                                            console.warn(`${e} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", n), t[e](...s), r.fallbackToNoCallback = !1, r.noCallback = !0, o()
                                                        } else r.noCallback ? (t[e](...s), o()) : t[e](...s, n({
                                                            resolve: o,
                                                            reject: a
                                                        }, r))
                                                    })
                                                }))(m, t[m]);
                                                A = a(e, e[m], r)
                                            } else A = A.bind(e);
                                        else {
                                            if ("object" != typeof A || null === A || !i(r, m) && !i(t, m)) return Object.defineProperty(s, m, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get: () => e[m],
                                                set(r) {
                                                    e[m] = r
                                                }
                                            }), A;
                                            A = l(A, r[m], t[m])
                                        }
                                        return s[m] = A, A
                                    },
                                    set: (r, t, n, o) => (t in s ? s[t] = n : e[t] = n, !0),
                                    defineProperty: (e, r, t) => Reflect.defineProperty(s, r, t),
                                    deleteProperty: (e, r) => Reflect.deleteProperty(s, r)
                                },
                                m = Object.create(e);
                            return new Proxy(m, g)
                        },
                            g = e => ({
                                addListener(r, t, ...s) {
                                    r.addListener(e.get(t), ...s)
                                },
                                hasListener: (r, t) => r.hasListener(e.get(t)),
                                removeListener(r, t) {
                                    r.removeListener(e.get(t))
                                }
                            });
                        let m = !1;
                        const c = new s(e => "function" != typeof e ? e : function (r, s, n) {
                            let o, a, i = !1,
                                l = new Promise(e => {
                                    o = function (r) {
                                        m || (console.warn(t, (new Error).stack), m = !0), i = !0, e(r)
                                    }
                                });
                            try {
                                a = e(r, s, o)
                            } catch (e) {
                                a = Promise.reject(e)
                            }
                            const g = !0 !== a && (e => e && "object" == typeof e && "function" == typeof e.then)(a);
                            if (!0 !== a && !g && !i) return !1;
                            const c = e => {
                                e.then(e => {
                                    n(e)
                                }, e => {
                                    let r;
                                    r = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred", n({
                                        __mozWebExtensionPolyfillReject__: !0,
                                        message: r
                                    })
                                }).catch(e => {
                                    console.error("Failed to send onMessage rejected reply", e)
                                })
                            };
                            return c(g ? a : l), !0
                        }),
                            A = ({
                                reject: e,
                                resolve: t
                            }, s) => {
                                chrome.runtime.lastError ? chrome.runtime.lastError.message === r ? t() : e(chrome.runtime.lastError) : s && s.__mozWebExtensionPolyfillReject__ ? e(new Error(s.message)) : t(s)
                            },
                            d = (e, r, t, ...s) => {
                                if (s.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${s.length}`);
                                if (s.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${s.length}`);
                                return new Promise((e, r) => {
                                    const n = A.bind(null, {
                                        resolve: e,
                                        reject: r
                                    });
                                    s.push(n), t.sendMessage(...s)
                                })
                            },
                            u = {
                                runtime: {
                                    onMessage: g(c),
                                    onMessageExternal: g(c),
                                    sendMessage: d.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: d.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            f = {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            };
                        return e.privacy = {
                            network: {
                                networkPredictionEnabled: f,
                                webRTCIPHandlingPolicy: f
                            },
                            services: {
                                passwordSavingEnabled: f
                            },
                            websites: {
                                hyperlinkAuditingEnabled: f,
                                referrersEnabled: f
                            }
                        }, l(chrome, u, e)
                    };
                e.exports = s()
            } else e.exports = t
        }) ? s.apply(r, n) : s) || (e.exports = o)
    }).call(this, t(0))
}, , , function (e, r, t) {
    "use strict";
    (function (e) {
        let r = r => {
            e.tabs.query({
                currentWindow: !0
            }).then((function (t) {
                t.length <= 1 || e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (s) {
                    let n, o = s[0],
                        a = t.findIndex(e => e.id === o.id);
                    switch (r) {
                        case "next":
                            n = t[(a + 1 + t.length) % t.length];
                            break;
                        case "previous":
                            n = t[(a - 1 + t.length) % t.length];
                            break;
                        case "first":
                            n = t[0];
                            break;
                        case "last":
                            n = t[t.length - 1];
                            break;
                        default:
                            let e = parseInt(r) || 0;
                            if (!(e >= 1 && e <= t.length)) return;
                            n = t[e - 1]
                    }
                    e.tabs.update(n.id, {
                        active: !0
                    })
                }))
            }))
        },
            t = function (e, r) {
                if (!e.blacklist || "false" === e.blacklist) return !0;
                let t = !0 === e.blacklist || "true" === e.blacklist;
                return e.sitesArray.forEach(e => {
                    r.match(function (e) {
                        if (/^\/.*\/$/.test(e)) return new RegExp(e.replace(/^\/(.*)\/$/, "$1"));
                        let r = ["^"];
                        for (let t = 0; t < e.length; ++t) {
                            let s = e.charAt(t);
                            "*" === s ? r.push(".*") : ("\\^$*+?.()|{}[]".indexOf(s) >= 0 && r.push("\\"), r.push(s))
                        }
                        return r.push("$"), new RegExp(r.join(""))
                    }(e)) && (t = !t)
                }), t
            },
            s = (t, s = {}) => {
                var n = s.smoothScrolling ? "smooth" : "auto";
                if ("cleardownloads" === t) e.browsingData.remove({
                    since: 0
                }, {
                    downloads: !0
                });
                else if ("viewsource" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    e.tabs.create({
                        url: "view-source:" + r[0].url
                    })
                }));
                else if ("print" === t) e.tabs.executeScript(null, {
                    code: "window.print()"
                });
                else if ("opensettings" === t) e.tabs.create({
                    url: "chrome://settings",
                    active: !0
                });
                else if ("openextensions" === t) e.tabs.create({
                    url: "chrome://extensions",
                    active: !0
                });
                else if ("openshortcuts" === t) e.tabs.create({
                    url: "chrome://extensions/shortcuts",
                    active: !0
                });
                else if ("nexttab" === t) r("next");
                else if ("prevtab" === t) r("previous");
                else if ("firsttab" === t) r("first");
                else if ("lasttab" === t) r("last");
                else if ("newtab" === t) e.tabs.create({});
                else if ("reopentab" === t) e.sessions.getRecentlyClosed({
                    maxResults: 1
                }).then((function (r) {
                    let t = r[0];
                    e.sessions.restore(t.sessionId)
                }));
                else if ("closetab" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    e.tabs.remove(r[0].id)
                }));
                else if ("clonetab" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    e.tabs.duplicate(r[0].id)
                }));
                else if ("movetabtonewwindow" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    e.windows.create({
                        url: r[0].url
                    }), e.tabs.remove(r[0].id)
                }));
                else if ("onlytab" === t) e.tabs.query({
                    currentWindow: !0,
                    pinned: !1,
                    active: !1
                }).then((function (r) {
                    let t = [];
                    r.forEach((function (e) {
                        t.push(e.id)
                    })), e.tabs.remove(t)
                }));
                else if ("closelefttabs" === t || "closerighttabs" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    let s = r[0].index;
                    e.tabs.query({
                        currentWindow: !0,
                        pinned: !1,
                        active: !1
                    }).then((function (r) {
                        let n = [];
                        r.forEach((function (e) {
                            ("closelefttabs" === t && e.index < s || "closerighttabs" === t && e.index > s) && n.push(e.id)
                        })), e.tabs.remove(n)
                    }))
                }));
                else if ("togglepin" === t) e.tabs.query({
                    active: !0,
                    currentWindow: !0
                }).then((function (r) {
                    let t = !r[0].pinned;
                    e.tabs.update(r[0].id, {
                        pinned: t
                    })
                }));
                else if ("togglemute" === t) e.tabs.query({
                    active: !0,
                    currentWindow: !0
                }).then((function (r) {
                    let t = !r[0].mutedInfo.muted;
                    e.tabs.update(r[0].id, {
                        muted: t
                    })
                }));
                else if ("copyurl" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (e) {
                    (e => {
                        let r = document.createElement("div");
                        r.contentEditable = !0, document.body.appendChild(r), r.innerHTML = e, r.unselectable = "off", r.focus(), document.execCommand("SelectAll"), document.execCommand("Copy", !1, null), document.body.removeChild(r)
                    })(e[0].url)
                }));
                else if ("searchgoogle" === t) e.tabs.executeScript({
                    code: "window.getSelection().toString();"
                }).then((function (r) {
                    if (r[0]) {
                        let t = encodeURIComponent(r[0]);
                        e.tabs.query({
                            currentWindow: !0,
                            active: !0
                        }).then((function (r) {
                            e.tabs.create({
                                url: "https://www.google.com/search?q=" + t,
                                index: r[0].index + 1
                            })
                        }))
                    }
                }));
                else if ("movetableft" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    r[0].index > 0 && e.tabs.move(r[0].id, {
                        index: r[0].index - 1
                    })
                }));
                else if ("movetabright" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    e.tabs.move(r[0].id, {
                        index: r[0].index + 1
                    })
                }));
                else if ("movetabtofirst" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (e) {
                    e[0].index > 0 && chrome.tabs.move(e[0].id, {
                        index: 0
                    })
                }));
                else if ("movetabtolast" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    e.tabs.move(r[0].id, {
                        index: -1
                    })
                }));
                else if ("gototab" === t) {
                    let r = () => {
                        e.tabs.create({
                            url: s.openurl
                        })
                    };
                    if (s.matchurl) {
                        let t = {
                            url: s.matchurl
                        };
                        s.currentWindow && (t.currentWindow = !0), e.tabs.query(t).then((function (t) {
                            t.length > 0 ? (e.tabs.update(t[0].id, {
                                active: !0
                            }), e.windows.update(t[0].windowId, {
                                focused: !0
                            })) : r()
                        }))
                    } else r()
                } else if ("gototabbytitle" === t) {
                    if (s.matchtitle) {
                        let r = {
                            title: s.matchtitle
                        };
                        s.currentWindow && (r.currentWindow = !0), e.tabs.query(r).then((function (r) {
                            r.length > 0 && (e.tabs.update(r[0].id, {
                                active: !0
                            }), e.windows.update(r[0].windowId, {
                                focused: !0
                            }))
                        }))
                    }
                } else if ("gototabbyindex" === t) s.matchindex && r(s.matchindex);
                else if ("newwindow" === t) e.windows.create();
                else if ("newprivatewindow" === t) e.windows.create({
                    incognito: !0
                });
                else if ("closewindow" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    e.windows.remove(r[0].windowId)
                }));
                else if ("fullscreen" === t) e.windows.getCurrent().then((function (r) {
                    var t = "fullscreen" === r.state ? "normal" : "fullscreen";
                    e.windows.update(r.id, {
                        state: t
                    })
                }));
                else if ("zoomin" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    e.tabs.getZoom(r[0].id).then((function (t) {
                        e.tabs.setZoom(r[0].id, t + .1)
                    }))
                }));
                else if ("zoomout" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    e.tabs.getZoom(r[0].id).then((function (t) {
                        e.tabs.setZoom(r[0].id, t - .1)
                    }))
                }));
                else if ("zoomreset" === t) e.tabs.query({
                    currentWindow: !0,
                    active: !0
                }).then((function (r) {
                    e.tabs.setZoom(r[0].id, 0)
                }));
                else if ("showlatestdownload" === t) chrome.downloads.search({
                    orderBy: ["-startTime"],
                    state: "complete"
                }, e => {
                    e && e.length > 0 && chrome.downloads.show(e[0].id)
                });
                else if ("back" === t) e.tabs.executeScript(null, {
                    code: "window.history.back()"
                });
                else if ("forward" === t) e.tabs.executeScript(null, {
                    code: "window.history.forward()"
                });
                else if ("reload" === t) e.tabs.executeScript(null, {
                    code: "window.location.reload()"
                });
                else if ("hardreload" === t) e.tabs.reload({
                    bypassCache: !0
                });
                else if ("top" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollTo({left: 0, top: 0, behavior: "' + n + '"})'
                });
                else if ("bottom" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "' + n + '"})'
                });
                else if ("scrollup" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollBy({left: 0, top: -50, behavior: "' + n + '"})'
                });
                else if ("scrollupmore" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollBy({left: 0, top: -500, behavior: "' + n + '"})'
                });
                else if ("pageup" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollBy({left: 0, top: -window.innerHeight, behavior: "' + n + '"})'
                });
                else if ("scrolldown" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollBy({left: 0, top: 50, behavior: "' + n + '"})'
                });
                else if ("scrolldownmore" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollBy({left: 0, top: 500, behavior: "' + n + '"})'
                });
                else if ("pagedown" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollBy({left: 0, top: window.innerHeight, behavior: "' + n + '"})'
                });
                else if ("scrollleft" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollBy({left: -50, top: 0, behavior: "' + n + '"})'
                });
                else if ("scrollleftmore" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollBy({left: -500, top: 0, behavior: "' + n + '"})'
                });
                else if ("scrollright" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollBy({left: 50, top: 0, behavior: "' + n + '"})'
                });
                else if ("scrollrightmore" === t) e.tabs.executeScript(null, {
                    code: 'window.scrollBy({left: 500, top: 0, behavior: "' + n + '"})'
                });
                else if ("openbookmark" === t || "openbookmarknewtab" === t || "openbookmarkbackgroundtab" === t || "openbookmarkbackgroundtabandclose" === t) e.bookmarks.search({
                    title: s.bookmark
                }).then((function (r) {
                    let n;
                    for (let e = r.length; e-- > 0;) {
                        let t = r[e];
                        if (t.url && t.title === s.bookmark) {
                            n = t;
                            break
                        }
                    }
                    "openbookmark" === t ? 0 === n.url.indexOf("javascript:") ? e.tabs.executeScript(null, {
                        code: decodeURIComponent(n.url.replace("javascript:", ""))
                    }) : e.tabs.update(null, {
                        url: decodeURI(n.url)
                    }) : "openbookmarkbackgroundtab" === t ? e.tabs.create({
                        url: decodeURI(n.url),
                        active: !1
                    }) : "openbookmarkbackgroundtabandclose" === t ? e.tabs.create({
                        url: decodeURI(n.url),
                        active: !1
                    }).then((function (r) {
                        var t = function (s, n, o) {
                            s === r.id && "complete" === n.status && (e.tabs.remove(r.id), e.tabs.onUpdated.removeListener(t))
                        };
                        e.tabs.onUpdated.addListener(t)
                    })) : e.tabs.create({
                        url: decodeURI(n.url)
                    })
                }));
                else {
                    if ("openapp" !== t) return !1;
                    s.openappid && e.management.launchApp(s.openappid)
                }
                return !0
            };
        e.commands.onCommand.addListener((function (e) {
            e = e.split("-")[1], s(e)
        })), e.runtime.onMessage.addListener((function (e, r, n) {
            const o = e.action;
            if ("getKeys" === o) {
                const r = e.url;
                let s = JSON.parse(localStorage.shortkeys),
                    n = [];
                return s.keys.length > 0 && s.keys.forEach(e => {
                    t(e, r) && n.push(e)
                }), Promise.resolve(n)
            }
            s(o, e)
        }))
    }).call(this, t(0))
}]);