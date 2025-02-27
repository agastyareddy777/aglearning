//// start of KPI Listing ///
function tableToCSV() {

    // Variable to store the final csv data
    let csv_data = [];

    // Get each row data
    let rows = document.querySelectorAll('#kpi-table-list tr');
    for (let i = 0; i < rows.length; i++) {

        // Get each column data
        let cols = rows[i].querySelectorAll('#kpi-table-list td, #kpi-table-list th');

        // Stores each csv row data
        let csvrow = [];
        for (let j = 0; j < cols.length; j++) {
            if(cols[j].innerHTML.indexOf('input')> -1){
                var res = cols[j].childNodes[0].checked
                csvrow.push(res);
            }
            else if(cols[j].innerHTML.indexOf('button')> -1){
                var res = cols[j].childNodes[0].dataset.value;
                csvrow.push(res);
            }
            else{
                csvrow.push(cols[j].textContent);
            }
        }

        // Combine each column value with comma
        csv_data.push(csvrow.join(","));
    }

    // Combine each row data with new line character
    csv_data = csv_data.join('\n');

    // Call this function to download csv file  
    downloadCSVFile(csv_data);

}

function downloadCSVFile(csv_data) {

    // Create CSV file object and feed
    // our csv_data into it
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    // Create to temporary link to initiate
    // download process
    let temp_link = document.createElement('a');

    // Download csv file
    temp_link.download = "kpi.csv";
    let url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
}

function OpenLeftModalContent(){
    document.getElementById('view-details-modal').setAttribute("title",this.id);
    const list = document.getElementById("view-detail-table");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    var uth = document.createElement('tr');
        var ukeyth = document.createElement('th');
        ukeyth.textContent = "key";
        var uvalth= document.createElement('th');
        uvalth.textContent = "value";
        uth.appendChild(ukeyth);
        uth.appendChild(uvalth);
        document.getElementById('view-detail-table').appendChild(uth);
    var useKey = this.id;
    useKey = useKey.replace("u-","");
    //console.log(useKey);
    var useDetail = window.kpiList[useKey]["detail"] || {};
    //console.log(useDetail);
    for(key in useDetail){
        var utr = document.createElement('tr');
        var ukeytd = document.createElement('td');
        ukeytd.textContent = key;
        var uvaltd = document.createElement('td');
        uvalinput = document.createElement('input');
        uvalinput.type = "text";
        uvalinput.value = useDetail[key];
        uvaltd.appendChild(uvalinput);
        utr.appendChild(ukeytd);
        utr.appendChild(uvaltd);
        document.getElementById('view-detail-table').appendChild(utr);

    }
    document.getElementById('left-modal-content').style.display = 'block'
    document.getElementById('left-content').style.display = 'none';
}
function OpenLeftContent(){
    document.getElementById('left-modal-content').style.display = 'none'
    document.getElementById('left-content').style.display = 'block';
}
function SaveKPIChanges(){
    var updateKey = document.getElementById("view-details-modal").title;
    updateKey = updateKey.replace('u-','');
    var updateTabletd = document.querySelectorAll("#view-detail-table td");
    var updateTableinput = document.querySelectorAll("#view-detail-table input");
    window.kpiList[updateKey]['detail'] = {};
    for(i=0;i<updateTableinput.length;i++){
        var newKey = updateTabletd[i*2].textContent;
        var newVal = updateTableinput[i].value;
        window.kpiList[updateKey]['detail'][newKey] = newVal;
    }

    document.getElementById('left-modal-content').style.display = 'none'
    document.getElementById('left-content').style.display = 'block';
}

document.getElementById('view-details-modal-close').addEventListener("click", OpenLeftContent);
document.getElementById('view-details-modal-save').addEventListener("click", SaveKPIChanges);

