 document.getElementById('read_csv').addEventListener("click", readCSV);
 function readCSV() {
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select a CSV file.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        const contents = e.target.result;
        const lines = contents.split('\n');
        let htmlContent = "<table border='1' id='csvContent_table'>";
        for (let i = 0; i < lines.length; i++) {
            let row = lines[i].replaceAll('\n','');
            row = row.split(',');
            if(row[0]!=''){
                htmlContent += "<tr>";
                htmlContent += "<td> <input class='checkbox' onclick='handleClick(this)' type='checkbox' name="+row[0]+"></td>";
                htmlContent += "<td class='datalayer_path'>" + row[0] + "</td>";
                if(row[1]){
                    htmlContent += "<td style='display: none;' class='datalayer_pathtype'>"+row[1]+"</td>";
                }
                else{
                    htmlContent += "<td style='display: none;' class='datalayer_pathtype'>String</td>";
                }
                if(row[2]){
                    htmlContent += "<td style='display: none;' class='datalayer_value'>"+row[2]+"</td>";
                }
                else{
                    htmlContent += "<td style='display: none;' class='datalayer_value'>String</td>";
                }
                if(row[3]){
                    htmlContent += "<td style='display: none;' class='datalayer_description'>"+row[3]+"</td>";
                }
                else{
                    htmlContent += "<td style='display: none;' class='datalayer_description'>set the value</td>";
                }
                htmlContent += "</tr>";
        }
    }
        htmlContent += "</table>";
        document.getElementById('csvContent').innerHTML = htmlContent;
    };
    reader.readAsText(file);  
}
function handleClick(e){
    if(e.checked == true){
        e.closest("tr").classList.add("checked");
    }
    if(e.checked == false){
        e.closest("tr").classList.remove("checked");
    }
}
document.getElementById('copyTable').addEventListener("click", copyTable);
function copyTable() {
    const table = document.getElementById('tableContainer');
    const range = document.createRange();
    range.selectNode(table);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      alert('Table copied to clipboard!');
    } catch (error) {
      alert('Unable to copy the table. Please copy manually.');
    }

    selection.removeAllRanges();
  }
