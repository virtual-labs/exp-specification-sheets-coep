
	function functionCall()  {
		
		let stdtags = ["PSHH_1", "PSLL_1","PSLL_2", "PSHH_2"];
let tags = ["LSL_1", "LSH_1", "PSHH_1", "PSLL_1", "TSHH_1", "PSLL_2", "PSHH_2"];

var services = ["Water", "Steam", "Process Liquid"];
var mounting=["Bottom","Top"];
var quntity=["4","5","6","7"]; 
var enclosure=[ "IP65","IP67","IP68"];
var type=["Diaphragm","Bellows actuated","Based on vendor design"];
var elementMaterial=["MS","CS","304SS","316SS"]; 
var wetMaterial=["MS","CS","304SS","316SS"]; 
var wetProcessMaterial=["MS","CS","304SS","316SS"]; 
let str=` 

<div class="container mt-4">
        <table class="table table-bordered table-hover" style="    margin-bottom: 100px;">
            <thead class="table-light">
                <tr>
                    <th>#</th>
                     <th>Sr .no</th>
                    <th>Parameter</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr><td rowspan="9"><b>GENERAL</b></td><td>1</td><td>Tag Number</td>
                <td> <select id="stdTagsDropdown" class="form-select">
				<option value="">Select a Tag</option>
				</select></td></tr>
                <tr><td>2</td><td>Service</td>
				 <td> <select id="ServiceDropdown" class="form-select">
				<option value="">Select a Service</option>
				</select></td>
				</tr>
                <tr><td>3</td><td>Location</td><td><input type="text" class="form-control" id="location" placeholder="" name=""></td>
                 </tr>
                <tr><td>4</td><td>Mounting</td>
                 <td> <select id="mountingDropdown" class="form-select">
				<option value="">Select a Mounting</option>
				</select></td>
                </tr>
                <tr><td>5</td><td>Quantity</td>
                <td> <select id="quantityDropdown" class="form-select">
				<option value="">Select a Quantity</option>
				</select></td>
                </tr>
                <tr><td>6</td><td>Area Classification</td><td><input type="text" class="form-control" id="areaClass" placeholder="" name=""></td></tr>
                <tr><td>7</td><td>Certification</td><td><input type="text" class="form-control" id="certification" placeholder="" name=""></td></tr>
                <tr><td>8</td><td>Enclosure</td>
                 <td> <select id="enclosureDropdown" class="form-select">
				<option value="">Select a Enclosure</option>
				</select></td>
                </tr>
                <tr><td>9</td><td>Pipe Line Number</td><td><input type="text" class="form-control" id="pipeLine" placeholder="" name=""></td></td></tr>
                
                <tr>
                <td rowspan="4"><b>PROCESS CONDITIONS</b></td>
                <td>10</td>
                <td>Fluid | Fluid State</td>
                <td ><select name="Fluid" id="Fluid" class="form-select" style="margin-bottom:10px">
                <option value="0">Select Fluid</option>
				  <option value="1">Water</option>
				  <option value="2">Milk</option>
				  <option value="3">Milk powder</option>
				  <option value="4">Air</option>
				</select>
				<select name="fluidState" id="fluidState" class="form-select">
                <option value="0">Select Fluid State</option>
				  <option value="1">Liquid</option>
				  <option value="2">Mist</option>
				  <option value="3">Gaseous</option>
				  
				</select>
				</tr>
				
                <tr>
                <td>11</td>
                <td >Oper. Pressure  | Oper. Temperature</td>
                <td>
                <select name="OperPressure" id="Operpressure" class="form-select" style="margin-bottom:10px">
                  <option value="0">Select oper Pressure</option>
				  <option value="1">0.1 Kg /cm<sup>2</sup>(g)</option>
				  <option value="2">0.20 Kg /cm<sup>2</sup>(g)</option>
				  <option value="3">3.0 Kg /cm<sup>2</sup>(g)</option>
				</select>
				  <select name="OperTemperature" id="OperTemperature" class="form-select">
                  <option value="0">Select oper Temperature</option>
				  <option value="1">20 Deg &degC</option>
				  <option value="2">80 Deg &degC</option>
				  <option value="3">50 Deg &degC</option>
				</select>
                </td>
                </tr>
                <tr>
                <td>12</td>
                <td>Design Pressure | Design. Temperature</td>
                <td>
                 <select name="designPressure" id="designPressure" class="form-select"  style="margin-bottom:10px">
                  <option value="0">Select Design Pressure</option>
				  <option value="1">0.15 Kg/cm²(g)</option>
				  <option value="2">0.40 Kg/cm²(g)</option>
				  <option value="3">6 Kg/cm²(g)</option>
				</select>
              
                <select name="designTemperature" id="designTemperature" class="form-select">
                  <option value="0">Select Design Temperature</option>
				  <option value="1"> 40 Deg &degC</option>
				  <option value="2"> 60 Deg &degC</option>
				  <option value="3"> 75 Deg &degC</option>
				</select>
                </td>
                </tr>
                <tr><td>13</td>
                <td>Alt. Design Pressure | Alt. Design Temperature</td><td>NA | NA</td></tr>
                
                <tr><td rowspan="7"><b>ELEMENT</b></td><td>14</td><td>Type</td>
                <td> <select id="typeDropdown" class="form-select">
				<option value="">Select a Type </option>
				</select></td>
                </tr>
                <tr><td>15</td><td>Element Material | Wetted Body material</td>
                 <td> <select id="elementDropdown" class="form-select">
				<option value="">Select a Element Material </option>
				</select>
				<select id="wetBodyDropdown" class="form-select" style="margin-top:5px;">
				<option value="">Select a Wetted Body material</option>
				</select>
				</td>
				</tr>
                <tr><td>16</td><td>Wetted Process Connection Material</td>
				<td> <select id="wetProcessDropdown" class="form-select">
				<option value="">Select a Wetted Process Connection Material</option>
				</select>
				</td>
				</tr>
                <tr><td>17</td><td>Process Connection</td>
               
                <td> 
                <select id="processConnection" class="form-select">
				<option value="0">Select Process Connection</option>
				  <option value="1"> ½” NPTF(F)</option>
				  <option value="2"> Weld neck</option>
				  <option value="3"> Special food grade connector</option>
				</select>
				</td>
                
                </td>
                </tr>
                <tr><td>18</td><td>Orientation</td>
                <td>
                 <select id="Orientation" class="form-select">
				<option value="0">Select Orientation</option>
				  <option value="1"> Bottom mounted</option>
				  <option value="2"> side mounted</option>
				</select>
                </td></tr>
                <tr><td>19</td><td>Pressure Rating</td>
                <td>
                <select id="Orientation" class="form-select">
                <option value="0">Select Pressure Rating</option>
				  <option value="1">8.0 Kg/cm²(g)</option>
				  <option value="2">1.0 Kg/cm²(g)</option>
				   <option value="2">1.2 Kg/cm²(g)</option>
				</select>
               
                </td></tr>
                <tr><td>20</td><td>Enclosure</td><td>IP 65/IP67/IP68</td></tr>
                
                <tr><td rowspan="10"><b>SWITCH</b></td><td>21</td><td>Type</td><td>Auto reset Micro-switch(Form C)</td></tr>
                <tr><td>22</td><td>Contact Config.</td><td>2 SPDT</td></tr>
                <tr><td>23</td><td>Contact Voltage</td><td>220 V DC</td></tr>
                <tr><td>24</td><td>On Measurement Increase Switch</td><td>Closes/Opens</td></tr>
                <tr><td>25</td><td>Set Point 1</td><td>0.4 Kg/cm²(g)</td></tr>
                <tr><td>26</td><td>Instrument Range</td><td>0.1 to 1 Kg/cm²</td></tr>
                <tr><td>27</td><td>Conduit Connection Size</td><td>½” NPT (F)</td></tr>
                <tr><td>28</td><td>Output Signal</td><td>Potential free</td></tr>
                <tr><td>29</td><td>Deadband</td><td>Minimum</td></tr>
                <tr><td>30</td><td>Housing Material</td><td>Aluminum</td></tr>
                
                <tr><td rowspan="8"><b>DIAPHRAGM SEAL</b></td><td>31</td><td>Required</td><td>YES</td></tr>
                <tr><td>32</td><td>Process Connection Size</td><td>½” NPT (F)</td></tr>
                <tr><td>33</td><td>Diaphragm Material</td><td>SS 316</td></tr>
                <tr><td>34</td><td>Housing Material</td><td>SS 316</td></tr>
                <tr><td>35</td><td>Fill Liquid</td><td>Not required</td></tr>
                <tr><td>36</td><td>Capillary Material</td><td>NA</td></tr>
                <tr><td>37</td><td>Capillary Type</td><td>NA</td></tr>
                <tr><td>38</td><td>Flushing Connection</td><td>YES</td></tr>
                
                <tr><td rowspan="5"><b>OPTIONS</b></td><td>39</td><td>Integral Meter</td><td>NA</td></tr>
                <tr><td>40</td><td>Mounting Brackets</td><td>NA</td></tr>
                <tr><td>41</td><td>Lightning Protection</td><td>YES</td></tr>
                <tr><td>42</td><td>Accessories required</td><td>Snubber</td></tr>
                <tr><td>43</td><td>Factory Calibration</td><td>YES</td></tr>
                
                <tr><td rowspan="2"><b>COMMUNICATION</b></td><td>44</td><td>Communication with</td><td>LCP</td></tr>
                <tr><td>45</td><td>Internal Diagnostics</td><td>NA</td></tr>
                
                <tr><td rowspan="3">PURCHASE</td><td>46</td><td>Manufacturer</td><td>Jdbls / Switzer / Boumer / GE/Rockwell</td></tr>
                <tr><td>47</td><td >Model</td><td>Later*</td></tr>
                 <tr><td>48</td><td >Serial Number</td><td>Later*</td></tr>
            </tbody>
        </table>
    </div>
   <!-- <div class="container mt-4">
        <table>
            <tr>
                <td>48</td>
                <td>Serial Number</td>
                <td>Later*</td>
            </tr>
        </table>
        
        <table class="mt-3">
            <tr>
                <td>Prep</td>
                <td>54</td>
                <td>Apr</td>
                <td>Rev/Date</td>
                <td>Revision History</td>
            </tr>
            <tr>
                <td colspan="4"></td>
                <td>Initial submission</td>
            </tr>
        </table>
        
        <h3 class="text-center mt-3">INSTRUMENT SPECIFICATION</h3>
        <h4 class="text-center">Pressure Switch</h4>
        <p class="text-center">Sheet 1/2</p>
        
        <div class="notes">
            <h5>Notes:</h5>
            <ol>
                <li>Instrument tags shall be permanently attached to the device OR the tags shall be fastened to the instrument with stainless steel wire.</li>
                <li>The size of wired instrument tag shall be ¾ inch X 3 inch, stainless steel instrument tags. The tag thickness shall be 1/16 Inch and stamped with instrument tag number. Tag number characters shall be 3/8 inch in height.</li>
                <li>Over range protection shall be 150% of maximum pressure range.</li>
                <li>Instrument mounting accessories like Mounting bracket and accessories shall be supplied.</li>
                <li>Non indicating type field mounted Pressure Switches shall be of aluminium casing (epoxy coated).</li>
                <li>The data marked as Later*, will be provided based on vendor confirmation.</li>
            </ol>
        </div>
        
        <div class="documents mt-4">
            <h5>Documents to be provided by vendor along with the instruments:</h5>
            <ol>
                <li>General Arrangement Drawing indicating the dimensional details of the instrument.</li>
                <li>Three copies of calibration certificate and Factory test report.</li>
                <li>Three copies of operation and maintenance manual, installation manual.</li>
            </ol>
        </div>
        
        <table class="mt-3">
            <tr>
                <td>Prep</td>
                <td>Chk</td>
                <td>Apr</td>
                <td>Rev/Date</td>
                <td>Revision History</td>
            </tr>
            <tr>
                <td colspan="4"></td>
                <td>Initial submission</td>
            </tr>
        </table>
        
        <h3 class="text-center mt-3">INSTRUMENT SPECIFICATION</h3>
        <h4 class="text-center">Pressure Switch</h4>
        <p class="text-center">Sheet 2/2</p>
    </div>-->
    
    
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

services.forEach(tag => {
    let option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    servicesdropdown.appendChild(option);
});
var mounting=["Bottom","Top"];
let mountingdropdown = document.getElementById("mountingDropdown");
mounting.forEach(tag => {
    let option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    mountingdropdown.appendChild(option);
});

//var enclosure=[ "IP65","IP67","IP68"];
let enclosuredropdown = document.getElementById("enclosureDropdown");
enclosure.forEach(tag => {
    let option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    enclosuredropdown.appendChild(option);
});
//var type=["Diaphragm","Bellows actuated,based on vendor design"];
let typedropdown = document.getElementById("typeDropdown");
type.forEach(tag => {
    let option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    typedropdown.appendChild(option);
});

//var elementMaterial=["MS","CS","304 SS","316SS"]; 
let elementdropdown = document.getElementById("elementDropdown");
elementMaterial.forEach(tag => {
    let option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    elementdropdown.appendChild(option);
});
//var wetMaterial=["MS","CS","304 SS","316SS"]; 
let wetBodyDropdown = document.getElementById("wetBodyDropdown");
wetMaterial.forEach(tag => {
    let option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    wetBodyDropdown.appendChild(option);
});
//var wetProcessMaterial=["MS","CS","304 SS","316SS"]; 
let wetProcessDropdown = document.getElementById("wetProcessDropdown");
wetProcessMaterial.forEach(tag => {
    let option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    wetProcessDropdown.appendChild(option);
});

let quantityDropdown = document.getElementById("quantityDropdown");
quntity.forEach(tag => {
    let option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    quantityDropdown.appendChild(option);
});

}