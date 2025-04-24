const correctValues1 = {
	
    service: "Process Liquid",
    pressure:"0.2",
    pressureTransmitter: "Absolute pressure",
   
    outputSignal: "4~20mA",
    overPressure:"2",
    enclosure: "IP67",
   accuracy1: "0.075",
    scanTime: "10mS", 
    
    responseTime:"100",
    body1:"SS 304",
    processConnection:'12.5 mm NPT(F)',
    conduitEntrySize:'12.5 mm NPT(F)',
    approvalType:"safe area",
    zerospan: "Yes",
    transientprot: "Yes",
    custom:"Yes"
     
};

const calibratedSpan1 = [0.2, 1, 1.5]; // number[]
const adjustableSpan1 = [0.2, 1, 1.5];



const validKeyNumbers1 = ["PSHH_1", "PSHH_2", "PSLL_1", "PSLL_2"];
function transmitter()
{
	let tags = ["LSL_1", "LSH_1", "PSHH_1", "PSLL_1", "TSHH_1", "PSLL_2", "PSHH_2"];
	var services1 = ["water", "Steam", "Process Liquid"];
let str=`


<div class="container mt-4 step1" >
	<h3><center style="margin-bottom:10px;">PRESSURE AND DIFFERENTIAL PRESSURE TRANSMITTER TECHNICAL SPECIFICATIONS</center></h3>
        <table class="table table-bordered table-hover" style="margin-bottom: 0px; border-width: 3px;border-color: #343a40;">
            <thead class="table-light">
                <tr>
				    <th rowspan="6">Temperature / Pressure / Differential Pressure Transmitter Specification Data Sheet</th>
				    <th>Sheet</th>
				    <th>1</th>
				    <th>of</th>
				    <th>1</th>
				</tr>
				
				<tr>
				    <th>Spec No.</th>
				    <th><input type="text" id="spec" placeholder="" class="form-control"></th>
				    <th>Rev</th>
				    <th><input type="text" id="Rev" placeholder="" class="form-control"></th>
				</tr>
				<tr>
				    <th>Contract No.</th>
				    <th><input type="text" id="contract" placeholder="" class="form-control"></th>
				    <th>P.O</th>
				    <th><input type="text" id="po" placeholder="" class="form-control"></th>
				</tr>
				<tr>
				    <th>Req.</th>
				    <th><input type="text" id="req" placeholder="" class="form-control"></th>
				    <th>By</th>
				    <th><input type="text" id="by" placeholder="" class="form-control"></th>
				</tr>
				<tr>
				    <th>Checked.</th>
				    <th><input type="text" id="checked" placeholder="" class="form-control"></th>
				    <th>Approved</th>
				    <th><input type="text" id="approved" placeholder="" class="form-control"></th>
				</tr>

            </thead>
            <tbody>
            	<tr>
                   <td ><b>Customer :</b></td>
                   <td colspan="6"><input type="text" id="customer" placeholder="" class="form-control"></td>
                    
                </tr>
                <tr>
                   <td ><b>Project :</b></td>
                   <td colspan="6"><input type="text" id="project" placeholder="" class="form-control"></td>
                   
                </tr>
                <tr>
                   <td ><b>Plant Area :</b></td>
                   <td colspan="6"><input type="text" id="plantarea" placeholder="" class="form-control"></td>
                   
                </tr>
                 <tr>
                   <td ><b>Unit:</b></td>
                   <td colspan="6"><input type="text" id="unit" placeholder="" class="form-control"></td>
                </tr>
                <tr>
                   <td rowspan="2"><b>GENERAL :</b></td>
                   <td ><b>TAG NO :</b></td>
                   <td colspan="5">
                   <select id="stdTagsDropdown" class="form-select">
				<option value="">----------------Select a tag-------------------</option>
				</select>
                   
                   </td>
                </tr>
                 <tr>
                  <td ><b>SERVICE :</b></td>
                   <td colspan="5">
                   <select id="ServiceDropdown" class="form-select">
				<option value="">----------------Select a service-------------------</option>
				</select>
                   
                   </td>
                 </tr>
                  <tr>
                   <td rowspan="4"><b>PROCESS CONDITIONS :</b></td>
                    <td ><b></b></td>
                  <td ><b>MINIMUM</b></td>
                    <td ><b>NORMAL</b></td>
                      <td ><b>MAXIMUM</b></td>
                      <td ><b>DESIGN</b></td>
                      <td ><b>UNIT</b></td>
                </tr>
			      <tr>
			      <th>Pressure</th>
			      <td><input type="text" id="preMin" placeholder="" class="form-control"></td>
			      <td>0.8</td>
			       <td>1</td>
			      <td>1.5</td>
			      <td>Bar</td>
			    </tr>
			    <tr>
			      <th>Process Temperature</th>
			     <td>20</td>
			      <td>135</td>
			       <td>150</td>
			      <td>200</td>
			      <td>Degree Celsius</td>
			    </tr>
			    <tr>
			      <th>Ambient Temperature</th>
			      <td>5</td>
			      <td>35</td>
			       <td>47</td>
			      <td>75</td>
			      <td>Degree Celsius</td>
			    </tr>
			    <tr>
			    <td rowspan="15"></td>
			      <th >Manufacturer</th>
			      <td colspan="5">Rosemount / ABB / E&H / Yokogawa</td>
			    </tr>
			    <tr>
			      
			      <th>Model No.</th>
			      <td colspan="5">9205T1AA2B1ABM5D4P8Q4Q8</td>
			    </tr>
			    <tr>
			      
			      <th>Pressure Transmitter Type</th>
			      <td colspan="5">
			      <select id="pressureTransmitter" class="form-select">
                <option value="0">------------------Select Pressure transmitter type----------------</option>
				  <option value="Gauge">Gauge</option>
				  <option value="Absolute Pressure">Absolute Pressure</option>
				  
				</select>
			      </td>
			    </tr>
			    <tr>
			      
			      <th>Calibrated Span</th>
			      <td colspan="5">
			      <select id="calibratedSpan" class="form-select">
                <option value="-1">------------------Select calibrated span----------------</option>
				  <option value="0.2">0.2</option>
				  <option value="1">1</option>
				   <option value="1.5">1.5</option>
				</select>
				</td>
			    </tr>
			    <tr>
			     
			      <th>Adjustable Range</th>
			         <td colspan="5">
			       <select id="adjustableRange" class="form-select">
                <option value="-1">------------------Select adjustable range----------------</option>
				  <option value="0">0</option>
				  <option value="1">1</option>
				   <option value="1.5">1.5</option>
				</select>
				</td>
			    </tr>
			    <tr>
			     
			      <th>Output Signal</th>
			      <td colspan="5">
			       <select id="outputSignal" class="form-select">
                <option value="0">------------------Select output signal------------------</option>
				  <option value="4~20mA with Digital Signal Based on HART Protocol">4~20mA with Digital Signal Based on HART Protocol </option>
				  <option value="4~20mA">4~20mA </option>
				   <option value="1~5VDC">1~5VDC</option>
				</select>
			  </td>
			    </tr>
			    <tr>
			     
			      <th>Over Pressure Rating(bar)</th>
			      <td colspan="5"><input type="text" id="overpressure" placeholder="" class="form-control"></td>
			    </tr>
			    <tr>
			     
			      <th>Enclosure Class</th>
			      <td colspan="5">
				 <select id="enclosure" class="form-select">
                <option value="0">------------------Select Enclosure------------------</option>
				  <option value="IP65"> IP65</option>
				  <option value="IP67">IP67</option>
				   <option value="IP68">IP68</option>
				</select>
				</td>
			    </tr>
			    <tr>
			     
			      <th>Power Supply</th>
			      <td colspan="5">24 VDC with load 600 Ohms</td>
			    </tr>
			    <tr>
			      
			      <th>Accuracy</th>
			      <td colspan="5">
			      <select id="accuracy" class="form-select">
                  <option value="0">------------------Select accuracy------------------</option>
				  <option value="0.075">± 0.075% of span from 10:1 turn down</option>
				  <option value="0.5">0.5% </option>
				   
				</select>
			      
			    </tr>
			    <tr>
			      
			      <th>Rangeability</th>
			      <td colspan="5">100:1 OR 50:1</td>
			    </tr>
			    <tr>
			      
			      <th>Scan Time</th>
			      <td colspan="5">
			       <select id="scanTime" class="form-select">
                  <option value="0">------------------Select Scan time------------------</option>
				  <option value="22 times per second">22 times per second</option>
				  <option value="10ms">10ms</option>
				   <option value="1ms">1ms</option>
				</select>
			     </td>
			    </tr>
			    <tr>
			       <th>Power Supply Effect</th>
			      <td colspan="5">Less than ± 0.005% of calibrated span per volt</td>
			    </tr>
			    <tr>
			       <th>Electromagnetic Compatibility (EMC)</th>
			      <td colspan="5">EN 61326 and NAMUR NE-21.</td>
			    </tr>
			    <tr>
			       <th>Response Time(mSec)</th>
			      <td colspan="5"><input type="text" id="responseTime" placeholder="" class="form-control"></td>
			    </tr>
			   <tr>
			     <th rowspan="10">BODY</th>
			   <th>Diagnostics</th>
			   <td colspan="5">Standard Self Diagnostics</td></tr>
			    <tr>
			    <th>Body</th>
			    <td colspan="5"><input type="text" id="bodyText" placeholder="" class="form-control"></td></tr>
			    <tr>
			    <th>Drain / Vent</th><td colspan="5">NA</td></tr>
			    <tr>
			   <th>Process Connection</th><td colspan="5">
			   <select id="processCon" class="form-select">
                  <option value="0">------------------Select process connection------------------</option>
				  <option value='12.5 mm NPT(F)'>12.5 mm NPT(F)</option>
				  <option value='6.25 mm NPT(F)'>6.25 mm NPT(F)</option>
				 
				</select>
			   
			 </td></tr>
			    <tr>
			   <th>Process Flange</th><td colspan="5">NA</td></tr>
			    <tr>
			    <th>Wetted O-Ring</th><td colspan="5">NA</td></tr>
			    <tr>
			    <th>Housing</th><td colspan="5">Polyurethane-covered Aluminum</td></tr>
			    <tr>
			    <th>Bolts</th><td colspan="5">To be provided</td></tr>
			    <tr>
			   <th>Mounting Brackets</th><td colspan="5">Coplanar Flange Bracket for 2-in. Pipe or Panel Mounting, SST</td></tr>
			    <tr>
			   <th>Conduit Entry Size</th><td colspan="5"><input type="text"  class="form-control" id="conduitEntrySize" placeholder=""></td></tr>
			    <tr>
			    <th rowspan="2">ELEMENT</th>
			  <th>Type</th><td colspan="5" >RTD Pt 100</td></tr>
			    <tr>
			   <th >Fill Fluid</th><td colspan="5">Manganese oxide</td></tr>
			    <tr>
			      <th rowspan="5">OPTIONS</th>
			    <th>Cert/Approval Type</th><td colspan="5"><input type="text" id="approvalType" class="form-control" placeholder=""></td></tr>
			    <tr>
			  <th>Display</th>
			  <td colspan="5">LCD Display</t></tr>
			    <tr>
			    <th>Zero and Span Adjust</th>
			    <td colspan="5">
			    <select id="zerospan" class="form-select">
                  <option value="0">------------------Select zero and span adjust------------------</option>
				  <option value="Yes"> Yes</option>
				  <option value="No">No</option>
				 
				</select>
			   </td></tr>
			    <tr>
			    <th>Transient Protection</th>
			    <td colspan="5">
			   <select id="transientprotection" class="form-select">
                  <option value="0">------------------Select transient protection------------------</option>
				  <option value="Yes"> Yes</option>
				  <option value="No">No</option>
				 
				</select>
			    </td></tr>
			    <tr>
			   <th>Custom Configuration</th>
			   <td colspan="5">
				 <select id="customCof" class="form-select">
                  <option value="0">------------------Select custom configuration------------------</option>
				  <option value="Yes"> Yes</option>
				  <option value="No">No</option>
				</select>
				</td></tr>
			    <tr>
			    <th rowspan="4">MANIFOLD</th>
			    <th>Manufacturer</th><td colspan="5">To be provided</td></tr>
			    <tr>
			    <th>Model No.</th>
			    <td colspan="5">To be provided</td></tr>
			    <tr>
			    <th>Manifold Style</th>
			    <td colspan="5">To be provided</td></tr>
			    <tr>
			    <th>Manifold Type</th>
			    <td colspan="5">To be provided</td></tr>
			    <tr>
			    <th >NOTES</th>
			  <th colspan="5"><i>Vendor will size the transmitter based on process data provided by Customer</i></th></tr>

            </tbody>
        </table>
        <div class="container step3" style="margin-top: 50px;">
    <div class="row" style="border-style: solid;">
     <div class="notes">
            <h5>Notes:</h5>
            <ol type="I">
               <li><b> In case it becomes necessary to use a DP transmitter for pressure measurement, then a 3-valve manifold should be used in place of 2-valve manifold.</b>
  </li>
    <li><b>
Type of transmitter i.e., gauge pressure or absolute pressure shall be as per specific requirement and as approved by Consultant engineer.</b>
           </li>
            </ol>
        </div>
        
    </div>
         <button class="btn btn-success " id="lastPage"  style="float: right; margin-top: 10px; background-color: teal;margin-right:10px">NEXT</button>
	<button class="btn btn-success " id="download" style="margin-right:10px" >PDF DOWNLOAD</button>
             <button class="btn btn-success " id="submitBtn"  data-bs-toggle="modal" data-bs-target="#myModal" style="margin-right:10px">VERIFY</button>

         <br>
          
          
          
          
	   <!-- The Modal -->
	<div class="modal" id="myModal">
	  <div class="modal-dialog">
	    <div class="modal-content">
	
	      <!-- Modal Header -->
	      <div class="modal-header modalHeader" >
	        <h4 class="modal-title">Message Box</h4>
	        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
	      </div>
	
	      <!-- Modal body -->
	      <div class="modal-body" id="modalBody">
	        Modal body..
	      </div>
	
	      <!-- Modal footer -->
	      <div class="modal-footer">
	        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
	      </div>
	
	    </div>
	  </div>
	</div>

    
    </div>
   
`;
$("#main-div").html(str);



let tagsdropdown = document.getElementById("stdTagsDropdown");

tags.forEach(tag => {
    let option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    tagsdropdown.appendChild(option);
});

let servicesdropdown = document.getElementById("ServiceDropdown");

services1.forEach(tag => {
    let option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    servicesdropdown.appendChild(option);
});

$("#lastPage").click(function(){
	SinglePhase();
  });
var id=0;
$("#submitBtn").click(function(){
	$("#modalBody").css("color", "brown");

	const spec = $("#spec").val().trim();
	const Rev1 = $("#Rev").val().trim();
	const contract = $("#contract").val().trim();
	const po = $("#po").val().trim();
	const req = $("#req").val().trim();
	const by = $("#by").val().trim();
	const checked = $("#checked").val().trim();
	const approved = $("#approved").val().trim();
	
	const customer = $("#customer").val();
	const project = $("#project").val();
	const plant = $("#plantarea").val();
	const unit = $("#unit").val();
	
	const keyNumber = $("#stdTagsDropdown").val();
	const service = $("#ServiceDropdown").val();
	const pressureTransmitter = $("#pressureTransmitter").val();
	const calibratedSpan=parseFloat($("#calibratedSpan").val());
	const adjustableSpan= parseFloat($("#adjustableRange").val());
	const outputSignal = $("#outputSignal").val();
	const overpressure=$("#overpressure").val();
	const enclosure = $("#enclosure").val();
	const accuracy1 = $("#accuracy").val();
	const scanTime = $("#scanTime").val();
	const responseTime=$("#responseTime").val();
	const bodyText=$("#bodyText").val();
	const processConnection=$("#processCon").val();
	const conduitEntrySize=$("#conduitEntrySize").val();
	const approvalType = $("#approvalType").val(); 
	const zerospan = $("#zerospan").val();
	const transientprot = $("#transientprotection").val();
	const custom = $("#customCof").val();
     
	
	calibratedSpan1.forEach((value, index) => {
	    console.log(`Type of calibratedSpan1[${index}] =`, typeof value);
	});
	
	
	
	console.log("keyNumber: " + keyNumber);
	// Console all values
	console.log("Customer:", customer);
	console.log("Project:", project);
	console.log("Plant:", plant);
	console.log("Unit:", unit);
	console.log("Key Number:", keyNumber);
	console.log("Service:", service);
	console.log("Pressure Transmitter:", pressureTransmitter);
	console.log("Calibrated Span:", calibratedSpan);
	console.log("Adjustable Span:", adjustableSpan);
	console.log("Output Signal:", outputSignal);
	console.log("Overpressure:", overpressure);
	console.log("Enclosure:", enclosure);
	console.log("Accuracy:", accuracy1);
	console.log("Scan Time:", scanTime);
	console.log("Response Time:", responseTime);
	console.log("Body Text:", bodyText);
	console.log("Process Connection:", processConnection);
	console.log("Conduit Entry Size:", conduitEntrySize);
	console.log("Approval Type:", approvalType);
	console.log("Zero Span:", zerospan);
	console.log("Transient Protection:", transientprot);
	console.log("Custom:", custom);
	
	function normalize(str) {
		   return (str || "").toLowerCase().trim();
	} 
	
//	function arraysEqual(userArray, correctArray) {
//	    if (!Array.isArray(userArray) || !Array.isArray(correctArray)) return false;
//	    if (userArray.length !== correctArray.length) return false;
//
//	    return userArray.every((val, i) => normalize(val) === normalize(correctArray[i]));
//	}
	
	
//	if (!customer || !project || !plant || !unit) {
//		  // At least one of the fields is empty
//		$("#modalBody").html("Please fill in all required basic project details.");
//		} 
	
	
	
	if (    !spec || !Rev1 || !contract || !po || 
		    !req || !by || !checked || !approved||  !customer || !project || !plant ||  !unit || !keyNumber || !service ||   !pressureTransmitter || !calibratedSpan ||
			  !adjustableSpan ||!outputSignal ||  !overpressure ||  !enclosure || !accuracy1 ||   !scanTime || 
			  !responseTime ||  !bodyText ||  !processConnection ||  !conduitEntrySize ||   !approvalType ||   !zerospan || 
			  !transientprot ||   !custom
		) {
	    $("#modalBody").html(`Please complete all the required data on the sheet.`).css({ "color": "#a10f0f" });
	}
	else {
	    if (!validKeyNumbers1.includes(keyNumber)) {
	        $("#modalBody").html("Selected tag is invalid.").css({ "color": "#a10f0f" });
	    } else {
	        if (id <= 3) {
	        	if (
	        		    normalize(service) === normalize(correctValues1.service) &&
	        		    normalize(pressureTransmitter) === normalize(correctValues1.pressureTransmitter) &&
//	        		    arraysEqual(calibratedSpan, correctValues1.calibratedSpan) &&
//	        		    arraysEqual(adjustableSpan, correctValues1.adjustableSpan) &&
	        		    calibratedSpan1.includes(calibratedSpan) && adjustableSpan1.includes(adjustableSpan)&&
	        		    normalize(outputSignal) === normalize(correctValues1.outputSignal) &&
	        		    normalize(overpressure) === normalize(correctValues1.overPressure) &&
	        		    normalize(enclosure) === normalize(correctValues1.enclosure) &&
	        		    normalize(accuracy1) === normalize(correctValues1.accuracy1) &&
	        		    normalize(scanTime) === normalize(correctValues1.scanTime) &&
	        		    normalize(responseTime) === normalize(correctValues1.responseTime) &&
	        		    normalize(bodyText) === normalize(correctValues1.body1) &&
	        		    normalize(processConnection) === normalize(correctValues1.processConnection) &&
	        		    normalize(conduitEntrySize) === normalize(correctValues1.conduitEntrySize) &&
	        		    normalize(approvalType) === normalize(correctValues1.approvalType) &&
	        		    normalize(zerospan) === normalize(correctValues1.zerospan) &&
	        		    normalize(transientprot) === normalize(correctValues1.transientprot) &&
	        		    normalize(custom) === normalize(correctValues1.custom)
	        		) {
	                $("#modalBody").html("Correct sheet data now download pdf").css({ "color": "green" });
//	                $(".step3,.step2").prop("hidden", false);
	                $("#submitBtn").prop("disabled", true);
	            } else {
	                $("#modalBody").html(`The data on the sheet is incorrect.`).css({ "color": "#a10f0f" });
	            }
	        } else if (id >= 4) {
	        	if (
	        		    normalize(service) === normalize(correctValues1.service) &&
	        		    normalize(pressureTransmitter) === normalize(correctValues1.pressureTransmitter) &&
	        		    arraysEqual(calibratedSpan, correctValues1.calibratedSpan) &&
	        		    arraysEqual(adjustableSpan, correctValues1.adjustableSpan) &&
	        		    normalize(outputSignal) === normalize(correctValues1.outputSignal) &&
	        		    normalize(overpressure) === normalize(correctValues1.overPressure) &&
	        		    normalize(enclosure) === normalize(correctValues1.enclosure) &&
	        		    normalize(accuracy1) === normalize(correctValues1.accuracy1) &&
	        		    normalize(scanTime) === normalize(correctValues1.scanTime) &&
	        		    normalize(responseTime) === normalize(correctValues1.responseTime) &&
	        		    normalize(bodyText) === normalize(correctValues1.body1) &&
	        		    normalize(processConnection) === normalize(correctValues1.processConnection) &&
	        		    normalize(conduitEntrySize) === normalize(correctValues1.conduitEntrySize) &&
	        		    normalize(approvalType) === normalize(correctValues1.approvalType) &&
	        		    normalize(zerospan) === normalize(correctValues1.zerospan) &&
	        		    normalize(transientprot) === normalize(correctValues1.transientprot) &&
	        		    normalize(custom) === normalize(correctValues1.custom)
	        		) {
	                $("#modalBody").html("Correct data now download pdf").css({ "color": "green" });
//	                $(".step3,.step2").prop("hidden", false);
	                $("#submitBtn").prop("disabled", true);
	            } else {
	                $('#myModal').modal('hide');
//	                $(".step3,.step2").prop("hidden", false);
	                // Call correction logic here
	                correctPressure(); 
	            }
	        }
	        id++;
	    }
	}
  });
document.getElementById('download').addEventListener('click', function () {
	$("#submitBtn,#download,#next").prop("hidden",true);
    const element = document.querySelector('#main-div');

    html2canvas(element, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf.jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Add remaining pages
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save("Pressure_Transmitter_Specification.pdf");
    });
    $("#next").prop("hidden",false);
  });

}