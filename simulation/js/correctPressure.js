function correctPressure()
{
	let str=` 

		<div class="container mt-4">
			<h3><center>PRESSURE SWITCH TECHNICAL SPECIFICATIONS</center></h3>
		        <table class="table table-bordered table-hover" style="margin-bottom: 0px;">
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
		                <td> PSHH_1/PSHH_2/PSLL_1/PSLL_2</td></tr>
		                <tr><td>2</td><td>Service</td>
						 <td> Liquid</td>
						</tr>
		                <tr><td>3</td><td>Location</td><td>As per P & I diagram</td>
		                 </tr>
		                <tr><td>4</td><td>Mounting</td>
		                 <td> Top</td>
		                </tr>
		                <tr><td>5</td><td>Quantity</td>
		                <td> 6</td>
		                </tr>
		                <tr><td>6</td><td>Area Classification</td><td>Safe Area</td></tr>
		                <tr><td>7</td><td>Certification</td><td>NA</td></tr>
		                <tr><td>8</td><td>Enclosure</td>
		                 <td> IP 65</td>
		                </tr>
		                <tr><td>9</td><td>Pipe Line Number</td><td>As per P & I diagram</td></td></tr>
		                
		                <tr>
		                <td rowspan="4"><b>PROCESS CONDITIONS</b></td>
		                <td>10</td>
		                <td>Fluid | Fluid State</td>
		                <td >Air | Gaseous
						
						</tr>
						
		                <tr>
		                <td>11</td>
		                <td >Oper. Pressure  | Oper. Temperature</td>
		                <td>0.2 Kg/cm<sup>2</sup> | 80 &degC
		                </td>
		                </tr>
		                <tr>
		                <td>12</td>
		                <td>Design Pressure | Design. Temperature</td>
		                <td>0.6 Kg/cm<sup>2</sup> | 75 &degC
		                
		                </td>
		                </tr>
		                <tr><td>13</td>
		                <td>Alt. Design Pressure | Alt. Design Temperature</td><td>NA | NA</td></tr>
		                
		                <tr><td rowspan="7"><b>ELEMENT</b></td><td>14</td><td>Type</td>
		                <td> Bellow actuated</td>
		                </tr>
		                <tr><td>15</td><td>Element Material | Wetted Body material</td>
		                 <td> 316SS | 316SS
						</td>
						</tr>
		                <tr><td>16</td><td>Wetted Process Connection Material</td>
						<td> 316SS
						</td>
						</tr>
		                <tr><td>17</td><td>Process Connection</td>
		               
		                <td> Special food grade connector
						</td>
		                
		                </td>
		                </tr>
		                <tr><td>18</td><td>Orientation</td>
		                <td>Side mounted
		                
		                </td></tr>
		                <tr><td>19</td><td>Pressure Rating</td>
		                <td>
		               0.8 Kg/cm<sup>2</sup>(g)		               
		                </td></tr>
		                <tr><td>20</td><td>Enclosure</td>
		                <td>IP 65
		                 
		               </td></tr>
		                
		                <tr><td rowspan="10"><b>SWITCH</b></td><td>21</td><td>Type</td><td>Auto reset Micro-switch(Form C)</td></tr>
		                <tr><td>22</td><td>Contact Config.</td><td>2 SPDT</td></tr>
		                <tr><td>23</td><td>Contact Voltage</td><td>220 V DC</td></tr>
		                <tr><td>24</td><td>On Measurement Increase Switch</td><td>
		                 Opens
		             </td></tr>
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
		                <tr><td>37</td><td>Capillary Type | Capillary Length</td><td><input type="form-control"></td></tr>
		                <tr><td>38</td><td>Flushing Connection</td><td>YES</td></tr>
		                
		                <tr><td rowspan="5"><b>OPTIONS</b></td><td>39</td><td>Integral Meter | Scale</td><td>NA | NA</td></tr>
		                <tr><td>40</td><td>Mounting Brackets</td><td>NA</td></tr>
		                <tr><td>41</td><td>Lightning Protection</td><td>YES</td></tr>
		                <tr><td>42</td><td>Accessories required</td><td>Snubber</td></tr>
		                <tr><td>43</td><td>Factory Calibration</td><td>YES</td></tr>
		                
		                <tr><td rowspan="2"><b>COMMUNICATION</b></td><td>44</td><td>Communication with</td><td>LCP</td></tr>
		                <tr><td>45</td><td>Internal Diagnostics</td><td>NA</td></tr>
		                
		                <tr><td rowspan="3"><b>PURCHASE</b></td><td>46</td><td>Manufacturer</td>
		                <td> Switzer
		                 </td>
		                
		                </tr>
		                <tr><td>47</td><td >Model</td><td>Later*</td></tr>
		                 <tr><td>48</td><td >Serial Number</td><td>Later*</td></tr>
		            </tbody>
		        </table>
		         <button class="btn btn-success " id="submitBtn"  data-bs-toggle="modal" data-bs-target="#myModal" >VERIFY</button>
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
		   
		        <div class="container rev1" style="margin-top: 40px;">
		        <table >
		            <tr>
		                <th>Prep</th>
		                <th>54</th>
		                <th>Apr</th>
		                <th>Rev/Date</th>
		                <th >Revision History</th>
		                <th rowspan="4">INSTRUMENT SPECIFICATION<br>(Pressure Switch)</th>
		            </tr>
		             <tr>
		               <td><input type="text" id="nameInput1" placeholder=""></td>
		               <td><input type="text" id="nameInput2" placeholder=""></td>
		               <td><input type="text" id="nameInput3" placeholder=""></td>
		               <td><input type="text" id="nameInput4" placeholder=""></td>
		               <td>Initial submission</td>
		            </tr>
		             <tr>
		               <td><input type="text" id="nameInput5" placeholder=""></td>
		               <td><input type="text" id="nameInput6" placeholder=""></td>
		               <td><input type="text" id="nameInput7" placeholder=""></td>
		               <td><input type="text" id="nameInput8" placeholder=""></td>
		               <td><input type="text" id="nameInput9" placeholder=""></td>
		            </tr>
		             <tr>
		               <td><input type="text" id="nameInput10" placeholder=""></td>
		               <td><input type="text" id="nameInput11" placeholder=""></td>
		               <td><input type="text" id="nameInput12" placeholder=""></td>
		               <td><input type="text" id="nameInput13" placeholder=""></td>
		               <td><input type="text" id="nameInput14" placeholder=""></td>
		            </tr>
		            
		        </table>
		           <button class="btn btn-success " id="submitBtn1"  data-bs-toggle="modal" data-bs-target="#myModal" style="float: right; margin-top: 10px; background-color: teal;">VERIFY</button>
		         <br>
		         
		    </div>
		    <div class="container" style="border-style: solid;margin-top: 50px;">
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
		        
		    </div>
		         <button class="btn btn-success " id="next"  data-bs-toggle="modal" data-bs-target="#myModal" style="float: right; margin-top: 10px; background-color: teal;">NEXT</button>
		         <br> 

		    `;
		$("#main-div").html(str);
	
	
}