var dynamicJSON;
document.getElementById('generate_file').addEventListener("click", generateView);
function generateView(){
    var tr = document.getElementsByClassName('checked');
    var k = [];
    if(tr.length == 0){
        var td_name = document.getElementsByClassName('datalayer_path');
        var td_value = document.getElementsByClassName('datalayer_value');
        for(i=0;i<td_name.length;i++){
            k.push( {"name": td_name[i].innerHTML,"value":td_value[i].innerHTML});
        }
    }
    else{
        for(i=0;i<tr.length;i++){
            k.push( {"name": tr[i].childNodes[1].innerHTML,"value":tr[i].childNodes[3].innerHTML});
        }
    }
    dynamicJSON = {};
    function rerun(path, value, length,index,res){
        var ch = value.split(".");
        if(length-1 > index){
            path[ch[index]] = path[ch[index]] || {};
            var t = index;
            rerun(path[ch[index]], value, length,t+1,res);
        }
        else{
            path[ch[index]] = res;
        }
        return ;
    }
    if(tr.length > 0){ var start = 0} else { start = 1}
    console.log(k);
    document.getElementById('tableContainer').innerHTML = "";
    var desc_table = document.getElementById('tableContainer');
    var tr_i = document.createElement('tr');
    var th_dlp = document.createElement('th');
    th_dlp.innerHTML = 'Data layer Path';
    var th_desc = document.createElement('th');
    th_desc.innerHTML = 'Description';
    tr_i.appendChild(th_dlp);
    tr_i.appendChild(th_desc);
    desc_table.appendChild(tr_i);
    for(i=start;i<k.length;i++){
        if(k[i].name!=''){
            var tr= document.createElement('tr');
            var td_name = document.createElement('td');
            td_name.innerHTML = k[i].name;
            var td_desc = document.createElement('td');
            td_desc.innerHTML = "set the varible to ";
            tr.appendChild(td_name);
            tr.appendChild(td_desc);
            desc_table.appendChild(tr);
            var pk = k[i].name;
            var res = k[i].value;
            pk = pk.split('.');
            if(pk.length > 1){
                dynamicJSON[pk[0]] = dynamicJSON[pk[0]] || {};
                var c = rerun(dynamicJSON[pk[0]], k[i].name, pk.length, 1,res);
            }
            if(pk.length == 1){
                dynamicJSON[pk[0]] = dynamicJSON[pk[0]] || "";
            }
        }
    }

    // Display JSON data as formatted code
    var jsonContainer = document.getElementById("jsonContainer");
    jsonContainer.textContent = JSON.stringify(dynamicJSON, null, 2);

    // Copy JSON data to the clipboard when the button is clicked
    var copyButton = document.getElementById("copyButton");
    copyButton.addEventListener("click", function () {
        copyToClipboard(jsonContainer.textContent);
        //alert("JSON copied to clipboard!");
    });

function copyToClipboard(text) {
    var tempElement = document.createElement("textarea");
    tempElement.value = text;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
}
}
//Android
document.getElementById('generate_android_file').addEventListener("click", generateAndroidView);
function generateAndroidView(){
    var tr = document.getElementsByClassName('checked');
    var k = [];
    if(tr.length == 0){
        var td = document.getElementsByClassName('datalayer_path');
        for(i=0;i<td.length;i++){
            k.push( {"name": td[i].innerHTML});
        }
    }
    else{
        for(i=0;i<tr.length;i++){
            k.push( {"name": tr[i].childNodes[1].innerHTML});
        }
    }
    dynamicJSON = {};
    function rerun(path, value, length,index){
        var ch = value.split(".");
        if(length-1 > index){
            var app_val = "put('"+ch[index]+"', new HashMap <String, Object>() {";
            path[app_val] = path[app_val] || {};
            var t = index;
            rerun(path[app_val], value, length,t+1);
        }
        else{
            var app_val1 = "put('"+ch[index]+"', '<sample>');"; 
            path[app_val1] = "";
        }
        return ;
    }
    if(tr.length > 0){ var start = 0} else { start = 1}
    for(i=start;i<k.length;i++){
        if(k[i].name!=''){
        var pk = k[i].name;
        pk = pk.split('.');
        if(pk.length > 1){
            var app_val = "xdmData.put('"+pk[0]+"', new HashMap <String, Object>() {"; 
        dynamicJSON[app_val] = dynamicJSON[app_val] || {};
        var c = rerun(dynamicJSON[app_val], k[i].name, pk.length, 1);
        }
        if(pk.length == 1){
            var app_val1 = "xdmData.put('"+pk[0]+"','<sample>');";
            dynamicJSON[app_val1] = dynamicJSON[app_val1] || "";
        }
        }
    }

    // Display JSON data as formatted code
    var jsonContainer = document.getElementById("jsonContainer");
    let cleanText = JSON.stringify(dynamicJSON, null, 2);
    cleanText = cleanText.substring(1,cleanText.length-2);
    cleanText = cleanText.replaceAll('"',"");
    cleanText = cleanText.replaceAll(',',"");
    cleanText = cleanText.replaceAll(":","");
    cleanText = cleanText.replaceAll("\/","");
    cleanText = cleanText.replaceAll("}","}});");
    cleanText += '\n\nExperienceEvent experienceEvent = new ExperienceEvent.Builder().setXdmSchema(xdmData).build();\nEdge.sendEvent(experienceEvent, null);'
    jsonContainer.textContent = cleanText;

    // Copy JSON data to the clipboard when the button is clicked
    var copyButton = document.getElementById("copyButton");
    copyButton.addEventListener("click", function () {
        copyToClipboard(jsonContainer.textContent);
        //alert("JSON copied to clipboard!");
    });

function copyToClipboard(text) {
    var tempElement = document.createElement("textarea");
    tempElement.value = text;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
}
}
//iOS
document.getElementById('generate_ios_file').addEventListener("click", generateiOSView);
function generateiOSView(){
    var tr = document.getElementsByClassName('checked');
    var k = [];
    if(tr.length == 0){
        var td = document.getElementsByClassName('datalayer_path');
        for(i=0;i<td.length;i++){
            k.push( {"name": td[i].innerHTML});
        }
    }
    else{
        for(i=0;i<tr.length;i++){
            k.push( {"name": tr[i].childNodes[1].innerHTML});
        }
    }
    dynamicJSON = {};
    function rerun(path, value, length,index){
        var ch = value.split(".");
        if(length-1 > index){
            var app_val = "'"+ch[index]+"'";
            path[app_val] = path[app_val] || {};
            var t = index;
            rerun(path[app_val], value, length,t+1);
        }
        else{
            var app_val1 = "'"+ch[index]+"'"
            path[app_val1] = "<sample>";
        }
        return ;
    }
    if(tr.length > 0){ var start = 0} else { start = 1}
    for(i=start;i<k.length;i++){
        if(k[i].name!=''){
        var pk = k[i].name;
        pk = pk.split('.');
        if(pk.length > 1){
            var app_val = "xdmData['"+pk[0]+"'] ="; 
        dynamicJSON[app_val] = dynamicJSON[app_val] || {};
        var c = rerun(dynamicJSON[app_val], k[i].name, pk.length, 1);
        }
        if(pk.length == 1){
            var app_val1 = "xdmData['"+pk[0]+"']";
            dynamicJSON[app_val1] = "'<sample>'remove";
        }
        }
    }

    // Display JSON data as formatted code
    var jsonContainer = document.getElementById("jsonContainer");
    let cleanText = JSON.stringify(dynamicJSON, null, 2);
    cleanText = cleanText.replaceAll('"',"");
    cleanText = cleanText.replaceAll('=:',"=");
    cleanText = cleanText.substring(1,cleanText.length-2);
    cleanText = cleanText.replaceAll("{","[");
    cleanText = cleanText.replaceAll("}","]");
    cleanText = cleanText.replaceAll("],","]");
    cleanText = cleanText.replaceAll("\/","");
    cleanText = cleanText.replaceAll("remove,","");
    cleanText+='\n \n let experienceEvent = ExperienceEvent(xdm: xdmData) \n Edge.sendEvent(experienceEvent: experienceEvent)';  
    jsonContainer.textContent = cleanText;

    // Copy JSON data to the clipboard when the button is clicked
    var copyButton = document.getElementById("copyButton");
    copyButton.addEventListener("click", function () {
        copyToClipboard(jsonContainer.textContent);
        //alert("JSON copied to clipboard!");
    });

function copyToClipboard(text) {
    var tempElement = document.createElement("textarea");
    tempElement.value = text;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
}
}