document.getElementById('jsonInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    //declare kpi table values here
    var kpiName = "n/a";
    var kpiFlag = false;
    var kpiDetail = {};
    var defaultText = {
        'pageView1' : 'Ability to view no of times user visited the" ',
        'pageView2' : ' "Page',
        'link1' : 'Ability to know how many users click on " ',
        'link2' : ' "'
    }
    function createKPIList(t){
        //console.log(t)
        kpiName = window.kpiList[t]["kpi"] || "n/a"; 
        kpiFlag = window.kpiList[t]["flag"] || false;
        kpiDetail = window.kpiList[t]["detail"] || {};
        var kpi = window.kpiList[t];
        kpiValue = JSON.stringify(kpi);
        kpiValue = kpiValue.replaceAll(',','');
        var checkboxtd = document.createElement('td');
        var checkboxinput = document.createElement('input');
        checkboxinput.type = "checkbox";
        if(kpiFlag == false){checkboxinput.checked = "checked"}
        checkboxtd.appendChild(checkboxinput);
        //console.log(checkboxtd)
        var kpitd = document.createElement('td');
        kpitd.textContent = kpiName;
        var destd = document.createElement('td');
        //console.log(destd)
        if(kpiName == 'pageView'){destd.textContent = defaultText['pageView1']+kpiDetail.name+defaultText['pageView2']}
        else if(kpiName == 'linkClick'){destd.textContent = defaultText['link1']+kpiDetail.linkname+defaultText['link2']}
        var btntd = document.createElement('td');
        var vdbtn = document.createElement('button');
        vdbtn.id = "u-"+t;
        vdbtn.setAttribute("data-value",kpiValue);
        var vdu = document.createElement('u');
        vdu.textContent = "view detail";
        vdbtn.appendChild(vdu);
        btntd.appendChild(vdbtn);
        //console.log(btntd)
        var htr = document.createElement('tr');
        //console.log(htr)
        htr.appendChild(checkboxtd);
        htr.appendChild(kpitd);
        htr.appendChild(destd);
        htr.appendChild(btntd);
        document.getElementById('kpi-table-list').appendChild(htr);
        var test = 'u-'+t;
        document.getElementById(test).addEventListener("click", OpenLeftModalContent);
    }

    function pageViewKPI(t){
    }

    function linkClickKPI(t){
    
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const fileContent = event.target.result;
        try {
          const jsonData = JSON.parse(fileContent);
          window.kpiList = jsonData || {};
          for( key in jsonData){
            //console.log(key);
            if(jsonData[key]['kpi'] == 'pageView'){createKPIList(key); pageViewKPI(key)}
            else if(jsonData[key]['kpi'] == 'linkClick'){createKPIList(key);linkClickKPI(key)}
          }
          document.getElementById('kpi-buttons').style.display = 'block';

        } catch (error) {
          document.getElementById('output').textContent = 'Error parsing JSON: ' + error.message;
        }
      };
      
      reader.readAsText(file);
    }
  });

  ////Start of TSD creation
  var objMapper = {
    'name': 'vzdl.page.name',
    'linkname': 'vzdl.page.link',
    'url':'vzdl.page.url',
    'sourceChannel':'vzdl.page.sourceChannel',
    'displayChannel':'vzdl.page.displayChannel'
  }

  var objVariable = {
    'vzdl.page.name':'page/evar70',
    'vzdl.page.link':'eVar27',
    'vzdl.page.url':'eVar11',
    'vzdl.page.sourceChannel':'eVar1',
    'vzdl.page.displayChannel':'eVar2'
  }
  function createVzdl(key,p,value){
    console.log(p);
    console.log(value);
    var path = objMapper[p];
    console.log(path);
    if(!path){
        return 
    }
    var path1 = path.split('.');
    window.kpiList[key]['dataLayer'] = window.kpiList[key]['dataLayer'] || {};
    window.kpiList[key]['mapper'] = window.kpiList[key]['mapper'] || {};
    window.kpiList[key]['mapper'][path] = window.kpiList[key]['mapper'][path] || {};
    var pt = 0;
    var pk = window.kpiList[key]['dataLayer']
    while(pt!=path1.length-1){
        pk[path1[pt]] = pk[path1[pt]] || {};
        pk = pk[path1[pt]];
        pt++
    }
    pk[path1[path1.length-1]] = value;
    var variable = objVariable[path];
    window.kpiList[key]['mapper'][path]['value'] = value;
    window.kpiList[key]['mapper'][path]['variable'] = variable;
  }

  function genearateTSD(){
    document.getElementById('tsd-content').style.display = "block";
    var tsdList = window.kpiList;
    var tsdName = "n/a";
    var tsdFlag = false;
    var tsdDetail = {};
    var tsdDesc = {
        'pageView1' : 'Trigger "page view" event whenever user lands or reloads the " ',
        'pageView2' : ' "Page',
        'link1' : 'Add the following data-track attribute on" ',
        'link2' : ' " element'
    }
    for(key in tsdList){
        tsdName = window.kpiList[key]["kpi"] || "n/a";
        tsdFlag = window.kpiList[key]["flag"] || false;
        tsdDetail = window.kpiList[key]["detail"] || {};
        for(key1 in tsdDetail){
            createVzdl(key, key1,tsdDetail[key1]);
        }
        var cnt = key.replace('kpi','');
        var section1h4 = document.createElement('h4');
        if(tsdName == 'pageView'){section1h4.textContent= cnt+"."+tsdDesc['pageView1']+tsdDetail.name+tsdDesc['pageView2']}
        else if(tsdName == 'linkClick'){section1h4.textContent = cnt+"."+tsdDesc['link1']+tsdDetail.linkname+tsdDesc['link2']}
        document.getElementById('tsd-display-content').appendChild(section1h4);
        var section2h4 = document.createElement('h4');
        section2h4.textContent = "Developer Instructions";
        section2h4.style.color = "blue";
        document.getElementById('tsd-display-content').appendChild(section2h4);
        var vzdlpre = document.createElement('pre');
        vzdlpre.style.display = 'block'
        if(tsdName == 'pageView'){vzdlpre.textContent = JSON.stringify(kpiList[key].dataLayer, null, 2);}
        else if(tsdName == 'linkClick'){vzdlpre.textContent = 'data-track="'+tsdDetail.linkname+'"'}
        document.getElementById('tsd-display-content').appendChild(vzdlpre);
        var section3h4 = document.createElement('h4');
        section3h4.textContent = "Variable Mapping Details"
        section3h4.style.color = "blue"
        document.getElementById('tsd-display-content').appendChild(section3h4);
        var vartab = document.createElement('table');
        var vartabId = "tableContainer-"+key;
        vartab.id = vartabId;
        vartab.style.alignItems = "center"
        document.getElementById('tsd-display-content').appendChild(vartab);
        var variableList = window.kpiList[key]['mapper'];
        for(k in variableList){
            var vartr = document.createElement('tr');
            var pathth = document.createElement('th');
            pathth.textContent = k;
            var varth = document.createElement('th');
            varth.textContent = variableList[k]['variable'];
            var valth = document.createElement('th');
            valth.textContent = variableList[k]['value'];
            vartr.appendChild(pathth);
            vartr.appendChild(varth);
            vartr.appendChild(valth);
            document.getElementById(vartabId).appendChild(vartr);
        }
        var hr = document.createElement('hr');
        document.getElementById('tsd-display-content').appendChild(hr);
        
  }
}
  document.getElementById('generate-tsd').addEventListener('click', genearateTSD)
  document.getElementById("tsd-pdf").addEventListener('click', () => {
    const element = document.querySelector('#tsd-content');
    const options = {
        filename: 'TSD.pdf',
        margin: 0,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { 
            unit: 'in', 
            format: 'letter', 
            orientation: 'portrait' 
        }
    };
    html2pdf().set(options).from(element).save();
});