document.getElementById('jsonInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.onload = function(event) {
        const fileContent = event.target.result;
        try {
          const jsonData = JSON.parse(fileContent);
          document.getElementById('output').textContent = JSON.stringify(jsonData, null, 2);
          var schema_json = JSON.stringify(jsonData, null, 2);
          function jsonPathToLines(jsonObj, parentPath = '') {
              let lines = [];
          
              if (typeof jsonObj === 'object') {
                  for (const key in jsonObj) {
                      const value = jsonObj[key];
                      const newPath = parentPath ? `${parentPath}.${key}` : key;
          
                      if (typeof value === 'object' && value !== null) {
                          lines = lines.concat(jsonPathToLines(value, newPath));
                      } else {
                          lines.push(newPath);
                      }
                  }
              }
          
              return lines;
          }
          
          // Example JSON object
          const jsonObject = JSON.parse(schema_json);
          
          const lines = jsonPathToLines(jsonObject);
          
          lines.forEach(line => {
              console.log(line);
          });
          function convertArrayOfRowsToCSV(rows) {
              const separator = ','; // CSV separator
              console.log(rows);
              // Build CSV content
              var csvContent = "";
              for(i=0;i<rows.length;i++){
                  csvContent+= rows[i]+',\n'
              }
              
              return csvContent;
            }
        
            function downloadCSV(csvContent, fileName) {
              const blob = new Blob([csvContent], { type: 'text/csv' });
              const link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              link.download = fileName;
              link.click();
            }
        
            const data = lines;
        
            document.getElementById('download_csv').addEventListener('click', () => {
              const csvContent = convertArrayOfRowsToCSV(data);
              console.log(csvContent)
              downloadCSV(csvContent, 'data.csv');
            });
        } catch (error) {
          document.getElementById('output').textContent = 'Error parsing JSON: ' + error.message;
        }
      };
      
      reader.readAsText(file);
    }
  });
